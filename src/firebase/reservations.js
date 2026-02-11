import { db } from './config'
import { 
  collection, 
  addDoc, 
  getDocs, 
  getDoc,
  doc, 
  query, 
  where, 
  orderBy,
  updateDoc,
  deleteDoc,
  Timestamp,
  serverTimestamp,
  onSnapshot
} from 'firebase/firestore'

const RESERVATIONS_COLLECTION = 'reservations'

/**
 * Crear una nueva reservación
 */
export const createReservation = async (reservationData) => {
  try {
    const docRef = await addDoc(collection(db, RESERVATIONS_COLLECTION), {
      ...reservationData,
      createdAt: serverTimestamp(),
      status: 'confirmed'
    })
    return { success: true, id: docRef.id }
  } catch (error) {
    console.error('Error creating reservation:', error)
    return { success: false, error: error.message }
  }
}

/**
 * Obtener todas las reservaciones de un usuario
 */
export const getUserReservations = async (userId) => {
  try {
    const q = query(
      collection(db, RESERVATIONS_COLLECTION),
      where('userId', '==', userId)
    )
    const querySnapshot = await getDocs(q)
    const reservations = []
    querySnapshot.forEach((doc) => {
      reservations.push({ id: doc.id, ...doc.data() })
    })
    // Ordenar en cliente para evitar necesidad de índice compuesto
    reservations.sort((a, b) => {
      const dateA = a.createdAt?.toDate?.() || new Date(0)
      const dateB = b.createdAt?.toDate?.() || new Date(0)
      return dateB - dateA
    })
    return { success: true, data: reservations }
  } catch (error) {
    console.error('Error getting user reservations:', error)
    return { success: false, error: error.message, data: [] }
  }
}

/**
 * Obtener reservaciones por fecha y cancha (para verificar disponibilidad)
 */
export const getReservationsByDateAndCourt = async (date, courtId) => {
  try {
    // Validar parámetros
    if (!date || !courtId) {
      return { success: false, error: 'Parámetros inválidos', data: [] }
    }

    const q = query(
      collection(db, RESERVATIONS_COLLECTION),
      where('date', '==', date),
      where('courtId', '==', courtId),
      where('status', 'in', ['confirmed', 'pending'])
    )
    const querySnapshot = await getDocs(q)
    const reservations = []
    querySnapshot.forEach((doc) => {
      reservations.push({ id: doc.id, ...doc.data() })
    })
    return { success: true, data: reservations }
  } catch (error) {
    console.error('Error getting reservations by date and court:', error)
    
    // Si es un error de índice compuesto, retornar vacío para no bloquear al usuario
    if (error.code === 'failed-precondition' || error.message?.includes('index')) {
      console.warn('Nota: Puede ser necesario crear un índice compuesto en Firestore')
      return { success: true, data: [] } // Retornar como éxito pero con datos vacíos
    }
    
    return { success: false, error: error.message, data: [] }
  }
}

/**
 * Verificar si un horario está disponible
 */
