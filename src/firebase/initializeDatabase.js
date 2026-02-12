import { db } from './config'
import { collection, addDoc, serverTimestamp, getDocs } from 'firebase/firestore'

// Datos de ejemplo para las canchas
const SAMPLE_COURTS = [
  {
    name: 'Cancha de Futbol #1',
    sport: 'futbol',
    type: 'Exterior',
    capacity: 22,
    price: 200,
    location: 'Zona A',
    description: 'Cancha de futbol profesional de césped natural',
    active: true
  },
  {
    name: 'Cancha de Futbol #2',
    sport: 'futbol',
    type: 'Exterior',
    capacity: 22,
    price: 200,
    location: 'Zona A',
    description: 'Cancha de futbol de césped sintético',
    active: true
  },
  {
    name: 'Cancha de Basquetbol #1',
    sport: 'basquetbol',
    type: 'Interior',
    capacity: 12,
    price: 150,
    location: 'Zona B',
    description: 'Cancha de basquetbol cubierta con piso de madera',
    active: true
  },
  {
    name: 'Cancha de Basquetbol #2',
    sport: 'basquetbol',
    type: 'Exterior',
    capacity: 12,
    price: 100,
    location: 'Zona B',
    description: 'Cancha de basquetbol al aire libre',
    active: true
  },
  {
    name: 'Cancha de Voleibol #1',
    sport: 'voleibol',
    type: 'Interior',
    capacity: 12,
    price: 120,
    location: 'Zona C',
    description: 'Cancha de voleibol profesional cubierta',
    active: true
  },
  {
    name: 'Cancha de Voleibol #2',
    sport: 'voleibol',
    type: 'Exterior',
    capacity: 12,
    price: 80,
    location: 'Zona C',
    description: 'Cancha de voleibol de arena',
    active: true
  },
  {
    name: 'Cancha de Tenis #1',
    sport: 'tenis',
    type: 'Exterior',
    capacity: 4,
    price: 180,
    location: 'Zona D',
    description: 'Cancha de tenis de arcilla profesional',
    active: true
  },
  {
    name: 'Cancha de Tenis #2',
    sport: 'tenis',
    type: 'Exterior',
    capacity: 4,
    price: 180,
    location: 'Zona D',
    description: 'Cancha de tenis de arcilla',
    active: true
  },
  {
    name: 'Cancha de Padel #1',
    sport: 'padel',
    type: 'Exterior',
    capacity: 4,
    price: 160,
    location: 'Zona E',
    description: 'Cancha de pádel moderna',
    active: true
  }
]

/**
 * Inicializar la base de datos con canchas de ejemplo
 * Solo crea canchas si la colección está vacía
 */
export const initializeDatabaseWithSampleCourts = async () => {
  try {
    console.log('🔍 Verificando estado de base de datos...')
    
    // Verificar si ya hay canchas en la colección
    const querySnapshot = await getDocs(collection(db, 'courts'))
    
    if (querySnapshot.size > 0) {
      console.log('✅ Base de datos ya tiene canchas. Inicialización saltada.')
      return { success: true, message: 'Database already initialized', courtsCount: querySnapshot.size }
    }
    
    console.log('📝 Base de datos vacía. Creando canchas de ejemplo...')
    
    // Crear todas las canchas de ejemplo
    const createdCourts = []
    
    for (const court of SAMPLE_COURTS) {
      try {
        const docRef = await addDoc(collection(db, 'courts'), {
          ...court,
          createdAt: serverTimestamp(),
          occupancy: 0,
          active: true
        })
        
        createdCourts.push({
          id: docRef.id,
          ...court
        })
        
        console.log(`  ✅ ${court.name} creada (ID: ${docRef.id})`)
      } catch (error) {
        console.error(`  ❌ Error creando ${court.name}:`, error)
      }
    }
    
    console.log(`🎉 Inicialización completada: ${createdCourts.length} canchas creadas`)
    
    return {
      success: true,
      message: 'Database initialized successfully',
      courtsCount: createdCourts.length,
      courts: createdCourts
    }
  } catch (error) {
    console.error('❌ Error inicializando base de datos:', error)
    return {
      success: false,
      error: error.message
    }
  }
}

/**
 * Obtener conteo de canchas
 */
export const getCourtCount = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'courts'))
    return querySnapshot.size
  } catch (error) {
    console.error('Error getting court count:', error)
    return 0
  }
}
