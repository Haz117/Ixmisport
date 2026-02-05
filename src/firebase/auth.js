import { auth, db } from './config'
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile
} from 'firebase/auth'
import { doc, setDoc, getDoc, getDocs, collection, serverTimestamp } from 'firebase/firestore'

const USERS_COLLECTION = 'users'

/**
 * Obtener todos los usuarios (para admin)
 */
export const getAllUsers = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, USERS_COLLECTION))
    const users = []
    querySnapshot.forEach((doc) => {
      users.push({ id: doc.id, ...doc.data() })
    })
    return { success: true, data: users }
  } catch (error) {
    console.error('Error getting all users:', error)
    return { success: false, error: error.message, data: [] }
  }
}

/**
 * Registrar nuevo usuario
 */
export const registerUser = async (email, password, userData = {}) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    const user = userCredential.user
    
    // Actualizar perfil con nombre
    if (userData.name) {
      await updateProfile(user, { displayName: userData.name })
    }
    
    // Guardar datos adicionales en Firestore
    await setDoc(doc(db, USERS_COLLECTION, user.uid), {
      email: user.email,
      name: userData.name || '',
      phone: userData.phone || '',
      createdAt: serverTimestamp(),
      role: 'user'
    })
    
    return { success: true, user }
  } catch (error) {
    console.error('Error registering user:', error)
    let message = 'Error al registrar usuario'
    if (error.code === 'auth/email-already-in-use') {
      message = 'Este correo ya está registrado'
    } else if (error.code === 'auth/weak-password') {
      message = 'La contraseña debe tener al menos 6 caracteres'
    } else if (error.code === 'auth/invalid-email') {
      message = 'Correo electrónico inválido'
    }
    return { success: false, error: message }
  }
}

/**
 * Iniciar sesión
 */
export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    return { success: true, user: userCredential.user }
  } catch (error) {
    console.error('Error logging in:', error)
    let message = 'Error al iniciar sesión'
    if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
      message = 'Correo o contraseña incorrectos'
    } else if (error.code === 'auth/invalid-email') {
      message = 'Correo electrónico inválido'
    } else if (error.code === 'auth/too-many-requests') {
      message = 'Demasiados intentos. Intenta más tarde'
    }
    return { success: false, error: message }
  }
}

/**
 * Cerrar sesión
 */
export const logoutUser = async () => {
  try {
    await signOut(auth)
    return { success: true }
  } catch (error) {
    console.error('Error logging out:', error)
    return { success: false, error: error.message }
  }
}

/**
 * Obtener usuario actual
 */
export const getCurrentUser = () => {
  return auth.currentUser
}

/**
 * Obtener datos del usuario desde Firestore
 */
export const getUserData = async (userId) => {
  try {
    const docRef = doc(db, USERS_COLLECTION, userId)
    const docSnap = await getDoc(docRef)
    
    if (docSnap.exists()) {
      return { success: true, data: docSnap.data() }
    } else {
      return { success: false, error: 'User not found' }
    }
  } catch (error) {
    console.error('Error getting user data:', error)
    return { success: false, error: error.message }
  }
}

/**
 * Observar cambios en el estado de autenticación
 */
export const onAuthChange = (callback) => {
  return onAuthStateChanged(auth, callback)
}