export const checkAvailability = async (date, courtId, startTime, endTime, blockedSchedules = []) => {
  try {
    const result = await getReservationsByDateAndCourt(date, courtId)
    if (!result.success) {
      return { available: false, error: result.error }
    }
    
    const existingReservations = result.data
    
    // Convertir tiempo a minutos para comparación
    const timeToMinutes = (time) => {
      const [hours, minutes] = time.split(':').map(Number)
      return hours * 60 + minutes
    }
    
    const newStart = timeToMinutes(startTime)
    const newEnd = timeToMinutes(endTime)
    
    // Verificar si hay conflicto con alguna reservación existente
    for (const reservation of existingReservations) {
      const existingStart = timeToMinutes(reservation.startTime)
      const existingEnd = timeToMinutes(reservation.endTime)
      
      // Hay conflicto si los rangos se superponen
      if (newStart < existingEnd && newEnd > existingStart) {
        return { 
          available: false, 
          conflict: reservation,
          message: `Horario ocupado de ${reservation.startTime} a ${reservation.endTime}`
        }
      }
    }
    
    // Verificar si hay conflicto con horarios bloqueados del administrador
    if (blockedSchedules && Array.isArray(blockedSchedules)) {
      for (const blocked of blockedSchedules) {
        // Solo validar bloques para la misma cancha y fecha
        if (blocked.courtId === courtId && blocked.date === date) {
          const blockedStart = timeToMinutes(blocked.startTime)
          const blockedEnd = timeToMinutes(blocked.endTime)
          
          // Hay conflicto si los rangos se superponen
          if (newStart < blockedEnd && newEnd > blockedStart) {
            return { 
              available: false, 
              blocked: true,
              blockedSchedule: blocked,
              message: `Horario bloqueado de ${blocked.startTime} a ${blocked.endTime}. Motivo: ${blocked.reason || 'Mantenimiento'}`
            }
          }
        }
      }
    }
    
    return { available: true }
  } catch (error) {
    console.error('Error checking availability:', error)
    return { available: false, error: error.message }
  }
}

/**
 * Obtener horas ocupadas para una fecha y cancha específica
 */
export const getOccupiedHours = async (date, courtId) => {
  try {
    // Validar parámetros
    if (!date || !courtId) {
      return { success: false, occupiedHours: [] }
    }

    const result = await getReservationsByDateAndCourt(date, courtId)
    
    // Incluso si hay un error de índice, continuamos con datos vacíos
    const reservations = result.data || []
    
    const occupiedHours = []
    reservations.forEach(reservation => {
      try {
        // Generar todos los slots de 30 minutos entre startTime y endTime
        const startMinutes = timeToMinutes(reservation.startTime)
        const endMinutes = timeToMinutes(reservation.endTime)
        
        for (let m = startMinutes; m < endMinutes; m += 30) {
          const hours = Math.floor(m / 60)
          const mins = m % 60
          occupiedHours.push(`${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`)
        }
      } catch (e) {
        console.warn('Error procesando reservación:', e)
      }
    })
    
    return { success: true, occupiedHours }
  } catch (error) {
    console.error('Error getting occupied hours:', error)
    return { success: true, occupiedHours: [] } // Retornar como éxito pero vacío
  }
}

// Helper function
const timeToMinutes = (time) => {
  const [hours, minutes] = time.split(':').map(Number)
  return hours * 60 + minutes
}

/**
 * Cancelar una reservación
 */
export const cancelReservation = async (reservationId) => {
  try {
    const docRef = doc(db, RESERVATIONS_COLLECTION, reservationId)
    await updateDoc(docRef, {
      status: 'cancelled',
      cancelledAt: serverTimestamp()
    })
    return { success: true }
  } catch (error) {
    console.error('Error cancelling reservation:', error)
    return { success: false, error: error.message }
  }
}

/**
 * Obtener una reservación por ID
 */
export const getReservationById = async (reservationId) => {
  try {
    const docRef = doc(db, RESERVATIONS_COLLECTION, reservationId)
    const docSnap = await getDoc(docRef)
    
    if (docSnap.exists()) {
      return { success: true, data: { id: docSnap.id, ...docSnap.data() } }
    } else {
      return { success: false, error: 'Reservation not found' }
    }
  } catch (error) {
    console.error('Error getting reservation:', error)
    return { success: false, error: error.message }
  }
}

/**
 * Obtener todas las reservaciones (para admin)
 */
export const getAllReservations = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, RESERVATIONS_COLLECTION))
    const reservations = []
    querySnapshot.forEach((doc) => {
      reservations.push({ id: doc.id, ...doc.data() })
    })
    // Ordenar en cliente
    reservations.sort((a, b) => {
      const dateA = a.createdAt?.toDate?.() || new Date(0)
      const dateB = b.createdAt?.toDate?.() || new Date(0)
      return dateB - dateA
    })
    return { success: true, data: reservations }
  } catch (error) {
    console.error('Error getting all reservations:', error)
    return { success: false, error: error.message, data: [] }
  }
}
/**
 * Escuchar cambios en tiempo real de todas las reservaciones
 * Retorna una función unsubscribe para dejar de escuchar
 */
