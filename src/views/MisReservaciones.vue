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
              to="/profile" 
              class="px-6 py-2 bg-gradient-to-r from-[#6BCF9F] to-[#7ED9A8] text-white rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium flex items-center gap-2"
            >
              <i class="fa-solid fa-user"></i>
              Perfil
            </router-link>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Header -->
    <section class="bg-gradient-to-r from-[#6BCF9F] via-[#7ED9A8] to-[#95E3B3] py-16 relative overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div class="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="flex items-center justify-between text-white">
          <div>
            <h1 class="text-5xl font-bold mb-4 animate-fade-in">
              Mis Reservaciones
            </h1>
            <p class="text-xl text-white/90">
              Gestiona y revisa todas tus reservaciones deportivas
            </p>
          </div>
          <div class="hidden md:flex items-center gap-8">
            <div class="text-center bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/30">
              <div class="text-3xl font-bold">{{ stats.total }}</div>
              <div class="text-sm text-white/80">Total</div>
            </div>
            <div class="text-center bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/30">
              <div class="text-3xl font-bold">{{ stats.upcoming }}</div>
              <div class="text-sm text-white/80">Próximas</div>
            </div>
            <div class="text-center bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/30">
              <div class="text-3xl font-bold">{{ stats.completed }}</div>
              <div class="text-sm text-white/80">Completadas</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Calendar and Statistics Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid md:grid-cols-3 gap-8">
        <!-- Weekly Calendar -->
        <div class="md:col-span-2 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-gray-100">
          <div class="flex items-center justify-between mb-8">
            <div>
              <h2 class="text-2xl font-bold text-gray-800 flex items-center gap-3">
                <i class="fa-solid fa-calendar text-[#6BCF9F]"></i>
                Reservaciones
              </h2>
              <p class="text-gray-600 text-sm mt-2">Últimos 7 días</p>
            </div>
          </div>
          
          <!-- Days Grid -->
          <div class="grid grid-cols-7 gap-3">
            <div v-for="day in weeklyData" :key="day.date" class="text-center">
              <div :class="['p-4 rounded-xl font-semibold transition-all duration-300', 
                day.count > 0 
                  ? 'bg-gradient-to-br from-[#6BCF9F] to-[#7ED9A8] text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-700 border-2 border-gray-200'
              ]">
                <div class="text-sm mb-2">{{ day.name }}</div>
                <div class="h-12 flex items-center justify-center">
                  <div v-if="day.count > 0" class="text-2xl font-bold">{{ day.count }}</div>
                  <div v-else class="text-gray-400">-</div>
                </div>
              </div>
              <p class="text-xs text-gray-500 mt-2">{{ day.date }}</p>
            </div>
          </div>
        </div>

        <!-- Statistics Cards -->
        <div class="space-y-6">
          <!-- Total Card -->
          <div class="bg-gradient-to-br from-[#6BCF9F]/10 to-[#7ED9A8]/10 rounded-2xl p-6 border-2 border-[#6BCF9F]/20 shadow-lg">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-gray-600 text-sm font-semibold">TOTAL</p>
                <p class="text-4xl font-bold text-[#6BCF9F] mt-2">{{ stats.total }}</p>
              </div>
              <div class="w-16 h-16 bg-gradient-to-br from-[#6BCF9F] to-[#7ED9A8] rounded-xl flex items-center justify-center text-white shadow-lg">
                <i class="fa-solid fa-list text-2xl"></i>
              </div>
            </div>
          </div>

          <!-- Average Card -->
          <div class="bg-gradient-to-br from-[#FFD700]/10 to-[#FFA500]/10 rounded-2xl p-6 border-2 border-[#FFA500]/20 shadow-lg">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-gray-600 text-sm font-semibold">PROMEDIO</p>
                <p class="text-4xl font-bold text-[#FFA500] mt-2">{{ averageReservations }}</p>
              </div>
              <div class="w-16 h-16 bg-gradient-to-br from-[#FFA500] to-[#FFD700] rounded-xl flex items-center justify-center text-white shadow-lg">
                <i class="fa-solid fa-chart-line text-2xl"></i>
              </div>
            </div>
          </div>

          <!-- Maximum Card -->
          <div class="bg-gradient-to-br from-[#3B82F6]/10 to-[#1D4ED8]/10 rounded-2xl p-6 border-2 border-[#3B82F6]/20 shadow-lg">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-gray-600 text-sm font-semibold">MÁXIMO</p>
                <p class="text-4xl font-bold text-[#3B82F6] mt-2">{{ maxReservations }}</p>
              </div>
              <div class="w-16 h-16 bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8] rounded-xl flex items-center justify-center text-white shadow-lg">
                <i class="fa-solid fa-chart-bar text-2xl"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tabs Filter -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4 relative z-20">
      <div class="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-2 border border-white/50 inline-flex gap-2 flex-wrap">
        <button 
          @click="activeFilter = 'upcoming'"
          :class="[
            'px-6 py-3 rounded-xl font-medium transition-all duration-300',
            activeFilter === 'upcoming' 
              ? 'bg-gradient-to-r from-[#6BCF9F] to-[#7ED9A8] text-white shadow-md' 
              : 'text-gray-600 hover:bg-gray-100'
          ]"
        >
          <i class="fa-solid fa-clock mr-2"></i>
          Próximas ({{ stats.upcoming }})
        </button>
        <button 
          @click="activeFilter = 'completed'"
          :class="[
            'px-6 py-3 rounded-xl font-medium transition-all duration-300',
            activeFilter === 'completed' 
              ? 'bg-gradient-to-r from-[#6BCF9F] to-[#7ED9A8] text-white shadow-md' 
              : 'text-gray-600 hover:bg-gray-100'
          ]"
        >
          <i class="fa-solid fa-check-circle mr-2"></i>
          Completadas ({{ stats.completed }})
        </button>
        <button 
          @click="activeFilter = 'pending'"
          :class="[
            'px-6 py-3 rounded-xl font-medium transition-all duration-300',
            activeFilter === 'pending' 
              ? 'bg-gradient-to-r from-[#6BCF9F] to-[#7ED9A8] text-white shadow-md' 
              : 'text-gray-600 hover:bg-gray-100'
          ]"
        >
          <i class="fa-solid fa-hourglass-end mr-2"></i>
          Pendientes ({{ reservations.filter(r => r.status === 'pending').length }})
        </button>
        <button 
          @click="activeFilter = 'cancelled'"
          :class="[
            'px-6 py-3 rounded-xl font-medium transition-all duration-300',
            activeFilter === 'cancelled' 
              ? 'bg-gradient-to-r from-[#6BCF9F] to-[#7ED9A8] text-white shadow-md' 
              : 'text-gray-600 hover:bg-gray-100'
          ]"
        >
          <i class="fa-solid fa-ban mr-2"></i>
          Rechazadas ({{ stats.cancelled }})
        </button>
        <button 
          @click="activeFilter = 'all'"
          :class="[
            'px-6 py-3 rounded-xl font-medium transition-all duration-300',
            activeFilter === 'all' 
              ? 'bg-gradient-to-r from-[#6BCF9F] to-[#7ED9A8] text-white shadow-md' 
              : 'text-gray-600 hover:bg-gray-100'
          ]"
        >
          <i class="fa-solid fa-list mr-2"></i>
          Todas ({{ stats.total }})
        </button>
      </div>
    </section>

    <!-- Loading State -->
    <section v-if="isLoading" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="flex flex-col items-center justify-center py-20">
        <div class="w-16 h-16 border-4 border-[#6BCF9F] border-t-transparent rounded-full animate-spin mb-4"></div>
        <p class="text-gray-600">Cargando reservaciones...</p>
      </div>
    </section>

    <!-- Empty State -->
    <section v-else-if="filteredReservations.length === 0" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-12 text-center">
        <div class="w-24 h-24 bg-gradient-to-br from-[#6BCF9F]/20 to-[#7ED9A8]/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <i class="fa-solid fa-calendar-xmark text-4xl text-[#6BCF9F]"></i>
        </div>
        <h3 class="text-2xl font-bold text-gray-800 mb-3">No hay reservaciones</h3>
        <p class="text-gray-600 mb-6">{{ emptyMessage }}</p>
        <router-link 
          to="/reservaciones"
          class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#6BCF9F] to-[#7ED9A8] text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300"
        >
          <i class="fa-solid fa-plus"></i>
          Hacer una Reservación
        </router-link>
      </div>
    </section>

    <!-- Reservations List -->
    <section v-else class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="space-y-6">
        <!-- Reservation Card -->
        <div 
          v-for="reservation in filteredReservations" 
          :key="reservation.id"
          class="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-l-4 overflow-hidden group hover:-translate-y-1"
          :class="getStatusBorderColor(reservation.status)"
        >
          <div class="p-6">
            <div class="flex items-start justify-between">
              <!-- Left Content -->
              <div class="flex gap-6 flex-1">
                <!-- Date Badge -->
                <div class="bg-gradient-to-br from-[#6BCF9F] to-[#7ED9A8] text-white rounded-2xl p-4 text-center min-w-[100px] shadow-md">
                  <div class="text-3xl font-bold">{{ formatDay(reservation.date) }}</div>
                  <div class="text-sm opacity-90">{{ formatMonth(reservation.date) }}</div>
                  <div class="text-xs opacity-80 mt-1">{{ formatYear(reservation.date) }}</div>
                </div>

                <!-- Details -->
                <div class="flex-1">
                  <div class="flex items-center gap-3 mb-3">
                    <div class="w-12 h-12 bg-gradient-to-br from-[#6BCF9F] to-[#7ED9A8] rounded-xl flex items-center justify-center text-white shadow-md">
                      <i :class="getSportIcon(reservation.courtSport)" class="text-xl"></i>
                    </div>
                    <div>
                      <h3 class="text-xl font-bold text-gray-800">{{ reservation.courtName }}</h3>
                      <p class="text-sm text-gray-500">ID: {{ reservation.id.slice(0, 12) }}...</p>
                    </div>
                  </div>

                  <div class="grid md:grid-cols-3 gap-4 mb-4">
                    <div class="flex items-center gap-2 text-gray-600">
                      <i class="fa-solid fa-clock text-[#6BCF9F]"></i>
                      <div>
                        <p class="text-xs text-gray-500">Horario</p>
                        <p class="font-semibold">{{ reservation.startTime }} - {{ reservation.endTime }}</p>
                      </div>
                    </div>
                    <div class="flex items-center gap-2 text-gray-600">
                      <i class="fa-solid fa-location-dot text-[#6BCF9F]"></i>
                      <div>
                        <p class="text-xs text-gray-500">Ubicación</p>
                        <p class="font-semibold">{{ reservation.courtLocation }}</p>
                      </div>
                    </div>
                    <div class="flex items-center gap-2 text-gray-600">
                      <i class="fa-solid fa-users text-[#6BCF9F]"></i>
                      <div>
                        <p class="text-xs text-gray-500">Jugadores</p>
                        <p class="font-semibold">{{ reservation.people }} personas</p>
                      </div>
                    </div>
                  </div>

                  <!-- Status & Actions -->
                  <div class="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div class="flex items-center gap-2">
                      <span :class="getStatusBadgeClass(reservation.status)" class="px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <i :class="getStatusIcon(reservation.status)"></i>
                        {{ getStatusText(reservation.status) }}
                      </span>
                      <span class="px-4 py-2 bg-[#F8FDF9] text-[#6BCF9F] rounded-full text-sm font-semibold flex items-center gap-2">
                        <i class="fa-solid fa-gift"></i>
                        Gratis
                      </span>
                    </div>
                    <div class="flex gap-3">
                      <button 
                        v-if="reservation.status === 'confirmed' && isUpcoming(reservation.date)"
                        @click="cancelReservation(reservation.id)"
                        class="px-5 py-2 bg-red-50 text-red-600 border border-red-200 rounded-xl font-medium hover:bg-red-100 transition-all duration-300"
                      >
                        <i class="fa-solid fa-xmark mr-2"></i>
                        Cancelar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Actions Section -->
    <section class="bg-gradient-to-r from-[#6BCF9F] via-[#7ED9A8] to-[#95E3B3] py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-6 text-white">
          <!-- Quick Action 1 -->
          <router-link to="/reservaciones" class="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30 hover:bg-white/30 transition-all duration-300 cursor-pointer group">
            <div class="w-14 h-14 bg-white/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300">
              <i class="fa-solid fa-plus text-3xl"></i>
            </div>
            <h3 class="text-xl font-bold mb-2">Nueva Reservación</h3>
            <p class="text-white/80">Encuentra y reserva tu cancha favorita</p>
          </router-link>

          <!-- Quick Action 2 -->
          <div class="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30 hover:bg-white/30 transition-all duration-300 cursor-pointer group" @click="refreshReservations">
            <div class="w-14 h-14 bg-white/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300">
              <i class="fa-solid fa-refresh text-3xl" :class="{ 'animate-spin': isLoading }"></i>
            </div>
            <h3 class="text-xl font-bold mb-2">Actualizar Lista</h3>
            <p class="text-white/80">Recargar tus reservaciones</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { getUserReservations, cancelReservation as cancelReservationService } from '@/firebase/reservations'
import { onAuthChange } from '@/firebase/auth'

const reservations = ref([])
const isLoading = ref(true)
const activeFilter = ref('all')
const currentUser = ref(null)
let unsubscribeAuth = null

// Estadísticas de últimos 7 días
const weeklyData = computed(() => {
  const days = []
  const today = new Date()
  
  for (let i = 6; i >= 0; i--) {
    const date = new Date(today)
    date.setDate(date.getDate() - i)
    const dateStr = date.toISOString().split('T')[0]
    const dayName = date.toLocaleDateString('es-ES', { weekday: 'short' }).toUpperCase()
    const dayNum = date.getDate()
    const monthNum = date.getMonth() + 1
    
    // Contar reservaciones APROBADAS para esta fecha
    const count = reservations.value.filter(r => r.date === dateStr && r.status === 'approved').length
    
    days.push({
      name: dayName,
      date: `${dayNum}/${monthNum}`,
      count: count,
      fullDate: dateStr
    })
  }
  
  return days
})

// Estadísticas generales
const stats = computed(() => {
  const today = new Date().toISOString().split('T')[0]
  return {
    total: reservations.value.filter(r => r.status === 'approved' || r.status === 'pending').length,
    upcoming: reservations.value.filter(r => r.status === 'approved' && r.date >= today).length,
    completed: reservations.value.filter(r => r.status === 'approved' && r.date < today).length,
    cancelled: reservations.value.filter(r => r.status === 'rejected' || r.status === 'cancelled').length
  }
})

// Promedio de reservaciones por día (últimos 7 días)
const averageReservations = computed(() => {
  if (weeklyData.value.length === 0) return 0
  const total = weeklyData.value.reduce((sum, day) => sum + day.count, 0)
  return Math.round(total / weeklyData.value.length * 10) / 10
})

// Máximo de reservaciones en un día
const maxReservations = computed(() => {
  if (weeklyData.value.length === 0) return 0
  return Math.max(...weeklyData.value.map(day => day.count), 0)
})

// Filtrar reservaciones
const filteredReservations = computed(() => {
  const today = new Date().toISOString().split('T')[0]
  
  switch (activeFilter.value) {
    case 'upcoming':
      return reservations.value.filter(r => r.status === 'approved' && r.date >= today)
    case 'completed':
      return reservations.value.filter(r => r.status === 'approved' && r.date < today)
    case 'cancelled':
      return reservations.value.filter(r => r.status === 'rejected' || r.status === 'cancelled')
    case 'pending':
      return reservations.value.filter(r => r.status === 'pending')
    default:
      return reservations.value
  }
})

// Mensaje cuando no hay reservaciones
const emptyMessage = computed(() => {
  switch (activeFilter.value) {
    case 'upcoming':
      return 'No tienes reservaciones próximas. ¡Haz una nueva reservación!'
    case 'completed':
      return 'Aún no tienes reservaciones completadas.'
    case 'pending':
      return 'No tienes reservaciones pendientes de aprobación. ¡Todas han sido gestionadas!'
    case 'cancelled':
      return 'No tienes reservaciones rechazadas.'
    default:
      return 'No tienes ninguna reservación. ¡Haz tu primera reservación!'
  }
})

// Cargar reservaciones
const loadReservations = async () => {
  if (!currentUser.value) return
  
  isLoading.value = true
  const result = await getUserReservations(currentUser.value.uid)
  
  if (result.success) {
    reservations.value = result.data.sort((a, b) => {
      // Ordenar por fecha (más reciente primero)
      return new Date(b.date) - new Date(a.date)
    })
  }
  
  isLoading.value = false
}

// Actualizar lista
const refreshReservations = () => {
  loadReservations()
}

// Cancelar reservación
const cancelReservation = async (reservationId) => {
  if (!confirm('¿Estás seguro de que deseas cancelar esta reservación?')) return
  
  const result = await cancelReservationService(reservationId)
  
  if (result.success) {
    alert('Reservación cancelada exitosamente')
    loadReservations()
  } else {
    alert('Error al cancelar la reservación: ' + result.error)
  }
}

// Verificar si una fecha es futura
const isUpcoming = (date) => {
  const today = new Date().toISOString().split('T')[0]
  return date >= today
}

// Formatear fecha
const formatDay = (date) => new Date(date + 'T12:00:00').getDate()
const formatMonth = (date) => {
  const months = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC']
  return months[new Date(date + 'T12:00:00').getMonth()]
}
const formatYear = (date) => new Date(date + 'T12:00:00').getFullYear()

// Obtener icono del deporte
const getSportIcon = (sport) => {
  const icons = {
    'basquetbol': 'fa-solid fa-basketball',
    'tenis': 'fa-solid fa-table-tennis-paddle-ball',
    'voleibol': 'fa-solid fa-volleyball',
    'padel': 'fa-solid fa-baseball-bat-ball'
  }
  return icons[sport] || 'fa-solid fa-futbol'
}

// Estilos según estado
const getStatusBorderColor = (status) => {
  if (status === 'rejected' || status === 'cancelled') return 'border-red-400'
  if (status === 'approved') return 'border-green-400'
  return 'border-yellow-400'
}

const getStatusBadgeClass = (status) => {
  if (status === 'rejected' || status === 'cancelled') return 'bg-red-100 text-red-700'
  if (status === 'approved') return 'bg-green-100 text-green-700'
  return 'bg-yellow-100 text-yellow-700'
}

const getStatusIcon = (status) => {
  if (status === 'rejected' || status === 'cancelled') return 'fa-solid fa-ban'
  if (status === 'approved') return 'fa-solid fa-circle-check'
  return 'fa-solid fa-hourglass-end'
}

const getStatusText = (status) => {
  if (status === 'rejected' || status === 'cancelled') return 'Rechazada'
  if (status === 'approved') return 'Aprobada'
  return 'Pendiente'
}

// Lifecycle
onMounted(() => {
  unsubscribeAuth = onAuthChange((user) => {
    currentUser.value = user
    if (user) {
      loadReservations()
    } else {
      reservations.value = []
      isLoading.value = false
    }
  })
})

onUnmounted(() => {
  if (unsubscribeAuth) unsubscribeAuth()
})
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out;
}
</style>