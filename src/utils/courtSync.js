/**
 * Funciones helper para sincronizar datos de canchas entre Admin y Reservaciones
 */

export const loadCourtsFromAdmin = (courts) => {
  try {
    const savedCanchas = localStorage.getItem('ixmisport_canchas')
    if (savedCanchas) {
      const adminCanchas = JSON.parse(savedCanchas)
      // Actualizar el estado de las canchas con los datos del admin
      return courts.map(court => {
        const adminCancha = adminCanchas.find(ac => ac.id === court.id)
        if (adminCancha) {
          return { 
            ...court, 
            active: adminCancha.active, 
            occupancy: adminCancha.occupancy 
          }
        }
        return court
      })
    }
    return courts
  } catch (e) {
    console.log('Error cargando estado de canchas:', e)
    return courts
  }
}

export const loadBlockedSchedules = () => {
  try {
    const savedBlockedSchedules = localStorage.getItem('ixmisport_blocked_schedules')
    if (savedBlockedSchedules) {
      return JSON.parse(savedBlockedSchedules)
    }
    return []
  } catch (e) {
    console.log('Error cargando horarios bloqueados:', e)
    return []
  }
}

export const isCourtActive = (courtId) => {
  try {
    const savedCanchas = localStorage.getItem('ixmisport_canchas')
    if (savedCanchas) {
      const adminCanchas = JSON.parse(savedCanchas)
      const cancha = adminCanchas.find(ac => ac.id === courtId)
      return cancha ? cancha.active : true
    }
    return true // Si no hay datos guardados, asumir que está activa
  } catch (e) {
    console.log('Error verificando estado de cancha:', e)
    return true
  }
}

export const isTimeSlotBlocked = (courtId, date, startTime, endTime) => {
  try {
    const blockedSchedules = loadBlockedSchedules()
    return blockedSchedules.some(block => {
      // Verificar que sea la misma cancha y fecha
      if (block.courtId !== courtId || block.date !== date) {
        return false
      }
      // Verificar solapamiento de horarios
      return !(endTime <= block.startTime || startTime >= block.endTime)
    })
  } catch (e) {
    console.log('Error verificando bloqueo de horario:', e)
    return false
  }
}

export const getCourtAvailabilityStatus = (courtId) => {
  const active = isCourtActive(courtId)
  return {
    available: active,
    displayName: active ? 'Disponible' : 'No Disponible',
    color: active ? '#6BCF9F' : '#ef4444'
  }
}