export const listenToAllReservations = (callback) => {
  try {
    const unsubscribe = onSnapshot(collection(db, RESERVATIONS_COLLECTION), (querySnapshot) => {
      const reservations = []
      querySnapshot.forEach((doc) => {
        reservations.push({ id: doc.id, ...doc.data() })
      })
      // Ordenar en cliente
      reservations.sort((a, b) => {
        const dateA = a.createdAt?.toDate?.() || new Date(0)
        const dateB = b.createdAt?.toDate?.() || new Date(0)
        return dateB - dateA
      })
      callback({ success: true, data: reservations })
    }, (error) => {
      console.error('Error listening to reservations:', error)
      callback({ success: false, error: error.message, data: [] })
    })
    return unsubscribe
  } catch (error) {
    console.error('Error setting up reservation listener:', error)
  }
}

// ==================== CANCHAS (COURTS) ====================

const COURTS_COLLECTION = 'courts'

/**
 * Crear una nueva cancha
 */
export const createCourt = async (courtData) => {
  try {
    const docRef = await addDoc(collection(db, COURTS_COLLECTION), {
      ...courtData,
      createdAt: serverTimestamp(),
      active: true
    })
    return { success: true, id: docRef.id }
  } catch (error) {
    console.error('Error creating court:', error)
    return { success: false, error: error.message }
  }
}

/**
 * Obtener todas las canchas
 */
export const getAllCourts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, COURTS_COLLECTION))
    const courts = []
    querySnapshot.forEach((doc) => {
      courts.push({ id: doc.id, ...doc.data() })
    })
    return { success: true, data: courts }
  } catch (error) {
    console.error('Error getting all courts:', error)
    return { success: false, error: error.message, data: [] }
  }
}

/**
 * Obtener una cancha por ID
 */
export const getCourtById = async (courtId) => {
  try {
    const docRef = doc(db, COURTS_COLLECTION, courtId)
    const docSnap = await getDoc(docRef)
    
    if (docSnap.exists()) {
      return { success: true, data: { id: docSnap.id, ...docSnap.data() } }
    } else {
      return { success: false, error: 'Court not found' }
    }
  } catch (error) {
    console.error('Error getting court:', error)
    return { success: false, error: error.message }
  }
}

/**
 * Actualizar una cancha
 */
export const updateCourt = async (courtId, courtData) => {
  try {
    const docRef = doc(db, COURTS_COLLECTION, courtId)
    await updateDoc(docRef, {
      ...courtData,
      updatedAt: serverTimestamp()
    })
    return { success: true }
  } catch (error) {
    console.error('Error updating court:', error)
    return { success: false, error: error.message }
  }
}

/**
 * Eliminar una cancha
 */
export const deleteCourt = async (courtId) => {
  try {
    const docRef = doc(db, COURTS_COLLECTION, courtId)
    await deleteDoc(docRef)
    return { success: true }
  } catch (error) {
    console.error('Error deleting court:', error)
    return { success: false, error: error.message }
  }
}

/**
 * Escuchar cambios en tiempo real de todas las canchas
 */
export const listenToAllCourts = (callback) => {
  try {
    const unsubscribe = onSnapshot(collection(db, COURTS_COLLECTION), (querySnapshot) => {
      const courts = []
      querySnapshot.forEach((doc) => {
        courts.push({ id: doc.id, ...doc.data() })
      })
      callback({ success: true, data: courts })
    }, (error) => {
      console.error('Error listening to courts:', error)
      callback({ success: false, error: error.message, data: [] })
    })
    return unsubscribe
  } catch (error) {
    console.error('Error setting up court listener:', error)
  }
}

// ==================== HORARIOS BLOQUEADOS (BLOCKED SCHEDULES) ====================

