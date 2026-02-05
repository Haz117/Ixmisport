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
  serverTimestamp
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
    return { success: false, error: error.message, data: [] }
  }
}

/**
 * Verificar si un horario está disponible
 */
export const checkAvailability = async (date, courtId, startTime, endTime) => {
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
    const result = await getReservationsByDateAndCourt(date, courtId)
    if (!result.success) {
      return { success: false, occupiedHours: [] }
    }
    
    const occupiedHours = []
    result.data.forEach(reservation => {
      // Generar todos los slots de 30 minutos entre startTime y endTime
      const startMinutes = timeToMinutes(reservation.startTime)
      const endMinutes = timeToMinutes(reservation.endTime)
      
      for (let m = startMinutes; m < endMinutes; m += 30) {
        const hours = Math.floor(m / 60)
        const mins = m % 60
        occupiedHours.push(`${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`)
      }
    })
    
    return { success: true, occupiedHours }
  } catch (error) {
    console.error('Error getting occupied hours:', error)
    return { success: false, occupiedHours: [] }
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
