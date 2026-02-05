<template>
  <div class="min-h-screen bg-gradient-to-br from-white via-[#F8FDF9] to-[#F2F9F4]">
    <!-- Navbar -->
    <nav class="bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center group">
            <router-link to="/">
              <h2 class="text-2xl font-bold bg-gradient-to-r from-[#6BCF9F] to-[#7ED9A8] bg-clip-text text-transparent group-hover:scale-105 transition-transform cursor-pointer">
                IxmiSport
              </h2>
            </router-link>
          </div>
          <div class="flex gap-3 items-center">
            <router-link 
              to="/reservaciones" 
              class="px-5 py-2 text-gray-600 hover:text-[#6BCF9F] transition-all duration-300 font-medium relative group flex items-center gap-2"
            >
              <i class="fa-solid fa-magnifying-glass"></i>
              Buscar Canchas
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-[#6BCF9F] group-hover:w-full transition-all duration-300"></span>
            </router-link>
            <router-link 
              to="/mis-reservaciones" 
              class="px-5 py-2 text-gray-600 hover:text-[#6BCF9F] transition-all duration-300 font-medium relative group flex items-center gap-2"
            >
              <i class="fa-solid fa-calendar-check"></i>
              Mis Reservaciones
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-[#6BCF9F] group-hover:w-full transition-all duration-300"></span>
            </router-link>
          </div>
        </div>
      </div>
    </nav>

    <!-- Profile Content -->
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Profile Header -->
      <div class="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 mb-8 border border-[#D8F0E3]">
        <div class="flex flex-col md:flex-row items-center gap-8">
          <!-- Avatar -->
          <div class="relative">
            <div class="w-32 h-32 bg-gradient-to-br from-[#6BCF9F] to-[#7ED9A8] rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg">
              {{ userInitials }}
            </div>
            <div class="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white"></div>
          </div>
          
          <!-- User Info -->
          <div class="flex-1 text-center md:text-left">
            <h1 class="text-3xl font-bold text-gray-800 mb-2">{{ userName }}</h1>
            <p class="text-gray-600 mb-4">{{ userEmail }}</p>
            <div class="flex flex-wrap justify-center md:justify-start gap-3">
              <span class="px-4 py-2 bg-[#F8FDF9] text-[#6BCF9F] rounded-full text-sm font-medium border border-[#D8F0E3]">
                <i class="fa-solid fa-user-check mr-2"></i>
                Usuario Verificado
              </span>
              <span class="px-4 py-2 bg-[#F8FDF9] text-gray-600 rounded-full text-sm font-medium border border-gray-200">
                <i class="fa-solid fa-calendar mr-2"></i>
                Miembro desde {{ memberSince }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#D8F0E3] hover:shadow-xl transition-all duration-300">
          <div class="flex items-center gap-4">
            <div class="w-14 h-14 bg-gradient-to-br from-[#6BCF9F] to-[#7ED9A8] rounded-xl flex items-center justify-center text-white">
              <i class="fa-solid fa-calendar-check text-xl"></i>
            </div>
            <div>
              <p class="text-3xl font-bold text-gray-800">{{ totalReservations }}</p>
              <p class="text-gray-600 text-sm">Reservaciones</p>
            </div>
          </div>
        </div>
        
        <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#D8F0E3] hover:shadow-xl transition-all duration-300">
          <div class="flex items-center gap-4">
            <div class="w-14 h-14 bg-gradient-to-br from-[#7ED9A8] to-[#95E3B3] rounded-xl flex items-center justify-center text-white">
              <i class="fa-solid fa-star text-xl"></i>
            </div>
            <div>
              <p class="text-3xl font-bold text-gray-800">4.8</p>
              <p class="text-gray-600 text-sm">Calificación</p>
            </div>
          </div>
        </div>
        
        <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#D8F0E3] hover:shadow-xl transition-all duration-300">
          <div class="flex items-center gap-4">
            <div class="w-14 h-14 bg-gradient-to-br from-[#95E3B3] to-[#AEEDC4] rounded-xl flex items-center justify-center text-white">
              <i class="fa-solid fa-trophy text-xl"></i>
            </div>
            <div>
              <p class="text-3xl font-bold text-gray-800">3</p>
              <p class="text-gray-600 text-sm">Deportes</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Actions -->
      <div class="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 mb-8 border border-[#D8F0E3]">
        <h2 class="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <i class="fa-solid fa-bolt text-[#6BCF9F]"></i>
          Acciones Rápidas
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <router-link 
            to="/reservaciones" 
            class="flex items-center gap-4 p-4 bg-gradient-to-r from-[#6BCF9F] to-[#7ED9A8] text-white rounded-xl hover:shadow-lg transition-all duration-300 group"
          >
            <div class="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <i class="fa-solid fa-plus text-xl"></i>
            </div>
            <div>
              <p class="font-semibold">Nueva Reservación</p>
              <p class="text-white/80 text-sm">Reserva una cancha ahora</p>
            </div>
          </router-link>
          
          <router-link 
            to="/mis-reservaciones" 
            class="flex items-center gap-4 p-4 bg-white border-2 border-[#6BCF9F] text-gray-700 rounded-xl hover:shadow-lg transition-all duration-300 group"
          >
            <div class="w-12 h-12 bg-[#F8FDF9] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <i class="fa-solid fa-list text-xl text-[#6BCF9F]"></i>
            </div>
            <div>
              <p class="font-semibold">Ver Reservaciones</p>
              <p class="text-gray-500 text-sm">Gestiona tus reservas</p>
            </div>
          </router-link>
        </div>
      </div>

      <!-- Logout Button -->
      <div class="text-center">
        <button 
          @click="handleLogout"
          class="px-8 py-3 bg-red-500 text-white rounded-xl font-medium hover:bg-red-600 hover:shadow-lg transition-all duration-300 flex items-center gap-2 mx-auto"
        >
          <i class="fa-solid fa-sign-out-alt"></i>
          Cerrar Sesión
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { logoutUser, onAuthChange, getUserData } from '@/firebase/auth'
import { getUserReservations } from '@/firebase/reservations'

const router = useRouter()
const userEmail = ref('')
const userName = ref('Usuario')
const totalReservations = ref(0)
const memberSince = ref('2024')
let unsubscribe = null

const userInitials = computed(() => {
  if (userName.value) {
    return userName.value.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
  }
  return 'US'
})

onMounted(() => {
  unsubscribe = onAuthChange(async (user) => {
    if (user) {
      userEmail.value = user.email
      userName.value = user.displayName || user.email.split('@')[0].replace(/[._]/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
      
      // Get user data from Firestore
      const userData = await getUserData(user.uid)
      if (userData.success && userData.data) {
        if (userData.data.name) userName.value = userData.data.name
        if (userData.data.createdAt) {
          const date = userData.data.createdAt.toDate()
          memberSince.value = date.getFullYear().toString()
        }
      }
      
      // Get user reservations count
      const reservations = await getUserReservations(user.uid)
      if (reservations.success) {
        totalReservations.value = reservations.data.length
      }
    }
  })
})

onUnmounted(() => {
  if (unsubscribe) unsubscribe()
})

const handleLogout = async () => {
  await logoutUser()
  router.push('/')
}
</script>

<style scoped>
</style>