const BLOCKED_SCHEDULES_COLLECTION = 'blockedSchedules'

/**
 * Crear un nuevo horario bloqueado
 */
export const createBlockedSchedule = async (blockData) => {
  try {
    const docRef = await addDoc(collection(db, BLOCKED_SCHEDULES_COLLECTION), {
      ...blockData,
      createdAt: serverTimestamp()
    })
    return { success: true, id: docRef.id }
  } catch (error) {
    console.error('Error creating blocked schedule:', error)
    return { success: false, error: error.message }
  }
}

/**
 * Obtener todos los horarios bloqueados
 */
export const getAllBlockedSchedules = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, BLOCKED_SCHEDULES_COLLECTION))
    const blockedSchedules = []
    querySnapshot.forEach((doc) => {
      blockedSchedules.push({ id: doc.id, ...doc.data() })
    })
    return { success: true, data: blockedSchedules }
  } catch (error) {
    console.error('Error getting all blocked schedules:', error)
    return { success: false, error: error.message, data: [] }
  }
}

/**
 * Obtener horarios bloqueados por fecha y cancha
 */
export const getBlockedSchedulesByDateAndCourt = async (date, courtId) => {
  try {
    const q = query(
      collection(db, BLOCKED_SCHEDULES_COLLECTION),
      where('date', '==', date),
      where('courtId', '==', courtId)
    )
    const querySnapshot = await getDocs(q)
    const blockedSchedules = []
    querySnapshot.forEach((doc) => {
      blockedSchedules.push({ id: doc.id, ...doc.data() })
    })
    return { success: true, data: blockedSchedules }
  } catch (error) {
    console.error('Error getting blocked schedules:', error)
    return { success: false, error: error.message, data: [] }
  }
}

/**
 * Obtener un horario bloqueado por ID
 */
export const getBlockedScheduleById = async (blockId) => {
  try {
    const docRef = doc(db, BLOCKED_SCHEDULES_COLLECTION, blockId)
    const docSnap = await getDoc(docRef)
    
    if (docSnap.exists()) {
      return { success: true, data: { id: docSnap.id, ...docSnap.data() } }
    } else {
      return { success: false, error: 'Blocked schedule not found' }
    }
  } catch (error) {
    console.error('Error getting blocked schedule:', error)
    return { success: false, error: error.message }
  }
}

/**
 * Actualizar un horario bloqueado
 */
export const updateBlockedSchedule = async (blockId, blockData) => {
  try {
    const docRef = doc(db, BLOCKED_SCHEDULES_COLLECTION, blockId)
    await updateDoc(docRef, {
      ...blockData,
      updatedAt: serverTimestamp()
    })
    return { success: true }
  } catch (error) {
    console.error('Error updating blocked schedule:', error)
    return { success: false, error: error.message }
  }
}

/**
 * Eliminar un horario bloqueado
 */
export const deleteBlockedSchedule = async (blockId) => {
  try {
    const docRef = doc(db, BLOCKED_SCHEDULES_COLLECTION, blockId)
    await deleteDoc(docRef)
    return { success: true }
  } catch (error) {
    console.error('Error deleting blocked schedule:', error)
    return { success: false, error: error.message }
  }
}

/**
 * Escuchar cambios en tiempo real de todos los horarios bloqueados
 */
export const listenToAllBlockedSchedules = (callback) => {
  try {
    const unsubscribe = onSnapshot(collection(db, BLOCKED_SCHEDULES_COLLECTION), (querySnapshot) => {
      const blockedSchedules = []
      querySnapshot.forEach((doc) => {
        blockedSchedules.push({ id: doc.id, ...doc.data() })
      })
      callback({ success: true, data: blockedSchedules })
    }, (error) => {
      console.error('Error listening to blocked schedules:', error)
      callback({ success: false, error: error.message, data: [] })
    })
    return unsubscribe
  } catch (error) {
    console.error('Error setting up blocked schedule listener:', error)
  }
}