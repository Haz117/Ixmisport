<template>
  <div class="min-h-screen w-full bg-white relative overflow-hidden flex flex-col md:flex-row">
    
    <!-- Elementos decorativos de fondo con movimiento suave -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-16 left-8 w-48 h-48 bg-ixmi-200/15 rounded-full blur-3xl animate-elegant-float"></div>
      <div class="absolute bottom-16 right-8 w-64 h-64 bg-ixmi-300/10 rounded-full blur-3xl animate-elegant-float-delayed"></div>
      <div class="absolute top-1/3 left-1/3 w-40 h-40 bg-ixmi-400/8 rounded-full blur-2xl animate-elegant-breathe"></div>
      <div class="absolute top-1/2 right-1/4 w-32 h-32 bg-ixmi-500/5 rounded-full blur-xl animate-elegant-pulse"></div>
    </div>

    <!-- Modales mejorados -->
    <!-- Modal de Detalle de Reservación -->
    <transition name="modal">
      <div v-if="showReservationDetailModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
        <div class="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
          <div v-if="selectedReservation" class="space-y-0">
            <!-- Header con estado -->
            <div class="sticky top-0 bg-gradient-to-r from-ixmi-500 via-ixmi-600 to-ixmi-700 px-8 py-6 text-white flex items-center justify-between rounded-t-3xl border-b-4 border-ixmi-400">
              <div>
                <h3 class="text-3xl font-bold"><i class="fa-solid fa-clipboard text-ixmi-600 mr-2"></i>Detalle de Reservación</h3>
                <p class="text-ixmi-100 text-sm mt-2">ID: {{ selectedReservation.id?.slice(0, 12) }}...</p>
              </div>
              <button @click="showReservationDetailModal = false" class="p-2 hover:bg-white/20 rounded-xl transition-all duration-200 flex-shrink-0">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            <!-- Contenido -->
            <div class="p-8 space-y-6">
              <!-- Status Badge Grande -->
              <div v-if="selectedReservation.status" class="flex items-center justify-center">
                <span :class="[
                  'px-6 py-3 rounded-full text-lg font-bold flex items-center gap-2 shadow-lg',
                  selectedReservation.status === 'approved' ? 'bg-gradient-to-r from-green-400 to-emerald-500 text-white' :
                  selectedReservation.status === 'rejected' ? 'bg-gradient-to-r from-red-400 to-red-500 text-white' :
                  selectedReservation.status === 'pending' ? 'bg-gradient-to-r from-yellow-400 to-amber-500 text-white' :
                  'bg-gradient-to-r from-orange-400 to-orange-500 text-white'
                ]">
                  <i v-if="selectedReservation.status === 'approved'" class="fa-solid fa-check-circle"></i>
                  <i v-else-if="selectedReservation.status === 'rejected'" class="fa-solid fa-ban"></i>
                  <i v-else-if="selectedReservation.status === 'pending'" class="fa-solid fa-clock"></i>
                  <i v-else class="fa-solid fa-xmark-circle"></i>
                  {{ selectedReservation.status === 'approved' ? 'APROBADA' : 
                     selectedReservation.status === 'rejected' ? 'RECHAZADA' :
                     selectedReservation.status === 'pending' ? 'PENDIENTE' :
                     'CANCELADA' }}
                </span>
              </div>

              <!-- Grid de información -->
              <div class="grid grid-cols-2 gap-6 bg-gray-50 rounded-2xl p-6">
                <div class="col-span-2">
                  <p class="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Usuario</p>
                  <p class="text-2xl font-bold text-gray-900">{{ selectedReservation.userName }}</p>
                  <p class="text-sm text-gray-600">{{ selectedReservation.userEmail }}</p>
                </div>
                
                <div class="bg-white rounded-xl p-4 border-2 border-ixmi-200">
                  <p class="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Cancha</p>
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-gradient-to-br from-ixmi-400 to-ixmi-600 rounded-lg flex items-center justify-center text-white text-lg">
                      <i class="fa-solid fa-calendar"></i>
                    </div>
                    <div>
                      <p class="font-bold text-gray-900">{{ selectedReservation.courtName }}</p>
                      <p class="text-xs text-gray-600">{{ selectedReservation.courtLocation }}</p>
                    </div>
                  </div>
                </div>

                <div class="bg-white rounded-xl p-4 border-2 border-ixmi-200">
                  <p class="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Deporte</p>
                  <p class="font-bold text-gray-900 text-lg">{{ selectedReservation.courtSport || 'General' }}</p>
                </div>

                <div class="bg-white rounded-xl p-4 border-2 border-ixmi-200">
                  <p class="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Fecha</p>
                  <p class="font-bold text-gray-900 text-lg">{{ new Date(selectedReservation.date).toLocaleDateString('es-MX') }}</p>
                </div>

                <div class="bg-white rounded-xl p-4 border-2 border-ixmi-200">
                  <p class="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Horario</p>
                  <p class="font-bold text-gray-900 text-lg">{{ selectedReservation.startTime }} - {{ selectedReservation.endTime }}</p>
                </div>

                <div class="bg-white rounded-xl p-4 border-2 border-ixmi-200">
                  <p class="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Jugadores</p>
                  <p class="font-bold text-gray-900 text-lg">{{ selectedReservation.people }} personas</p>
                </div>
              </div>

              <!-- Notas si existen -->
              <div v-if="selectedReservation.notes" class="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
                <p class="text-sm font-bold text-blue-700 uppercase tracking-widest mb-3"><i class="fa-solid fa-pen-to-square mr-2"></i>Notas</p>
                <p class="text-gray-700">{{ selectedReservation.notes }}</p>
              </div>
            </div>

            <!-- Action Buttons - Sticky Footer -->
            <div class="sticky bottom-0 bg-white border-t-2 border-gray-200 px-8 py-6 flex gap-3 rounded-b-3xl">
              <button 
                @click="showReservationDetailModal = false"
                class="flex-1 px-4 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 font-bold text-base"
              >
                Cerrar
              </button>
              
              <button 
                v-if="selectedReservation.status === 'pending'"
                @click="approveReservation(selectedReservation)"
                class="flex-1 px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:from-green-600 hover:to-emerald-700 hover:shadow-lg transition-all duration-200 font-bold text-base flex items-center justify-center gap-2"
              >
                <i class="fa-solid fa-check"></i>
                Aprobar
              </button>
              
              <button 
                v-if="selectedReservation.status !== 'rejected' && selectedReservation.status !== 'cancelled'"
                @click="rejectReservation(selectedReservation)"
                class="flex-1 px-4 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl hover:from-red-600 hover:to-red-700 hover:shadow-lg transition-all duration-200 font-bold text-base flex items-center justify-center gap-2"
              >
                <i class="fa-solid fa-ban"></i>
                Rechazar
              </button>
              
              <button 
                v-if="selectedReservation.status === 'approved'"
                @click="cancelReservation(selectedReservation)"
                class="flex-1 px-4 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl hover:from-orange-600 hover:to-orange-700 hover:shadow-lg transition-all duration-200 font-bold text-base flex items-center justify-center gap-2"
              >
                <i class="fa-solid fa-xmark"></i>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- Sidebar Overlay (Mobile) -->
    <transition name="fade">
      <div v-if="sidebarOpen" class="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden" @click="sidebarOpen = false"></div>
    </transition>

    <!-- Sidebar Navigation -->
    <div :class="[
      'fixed md:relative inset-y-0 left-0 z-50 w-64 bg-white/95 backdrop-blur-lg shadow-2xl border-r border-ixmi-200/40 transform transition-all duration-500 ease-in-out flex-shrink-0',
      sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0',
      'opacity-0 animate-elegant-slide-right animation-delay-200'
    ]">
      <!-- Logo Section -->
      <div class="flex items-center justify-center h-16 px-6 border-b border-ixmi-200/30 bg-ixmi-50">
        <div class="flex items-center space-x-3 opacity-0 animate-elegant-fade-down animation-delay-400">
          <div class="relative">
            <div class="w-10 h-10 bg-ixmi-500 rounded-xl flex items-center justify-center shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <div class="absolute -top-1 -right-1 w-3 h-3 bg-ixmi-400 rounded-full border-2 border-white animate-elegant-pulse"></div>
          </div>
          <div>
            <h1 class="text-lg font-bold text-ixmi-600">IxmiSport</h1>
            <p class="text-xs text-ixmi-500/70 font-medium">Panel de Administración</p>
          </div>
        </div>
      </div>

      <!-- Navigation Menu -->
      <nav class="flex-1 px-4 py-6 space-y-2 opacity-0 animate-elegant-fade-up animation-delay-600">
        <div class="space-y-1">
          <button 
            v-for="(tab, index) in tabs" 
            :key="tab.id"
            @click="activeTab = tab.id; sidebarOpen = false"
            :class="[
              'group flex items-center w-full px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 relative overflow-hidden opacity-0 animate-elegant-slide-right',
              activeTab === tab.id 
                ? 'bg-ixmi-500 text-white shadow-lg shadow-ixmi-500/25 transform scale-[1.02]' 
                : 'text-ixmi-700 hover:text-ixmi-600 hover:bg-ixmi-50'
            ]"
            :style="{ animationDelay: `${700 + index * 100}ms` }"
          >
            <component :is="tab.icon" :class="[
              'mr-3 h-5 w-5 transition-all duration-300',
              activeTab === tab.id ? 'text-white' : 'text-ixmi-500 group-hover:text-ixmi-600'
            ]" />
            <span class="font-medium">{{ tab.name }}</span>
            <div v-if="tab.badge" :class="[
              'ml-auto px-2 py-1 text-xs rounded-full font-semibold',
              activeTab === tab.id ? 'bg-white/20 text-white' : 'bg-ixmi-100 text-ixmi-600'
            ]">
              {{ tab.badge }}
            </div>
            <!-- Active indicator -->
            <div v-if="activeTab === tab.id" class="absolute right-0 top-0 bottom-0 w-1 bg-white/30 rounded-l-full"></div>
          </button>
        </div>

        <!-- Quick Actions -->
        <div class="pt-6 mt-6 border-t border-ixmi-200/30 opacity-0 animate-elegant-fade-up animation-delay-1200">
          <p class="px-4 text-xs font-semibold text-ixmi-500/70 uppercase tracking-wider mb-3">Acciones Rápidas</p>
          <div class="space-y-2">
            <button 
              @click="showNewCanchaModal = true; sidebarOpen = false"
              class="group flex items-center w-full px-4 py-2 text-sm text-ixmi-700 rounded-lg hover:bg-ixmi-50 hover:text-ixmi-600 transition-all duration-300 hover:transform hover:translateX-1"
            >
              <svg class="mr-3 h-4 w-4 text-ixmi-500 group-hover:text-ixmi-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
              Nueva Cancha
            </button>
            <button 
              @click="generateReport"
              class="group flex items-center w-full px-4 py-2 text-sm text-ixmi-700 rounded-lg hover:bg-ixmi-50 hover:text-ixmi-600 transition-all duration-300 hover:transform hover:translateX-1"
            >
              <svg class="mr-3 h-4 w-4 text-ixmi-500 group-hover:text-ixmi-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              Generar Reporte
            </button>
          </div>
        </div>
      </nav>

      <!-- User Profile Footer -->
      <div class="border-t border-ixmi-200/30 p-4 opacity-0 animate-elegant-fade-up animation-delay-1400">
        <div class="flex items-center space-x-3 p-3 rounded-xl bg-ixmi-50 border border-ixmi-200 backdrop-blur-sm">
          <div class="relative">
            <div class="w-10 h-10 bg-ixmi-500 rounded-full flex items-center justify-center shadow-md">
              <span class="text-white text-sm font-bold">A</span>
            </div>
            <div class="absolute -bottom-1 -right-1 w-4 h-4 bg-ixmi-400 rounded-full border-2 border-white animate-elegant-pulse"></div>
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-ixmi-900 truncate">Administrador</p>
            <p class="text-xs text-ixmi-500/70 truncate">admin@ixmisport.com</p>
          </div>
          <router-link to="/home" class="p-2 text-ixmi-400 hover:text-ixmi-600 rounded-lg hover:bg-ixmi-200/30 transition-all duration-300 hover:transform hover:scale-105">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
            </svg>
          </router-link>
        </div>
      </div>
    </div>

    <!-- Main Content Area -->
    <div class="flex-1 min-h-screen relative z-10 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-y-auto">
      <!-- Top Header -->
      <header class="bg-white/90 backdrop-blur-lg shadow-sm border-b border-ixmi-200/40 sticky top-0 z-40 opacity-0 animate-elegant-fade-down animation-delay-300">
        <div class="px-6 py-4">
          <div class="flex items-center justify-between">
            <!-- Left Side: Sidebar Toggle + Page Title -->
            <div class="flex items-center space-x-4">
              <button @click="sidebarOpen = !sidebarOpen" class="p-2 text-ixmi-600 hover:bg-ixmi-50 rounded-xl transition-all duration-300 group hover:scale-105" title="Abrir/Cerrar panel">
                <svg v-if="!sidebarOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
                <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
              
              <!-- Page Title and Breadcrumb -->
              <div class="flex items-center space-x-4">
                <div class="opacity-0 animate-elegant-fade-right animation-delay-500">
                  <h2 class="text-2xl font-bold text-gray-900">{{ getPageTitle() }}</h2>
                  <div class="flex items-center space-x-2 text-sm text-gray-500 mt-1">
                    <span>IxmiSport</span>
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                    <span>Admin</span>
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                    <span class="text-ixmi-600 font-medium">{{ getPageTitle() }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Header Actions -->
            <div class="flex items-center space-x-4 opacity-0 animate-elegant-fade-left animation-delay-700">
              <!-- Search -->
              <div class="relative hidden md:block">
                <input 
                  type="text" 
                  placeholder="Buscar..."
                  class="pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-ixmi-400/50 focus:border-ixmi-400 bg-white text-gray-900 placeholder-gray-400 transition-all duration-300 hover:border-gray-400"
                >
                <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-ixmi-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>

              <!-- Notifications -->
              <div class="relative">
                <button class="relative p-2 text-ixmi-600 hover:text-ixmi-700 hover:bg-ixmi-50 rounded-xl transition-all duration-300 group">
                  <svg class="w-6 h-6 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5.5-5.5a5.5 5.5 0 10-7.5 0L1.5 17H7m8 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                  </svg>
                  <span class="absolute -top-1 -right-1 bg-ixmi-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold animate-elegant-pulse">3</span>
                </button>
              </div>

              <!-- Settings -->
              <button class="p-2 text-gray-600 hover:text-ixmi-600 hover:bg-ixmi-50 rounded-xl transition-all duration-300 group">
                <svg class="w-6 h-6 group-hover:rotate-180 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <!-- Main Content -->
      <main class="p-6">
        <!-- Dashboard -->
        <div v-if="activeTab === 'dashboard'" class="space-y-8 opacity-0 animate-elegant-fade-up animation-delay-800">
          <!-- System Alerts Section -->
          <div v-if="canchasWithRealOccupancy.filter(c => !c.active || c.isBlockedToday || c.occupancy > 85).length > 0" class="grid grid-cols-1 gap-4">
            <!-- Alert: Canchas Inactivas -->
            <div v-if="canchasWithRealOccupancy.filter(c => !c.active).length > 0" class="relative overflow-hidden rounded-2xl border-l-4 border-l-red-500 bg-gradient-to-r from-red-50/50 to-transparent p-4 shadow-md">
              <div class="flex items-start space-x-3">
                <div class="pt-0.5">
                  <svg class="h-6 w-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"></path>
                  </svg>
                </div>
                <div class="flex-1">
                  <div class="flex items-center space-x-2">
                    <svg class="h-5 w-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <h3 class="font-bold text-red-900">Canchas Pausadas</h3>
                  </div>
                  <p class="text-sm text-red-800 mt-2">
                    {{ canchasWithRealOccupancy.filter(c => !c.active).length }} cancha{{ canchasWithRealOccupancy.filter(c => !c.active).length !== 1 ? 's' : '' }} no {{ canchasWithRealOccupancy.filter(c => !c.active).length !== 1 ? 'están' : 'está' }} activa{{ canchasWithRealOccupancy.filter(c => !c.active).length !== 1 ? 's' : '' }}
                    <span class="font-semibold">{{ canchasWithRealOccupancy.filter(c => !c.active).map(c => c.name).join(', ') }}</span>
                  </p>
                </div>
              </div>
            </div>

            <!-- Alert: Alta Ocupación -->
            <div v-if="canchasWithRealOccupancy.filter(c => c.occupancy > 85).length > 0" class="relative overflow-hidden rounded-2xl border-2 border-amber-300 bg-gradient-to-r from-amber-500 to-orange-600 p-6 shadow-xl">
              <div class="flex items-start space-x-4">
                <div class="pt-0.5">
                  <svg class="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.266-.526.613-.34 1.155.216.711.327 1.429.327 2.277 0 2.136-1.694 3.862-3.783 3.862H6.095c-.1 0-.197.003-.291.012C4.576 10.007 2 11.802 2 14.8 2 17.003 3.71 18.538 6.333 18.815c.216.023.434.036.666.036h12c.657 0 1.338-.049 2-1 .312-.016.612-.08.916-.156.246-.41.481-.835.697-1.284.359-.28.736-.523 1.109-.717.427-.223.579-.337.579-.913V2.9c0-.566-.34-.974-.868-1.144.01-.205.027-.411.058-.62.07-.628.454-1.2.942-1.2.165 0 .294.096.58.196 1.7.858 3.637 3.967 5.5 7.1Z"></path>
                  </svg>
                </div>
                <div class="flex-1">
                  <div class="flex items-center space-x-2">
                    <svg class="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                    <h3 class="font-bold text-white text-lg">Alta Ocupación Detectada</h3>
                  </div>
                  <p class="text-amber-50 mt-2 font-semibold">
                    {{ canchasWithRealOccupancy.filter(c => c.occupancy > 85).length }} cancha{{ canchasWithRealOccupancy.filter(c => c.occupancy > 85).length !== 1 ? 's' : '' }} con ocupación &gt;85%:
                    <span class="text-white underline">{{ canchasWithRealOccupancy.filter(c => c.occupancy > 85).map(c => c.name).join(', ') }}</span>
                  </p>
                </div>
              </div>
            </div>

            <!-- Alert: Canchas Apartadas -->
            <div v-if="canchasWithRealOccupancy.filter(c => c.isBlockedToday || c.securityLocked).length > 0" class="relative overflow-hidden rounded-2xl border-2 border-blue-300 bg-gradient-to-r from-blue-500 to-cyan-600 p-6 shadow-xl">
              <div class="flex items-start space-x-4">
                <div class="pt-0.5">
                  <svg class="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1a11 11 0 110 22 11 11 0 010-22zm0 2a9 9 0 100 18 9 9 0 000-18zm3.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-8 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm4-5.5a1 1 0 11-2 0 1 1 0 012 0z"/>
                  </svg>
                </div>
                <div class="flex-1">
                  <div class="flex items-center space-x-2">
                    <svg class="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <h3 class="font-bold text-white text-lg">Canchas Apartadas</h3>
                  </div>
                  <p class="text-blue-50 mt-2 font-semibold">
                    {{ canchasWithRealOccupancy.filter(c => c.isBlockedToday || c.securityLocked).length }} cancha{{ canchasWithRealOccupancy.filter(c => c.isBlockedToday || c.securityLocked).length !== 1 ? 's' : '' }} apartada{{ canchasWithRealOccupancy.filter(c => c.isBlockedToday || c.securityLocked).length !== 1 ? 's' : '' }}:
                    <span class="text-white underline">{{ canchasWithRealOccupancy.filter(c => c.isBlockedToday || c.securityLocked).map(c => c.name).join(', ') }}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- No alerts celebration -->
          <div v-else class="rounded-2xl bg-gradient-to-r from-green-500 via-emerald-500 to-teal-600 border-2 border-green-300 p-8 text-center shadow-2xl relative overflow-hidden">
            <!-- Elementos decorativos -->
            <div class="absolute inset-0 opacity-10 pointer-events-none">
              <div class="absolute top-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl"></div>
              <div class="absolute bottom-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl"></div>
            </div>
            <!-- Contenido -->
            <div class="relative">
              <div class="flex items-center justify-center space-x-3 mb-4">
                <svg class="h-10 w-10 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <p class="text-white font-black text-3xl mb-2">Sistema Operativo al 100%</p>
              <p class="text-green-50 text-lg font-semibold">Todas las canchas disponibles y funcionando óptimamente</p>
              <div class="mt-6 flex justify-center space-x-8 pt-6 border-t-2 border-white/30">
                <div class="text-center">
                  <p class="text-green-100 text-sm font-bold uppercase tracking-wider">Canchas Activas</p>
                  <p class="text-white text-3xl font-black mt-2">{{ canchasWithRealOccupancy.filter(c => c.active).length }}</p>
                </div>
                <div class="text-center">
                  <p class="text-green-100 text-sm font-bold uppercase tracking-wider">Ocupación Promedio</p>
                  <p class="text-white text-3xl font-black mt-2">{{ Math.round(canchasWithRealOccupancy.reduce((sum, c) => sum + c.occupancy, 0) / (canchasWithRealOccupancy.length || 1)) || 0 }}%</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Charts and Analytics Section -->
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <!-- Weekly Activity Chart - Reservaciones -->
            <div class="lg:col-span-2 bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-200 overflow-hidden group hover:shadow-2xl hover:border-ixmi-300 hover:-translate-y-1 transition-all duration-300">
              <!-- Header con Toggle mejorado -->
              <div class="flex items-center justify-between mb-10">
                <div>
                  <div class="flex items-center space-x-2 mb-2">
                    <svg class="h-6 w-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7H5v12h12V9m0-2h2a2 2 0 012 2v10a2 2 0 01-2 2h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-1.414-1.414l2.414-2.414A1 1 0 0010.586 19H5a2 2 0 01-2-2V7a2 2 0 012-2h5m4 0V5a2 2 0 012 2v2h2"></path>
                    </svg>
                    <h3 class="text-3xl font-black text-gray-900">Reservaciones</h3>
                  </div>
                  <p class="text-base text-gray-600 font-semibold mt-2">{{ reportPeriod === 7 ? 'Últimos 7 días' : 'Últimos 30 días' }}</p>
                </div>
                
                <!-- Toggle elegante -->
                <div class="flex items-center gap-4">
                  <div class="inline-flex items-center border-2 border-gray-300 rounded-2xl p-1.5 bg-gray-100 backdrop-blur-xl shadow-md">
                    <button 
                      @click="reportPeriod = 7"
                      :class="[
                        'px-8 py-3 text-sm font-black rounded-lg transition-all duration-300 uppercase tracking-wider',
                        reportPeriod === 7 
                          ? 'bg-gradient-to-r from-ixmi-500 via-ixmi-600 to-ixmi-700 text-white shadow-lg shadow-ixmi-500/40 scale-105' 
                          : 'text-gray-700 hover:text-ixmi-600 hover:bg-white'
                      ]"
                    >
                      7 días
                    </button>
                    <button 
                      @click="reportPeriod = 30"
                      :class="[
                        'px-8 py-3 text-sm font-black rounded-lg transition-all duration-300 uppercase tracking-wider',
                        reportPeriod === 30 
                          ? 'bg-gradient-to-r from-ixmi-500 via-ixmi-600 to-ixmi-700 text-white shadow-lg shadow-ixmi-500/40 scale-105' 
                          : 'text-gray-700 hover:text-ixmi-600 hover:bg-white'
                      ]"
                    >
                      30 días
                    </button>
                  </div>
                  <button 
                    @click="refreshAllData"
                    class="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-lg hover:shadow-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 uppercase tracking-wider text-sm"
                  >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                    </svg>
                    Refrescar
                  </button>
                </div>
              </div>

              <!-- Chart Container -->
              <div class="relative">
                <!-- Gráfico mejorado con Cards -->
                <div :class="['grid gap-3 mb-10 transition-all duration-500', reportPeriod === 7 ? 'grid-cols-7' : 'grid-cols-10 xl:grid-cols-10']">
                  <div 
                    v-for="(day, index) in weeklyReservations" 
                    :key="day.day"
                    class="group/item flex flex-col items-center gap-3 p-3 rounded-2xl bg-gray-50 backdrop-blur-md border border-gray-200 hover:border-ixmi-400 hover:shadow-lg hover:shadow-ixmi-300/30 transition-all duration-300 cursor-pointer"
                    :style="{ animationDelay: `${index * 50}ms` }"
                  >
                    <!-- Bar con animación -->
                    <div class="w-full flex flex-col items-center gap-2">
                      <div class="relative h-40 w-full flex flex-col justify-end items-center">
                        <!-- Barra principal -->
                        <div 
                          class="w-full bg-gradient-to-t from-ixmi-600 via-ixmi-500 to-ixmi-400 rounded-t-3xl transition-all duration-700 ease-out shadow-lg hover:shadow-ixmi-500/50 hover:from-ixmi-700 hover:via-ixmi-600 hover:to-ixmi-500 relative overflow-hidden group/bar border-2 border-ixmi-300/50"
                          :style="{ 
                            height: weeklyReservations.length > 0 
                              ? `${Math.max(15, (day.reservations / Math.max(...weeklyReservations.map(d => d.reservations), 1)) * 100)}%`
                              : '15%'
                          }"
                        >
                          <!-- Brillo interno -->
                          <div class="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-white/30 opacity-0 group-hover/bar:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        
                        <!-- Número en la barra -->
                        <div v-if="day.reservations > 0" class="absolute text-center text-white font-black text-2xl drop-shadow-lg group-hover/bar:scale-125 transition-transform duration-300" style="text-shadow: 0 2px 8px rgba(0,0,0,0.3)">
                          {{ day.reservations }}
                        </div>
                      </div>
                      
                      <!-- Labels con indicador de reservaciones -->
                      <div class="text-center mt-3 w-full">
                        <p class="text-sm font-black text-ixmi-700 uppercase px-1 group-hover/item:text-ixmi-600 transition-colors duration-200">
                          {{ reportPeriod === 7 ? day.day.slice(0, 3) : day.day }}
                        </p>
                        <!-- Indicador visual - Punto verde cuando hay reservaciones -->
                        <div v-if="day.reservations > 0" class="flex items-center justify-center gap-1 mt-2">
                          <div class="w-2.5 h-2.5 bg-gradient-to-br from-ixmi-400 to-ixmi-600 rounded-full shadow-md animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Stats footer -->
                <div class="grid grid-cols-3 gap-6 pt-8 border-t-2 border-gray-200">
                  <div class="text-center p-5 rounded-2xl bg-green-50 border-2 border-green-200">
                    <p class="text-xs text-green-700 font-black uppercase tracking-wider">Total</p>
                    <p class="text-4xl font-black text-green-600 mt-3">{{ weeklyReservations.reduce((sum, d) => sum + d.reservations, 0) }}</p>
                  </div>
                  <div class="text-center p-5 rounded-2xl bg-ixmi-50 border-2 border-ixmi-200">
                    <p class="text-xs text-ixmi-700 font-black uppercase tracking-wider">Promedio</p>
                    <p class="text-4xl font-black text-ixmi-600 mt-3">{{ Math.round(weeklyReservations.reduce((sum, d) => sum + d.reservations, 0) / weeklyReservations.length) || 0 }}</p>
                  </div>
                  <div class="text-center p-5 rounded-2xl bg-blue-50 border-2 border-blue-200">
                    <p class="text-xs text-blue-700 font-black uppercase tracking-wider">Máximo</p>
                    <p class="text-4xl font-black text-blue-600 mt-3">{{ Math.max(...weeklyReservations.map(d => d.reservations), 0) }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Recent Activity -->
            <div class="bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-gray-200/60">
              <div class="flex items-center justify-between mb-6">
                <div>
                  <h3 class="text-lg font-bold text-gray-900">Actividad Reciente</h3>
                  <p class="text-sm text-gray-600">Últimas acciones</p>
                </div>
                <button class="text-ixmi-600 hover:text-ixmi-700 text-sm font-medium">Ver todo</button>
              </div>
              
              <div v-if="recentActivities.length > 0" class="space-y-4">
                <div 
                  v-for="(activity, index) in recentActivities" 
                  :key="activity.id"
                  class="group flex items-start space-x-3 p-3 rounded-xl hover:bg-ixmi-50/50 transition-all duration-300 cursor-pointer"
                  :style="{ animationDelay: `${index * 100}ms` }"
                >
                  <div :class="['relative w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300', activity.color]">
                    <span class="text-white text-lg font-bold">{{ activity.statusIcon }}</span>
                    <div class="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full border border-gray-200"></div>
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-semibold text-gray-900 group-hover:text-ixmi-700 transition-colors duration-200">{{ activity.title }}</p>
                    <p class="text-sm text-gray-600 mt-1 truncate">{{ activity.description }}</p>
                    <div class="flex items-center mt-2 space-x-2">
                      <span class="text-xs text-gray-500">{{ activity.time }}</span>
                      <span class="w-1 h-1 bg-gray-300 rounded-full"></span>
                      <span :class="['text-xs px-2 py-1 rounded-full font-medium', activity.statusColor]">{{ activity.status }}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Empty State -->
              <div v-else class="text-center py-12 px-4">
                <svg class="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <p class="text-gray-400 font-medium text-sm">No hay actividad reciente</p>
                <p class="text-gray-300 text-xs mt-1">Las reservaciones aparecerán aquí</p>
              </div>
            </div>
          </div>

          <!-- Master Metric: Real-time Occupancy -->
          <div class="relative overflow-hidden rounded-3xl bg-white shadow-lg border-4 border-ixmi-200 hover:shadow-2xl hover:border-ixmi-400 hover:-translate-y-1 transition-all duration-500 cursor-pointer group">
            <!-- Elementos decorativos sutiles -->
            <div class="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
              <div class="absolute top-0 right-0 w-96 h-96 bg-ixmi-500 rounded-full filter blur-3xl -mr-48 -mt-48"></div>
              <div class="absolute bottom-0 left-0 w-96 h-96 bg-ixmi-500 rounded-full filter blur-3xl -ml-48 -mb-48"></div>
            </div>

            <div class="relative p-8 md:p-16">
              <!-- Header Info -->
              <div class="flex items-start justify-between mb-10">
                <div>
                  <div class="flex items-center space-x-2 mb-3">
                    <svg class="h-5 w-5 text-ixmi-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                    </svg>
                    <p class="text-ixmi-600 text-base font-black uppercase tracking-widest opacity-90">Métrica Principal en Tiempo Real</p>
                  </div>
                  <h3 class="text-gray-900 text-4xl md:text-5xl font-black">Ocupación de Canchas</h3>
                  <p class="text-gray-600 text-lg mt-3 font-bold">Estado actual de todas las instalaciones</p>
                </div>
                <div class="flex items-center gap-3 px-5 py-3 bg-ixmi-100 backdrop-blur-lg rounded-full border-2 border-ixmi-300 shadow-lg">
                  <span class="w-3 h-3 bg-ixmi-600 rounded-full animate-pulse shadow-lg"></span>
                  <span class="text-ixmi-700 text-sm font-black">EN VIVO</span>
                </div>
              </div>

              <!-- Main Stat -->
              <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <!-- Big Number -->
                <div class="md:col-span-2 space-y-6">
                  <div class="flex items-baseline gap-3">
                    <span class="text-9xl md:text-[140px] font-black text-ixmi-600 drop-shadow-sm" style="text-shadow: 0 2px 4px rgba(0,0,0,0.1)">
                      {{ Math.round(canchasWithRealOccupancy.reduce((sum, c) => sum + c.occupancy, 0) / (canchasWithRealOccupancy.length || 1)) || 0 }}<span class="text-6xl md:text-8xl opacity-70">%</span>
                    </span>
                  </div>
                  <p class="text-gray-700 text-2xl font-bold">Promedio de ocupación en todas las canchas</p>
                  
                  <!-- Progress Bar - Visual Indicator -->
                  <div class="mt-10 pt-8 border-t-2 border-gray-200">
                    <div class="mb-4 flex items-center justify-between">
                      <span class="text-gray-800 text-sm font-black uppercase tracking-wider">Ocupación Instantánea</span>
                      <div class="inline-flex items-center space-x-2 px-4 py-2 rounded-full shadow-md" :class="[
                        (Math.round(canchasWithRealOccupancy.reduce((sum, c) => sum + c.occupancy, 0) / (canchasWithRealOccupancy.length || 1)) || 0) < 30 ? 'bg-green-100 text-green-900' :
                        (Math.round(canchasWithRealOccupancy.reduce((sum, c) => sum + c.occupancy, 0) / (canchasWithRealOccupancy.length || 1)) || 0) < 70 ? 'bg-yellow-100 text-yellow-900' :
                        'bg-orange-100 text-orange-900'
                      ]">
                        <svg v-if="(Math.round(canchasWithRealOccupancy.reduce((sum, c) => sum + c.occupancy, 0) / (canchasWithRealOccupancy.length || 1)) || 0) < 30" class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <svg v-else-if="(Math.round(canchasWithRealOccupancy.reduce((sum, c) => sum + c.occupancy, 0) / (canchasWithRealOccupancy.length || 1)) || 0) < 70" class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <svg v-else class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                        <span class="text-lg font-black">{{ (Math.round(canchasWithRealOccupancy.reduce((sum, c) => sum + c.occupancy, 0) / (canchasWithRealOccupancy.length || 1)) || 0) < 30 ? 'DISPONIBLE' : (Math.round(canchasWithRealOccupancy.reduce((sum, c) => sum + c.occupancy, 0) / (canchasWithRealOccupancy.length || 1)) || 0) < 70 ? 'MODERADO' : 'ALTO' }}</span>
                      </div>
                    </div>
                    <div class="w-full h-5 bg-gray-200 rounded-full overflow-hidden border-2 border-gray-300 shadow-inner">
                      <div 
                        :class="[
                          'h-full rounded-full transition-all duration-1000 ease-out shadow-lg',
                          (Math.round(canchasWithRealOccupancy.reduce((sum, c) => sum + c.occupancy, 0) / (canchasWithRealOccupancy.length || 1)) || 0) > 75 ? 'bg-gradient-to-r from-orange-400 via-orange-500 to-red-500' :
                          (Math.round(canchasWithRealOccupancy.reduce((sum, c) => sum + c.occupancy, 0) / (canchasWithRealOccupancy.length || 1)) || 0) > 50 ? 'bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500' :
                          'bg-gradient-to-r from-ixmi-400 via-ixmi-500 to-ixmi-600'
                        ]"
                        :style="{ width: `${Math.round(canchasWithRealOccupancy.reduce((sum, c) => sum + c.occupancy, 0) / (canchasWithRealOccupancy.length || 1)) || 0}%` }"
                      ></div>
                    </div>
                  </div>
                </div>

                <!-- Stats Cards -->
                <div class="space-y-4">
                  <!-- Canchas Activas -->
                  <div class="bg-ixmi-50 backdrop-blur-lg rounded-2xl border-2 border-ixmi-200 p-6 text-center hover:bg-ixmi-100 hover:border-ixmi-400 transition-all duration-300 shadow-md">
                    <p class="text-ixmi-700 text-sm font-black uppercase tracking-wider mb-2">Canchas Activas</p>
                    <p class="text-5xl font-black text-ixmi-600 drop-shadow-sm">{{ canchasWithRealOccupancy.filter(c => c.active).length }}</p>
                    <p class="text-gray-600 text-sm mt-3 font-bold">de {{ canchasWithRealOccupancy.length }} instalaciones</p>
                  </div>

                  <!-- Alta Ocupación -->
                  <div class="bg-orange-50 backdrop-blur-lg rounded-2xl border-2 border-orange-200 p-6 text-center hover:bg-orange-100 hover:border-orange-400 transition-all duration-300 shadow-md">
                    <p class="text-orange-700 text-sm font-black uppercase tracking-wider mb-2 flex items-center space-x-1">
                      <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                      <span>Alta Ocupación</span>
                    </p>
                    <p class="text-5xl font-black text-orange-600 drop-shadow-sm">{{ canchasWithRealOccupancy.filter(c => c.occupancy > 75).length }}</p>
                    <p class="text-gray-600 text-sm mt-3 font-bold">al 75% o más</p>
                  </div>

                  <!-- Hora Actualización -->
                  <div class="bg-blue-50 backdrop-blur-lg rounded-2xl border-2 border-blue-200 p-6 text-center hover:bg-blue-100 hover:border-blue-400 transition-all duration-300 shadow-md">
                    <p class="text-blue-700 text-sm font-black uppercase tracking-wider mb-2">Actual</p>
                    <p class="text-4xl font-black text-blue-600 drop-shadow-sm">Ahora</p>
                    <p class="text-gray-600 text-sm mt-3 font-bold animate-pulse">En tiempo real</p>
                  </div>
                </div>
              </div>

              <!-- Footer Info -->
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-base border-t-2 border-gray-200 pt-8 bg-gray-50/50 rounded-2xl p-6">
                <div class="flex items-center gap-3 text-gray-900 font-bold">
                  <svg class="w-6 h-6 text-ixmi-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                  <span><strong class="text-ixmi-700 text-lg">{{ canchasWithRealOccupancy.filter(c => c.active && !c.securityLocked).length }}</strong> disponibles</span>
                </div>
                <div class="flex items-center gap-3 text-gray-900 font-bold">
                  <svg class="w-6 h-6 text-amber-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm6 0a1 1 0 100-2 1 1 0 000 2zm-3 4a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                  <span><strong class="text-amber-700 text-lg">{{ blockedSchedules.filter(b => b.date === new Date().toISOString().split('T')[0]).length }}</strong> horarios apartados</span>
                </div>
                <div class="flex items-center gap-3 text-gray-900 font-bold">
                  <svg class="w-6 h-6 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  <span><strong class="text-blue-700 text-lg">{{ reservations.filter(r => r.date === new Date().toISOString().split('T')[0] && r.status === 'approved').length }}</strong> reservas confirmadas</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Gestión de Canchas -->
        <div v-if="activeTab === 'canchas'" class="space-y-8 animate-slide-up">
          <!-- Header with Actions -->
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
            <div>
              <h2 class="text-2xl font-bold text-gray-900">Gestión de Canchas</h2>
              <p class="text-gray-600 mt-1">{{ filteredCanchas.length }} de {{ canchasWithRealOccupancy.length }} instalaciones</p>
            </div>
            <div class="flex space-x-3">
              <button class="px-4 py-2 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-200 font-medium">
                <svg class="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-4-4m4 4l4-4m-6 4V4"></path>
                </svg>
                Exportar
              </button>
              <button 
                @click="showNewCanchaModal = true"
                class="px-6 py-2 bg-ixmi-500 text-white rounded-xl hover:bg-ixmi-600 hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold shadow-md"
              >
                <svg class="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
                Nueva Cancha
              </button>
            </div>
          </div>

          <!-- Search and Filter Bar -->
          <div class="bg-white/80 backdrop-blur-xl rounded-2xl shadow-md border border-gray-200/60 p-5 space-y-4">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <!-- Search Input -->
              <div class="md:col-span-2 relative">
                <input 
                  v-model="canchaSearch"
                  type="text" 
                  placeholder="Buscar por nombre de cancha o deporte..."
                  class="w-full pl-11 pr-4 py-3 border border-gray-300/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-ixmi-500/30 focus:border-ixmi-400 bg-white/80 backdrop-blur-sm transition-all duration-200"
                >
                <svg class="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>

              <!-- Filter Dropdown -->
              <div>
                <select 
                  v-model="canchaFilter"
                  class="w-full px-4 py-3 border border-gray-300/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-ixmi-500/30 focus:border-ixmi-400 bg-white/80 font-medium transition-all duration-200"
                >
                  <option value="all">Todas las canchas</option>
                  <option value="activa">Solo activas</option>
                  <option value="pausada">Solo pausadas</option>
                  <option value="bloqueada">Solo bloqueadas</option>
                  <option value="disponible">Disponibles ahora</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Canchas Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            <div 
              v-for="(cancha, index) in filteredCanchas" 
              :key="cancha.id"
              :class="[
                'group relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border',
                cancha.isBlockedToday ? 'border-red-400 bg-red-50/30' : 'border-gray-100'
              ]"
              :style="{ animationDelay: `${index * 100}ms` }"
            >
              <!-- Overlay bloqueado - Sombreado rojo -->
              <div v-if="cancha.isBlockedToday" class="absolute inset-0 bg-gradient-to-br from-red-500/5 to-red-600/10 pointer-events-none rounded-3xl"></div>
              
              <!-- Security Lock Overlay - Sombreado rojo intenso -->
              <div v-if="cancha.securityLocked" class="absolute inset-0 bg-gradient-to-br from-red-500/20 to-red-600/30 backdrop-blur-sm pointer-events-none rounded-3xl z-10"></div>

              <!-- Indicador visual de bloqueo - BLOQUEADO -->
              <div v-if="cancha.isBlockedToday" class="absolute top-3 right-3 z-20 flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full text-xs font-bold shadow-lg">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1a11 11 0 110 22 11 11 0 010-22m0 2a9 9 0 100 18 9 9 0 000-18m3.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0m-8 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0m4-5.5a1 1 0 11-2 0 1 1 0 012 0z"/>
                </svg>
                <i class="fa-solid fa-lock mr-2"></i>BLOQUEADA
              </div>
              
              <!-- Security Lock Indicator -->
              <div v-if="cancha.securityLocked" class="absolute top-3 left-3 z-20 flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full text-xs font-bold shadow-2xl animate-pulse border border-red-400">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v7c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 2.18L19 6.3v6.7c0 4.42-2.92 8.43-7 9.62-4.08-1.19-7-5.2-7-9.62V6.3l7-3.12zm-1 5.82v4h2v-4h-2zm0-4v2h2V5h-2z"/>
                </svg>
                <i class="fa-solid fa-lock-open mr-2"></i>BLOQUEADA POR SEGURIDAD
              </div>

              <!-- Header Section with Sport Icon & Status -->
              <div :class="['relative pt-6 pb-8 px-6', getSportStyles(cancha.sport).lightAccent]">
                <div class="flex items-start justify-between mb-4">
                  <!-- Sport Icon Badge -->
                  <div :class="['w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300', getSportStyles(cancha.sport).accentColor]">
                    <!-- Soccer Ball / Fútbol ⚽ -->
                    <svg v-if="cancha.sport === 'futbol'" class="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="0.5"/>
                      <path d="M12 2a10 10 0 110 20 10 10 0 010-20zm7.07 7.07a1 1 0 000-1.41l-4.24-4.24a1 1 0 00-1.41 0l-1.41 1.41-4.24-4.24a1 1 0 00-1.41 0l-4.24 4.24a1 1 0 000 1.41l1.41 1.41-1.41 1.41a1 1 0 000 1.41l4.24 4.24a1 1 0 001.41 0l1.41-1.41 4.24 4.24a1 1 0 001.41 0l4.24-4.24a1 1 0 000-1.41l-1.41-1.41 1.41-1.41z"/>
                    </svg>
                    <!-- Basketball 🏀 -->
                    <svg v-else-if="cancha.sport === 'basquetbol'" class="w-8 h-8 text-white" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="3">
                      <circle cx="50" cy="50" r="45"/>
                      <line x1="50" y1="5" x2="50" y2="95"/>
                      <line x1="5" y1="50" x2="95" y2="50"/>
                      <path d="M 30 30 Q 50 50 70 30" fill="none"/>
                      <path d="M 30 70 Q 50 50 70 70" fill="none"/>
                    </svg>
                    <!-- Tennis Racket 🎾 -->
                    <svg v-else-if="cancha.sport === 'tenis'" class="w-8 h-8 text-white" viewBox="0 0 100 100" fill="currentColor">
                      <circle cx="35" cy="30" r="28" fill="none" stroke="currentColor" stroke-width="2.5"/>
                      <rect x="32" y="58" width="6" height="35" rx="3"/>
                      <circle cx="50" cy="20" r="3" fill="currentColor"/>
                    </svg>
                    <!-- Volleyball 🏐 -->
                    <svg v-else-if="cancha.sport === 'voleibol'" class="w-8 h-8 text-white" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2.5">
                      <circle cx="50" cy="50" r="45"/>
                      <path d="M 50 5 Q 60 30 50 50 Q 40 30 50 5"/>
                      <path d="M 50 50 Q 60 70 50 95 Q 40 70 50 50"/>
                      <line x1="25" y1="30" x2="75" y2="70"/>
                      <line x1="75" y1="30" x2="25" y2="70"/>
                    </svg>
                    <!-- Paddle / Pádel -->
                    <svg v-else-if="cancha.sport === 'padel'" class="w-8 h-8 text-white" viewBox="0 0 100 100" fill="currentColor">
                      <circle cx="40" cy="30" r="22" stroke="currentColor" fill="none" stroke-width="2.5"/>
                      <rect x="37" y="52" width="6" height="40" rx="3" fill="currentColor"/>
                      <circle cx="50" cy="22" r="2.5" fill="currentColor"/>
                    </svg>
                    <!-- Default -->
                    <svg v-else class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>

                  <!-- Status Badge - Mejorado -->
                  <div>
                    <span :class="[
                      'inline-flex items-center px-4 py-2.5 rounded-full text-xs font-bold text-white shadow-lg',
                      cancha.active 
                        ? 'bg-gradient-to-r from-green-400 via-green-500 to-emerald-500 animate-pulse' 
                        : 'bg-gradient-to-r from-red-500 via-red-600 to-red-700'
                    ]"
                    >
                      <span class="mr-2 text-base"><i :class="[cancha.active ? 'fa-solid fa-circle-play text-green-600' : 'fa-solid fa-circle-pause text-red-600']"></i></span>
                      {{ cancha.active ? 'ACTIVA' : 'PAUSADA' }}
                    </span>
                  </div>
                </div>

                <!-- Title & Type -->
                <div>
                  <h3 :class="['text-2xl font-black leading-tight', getSportStyles(cancha.sport).textColor]">{{ cancha.name }}</h3>
                  <p class="text-sm font-semibold text-gray-600 mt-1 uppercase tracking-wide">{{ cancha.type }} • {{ cancha.sport.toUpperCase() }}</p>
                </div>
              </div>

              <!-- Content Section -->
              <div class="px-6 py-8">
                <!-- Big Stats Section -->
                <div class="mb-8">
                  <div class="grid grid-cols-2 gap-5">
                    <!-- Capacity Card -->
                    <div :class="['p-5 rounded-2xl backdrop-blur-sm border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1', getSportStyles(cancha.sport).borderColor, 'bg-gradient-to-br from-white to-gray-50/50']">
                      <p class="text-xs font-bold uppercase tracking-widest text-gray-600 mb-2">Capacidad</p>
                      <p :class="['text-4xl font-black', getSportStyles(cancha.sport).textColor]">{{ cancha.capacity }}</p>
                      <p class="text-xs text-gray-500 mt-1 font-semibold">personas</p>
                    </div>

                    <!-- Availabilty Card (Only) -->
                    <div :class="['p-5 rounded-2xl backdrop-blur-sm border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1', 
                      (100 - cancha.occupancy) < 20 ? 'border-red-300 from-red-50 to-orange-50' : 
                      (100 - cancha.occupancy) < 50 ? 'border-yellow-300 from-yellow-50 to-amber-50' : 
                      'border-green-300 from-green-50 to-emerald-50',
                      'bg-gradient-to-br'
                    ]">
                      <p class="text-xs font-bold uppercase tracking-widest text-gray-600 mb-2">Disponibilidad</p>
                      <div class="flex items-baseline gap-1">
                        <p :class="[
                          'text-4xl font-black',
                          (100 - cancha.occupancy) < 20 ? 'text-red-600' :
                          (100 - cancha.occupancy) < 50 ? 'text-amber-600' :
                          'text-green-600'
                        ]">{{ 100 - cancha.occupancy }}</p>
                        <p class="text-lg font-bold text-gray-500">%</p>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Progress Bar Section -->
                <div class="mb-8">
                  <div class="flex items-center justify-between mb-3">
                    <p class="text-xs font-bold uppercase tracking-widest text-gray-600">Ocupación en Tiempo Real</p>
                    <span :class="['text-sm font-bold px-3 py-1 rounded-full', 
                      cancha.occupancy <= 0 ? 'bg-green-100 text-green-700' :
                      cancha.occupancy < 50 ? 'bg-green-100 text-green-700' :
                      cancha.occupancy < 80 ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    ]">{{ cancha.occupancy }}%</span>
                  </div>
                  <div class="h-4 bg-gray-300 rounded-full overflow-hidden shadow-inner">
                    <div 
                      :class="[
                        'h-full rounded-full transition-all duration-1000 ease-out',
                        cancha.occupancy > 80 ? 'bg-gradient-to-r from-red-400 to-red-500' :
                        cancha.occupancy > 50 ? 'bg-gradient-to-r from-amber-400 to-amber-500' :
                        'bg-gradient-to-r from-green-400 to-emerald-500'
                      ]"
                      :style="{ width: `${cancha.occupancy}%` }"
                    ></div>
                  </div>
                  <div class="flex justify-between text-xs text-gray-500 font-semibold mt-2">
                    <span>0%</span>
                    <span>50%</span>
                    <span>100%</span>
                  </div>
                </div>

                <!-- Upcoming Reservations Info -->
                <div class="mb-8 bg-white rounded-2xl border border-ixmi-200/50 p-4 space-y-3">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-2">
                      <svg class="h-4 w-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                      <p class="text-xs font-bold uppercase tracking-widest text-gray-600">Próximas Reservas Hoy</p>
                    </div>
                    <span class="bg-ixmi-100 text-ixmi-700 px-3 py-1 rounded-full text-xs font-bold">
                      {{ reservations.filter(r => String(r.courtId) === String(cancha.id) && r.date === new Date().toISOString().split('T')[0]).length }}
                    </span>
                  </div>
                  <div v-if="reservations.filter(r => String(r.courtId) === String(cancha.id) && r.date === new Date().toISOString().split('T')[0] && r.status === 'approved').length > 0" class="space-y-2">
                    <div v-for="(res, i) in reservations.filter(r => String(r.courtId) === String(cancha.id) && r.date === new Date().toISOString().split('T')[0] && r.status === 'approved').slice(0, 2)" :key="i" class="flex items-center justify-between text-xs bg-gradient-to-r from-ixmi-50 to-white p-2 rounded-lg border border-ixmi-100/50">
                      <div>
                        <span class="font-semibold text-gray-900">{{ res.startTime }}</span>
                        <span class="text-gray-500 mx-1">→</span>
                        <span class="font-semibold text-gray-900">{{ res.endTime }}</span>
                      </div>
                      <span class="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-bold">Confirmada</span>
                    </div>
                  </div>
                  <div v-else class="text-center py-2">
                    <div class="flex items-center justify-center space-x-2">
                      <svg class="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <p class="text-xs text-gray-500 font-medium">Sin reservas confirmadas</p>
                    </div>
                  </div>
                </div>

                <!-- Blocked Schedules Info -->
                <div class="mb-8 bg-gradient-to-br from-red-50 to-orange-50/30 rounded-2xl border border-red-200/50 p-4 space-y-3">
                  <div class="flex items-center justify-between">
                    <p class="text-xs font-bold uppercase tracking-widest text-red-700">� Horarios Apartados</p>
                    <span :class="['px-3 py-1 rounded-full text-xs font-bold', blockedSchedules.filter(b => String(b.courtId) === String(cancha.id)).length > 0 ? 'bg-red-200 text-red-800' : 'bg-green-100 text-green-700']">
                      {{ blockedSchedules.filter(b => String(b.courtId) === String(cancha.id)).length }}
                    </span>
                  </div>
                  <div v-if="blockedSchedules.filter(b => String(b.courtId) === String(cancha.id)).length > 0" class="space-y-2">
                    <div v-for="(block, i) in blockedSchedules.filter(b => String(b.courtId) === String(cancha.id)).slice(0, 3)" :key="i" class="flex items-center justify-between text-xs bg-white/60 p-2 rounded-lg border border-red-200/50">
                      <div>
                        <span class="font-semibold text-gray-900">{{ block.date }}</span>
                        <span class="text-gray-500 mx-1">•</span>
                        <span class="font-semibold text-red-700">{{ block.startTime }}-{{ block.endTime }}</span>
                      </div>
                      <span class="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-bold">Apartado</span>
                    </div>
                  </div>
                  <div v-else class="text-center py-2">
                    <div class="flex items-center justify-center space-x-2">
                      <svg class="h-4 w-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <p class="text-xs text-gray-500 font-medium">Sin bloqueos programados</p>
                    </div>
                  </div>
                </div>

                <!-- Action Buttons - Mejorados -->
                <div class="space-y-3 relative z-40">
                  <!-- Toggle Button - Full Width - Security Lock -->
                  <button 
                    @click="toggleSecurityLock(cancha)"
                    :class="[
                      'w-full py-4 px-4 text-sm font-bold rounded-xl transition-all duration-300 uppercase tracking-widest text-white flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 relative',
                      cancha.securityLocked
                        ? 'bg-gradient-to-r from-red-600 via-red-700 to-red-800 hover:from-red-700 hover:via-red-800 hover:to-red-900 border border-red-400 animate-pulse' 
                        : 'bg-gradient-to-r from-green-400 via-green-500 to-emerald-500 hover:from-green-500 hover:via-green-600 hover:to-emerald-600 border border-green-300'
                    ]"
                    title="Bloquear/Desbloquear cancha por seguridad"
                  >
                    <span class="text-xl"><i :class="[cancha.securityLocked ? 'fa-solid fa-lock text-red-600' : 'fa-solid fa-lock-open text-green-600']"></i></span>
                    <span class="font-extrabold flex items-center space-x-1">
                  <svg v-if="cancha.securityLocked" class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <svg v-else class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                  <span>{{ cancha.securityLocked ? 'DESBLOQUEAR' : 'BLOQUEAR SEGURIDAD' }}</span>
                </span>
                  </button>

                  <!-- Secondary Buttons Grid - Solo visible si NO está bloqueada -->
                  <div v-if="!cancha.securityLocked" class="grid grid-cols-2 gap-2 relative z-40">
                    <button 
                      @click="editCancha(cancha)"
                      :class="[
                        'py-3 px-3 text-xs font-bold rounded-xl transition-all duration-200 uppercase tracking-wide border-2 hover:shadow-md hover:scale-105',
                        getSportStyles(cancha.sport).textColor,
                        getSportStyles(cancha.sport).borderColor,
                        'bg-white hover:bg-gradient-to-br hover:from-white hover:to-gray-50'
                      ]"
                      title="Editar cancha"
                    >
                      <svg class="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                      </svg>
                      Editar
                    </button>
                    <button 
                      @click="showBlockCanchaModal = true; blockCanchaForm.courtId = String(cancha.id)"
                      class="py-3 px-3 text-xs font-bold rounded-xl transition-all duration-200 uppercase tracking-wide border-2 border-orange-300 bg-white hover:shadow-md hover:scale-105 text-orange-600 hover:bg-gradient-to-br hover:from-white hover:to-orange-50/50"
                      title="Bloquear cancha"
                    >
                      <svg class="w-4 h-4 inline mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 1a11 11 0 110 22 11 11 0 010-22zm0 2a9 9 0 100 18 9 9 0 000-18zm3.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-8 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm4-5.5a1 1 0 11-2 0 1 1 0 012 0z"/>
                      </svg>
                      Bloquear
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Gestión de Usuarios -->
        <div v-if="activeTab === 'usuarios'" class="space-y-8 animate-slide-up">
          <!-- Estadísticas de Usuarios -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- Total Usuarios -->
            <div class="bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-2xl p-6 border-2 border-blue-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-gray-600 text-sm font-semibold uppercase tracking-wide">Total Usuarios</p>
                  <p class="text-4xl font-black text-blue-600 mt-3">{{ users.length }}</p>
                  <p class="text-xs text-gray-500 mt-2">En el sistema</p>
                </div>
                <div class="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                  <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-2a6 6 0 0112 0v2zm0 0h6v-2a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                </div>
              </div>
            </div>

            <!-- Usuarios Activos -->
            <div class="bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-2xl p-6 border-2 border-green-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-gray-600 text-sm font-semibold uppercase tracking-wide">Usuarios Activos</p>
                  <p class="text-4xl font-black text-green-600 mt-3">{{ activeUsersCount }}</p>
                  <p class="text-xs text-green-600 mt-2">{{ activeUsersPercentage }}% del total</p>
                </div>
                <div class="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                  <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m7 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
              </div>
            </div>

            <!-- Reservaciones Totales -->
            <div class="bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-2xl p-6 border-2 border-purple-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-gray-600 text-sm font-semibold uppercase tracking-wide">Reservaciones</p>
                  <p class="text-4xl font-black text-purple-600 mt-3">{{ totalReservationsCount }}</p>
                  <p class="text-xs text-purple-600 mt-2">{{ avgReservationsPerUser }}/usuario</p>
                </div>
                <div class="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                  <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
              </div>
            </div>

            <!-- Nuevos Este Mes -->
            <div class="bg-gradient-to-br from-orange-500/10 to-orange-600/10 rounded-2xl p-6 border-2 border-orange-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-gray-600 text-sm font-semibold uppercase tracking-wide">Nuevos Este Mes</p>
                  <p class="text-4xl font-black text-orange-600 mt-3">{{ newUsersThisMonth }}</p>
                  <p class="text-xs text-orange-600 mt-2">Últimos 30 días</p>
                </div>
                <div class="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                  <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Header with Search and Filters -->
          <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            <div>
              <h2 class="text-2xl font-bold text-gray-900">Lista de Usuarios</h2>
              <p class="text-gray-600 mt-1">{{ filteredUsers.length }} usuarios encontrados</p>
            </div>
            <div class="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
              <div class="relative flex-1 sm:flex-none">
                <input 
                  v-model="userSearch"
                  type="text" 
                  placeholder="Buscar por nombre, email o teléfono..."
                  class="pl-10 pr-4 py-3 w-full sm:w-80 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-ixmi-500/30 focus:border-ixmi-500 bg-white/90 backdrop-blur-sm font-medium transition-all duration-300"
                >
                <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
              <button 
                @click="refreshAllData"
                class="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-ixmi-500 to-ixmi-600 text-white font-bold rounded-xl hover:shadow-lg hover:from-ixmi-600 hover:to-ixmi-700 transition-all duration-300 uppercase tracking-wider text-sm"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                </svg>
                Refrescar
              </button>
            </div>
          </div>

          <!-- Users Grid/Table -->
          <div class="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-gray-200/60 overflow-hidden">
            <div v-if="filteredUsers.length > 0" class="overflow-x-auto">
              <table class="w-full">
                <thead>
                  <tr class="bg-gradient-to-r from-ixmi-50 to-ixmi-50/50 border-b-2 border-ixmi-200">
                    <th class="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Usuario</th>
                    <th class="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Contacto</th>
                    <th class="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Registro</th>
                    <th class="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Actividad</th>
                    <th class="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Estado</th>
                    <th class="px-6 py-4 text-right text-xs font-bold text-gray-700 uppercase tracking-wider">Acciones</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200/60">
                  <tr 
                    v-for="(user, index) in filteredUsers" 
                    :key="user.id"
                    class="group hover:bg-ixmi-50/50 transition-all duration-200 border-l-4 border-transparent hover:border-ixmi-500"
                    :style="{ animationDelay: `${index * 50}ms` }"
                  >
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center space-x-4">
                        <div class="relative">
                          <div class="w-12 h-12 bg-gradient-to-br from-ixmi-400 to-ixmi-600 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-200 text-white font-bold text-sm">
                            {{ user.name.charAt(0).toUpperCase() }}
                          </div>
                          <div v-if="user.active" class="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
                        </div>
                        <div>
                          <div class="text-sm font-bold text-gray-900 group-hover:text-ixmi-600 transition-colors duration-200">{{ user.name }}</div>
                          <div class="text-xs text-gray-500">{{ user.email.split('@')[0] }}</div>
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900 font-medium">{{ user.email }}</div>
                      <div class="text-xs text-gray-500">{{ user.phone || '—' }}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm">
                      <div class="font-semibold text-gray-900">{{ user.createdAt }}</div>
                      <div class="text-xs text-gray-500">Hace {{ calculateDaysAgo(user.createdAt) }} días</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center gap-2">
                        <div class="w-8 h-8 bg-gradient-to-br from-ixmi-100 to-ixmi-200 rounded-lg flex items-center justify-center">
                          <i class="fa-solid fa-calendar-check text-ixmi-600 text-sm"></i>
                        </div>
                        <div>
                          <div class="text-sm font-bold text-gray-900">{{ user.reservations || 0 }}</div>
                          <div class="text-xs text-gray-500">reservas</div>
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span :class="[
                        'inline-flex items-center px-4 py-2 rounded-full text-xs font-bold transition-all duration-200',
                        user.active 
                          ? 'bg-green-100 text-green-800 border border-green-300 shadow-sm' 
                          : 'bg-red-100 text-red-800 border border-red-300 shadow-sm'
                      ]">
                        <span :class="['w-2 h-2 rounded-full mr-2', user.active ? 'bg-green-500 animate-pulse' : 'bg-red-500']"></span>
                        {{ user.active ? 'Activo' : 'Inactivo' }}
                      </span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-right">
                      <div class="flex items-center justify-end space-x-2">
                        <button 
                          @click="viewUserDetail(user)"
                          class="p-2.5 text-ixmi-600 hover:text-ixmi-800 hover:bg-ixmi-100 rounded-lg transition-all duration-200 hover:scale-110"
                          title="Ver detalles"
                        >
                          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                          </svg>
                        </button>
                        <button 
                          @click="toggleUserStatus(user)"
                          :class="[
                            'p-2.5 rounded-lg transition-all duration-200 hover:scale-110',
                            user.active 
                              ? 'text-red-600 hover:text-red-800 hover:bg-red-100' 
                              : 'text-green-600 hover:text-green-800 hover:bg-green-100'
                          ]"
                          :title="user.active ? 'Desactivar usuario' : 'Activar usuario'"
                        >
                          <svg v-if="user.active" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                          <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                        </button>
                        <button 
                          @click="deleteUser(user.id)"
                          class="p-2.5 text-red-600 hover:text-red-800 hover:bg-red-100 rounded-lg transition-all duration-200 hover:scale-110"
                          title="Eliminar usuario"
                        >
                          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3H4v2h16V7h-3.5z"></path>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div v-else class="p-12 text-center">
              <svg class="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-2a6 6 0 0112 0v2zm0 0h6v-2a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
              <p class="text-gray-500 text-lg font-semibold">No se encontraron usuarios</p>
              <p class="text-gray-400 text-sm mt-2">Intenta ajustar tu búsqueda</p>
            </div>
          </div>
        </div>

        <!-- Gestión de Reservaciones -->
        <div v-if="activeTab === 'reservaciones'" class="space-y-8 animate-slide-up">
          <!-- Banner Informativo -->
          <div class="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-3xl p-8 shadow-xl border-2 border-blue-400 text-white">
            <div class="flex items-start gap-4">
              <div class="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1">
                <i class="fa-solid fa-circle-info text-2xl"></i>
              </div>
              <div>
                <h3 class="text-2xl font-bold mb-2"><i class="fa-solid fa-list-check text-ixmi-600 mr-2"></i>Cómo Aprobar Reservaciones</h3>
                <p class="text-blue-50 mb-3 text-lg">
                  <strong>1.</strong> Mira las reservaciones <span class="bg-yellow-500/30 px-3 py-1 rounded-lg font-bold">PENDIENTES</span> que aparecen abajo en las tarjetas.
                </p>
                <p class="text-blue-50 mb-3 text-lg">
                  <strong>2.</strong> Haz clic en <span class="bg-white/20 px-3 py-1 rounded-lg font-bold">"Ver Detalle"</span> o usa los botones de <span class="bg-green-500/30 px-3 py-1 rounded-lg font-bold">Aprobar</span> / <span class="bg-red-500/30 px-3 py-1 rounded-lg font-bold">Rechazar</span>
                </p>
                <p class="text-blue-50 text-lg">
                  <strong>3.</strong> El estado se actualizará automáticamente en Firebase y el usuario será notificado.
                </p>
              </div>
            </div>
          </div>

          <!-- Court Filter (applies to both sections) -->
          <div class="flex flex-col space-y-3 sticky top-0 z-10 bg-white/95 backdrop-blur-sm p-4 rounded-2xl border border-gray-200/60">
            <label class="text-sm font-bold text-gray-800">Filtrar por Cancha</label>
            <div class="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-3">
              <select 
                v-model="selectedReservationCourt"
                class="flex-1 px-4 py-3 border border-gray-300/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-ixmi-500/20 focus:border-ixmi-400 bg-white/80 font-medium text-gray-900"
              >
                <option value="">Todas las canchas</option>
                <option v-for="court in canchas" :key="court.id" :value="court.id">
                  {{ court.name }} ({{ court.sport }})
                </option>
              </select>
              <button 
                v-if="selectedReservationCourt !== ''"
                @click="selectedReservationCourt = ''"
                class="px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl transition-all duration-200 text-sm font-medium whitespace-nowrap"
              >
                Limpiar Filtro
              </button>
            </div>
          </div>

          <!-- SECCIÓN 1: SOLICITUDES PENDIENTES -->
          <div class="space-y-6">
            <div>
              <div class="flex items-center space-x-3 mb-6">
                <div class="w-10 h-10 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-xl flex items-center justify-center text-white text-lg shadow-lg">
                  <i class="fa-solid fa-bell text-yellow-500"></i>
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-gray-900">Solicitudes Pendientes</h3>
                  <p class="text-sm text-gray-600 mt-1">Reservaciones que requieren tu aprobación o rechazo</p>
                </div>
              </div>

              <!-- Pending Reservations Grid -->
              <div v-if="pendingReservations.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <!-- Pending Reservations Grid -->
              <div v-if="pendingReservations.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div 
                  v-for="(reservation, index) in pendingReservations" 
                  :key="reservation.id"
                  class="rounded-2xl p-6 shadow-lg border-2 bg-gradient-to-br from-yellow-50 to-amber-50 border-yellow-400 ring-2 ring-yellow-300/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                  :style="{ animationDelay: `${index * 50}ms` }"
                >
                  <div class="flex flex-col space-y-4">
                    <!-- Status Badge -->
                    <div class="flex items-center justify-between">
                      <span class="px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-2 bg-yellow-500 text-white animate-pulse">
                        <i class="fa-solid fa-hourglass-end"></i>
                        PENDIENTE
                      </span>
                      <span class="text-2xl font-bold text-yellow-600">{{ index + 1 }}</span>
                    </div>

                    <!-- Reservation Info -->
                    <div>
                      <div class="flex items-center space-x-4 mb-4">
                        <div class="w-12 h-12 rounded-xl flex items-center justify-center shadow-md flex-shrink-0 text-white font-bold bg-yellow-500">
                          <i class="fa-solid fa-calendar-alt"></i>
                        </div>
                        <div class="min-w-0 flex-1">
                          <h3 class="text-lg font-bold text-gray-900 truncate">{{ reservation.courtName }}</h3>
                          <p class="text-xs text-gray-600">{{ reservation.userName }}</p>
                        </div>
                      </div>
                      
                      <div class="space-y-2 text-sm bg-white/60 rounded-xl p-3">
                        <div class="flex items-center space-x-2">
                          <i class="fa-solid fa-calendar text-yellow-600 w-4"></i>
                          <span class="text-gray-700 font-medium">{{ reservation.date }}</span>
                        </div>
                        <div class="flex items-center space-x-2">
                          <i class="fa-solid fa-clock text-yellow-600 w-4"></i>
                          <span class="text-gray-700 font-medium">{{ reservation.time }}</span>
                        </div>
                        <div class="flex items-center space-x-2">
                          <i class="fa-solid fa-users text-yellow-600 w-4"></i>
                          <span class="text-gray-700 font-medium">{{ reservation.people || 'N/A' }} personas</span>
                        </div>
                      </div>
                    </div>

                    <!-- Action Buttons -->
                    <div class="flex flex-col space-y-2 pt-4 border-t-2 border-yellow-200">
                      <div class="flex gap-2">
                        <button 
                          @click="approveReservation(reservation)"
                          class="flex-1 px-3 py-2.5 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-lg transition-all duration-200 text-sm font-bold shadow-md hover:shadow-lg hover:scale-105 flex items-center justify-center gap-1"
                        >
                          <i class="fa-solid fa-check"></i>
                          Aprobar
                        </button>
                        <button 
                          @click="rejectReservation(reservation)"
                          class="flex-1 px-3 py-2.5 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-lg transition-all duration-200 text-sm font-bold shadow-md hover:shadow-lg hover:scale-105 flex items-center justify-center gap-1"
                        >
                          <i class="fa-solid fa-ban"></i>
                          Rechazar
                        </button>
                      </div>

                      <!-- Botón Ver Detalle -->
                      <button 
                        @click="viewReservationDetail(reservation)"
                        class="w-full px-4 py-3 border-2 border-yellow-400 text-yellow-700 hover:bg-yellow-100 hover:border-yellow-600 rounded-lg transition-all duration-200 text-sm font-bold shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                      >
                        <i class="fa-solid fa-eye"></i>
                        Ver Detalle
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Empty State for Pending -->
              <div v-else class="col-span-full">
                <div class="text-center py-12 px-4">
                  <svg class="w-16 h-16 text-green-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <p class="text-gray-400 font-medium text-lg">¡Excelente! No hay solicitudes pendientes</p>
                  <p class="text-gray-400 text-sm mt-1">Todas las reservaciones han sido gestionadas</p>
                </div>
              </div>
            </div>
          </div>

          <!-- SECCIÓN 2: HISTORIAL DE RESERVACIONES -->
          <div class="space-y-6 mt-12">
            <div>
              <div class="flex items-center space-x-3 mb-6">
                <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center text-white text-lg shadow-lg">
                  <i class="fa-solid fa-chart-bar text-green-600"></i>
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-gray-900">Historial de Reservaciones</h3>
                  <p class="text-sm text-gray-600 mt-1">Reservaciones aprobadas, rechazadas y completadas</p>
                </div>
              </div>

              <!-- Approved & Rejected Reservations Grid -->
              <div v-if="gestionedReservations.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div 
                  v-for="(reservation, index) in gestionedReservations" 
                  :key="reservation.id"
                  :class="[
                    'rounded-2xl p-6 shadow-lg border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1',
                    reservation.status === 'approved'
                    ? 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-300' 
                    : reservation.status === 'rejected'
                    ? 'bg-gradient-to-br from-red-50 to-orange-50 border-red-300'
                    : 'bg-white/80 backdrop-blur-xl border-gray-200/60'
                  ]"
                  :style="{ animationDelay: `${index * 50}ms` }"
                >
                  <div class="flex flex-col space-y-4">
                    <!-- Status Badge -->
                    <div class="flex items-center justify-between">
                      <span :class="[
                        'px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-2',
                        reservation.status === 'approved'
                        ? 'bg-green-500 text-white' 
                        : reservation.status === 'rejected'
                        ? 'bg-red-500 text-white'
                        : 'bg-gray-500 text-white'
                      ]">
                        <i v-if="reservation.status === 'approved'" class="fa-solid fa-check-circle"></i>
                        <i v-else-if="reservation.status === 'rejected'" class="fa-solid fa-ban"></i>
                        <i v-else class="fa-solid fa-xmark-circle"></i>
                        {{ reservation.status === 'approved' ? 'APROBADA' :
                           reservation.status === 'rejected' ? 'RECHAZADA' :
                           'CANCELADA' }}
                      </span>
                    </div>

                    <!-- Reservation Info -->
                    <div>
                      <div class="flex items-center space-x-4 mb-4">
                        <div :class="[
                          'w-12 h-12 rounded-xl flex items-center justify-center shadow-md flex-shrink-0 text-white font-bold',
                          reservation.status === 'approved' ? 'bg-green-500' :
                          reservation.status === 'rejected' ? 'bg-red-500' :
                          'bg-ixmi-500'
                        ]">
                          <i class="fa-solid fa-ring text-white"></i>
                        </div>
                        <div class="min-w-0 flex-1">
                          <h3 class="text-lg font-bold text-gray-900 truncate">{{ reservation.courtName }}</h3>
                          <p class="text-xs text-gray-600">{{ reservation.userName }}</p>
                        </div>
                      </div>
                      
                      <div class="space-y-2 text-sm bg-white/60 rounded-xl p-3">
                        <div class="flex items-center space-x-2">
                          <i :class="[
                            'fa-solid fa-calendar w-4',
                            reservation.status === 'approved' ? 'text-green-600' :
                            reservation.status === 'rejected' ? 'text-red-600' :
                            'text-ixmi-600'
                          ]"></i>
                          <span class="text-gray-700 font-medium">{{ reservation.date }}</span>
                        </div>
                        <div class="flex items-center space-x-2">
                          <i :class="[
                            'fa-solid fa-clock w-4',
                            reservation.status === 'approved' ? 'text-green-600' :
                            reservation.status === 'rejected' ? 'text-red-600' :
                            'text-ixmi-600'
                          ]"></i>
                          <span class="text-gray-700 font-medium">{{ reservation.time }}</span>
                        </div>
                        <div class="flex items-center space-x-2">
                          <i :class="[
                            'fa-solid fa-users w-4',
                            reservation.status === 'approved' ? 'text-green-600' :
                            reservation.status === 'rejected' ? 'text-red-600' :
                            'text-ixmi-600'
                          ]"></i>
                          <span class="text-gray-700 font-medium">{{ reservation.people || 'N/A' }} personas</span>
                        </div>
                      </div>
                    </div>

                    <!-- Action Buttons -->
                    <button 
                      @click="viewReservationDetail(reservation)"
                      class="w-full px-4 py-3 border-2 border-blue-400 text-blue-700 hover:bg-blue-100 hover:border-blue-600 rounded-lg transition-all duration-200 text-sm font-bold shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                    >
                      <i class="fa-solid fa-eye"></i>
                      Ver Detalle
                    </button>
                  </div>
                </div>
              </div>

              <!-- Empty State for History -->
              <div v-else class="col-span-full">
                <div class="text-center py-12 px-4">
                  <svg class="w-16 h-16 text-blue-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path>
                  </svg>
                  <p class="text-gray-400 font-medium text-lg">Sin historial de reservaciones</p>
                  <p class="text-gray-400 text-sm mt-1">Las reservaciones gestionadas aparecerán aquí</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

        <!-- Gestión de Horarios Apartados -->
        <div v-if="activeTab === 'horarios'" class="space-y-8 animate-slide-up">
          <!-- Header -->
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
            <div>
              <h2 class="text-3xl font-black text-gray-900">Gestión de Horarios</h2>
              <p class="text-gray-600 mt-2 text-lg">Aparta horarios específicos para mantenimiento, eventos o reservas especiales</p>
            </div>
            <button 
              @click="showBlockCanchaModal = true; blockCanchaForm.courtId = ''; blockCanchaForm.date = ''; blockCanchaForm.startTime = ''; blockCanchaForm.endTime = ''; blockCanchaForm.reason = ''; blockCanchaForm.apartadoType = ''"
              class="px-8 py-4 bg-gradient-to-r from-ixmi-400 via-ixmi-500 to-ixmi-600 text-white rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-bold shadow-lg flex items-center gap-3 uppercase tracking-widest"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
              <i class="fa-solid fa-calendar-plus text-ixmi-600 mr-2"></i>Apartar Horario
            </button>
          </div>

          <!-- Info Card - Mejorado -->
          <div class="bg-gradient-to-br from-ixmi-50 via-blue-50 to-ixmi-100 border-2 border-ixmi-200 rounded-3xl p-8 shadow-lg">
            <div class="flex items-start gap-6">
              <div class="w-16 h-16 bg-gradient-to-br from-ixmi-200 to-ixmi-300 rounded-2xl flex items-center justify-center shrink-0 shadow-md">
                <svg class="w-8 h-8 text-ixmi-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h3 class="font-black text-ixmi-900 mb-2 text-lg"><i class="fa-solid fa-circle-info text-ixmi-600 mr-2"></i>Información Importante</h3>
                <p class="text-ixmi-900 text-base leading-relaxed">
                  Los horarios apartados <strong>NO estarán disponibles</strong> para reservaciones públicas. 
                  <strong>Horario de operación:</strong> 5:00 AM - 10:00 PM. 
                  Utiliza esta función para mantenimiento, eventos privados o reservas especiales.
                </p>
              </div>
            </div>
          </div>

          <!-- Blocked Schedules List -->
          <div>
            <div class="mb-6">
              <div class="flex items-center justify-between">
                <div>
                  <h3 class="text-2xl font-black text-gray-900 flex items-center space-x-2">
                <svg class="h-7 w-7 text-ixmi-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <span>Horarios Apartados Activos</span>
              </h3>
                  <p :class="['text-sm mt-1 font-semibold', blockedSchedules.length > 0 ? 'text-ixmi-600' : 'text-gray-500']">
                    {{ blockedSchedules.length }} {{ blockedSchedules.length === 1 ? 'horario apartado' : 'horarios apartados' }}
                  </p>
                </div>
                <div :class="['w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-black', blockedSchedules.length > 0 ? 'bg-ixmi-100 text-ixmi-600' : 'bg-gray-100 text-gray-600']">
                  {{ blockedSchedules.length }}
                </div>
              </div>
            </div>
            
            <div v-if="blockedSchedules.length === 0" class="p-16 text-center bg-gradient-to-b from-gray-50 to-white rounded-3xl border-2 border-dashed border-gray-300">
              <div class="w-20 h-20 bg-gray-200 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <svg class="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
              <p class="text-gray-600 font-bold text-lg">No hay horarios apartados</p>
              <p class="text-gray-500 text-base mt-2">Agrega un apartado para reservar horarios especiales</p>
              <button 
                @click="showBlockCanchaModal = true; blockCanchaForm.courtId = ''; blockCanchaForm.date = ''; blockCanchaForm.startTime = ''; blockCanchaForm.endTime = ''; blockCanchaForm.reason = ''; blockCanchaForm.apartadoType = ''"
                class="mt-6 px-6 py-3 bg-ixmi-500 text-white rounded-xl hover:bg-ixmi-600 transition-all duration-200 font-bold"
              >
                Crear primer apartado
              </button>
            </div>

            <div v-else class="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div 
                v-for="(schedule, index) in blockedSchedules" 
                :key="schedule.id"
                class="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 overflow-hidden"
                :style="{ animationDelay: `${index * 100}ms` }"
              >
                <!-- Top Status Bar -->
                <div class="h-2 bg-gradient-to-r from-ixmi-500 to-ixmi-600"></div>

                <!-- Content -->
                <div class="p-6">
                  <!-- Header -->
                  <div class="flex items-start gap-4 mb-6">
                    <div class="w-14 h-14 bg-gradient-to-br from-ixmi-100 to-ixmi-200 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                      <svg class="w-7 h-7 text-ixmi-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
                      </svg>
                    </div>
                    <div class="flex-1">
                      <h4 class="text-xl font-black text-gray-900">{{ schedule.courtName }}</h4>
                      <span class="inline-block px-3 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-full mt-2 uppercase tracking-widest">� APARTADO</span>
                    </div>
                  </div>

                  <!-- Details Grid -->
                  <div class="space-y-4 mb-6 p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200">
                    <!-- Date -->
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 bg-ixmi-100 rounded-lg flex items-center justify-center">
                        <svg class="w-5 h-5 text-ixmi-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                      <div>
                        <p class="text-xs font-bold text-gray-600 uppercase tracking-wide">Fecha</p>
                        <p class="text-lg font-bold text-gray-900">{{ formatBlockedDate(schedule.date) }}</p>
                      </div>
                    </div>

                    <!-- Time -->
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </div>
                      <div>
                        <p class="text-xs font-bold text-gray-600 uppercase tracking-wide">Horario</p>
                        <p class="text-lg font-bold text-gray-900">{{ schedule.startTime }} - {{ schedule.endTime }}</p>
                      </div>
                    </div>

                    <!-- Reason -->
                    <div class="flex items-start gap-3">
                      <div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center shrink-0 mt-1">
                        <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </div>
                      <div class="flex-1">
                        <p class="text-xs font-bold text-gray-600 uppercase tracking-wide">Motivo</p>
                        <p class="text-base font-semibold text-gray-900">{{ schedule.reason || 'Mantenimiento' }}</p>
                      </div>
                    </div>
                  </div>

                  <!-- Duration Info -->
                  <div class="mb-6 p-3 bg-ixmi-50 border border-ixmi-200 rounded-lg">
                    <p class="text-xs font-bold text-ixmi-800 uppercase tracking-wide mb-1"><i class="fa-solid fa-hourglass-end text-ixmi-600 mr-1"></i>Duración Apartada</p>
                    <p class="text-sm font-black text-ixmi-900">
                      {{ Math.floor((new Date(`2026-01-01 ${schedule.endTime}`) - new Date(`2026-01-01 ${schedule.startTime}`)) / 3600000) }} horas
                    </p>
                  </div>

                  <!-- Action Buttons -->
                  <div class="grid grid-cols-2 gap-3">
                    <button 
                      @click="editBlockedSchedule(schedule)"
                      class="py-3 px-4 text-sm font-bold rounded-lg transition-all duration-200 uppercase tracking-wide border-2 border-ixmi-300 text-ixmi-600 bg-white hover:bg-ixmi-50 hover:shadow-md hover:scale-105"
                      title="Editar bloqueo"
                    >
                      <svg class="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                      </svg>
                      Editar
                    </button>
                    <button 
                      @click="deleteBlockedSchedule(schedule.id)"
                      class="py-3 px-4 text-sm font-bold rounded-lg transition-all duration-200 uppercase tracking-wide bg-gradient-to-r from-rose-500 to-rose-600 text-white hover:shadow-md hover:scale-105 border border-rose-400"
                      title="Eliminar apartado"
                    >
                      <svg class="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                      </svg>
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Quick Stats - Mejorado -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- Canchas Totales -->
            <div class="bg-gradient-to-br from-ixmi-500 via-ixmi-600 to-ixmi-700 rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-ixmi-400">
              <div class="flex items-end justify-between">
                <div>
                  <p class="text-ixmi-200 text-sm font-bold uppercase tracking-widest mb-2">Canchas Totales</p>
                  <p class="text-5xl font-black">{{ canchas.length }}</p>
                  <p class="text-ixmi-100 text-xs mt-2">instalaciones disponibles</p>
                </div>
                <div class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-4xl">
                  🏢
                </div>
              </div>
            </div>

            <!-- Horario de Operación -->
            <div class="bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-blue-400">
              <div class="flex items-end justify-between">
                <div>
                  <p class="text-blue-200 text-sm font-bold uppercase tracking-widest mb-2">Horario de Operación</p>
                  <p class="text-5xl font-black">{{ systemConfig.openTime }}-{{ systemConfig.closeTime }}</p>
                  <p class="text-blue-100 text-xs mt-2">17 horas disponibles/día</p>
                </div>
                <div class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-4xl">
                  🕒
                </div>
              </div>
            </div>

            <!-- Apartados Activos -->
            <div :class="['rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border', canchasWithRealOccupancy.filter(c => c.isBlockedToday || c.securityLocked).length > 0 ? 'bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 border-amber-400' : 'bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 border-emerald-400']">
              <div class="flex items-end justify-between">
                <div>
                  <p :class="['text-sm font-bold uppercase tracking-widest mb-2', canchasWithRealOccupancy.filter(c => c.isBlockedToday || c.securityLocked).length > 0 ? 'text-amber-200' : 'text-emerald-200']">Canchas Apartadas</p>
                  <p class="text-5xl font-black">{{ canchasWithRealOccupancy.filter(c => c.isBlockedToday || c.securityLocked).length }}</p>
                  <p :class="['text-xs mt-2', canchasWithRealOccupancy.filter(c => c.isBlockedToday || c.securityLocked).length > 0 ? 'text-amber-100' : 'text-emerald-100']">
                    {{ canchasWithRealOccupancy.filter(c => c.isBlockedToday || c.securityLocked).length === 0 ? 'sin apartados' : `no disponibles` }}
                  </p>
                </div>
                <div :class="['w-16 h-16 rounded-2xl flex items-center justify-center text-4xl', canchasWithRealOccupancy.filter(c => c.isBlockedToday || c.securityLocked).length > 0 ? 'bg-white/20' : 'bg-white/20']">
                  <span class="text-lg font-bold"><i :class="[canchasWithRealOccupancy.filter(c => c.isBlockedToday || c.securityLocked).length > 0 ? 'fa-solid fa-clipboard-check text-yellow-600' : 'fa-solid fa-check text-green-600']"></i></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Estadísticas Avanzadas -->
        <div v-if="activeTab === 'estadisticas'" class="space-y-8 animate-slide-up">
          <div>
            <h2 class="text-2xl font-bold text-gray-900">Estadísticas y Análisis</h2>
            <p class="text-gray-600 mt-1">Métricas detalladas del sistema</p>
          </div>

          <!-- KPI Cards -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- Tasa de Ocupación -->
            <div class="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-gray-200/60">
              <div class="flex items-center justify-between mb-4">
                <p class="text-sm font-semibold text-gray-500 uppercase tracking-wide">Ocupación Promedio</p>
                <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
              </div>
              <p class="text-3xl font-bold text-gray-900">72%</p>
              <p class="text-sm text-green-600 font-semibold mt-2">↑ 8% vs semana anterior</p>
              <div class="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div class="h-full bg-ixmi-500" style="width: 72%"></div>
              </div>
            </div>

            <!-- Ingresos Totales -->
            <div class="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-gray-200/60">
              <div class="flex items-center justify-between mb-4">
                <p class="text-sm font-semibold text-gray-500 uppercase tracking-wide">Ingresos Este Mes</p>
                <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
              </div>
              <p class="text-3xl font-bold text-gray-900">$0</p>
              <p class="text-sm text-blue-600 font-semibold mt-2">Todas las canchas son gratuitas</p>
            </div>

            <!-- Reservaciones Completadas -->
            <div class="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-gray-200/60">
              <div class="flex items-center justify-between mb-4">
                <p class="text-sm font-semibold text-gray-500 uppercase tracking-wide">Reservas Completadas</p>
                <div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
              </div>
              <p class="text-3xl font-bold text-gray-900">{{ completedReservationsCount }}</p>
              <p class="text-sm text-purple-600 font-semibold mt-2">{{ completedReservationsCount > 0 ? '↑' : '→' }} {{ approvalTrendPercentage }}% vs mes anterior</p>
            </div>

            <!-- Tasa de Aprobación -->
            <div class="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-gray-200/60">
              <div class="flex items-center justify-between mb-4">
                <p class="text-sm font-semibold text-gray-500 uppercase tracking-wide">Tasa Aprobación</p>
                <div class="w-10 h-10 bg-ixmi-100 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 text-ixmi-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                </div>
              </div>
              <p class="text-3xl font-bold text-gray-900">{{ approvalRate }}%</p>
              <p class="text-sm text-ixmi-600 font-semibold mt-2">{{ approvalRateTrend }}</p>
            </div>
          </div>

          <!-- Gráficos de Tendencias -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- Reservaciones por Día -->
            <div class="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-gray-200/60">
              <div class="mb-6">
                <h3 class="text-lg font-bold text-gray-900">Reservaciones por Día</h3>
                <p class="text-sm text-gray-500 mt-1">Últimos 7 días</p>
              </div>
              <div class="space-y-4">
                <div v-for="(day, index) in weeklyReservations" :key="day.day" class="relative">
                  <div class="flex items-center justify-between mb-2">
                    <span class="text-sm font-medium text-gray-700 w-20">{{ day.day }}</span>
                    <span class="text-sm font-bold text-gray-900">{{ day.reservations }} reservas</span>
                  </div>
                  <div class="relative w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div 
                      class="h-3 rounded-full bg-ixmi-500 transition-all duration-1000 ease-out"
                      :style="{ 
                        width: `${(day.reservations / 30) * 100}%`
                      }"
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Estado de Reservaciones -->
            <div class="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-gray-200/60">
              <div class="mb-6">
                <h3 class="text-lg font-bold text-gray-900">Distribución de Estados</h3>
                <p class="text-sm text-gray-500 mt-1">Total de {{ reservations.length }} reservaciones</p>
              </div>
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-3">
                    <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <span class="text-sm font-medium text-gray-700">Pendientes</span>
                  </div>
                  <div class="flex items-center space-x-2">
                    <span class="font-bold text-gray-900">{{ reservations.filter(r => r.status === 'pending').length }}</span>
                    <span class="text-xs text-gray-500">{{ Math.round((reservations.filter(r => r.status === 'pending').length / reservations.length) * 100) }}%</span>
                  </div>
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-3">
                    <div class="w-3 h-3 rounded-full bg-green-500"></div>
                    <span class="text-sm font-medium text-gray-700">Aprobadas</span>
                  </div>
                  <div class="flex items-center space-x-2">
                    <span class="font-bold text-gray-900">{{ reservations.filter(r => r.status === 'approved').length }}</span>
                    <span class="text-xs text-gray-500">{{ Math.round((reservations.filter(r => r.status === 'approved').length / reservations.length) * 100) }}%</span>
                  </div>
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-3">
                    <div class="w-3 h-3 rounded-full bg-red-500"></div>
                    <span class="text-sm font-medium text-gray-700">Rechazadas</span>
                  </div>
                  <div class="flex items-center space-x-2">
                    <span class="font-bold text-gray-900">{{ reservations.filter(r => r.status === 'rejected').length }}</span>
                    <span class="text-xs text-gray-500">{{ Math.round((reservations.filter(r => r.status === 'rejected').length / reservations.length) * 100) }}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Detalles por Cancha -->
          <div class="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-gray-200/60">
            <div class="mb-6">
              <h3 class="text-lg font-bold text-gray-900"><i class="fa-solid fa-chart-line text-green-600 mr-2"></i>Estadísticas por Cancha (Datos Reales)</h3>
              <p class="text-sm text-gray-500 mt-1">Ocupación y reservaciones confirmadas de hoy</p>
            </div>
            <div class="overflow-x-auto">
              <table class="w-full text-sm">
                <thead>
                  <tr class="border-b border-gray-200/60">
                    <th class="text-left py-3 px-4 font-semibold text-gray-700">Cancha</th>
                    <th class="text-center py-3 px-4 font-semibold text-gray-700">Ocupación Hoy</th>
                    <th class="text-center py-3 px-4 font-semibold text-gray-700">Reservas Confirmadas</th>
                    <th class="text-center py-3 px-4 font-semibold text-gray-700">Estado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="cancha in canchasWithRealOccupancy" :key="cancha.id" class="border-b border-gray-200/40 hover:bg-gray-50/50 transition-all duration-200">
                    <td class="py-4 px-4">
                      <div>
                        <p class="font-medium text-gray-900">{{ cancha.name }}</p>
                        <p class="text-xs text-gray-500">{{ cancha.sport }}</p>
                      </div>
                    </td>
                    <td class="py-4 px-4">
                      <div class="flex items-center justify-center space-x-2">
                        <div class="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            :class="[
                              'h-full rounded-full',
                              cancha.occupancy > 80 ? 'bg-red-500' :
                              cancha.occupancy > 50 ? 'bg-yellow-500' :
                              'bg-green-500'
                            ]"
                            :style="{ width: `${cancha.occupancy || 0}%` }"
                          ></div>
                        </div>
                        <span class="text-sm font-bold text-gray-900 w-10">{{ cancha.occupancy || 0 }}%</span>
                      </div>
                    </td>
                    <td class="py-4 px-4 text-center">
                      <span class="font-semibold text-gray-900 bg-ixmi-100 px-3 py-1 rounded-full">
                        {{ reservations.filter(r => String(r.courtId) === String(cancha.id) && r.date === new Date().toISOString().split('T')[0] && r.status === 'approved').length }}
                      </span>
                    </td>
                    <td class="py-4 px-4">
                      <div class="flex items-center justify-center">
                        <span v-if="cancha.active && !cancha.securityLocked" class="px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700">
                          <i class="fa-solid fa-check text-green-600 mr-2"></i>Activa
                        </span>
                        <span v-else-if="cancha.securityLocked" class="px-3 py-1 rounded-full text-xs font-bold bg-red-100 text-red-700">
                          <i class="fa-solid fa-lock text-red-600 mr-2"></i>Bloqueada
                        </span>
                        <span v-else class="px-3 py-1 rounded-full text-xs font-bold bg-gray-100 text-gray-700">
                          <i class="fa-solid fa-pause-circle text-orange-600 mr-2"></i>Pausada
                        </span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- Configuración -->
        <div v-if="activeTab === 'configuracion'" class="space-y-8 animate-slide-up">
          <div>
            <h2 class="text-2xl font-bold text-gray-900">Configuración del Sistema</h2>
            <p class="text-gray-600 mt-1">Personaliza las configuraciones de IxmiSport</p>
          </div>
          
          <div class="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <!-- General Settings -->
            <div class="bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-gray-200/60">
              <div class="flex items-center space-x-3 mb-6">
                <div class="w-10 h-10 bg-ixmi-500 rounded-xl flex items-center justify-center">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <h3 class="text-lg font-bold text-gray-900">Configuración General</h3>
              </div>
              <div class="space-y-6">
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">Nombre del sistema</label>
                  <input 
                    v-model="systemConfig.name"
                    type="text" 
                    class="w-full px-4 py-3 border border-gray-300/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 bg-white/80"
                  >
                </div>
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">Email de contacto</label>
                  <input 
                    v-model="systemConfig.contactEmail"
                    type="email" 
                    class="w-full px-4 py-3 border border-gray-300/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 bg-white/80"
                  >
                </div>
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">Teléfono de contacto</label>
                  <input 
                    v-model="systemConfig.contactPhone"
                    type="tel" 
                    class="w-full px-4 py-3 border border-gray-300/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 bg-white/80"
                  >
                </div>
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">Descripción</label>
                  <textarea 
                    v-model="systemConfig.description"
                    rows="3"
                    class="w-full px-4 py-3 border border-gray-300/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 bg-white/80 resize-none"
                    placeholder="Descripción del centro deportivo..."
                  ></textarea>
                </div>
              </div>
            </div>

            <!-- Reservations Settings -->
            <div class="bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-gray-200/60">
              <div class="flex items-center space-x-3 mb-6">
                <div class="w-10 h-10 bg-ixmi-500 rounded-xl flex items-center justify-center">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 class="text-lg font-bold text-gray-900">Configuración de Reservaciones</h3>
              </div>
              <div class="space-y-6">
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-2">Hora de apertura</label>
                    <input 
                      v-model="systemConfig.openTime"
                      type="time" 
                      class="w-full px-4 py-3 border border-gray-300/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-ixmi-500/20 focus:border-ixmi-400 bg-white/80"
                    >
                  </div>
                  <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-2">Hora de cierre</label>
                    <input 
                      v-model="systemConfig.closeTime"
                      type="time" 
                      class="w-full px-4 py-3 border border-gray-300/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-ixmi-500/20 focus:border-ixmi-400 bg-white/80"
                    >
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">Días de anticipación máxima</label>
                  <input 
                    v-model="systemConfig.maxAdvanceDays"
                    type="number" 
                    min="1"
                    max="90"
                    class="w-full px-4 py-3 border border-gray-300/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-ixmi-500/20 focus:border-ixmi-400 bg-white/80"
                  >
                </div>
                <div class="space-y-4">
                  <div class="flex items-center justify-between p-4 bg-gray-50/80 rounded-xl">
                    <div>
                      <label class="text-sm font-semibold text-gray-700">Aprobación automática</label>
                      <p class="text-xs text-gray-500 mt-1">Las reservaciones se aprueban automáticamente</p>
                    </div>
                    <label class="relative inline-flex items-center cursor-pointer">
                      <input v-model="systemConfig.autoApproval" type="checkbox" class="sr-only peer">
                      <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-ixmi-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-ixmi-500"></div>
                    </label>
                  </div>
                  <div class="flex items-center justify-between p-4 bg-gray-50/80 rounded-xl">
                    <div>
                      <label class="text-sm font-semibold text-gray-700">Notificaciones por email</label>
                      <p class="text-xs text-gray-500 mt-1">Enviar confirmaciones por correo</p>
                    </div>
                    <label class="relative inline-flex items-center cursor-pointer">
                      <input v-model="systemConfig.emailNotifications" type="checkbox" class="sr-only peer">
                      <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-ixmi-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-ixmi-500"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Save Button -->
          <div class="flex justify-end">
            <button 
              @click="saveConfiguration"
              class="px-8 py-3 bg-ixmi-500 text-white rounded-xl hover:bg-ixmi-600 hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold shadow-md"
            >
              <svg class="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path>
              </svg>
              Guardar Configuración
            </button>
          </div>
        </div>
      </main>
    </div>

    <!-- Enhanced Modal for New Cancha -->
    <div v-if="showNewCanchaModal" class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-gray-200/60 transform animate-modal-appear">
        <div class="p-6 border-b border-gray-200/60">
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-ixmi-500 rounded-xl flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900">{{ editingCanchaId ? 'Editar Cancha' : 'Nueva Cancha' }}</h3>
            </div>
            <button 
              @click="showNewCanchaModal = false; editingCanchaId = null"
              class="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all duration-200"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>
        <form @submit.prevent="createCancha" class="p-6">
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Nombre de la cancha</label>
              <input 
                v-model="newCancha.name"
                type="text" 
                required
                class="w-full px-4 py-3 border border-gray-300/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-ixmi-500/20 focus:border-ixmi-400 bg-white/80"
                placeholder="Ej: Cancha de Fútbol #1"
              >
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Tipo de deporte</label>
              <select 
                v-model="newCancha.type"
                required
                class="w-full px-4 py-3 border border-gray-300/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-ixmi-500/20 focus:border-ixmi-400 bg-white/80"
              >
                <option value="">Seleccionar tipo</option>
                <option value="Fútbol">Fútbol</option>
                <option value="Básquetbol">Básquetbol</option>
                <option value="Voleibol">Voleibol</option>
                <option value="Tenis">Tenis</option>
                <option value="Multiusos">Multiusos</option>
              </select>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">Precio por hora</label>
                <input 
                  v-model="newCancha.price"
                  type="number" 
                  required
                  min="0"
                  step="10"
                  class="w-full px-4 py-3 border border-gray-300/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-ixmi-500/20 focus:border-ixmi-400 bg-white/80"
                  placeholder="200"
                >
              </div>
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">Capacidad máxima</label>
                <input 
                  v-model="newCancha.capacity"
                  type="number" 
                  required
                  min="1"
                  class="w-full px-4 py-3 border border-gray-300/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-ixmi-500/20 focus:border-ixmi-400 bg-white/80"
                  placeholder="22"
                >
              </div>
            </div>
          </div>
          <div class="flex space-x-3 pt-6 mt-6 border-t border-gray-200/60">
            <button 
              type="button"
              @click="showNewCanchaModal = false; editingCanchaId = null"
              class="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-200 font-medium"
            >
              Cancelar
            </button>
            <button 
              type="submit"
              class="flex-1 px-6 py-3 bg-ixmi-500 text-white rounded-xl hover:bg-ixmi-600 hover:shadow-lg transition-all duration-300 font-semibold shadow-md"
            >
              {{ editingCanchaId ? 'Actualizar Cancha' : 'Crear Cancha' }}
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Modal para Bloquear Horario - Diseño Mejorado -->
    <div v-if="showBlockCanchaModal" class="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-2xl w-full max-w-lg shadow-2xl border border-gray-200 transform animate-modal-appear overflow-y-auto max-h-[92vh]">
        <!-- Header Premium -->
        <div class="bg-gradient-to-br from-ixmi-600 via-ixmi-700 to-ixmi-800 px-6 py-5 text-white flex items-center justify-between sticky top-0 z-10">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 bg-white/25 rounded-xl flex items-center justify-center shadow-lg">
              <i class="fa-solid fa-ban text-lg font-bold"></i>
            </div>
            <div>
              <h3 class="text-xl font-bold">Bloquear Horario</h3>
              <p class="text-ixmi-50 text-xs mt-0.5">Apartado exclusivo para mantenimiento</p>
            </div>
          </div>
          <button 
            @click="showBlockCanchaModal = false"
            class="p-2 text-white/70 hover:text-white hover:bg-white/20 rounded-lg transition-all duration-200"
          >
            <i class="fa-solid fa-xmark text-lg"></i>
          </button>
        </div>
        
        <form @submit.prevent="createBlockedSchedule" class="p-6 space-y-5">
          <!-- Selección de Cancha -->
          <div class="space-y-2.5">
            <label class="flex items-center gap-2.5 text-sm font-bold text-gray-900">
              <div class="w-8 h-8 bg-ixmi-100 rounded-lg flex items-center justify-center">
                <i class="fa-solid fa-squares-2x2 text-ixmi-700"></i>
              </div>
              Cancha
            </label>
            
            <div v-if="blockCanchaForm.courtId === ''" class="grid grid-cols-2 gap-3 max-h-40 overflow-y-auto pr-2">
              <button
                v-for="cancha in canchas"
                :key="cancha.id"
                type="button"
                @click="blockCanchaForm.courtId = String(cancha.id)"
                class="group p-3 rounded-lg border-2 border-gray-300 bg-white hover:border-ixmi-500 hover:bg-ixmi-50 transition-all duration-200 text-left"
              >
                <p class="font-bold text-gray-900 text-sm group-hover:text-ixmi-700">{{ cancha.name }}</p>
                <p class="text-gray-500 text-xs mt-1">{{ cancha.sport }}</p>
              </button>
            </div>

            <div v-else class="p-4 rounded-xl border-2 border-ixmi-400 bg-gradient-to-br from-ixmi-50 via-white to-ixmi-50 flex items-center justify-between shadow-sm">
              <div>
                <p class="font-bold text-gray-900 text-sm">{{ canchas.find(c => String(c.id) === String(blockCanchaForm.courtId))?.name }}</p>
                <p class="text-gray-600 text-xs mt-1 font-medium">{{ canchas.find(c => String(c.id) === String(blockCanchaForm.courtId))?.sport }}</p>
              </div>
              <button
                type="button"
                @click="blockCanchaForm.courtId = ''"
                class="px-3 py-1.5 text-xs font-bold text-ixmi-700 bg-white/80 border border-ixmi-400 rounded-lg hover:bg-ixmi-100 transition-all shadow-sm"
              >
                <i class="fa-solid fa-arrow-rotate-left mr-1"></i>Cambiar
              </button>
            </div>
          </div>

          <!-- Tipo de Apartado -->
          <div v-if="blockCanchaForm.courtId !== ''" class="space-y-2.5">
            <label class="flex items-center gap-2.5 text-sm font-bold text-gray-900">
              <div class="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                <i class="fa-solid fa-tags text-orange-700"></i>
              </div>
              Tipo de Bloqueo
            </label>
            <div class="grid grid-cols-2 gap-2">
              <button
                type="button"
                @click="blockCanchaForm.apartadoType = 'torneo'; blockCanchaForm.reason = 'Torneo o competencia'"
                :class="['p-3 rounded-lg border-2 font-semibold text-xs transition-all flex items-center justify-center gap-2', blockCanchaForm.apartadoType === 'torneo' ? 'border-orange-500 bg-orange-50 text-orange-700 shadow-md' : 'border-gray-300 bg-white text-gray-700 hover:border-orange-400']"
              >
                <i class="fa-solid fa-trophy"></i>
                <span>Torneo</span>
              </button>
              <button
                type="button"
                @click="blockCanchaForm.apartadoType = 'mantenimiento'; blockCanchaForm.reason = 'Mantenimiento técnico'"
                :class="['p-3 rounded-lg border-2 font-semibold text-xs transition-all flex items-center justify-center gap-2', blockCanchaForm.apartadoType === 'mantenimiento' ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-md' : 'border-gray-300 bg-white text-gray-700 hover:border-blue-400']"
              >
                <i class="fa-solid fa-wrench"></i>
                <span>Mantenimiento</span>
              </button>
              <button
                type="button"
                @click="blockCanchaForm.apartadoType = 'limpieza'; blockCanchaForm.reason = 'Limpieza profunda'"
                :class="['p-3 rounded-lg border-2 font-semibold text-xs transition-all flex items-center justify-center gap-2', blockCanchaForm.apartadoType === 'limpieza' ? 'border-emerald-500 bg-emerald-50 text-emerald-700 shadow-md' : 'border-gray-300 bg-white text-gray-700 hover:border-emerald-400']"
              >
                <i class="fa-solid fa-broom"></i>
                <span>Limpieza</span>
              </button>
              <button
                type="button"
                @click="blockCanchaForm.apartadoType = 'evento'; blockCanchaForm.reason = 'Evento privado o especial'"
                :class="['p-3 rounded-lg border-2 font-semibold text-xs transition-all flex items-center justify-center gap-2', blockCanchaForm.apartadoType === 'evento' ? 'border-purple-500 bg-purple-50 text-purple-700 shadow-md' : 'border-gray-300 bg-white text-gray-700 hover:border-purple-400']"
              >
                <i class="fa-solid fa-calendar-check"></i>
                <span>Evento</span>
              </button>
            </div>
          </div>

          <!-- Fecha y Horarios -->
          <div v-if="blockCanchaForm.courtId !== ''" class="space-y-3">
            <label class="flex items-center gap-2.5 text-sm font-bold text-gray-900">
              <div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <i class="fa-solid fa-calendar-alt text-blue-700"></i>
              </div>
              Fecha y Horario
            </label>
            <div class="grid grid-cols-3 gap-3">
              <!-- Fecha -->
              <div>
                <label class="block text-xs font-bold text-gray-700 mb-1.5 flex items-center gap-1">
                  <i class="fa-solid fa-calendar text-blue-600"></i>
                  Fecha
                </label>
                <input 
                  v-model="blockCanchaForm.date"
                  type="date" 
                  required
                  class="w-full px-2.5 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ixmi-500/40 focus:border-ixmi-600 bg-white text-xs font-semibold text-gray-900 transition-all hover:border-gray-400"
                >
              </div>

              <!-- Hora Inicio -->
              <div>
                <label class="block text-xs font-bold text-gray-700 mb-1.5 flex items-center gap-1">
                  <i class="fa-solid fa-play text-green-600"></i>
                  Inicio
                </label>
                <input 
                  v-model="blockCanchaForm.startTime"
                  type="time" 
                  required
                  min="05:00"
                  max="22:00"
                  class="w-full px-2.5 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ixmi-500/40 focus:border-ixmi-600 bg-white text-xs font-semibold text-gray-900 transition-all hover:border-gray-400"
                >
              </div>

              <!-- Hora Fin -->
              <div>
                <label class="block text-xs font-bold text-gray-700 mb-1.5 flex items-center gap-1">
                  <i class="fa-solid fa-stop text-red-600"></i>
                  Fin
                </label>
                <input 
                  v-model="blockCanchaForm.endTime"
                  type="time" 
                  required
                  min="05:00"
                  max="22:00"
                  class="w-full px-2.5 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ixmi-500/40 focus:border-ixmi-600 bg-white text-xs font-semibold text-gray-900 transition-all hover:border-gray-400"
                >
              </div>
            </div>
          </div>

          <!-- Motivo -->
          <div v-if="blockCanchaForm.courtId !== ''" class="space-y-2">
            <label class="flex items-center gap-2.5 text-sm font-bold text-gray-900">
              <div class="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <i class="fa-solid fa-message text-purple-700"></i>
              </div>
              Motivo del Bloqueo
            </label>
            <textarea 
              v-model="blockCanchaForm.reason"
              required
              rows="2"
              class="w-full px-3 py-2.5 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ixmi-500/40 focus:border-ixmi-600 bg-white text-xs font-medium text-gray-900 transition-all resize-none hover:border-gray-400"
              placeholder="Ej: Mantenimiento técnico, competencia local, limpieza profunda..."
            ></textarea>
            <p class="text-xs text-gray-600 font-medium">
              <i class="fa-solid fa-circle-info mr-1 text-ixmi-600"></i>
              Los usuarios verán este motivo al intentar reservar
            </p>
          </div>

          <!-- Info Alert -->
          <div class="bg-gradient-to-r from-ixmi-100 to-ixmi-50 border-l-4 border-ixmi-600 rounded-lg p-3.5 flex items-start gap-3">
            <div class="w-6 h-6 bg-ixmi-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <i class="fa-solid fa-shield text-white text-xs"></i>
            </div>
            <div>
              <p class="text-sm font-bold text-ixmi-900">Información importante</p>
              <p class="text-xs text-ixmi-800 mt-0.5 leading-relaxed">
                El horario será completamente bloqueado. Ningún usuario podrá hacer reservas durante este período.
              </p>
            </div>
          </div>

          <!-- Botones de Acción -->
          <div class="flex gap-3 pt-2 border-t border-gray-200">
            <button 
              type="button"
              @click="showBlockCanchaModal = false"
              class="flex-1 px-4 py-2.5 border-2 border-gray-400 text-gray-700 rounded-lg hover:bg-gray-100 hover:border-gray-500 transition-all font-bold text-sm flex items-center justify-center gap-2"
            >
              <i class="fa-solid fa-times"></i>
              Cancelar
            </button>
            <button 
              type="submit"
              class="flex-1 px-4 py-2.5 bg-gradient-to-r from-ixmi-600 to-ixmi-700 hover:from-ixmi-700 hover:to-ixmi-800 text-white rounded-lg hover:shadow-lg transition-all font-bold text-sm flex items-center justify-center gap-2 shadow-md"
            >
              <i class="fa-solid fa-lock"></i>
              Bloquear
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { getAllReservations, listenToAllReservations, createBlockedSchedule as firebaseCreateBlock, deleteBlockedSchedule as firebaseDeleteBlock, listenToAllBlockedSchedules, listenToAllCourts, updateReservation } from '@/firebase/reservations'
import { getAllUsers, listenToAllUsers } from '@/firebase/auth'

// Estado reactivo principal
const sidebarOpen = ref(false)
const activeTab = ref('dashboard')
const showNewCanchaModal = ref(false)
const showBlockCanchaModal = ref(false)
const showReservationDetailModal = ref(false)
const userSearch = ref('')
const canchaSearch = ref('')
const canchaFilter = ref('all')
const selectedReservationCourt = ref('')
const isLoadingReservations = ref(false)
const isLoadingUsers = ref(false)
const selectedReservation = ref(null)
const editingCanchaId = ref(null)

// Formularios para bloqueos
const blockCanchaForm = ref({
  courtId: '',
  date: '',
  startTime: '',
  endTime: '',
  reason: '',
  apartadoType: ''
})

// Referencias para desuscribirse de listeners en tiempo real
let unsubscribeReservations = null
let unsubscribeUsers = null

// Configuración de pestañas del sidebar
const tabs = ref([
  { id: 'dashboard', name: 'Dashboard', icon: 'svg', badge: null },
  { id: 'canchas', name: 'Canchas', icon: 'svg', badge: '9' },
  { id: 'horarios', name: 'Bloqueos', icon: 'svg', badge: null },
  { id: 'reservaciones', name: 'Reservaciones', icon: 'svg', badge: null },
  { id: 'estadisticas', name: 'Estadísticas', icon: 'svg', badge: null },
  { id: 'usuarios', name: 'Usuarios', icon: 'svg', badge: null },
  { id: 'configuracion', name: 'Configuración', icon: 'svg', badge: null }
])

// Actualizar badges dinámicamente
const updateTabBadges = () => {
  tabs.value[1].badge = canchas.value.length.toString()
  tabs.value[3].badge = users.value.length.toString()
  tabs.value[4].badge = reservations.value.length > 0 ? reservations.value.length.toString() : null
}

// Datos de métricas principales - Se actualizan dinámicamente
const metrics = computed(() => [
  {
    title: 'Total Usuarios',
    value: users.value.length.toString(),
    subtitle: 'Usuarios registrados',
    period: 'Total',
    change: '+12%',
    changeColor: 'bg-green-100 text-green-800',
    icon: 'svg',
    color: 'bg-gradient-to-br from-blue-500 to-blue-600',
    gradientBg: 'bg-gradient-to-br from-blue-500 to-blue-600',
    progress: 85,
    progressColor: 'bg-gradient-to-r from-blue-500 to-blue-600'
  },
  {
    title: 'Canchas Activas',
    value: canchas.value.filter(c => c.active).length.toString(),
    subtitle: `${canchas.value.filter(c => !c.active).length} en mantenimiento`,
    period: 'Disponibles',
    change: '9 total',
    changeColor: 'bg-ixmi-100 text-ixmi-800',
    icon: 'svg',
    color: 'bg-gradient-to-br from-ixmi-500 to-ixmi-600',
    gradientBg: 'bg-gradient-to-br from-ixmi-500 to-ixmi-600',
    progress: Math.round((canchas.value.filter(c => c.active).length / canchas.value.length) * 100),
    progressColor: 'bg-gradient-to-r from-ixmi-500 to-ixmi-600'
  },
  {
    title: 'Reservaciones',
    value: reservations.value.length.toString(),
    subtitle: 'Total registradas',
    period: 'En sistema',
    change: reservations.value.filter(r => r.status === 'approved').length + ' activas',
    changeColor: 'bg-green-100 text-green-800',
    icon: 'svg',
    color: 'bg-gradient-to-br from-purple-500 to-purple-600',
    gradientBg: 'bg-gradient-to-br from-purple-500 to-purple-600',
    progress: 76,
    progressColor: 'bg-gradient-to-r from-purple-500 to-purple-600'
  },
  {
    title: 'Usuarios Activos',
    value: users.value.filter(u => u.active).length.toString(),
    subtitle: 'Con actividad reciente',
    period: 'Activos',
    change: '+12%',
    changeColor: 'bg-green-100 text-green-800',
    icon: 'svg',
    color: 'bg-gradient-to-br from-green-500 to-green-600',
    gradientBg: 'bg-gradient-to-br from-green-500 to-green-600',
    progress: Math.round((users.value.filter(u => u.active).length / users.value.length) * 100),
    progressColor: 'bg-gradient-to-r from-green-500 to-green-600'
  }
])

// Actividad reciente - basada en reservaciones reales
const recentActivities = computed(() => {
  // Usar las últimas reservaciones como actividad reciente
  return reservations.value.slice(0, 4).map((r, index) => ({
    id: index + 1,
    title: r.status === 'approved' ? 'Reservación confirmada' : r.status === 'rejected' ? 'Reservación cancelada' : 'Nueva reservación',
    description: `${r.userName} reservó ${r.cancha} para ${r.date}`,
    time: r.createdAt ? formatTimeAgo(r.createdAt) : 'Recientemente',
    color: r.status === 'approved' ? 'bg-gradient-to-br from-ixmi-500 to-ixmi-600' : r.status === 'rejected' ? 'bg-gradient-to-br from-red-500 to-red-600' : 'bg-gradient-to-br from-blue-500 to-blue-600',
    status: r.status === 'approved' ? 'Confirmado' : r.status === 'rejected' ? 'Cancelado' : 'Pendiente',
    statusColor: r.status === 'approved' ? 'bg-green-100 text-green-800' : r.status === 'rejected' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800',
    statusIcon: r.status === 'approved' ? '✓' : r.status === 'rejected' ? '✕' : '⏱'
  }))
})

// Helper para formatear tiempo relativo
const formatTimeAgo = (timestamp) => {
  if (!timestamp) return 'Recientemente'
  const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp)
  const now = new Date()
  const diff = Math.floor((now - date) / 1000) // diferencia en segundos
  
  if (diff < 60) return 'Hace un momento'
  if (diff < 3600) return `Hace ${Math.floor(diff / 60)} minutos`
  if (diff < 86400) return `Hace ${Math.floor(diff / 3600)} horas`
  return `Hace ${Math.floor(diff / 86400)} días`
}

// Período de reporte seleccionado (7 o 30 días)
const reportPeriod = ref(7)

// Función para generar datos de los últimos 7 días BASADO EN RESERVACIONES REALES
const generateWeeklyData = () => {
  const data = []
  const today = new Date()
  
  console.log('� Generando datos semanales. Reservaciones disponibles:', reservations.value.length)
  
  for (let i = 6; i >= 0; i--) {
    const date = new Date(today)
    date.setDate(date.getDate() - i)
    const dateStr = date.toISOString().split('T')[0]
    const dayOfWeek = date.toLocaleDateString('es-ES', { weekday: 'long' })
    const capitalizedDay = dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1)
    
    // Contar reservaciones confirmadas para esta fecha
    const reservationsCount = reservations.value.filter(r => {
      const dateMatch = r.date === dateStr
      const statusMatch = r.status === 'approved'
      return dateMatch && statusMatch
    }).length
    
    data.push({
      day: capitalizedDay,
      reservations: reservationsCount,
      date: dateStr
    })
  }
  
  return data
}

// Función para generar datos de los últimos 30 días BASADO EN RESERVACIONES REALES
const generateMonthlyData = () => {
  const data = []
  const today = new Date()
  
  for (let i = 29; i >= 0; i--) {
    const date = new Date(today)
    date.setDate(date.getDate() - i)
    const dateStr = date.toISOString().split('T')[0]
    const day = date.getDate()
    const month = date.toLocaleDateString('es-ES', { month: 'short' })
    
    // Contar reservaciones confirmadas para esta fecha
    const reservationsCount = reservations.value.filter(r => {
      const dateMatch = r.date === dateStr
      const statusMatch = r.status === 'approved'
      return dateMatch && statusMatch
    }).length
    
    data.push({
      day: `${day} ${month}`,
      reservations: reservationsCount,
      date: dateStr
    })
  }
  
  return data
}

// Reservaciones dinámicas según el período seleccionado
const weeklyReservations = computed(() => {
  if (reportPeriod.value === 7) {
    return generateWeeklyData()
  } else {
    return generateMonthlyData()
  }
})

// Datos de canchas - cargadas desde Firebase en tiempo real
const canchas = ref([])
let unsubscribeCourts = null
let unsubscribeBlockedSchedules = null

// Formulario para nueva cancha
const newCancha = ref({
  name: '',
  type: '',
  price: '',
  capacity: ''
})

// Datos de usuarios - cargados desde Firebase
const users = ref([])

// Cargar usuarios desde Firebase
const loadUsers = async () => {
  isLoadingUsers.value = true
  try {
    const result = await getAllUsers()
    if (result.success) {
      users.value = result.data.map(u => ({
        id: u.id,
        name: u.name || 'Usuario',
        email: u.email,
        phone: u.phone || 'No registrado',
        createdAt: u.createdAt ? (u.createdAt.toDate ? u.createdAt.toDate().toISOString().split('T')[0] : u.createdAt) : 'N/A',
        active: true,
        reservations: 0,
        lastActivity: 'Reciente',
        role: u.role || 'user'
      }))
      updateTabBadges()
    }
  } catch (error) {
    console.error('Error loading users:', error)
  }
  isLoadingUsers.value = false
}

// Datos de reservaciones - cargados desde Firebase
const reservations = ref([])

// Estado de bloqueo de seguridad por cancha
const securityLockedCanchas = ref({})

// Horarios bloqueados por el administrador
const blockedSchedules = ref([])

// Cargar reservaciones desde Firebase
const loadReservations = async () => {
  isLoadingReservations.value = true
  try {
    const result = await getAllReservations()
    if (result.success) {
      // Mapear datos de Firebase al formato del admin
      reservations.value = result.data.map(r => ({
        id: r.id,
        cancha: r.courtName || 'Cancha',
        courtName: r.courtName || 'Cancha',
        userName: r.userName || r.userEmail || 'Usuario',
        date: r.date,
        time: `${r.startTime} - ${r.endTime}`,
        status: r.status === 'confirmed' ? 'approved' : r.status === 'cancelled' ? 'rejected' : r.status,
        amount: 0, // Gratis
        priority: false,
        // Datos adicionales de Firebase
        courtId: r.courtId,
        userId: r.userId,
        userEmail: r.userEmail,
        people: r.people,
        courtLocation: r.courtLocation,
        startTime: r.startTime,
        endTime: r.endTime,
        createdAt: r.createdAt
      }))
      // Guardar en localStorage
      localStorage.setItem('ixmisport_reservations', JSON.stringify(reservations.value))
      // Actualizar badges de las pestañas
      updateTabBadges()
    }
  } catch (error) {
    console.error('Error loading reservations from Firebase:', error)
    // Cargar desde localStorage como fallback
    const savedReservations = localStorage.getItem('ixmisport_reservations')
    if (savedReservations) {
      try {
        reservations.value = JSON.parse(savedReservations)
        updateTabBadges()
      } catch (e) {
        console.log('Error cargando reservaciones desde localStorage')
      }
    }
  }
  isLoadingReservations.value = false
}

// Variables para listeners en tiempo real
let handleStorageChange = null

// Cargar datos al montar el componente
onMounted(() => {
  // Cargar estado de bloqueo de seguridad desde localStorage
  const savedSecurityLocks = localStorage.getItem('ixmisport_security_locks')
  if (savedSecurityLocks) {
    try {
      securityLockedCanchas.value = JSON.parse(savedSecurityLocks)
      console.log('[OK] Estados de seguridad cargados desde localStorage:', securityLockedCanchas.value)
    } catch (error) {
      console.error('Error cargando estados de seguridad:', error)
      securityLockedCanchas.value = {}
    }
  }
  
  // Configurar listeners en tiempo real para CANCHAS desde Firebase
  unsubscribeCourts = listenToAllCourts((result) => {
    if (result.success && result.data && result.data.length > 0) {
      canchas.value = result.data.map(c => ({
        id: c.id,
        name: c.name,
        type: c.type || 'Multiusos',
        description: c.description || '',
        location: c.location || '',
        price: c.price || 0,
        capacity: c.capacity || 10,
        active: c.active !== false,
        occupancy: c.occupancy || 65,
        sport: c.sport || 'general'
      }))
      console.log('[OK] Canchas cargadas desde Firebase en tiempo real:', canchas.value.length)
    } else {
      console.log('[WARN] No hay canchas en Firebase')
    }
  })
  
  // Configurar listeners en tiempo real para BLOQUES HORARIOS desde Firebase
  unsubscribeBlockedSchedules = listenToAllBlockedSchedules((result) => {
    if (result.success) {
      blockedSchedules.value = result.data || []
      console.log('[OK] Horarios bloqueados actualizados en tiempo real:', blockedSchedules.value.length, 'bloques')
      blockedSchedules.value.forEach(block => {
        console.log(`  <i class="fa-solid fa-calendar"></i> Cancha ${block.courtId}: ${block.date} ${block.startTime}-${block.endTime}`)
      })
    }
  })
  
  // Cargar configuración del sistema desde localStorage
  const savedConfig = localStorage.getItem('ixmisport_system_config')
  if (savedConfig) {
    try {
      systemConfig.value = JSON.parse(savedConfig)
    } catch (e) {
      console.log('Error cargando configuración guardada')
    }
  }
  
  // Configurar listeners en tiempo real para RESERVACIONES
  unsubscribeReservations = listenToAllReservations((result) => {
    if (result.success) {
      // Mapear datos de Firebase al formato del admin
      reservations.value = result.data.map(r => ({
        id: r.id,
        cancha: r.courtName || 'Cancha',
        courtName: r.courtName || 'Cancha',
        userName: r.userName || r.userEmail || 'Usuario',
        date: r.date,
        time: `${r.startTime} - ${r.endTime}`,
        status: r.status === 'confirmed' ? 'approved' : r.status === 'cancelled' ? 'rejected' : r.status,
        amount: 0,
        priority: false,
        courtId: r.courtId,
        userId: r.userId,
        userEmail: r.userEmail,
        people: r.people,
        courtLocation: r.courtLocation,
        startTime: r.startTime,
        endTime: r.endTime,
        createdAt: r.createdAt
      }))
      updateTabBadges()
      console.log('[OK] Reservaciones en tiempo real actualizado')
    }
  })
  
  // Cargar usuarios desde Firebase
  loadUsers()
  
  // Cargar reservaciones inicialmente
  loadReservations()
})

// Limpiar listeners al desmontar el componente
onUnmounted(() => {
  console.log('🧹 Limpiando listeners en tiempo real...')
  if (typeof unsubscribeReservations === 'function') {
    unsubscribeReservations()
    console.log('[OK] Listener de reservaciones limpiado')
  }
  if (typeof unsubscribeUsers === 'function') {
    unsubscribeUsers()
    console.log('[OK] Listener de usuarios limpiado')
  }
  if (typeof unsubscribeCourts === 'function') {
    unsubscribeCourts()
    console.log('[OK] Listener de canchas limpiado')
  }
  if (typeof unsubscribeBlockedSchedules === 'function') {
    unsubscribeBlockedSchedules()
    console.log('[OK] Listener de bloques limpiado')
  }
})

// Watchers para actualizar automáticamente
watch([() => reservations.value.length, () => blockedSchedules.value.length, () => canchas.value.length], () => {
  console.log('[UPDATE] Datos actualizados - Recalculando indicadores')
  console.log(`   Reservaciones: ${reservations.value.length}`)
  console.log(`   Bloques horarios: ${blockedSchedules.value.length}`)
  console.log(`   🏟️ Canchas: ${canchas.value.length}`)
  // El computed se recalculará automáticamente
})

// Watcher para sincronizar cambios de bloqueos de seguridad
watch(() => securityLockedCanchas.value, (newVal) => {
  console.log('[SECURITY] Estado de seguridad actualizado:', Object.keys(newVal).filter(k => newVal[k]).length, 'canchas bloqueadas')
  // Forzar actualización de computed
  canchas.value = [...canchas.value]
}, { deep: true })

// Watcher específico para logging de cambios en bloques
watch(() => blockedSchedules.value, (newVal) => {
  console.log('🔒 Bloques actualizados:', newVal.length, 'activos')
  newVal.forEach((b, idx) => {
    console.log(`   ├─ [${idx + 1}] Cancha ${b.courtId}: ${b.date} ${b.startTime}-${b.endTime}`)
  })
  localStorage.setItem('ixmisport_blocked_schedules', JSON.stringify(newVal))
}, { deep: true })

// Configuración del sistema mejorada
const systemConfig = ref({
  name: 'IxmiSport - Centro Deportivo Municipal',
  contactEmail: 'admin@ixmisport.com',
  contactPhone: '771-123-4567',
  description: 'Centro deportivo municipal de Ixmiquilpan, Hidalgo. Instalaciones modernas para toda la familia.',
  maxAdvanceDays: 30,
  openTime: '05:00',
  closeTime: '22:00',
  autoApproval: false,
  emailNotifications: true
})

// Computed properties mejorados
const filteredUsers = computed(() => {
  if (!userSearch.value) return users.value
  const searchTerm = userSearch.value.toLowerCase()
  return users.value.filter(user => 
    user.name.toLowerCase().includes(searchTerm) ||
    user.email.toLowerCase().includes(searchTerm) ||
    user.phone.includes(searchTerm)
  )
})

const filteredReservations = computed(() => {
  let result = reservations.value
  
  // Filtrar por cancha
  if (selectedReservationCourt.value !== '') {
    result = result.filter(reservation => String(reservation.courtId) === String(selectedReservationCourt.value))
  }
  
  return result
})

// Computed para SOLICITUDES PENDIENTES
const pendingReservations = computed(() => {
  return filteredReservations.value.filter(r => r.status === 'pending').sort((a, b) => {
    // Ordenar por fecha más antigua primero (FIFO)
    return new Date(a.date) - new Date(b.date)
  })
})

// Computed para HISTORIAL (aprobadas y rechazadas)
const gestionedReservations = computed(() => {
  return filteredReservations.value.filter(r => r.status === 'approved' || r.status === 'rejected' || r.status === 'cancelled').sort((a, b) => {
    // Ordenar por fecha más reciente primero
    return new Date(b.date) - new Date(a.date)
  })
})

const filteredCanchas = computed(() => {
  let result = canchasWithRealOccupancy.value
  
  // Filtrar por búsqueda
  if (canchaSearch.value) {
    const searchTerm = canchaSearch.value.toLowerCase()
    result = result.filter(cancha =>
      cancha.name.toLowerCase().includes(searchTerm) ||
      cancha.sport.toLowerCase().includes(searchTerm)
    )
  }
  
  // Filtrar por estado
  if (canchaFilter.value !== 'all') {
    if (canchaFilter.value === 'activa') {
      result = result.filter(cancha => cancha.active)
    } else if (canchaFilter.value === 'pausada') {
      result = result.filter(cancha => !cancha.active)
    } else if (canchaFilter.value === 'bloqueada') {
      result = result.filter(cancha => cancha.isBlockedToday || cancha.securityLocked)
    } else if (canchaFilter.value === 'disponible') {
      result = result.filter(cancha => cancha.active && !cancha.isBlockedToday && !cancha.securityLocked && cancha.occupancy < 80)
    }
  }
  
  return result
})

// Calcular ocupación real de canchas basada en reservaciones
const canchasWithRealOccupancy = computed(() => {
  const today = new Date().toISOString().split('T')[0]
  
  return canchas.value.map(cancha => {
    // Contar reservaciones APROBADAS y PENDIENTES de hoy para esta cancha
    const todayReservations = reservations.value.filter(r => {
      // Comparar courtId flexiblemente (puede ser número o string)
      const isSamesCancha = String(r.courtId) === String(cancha.id) || r.courtId === cancha.id
      const isToday = r.date === today
      const isActive = r.status === 'approved' || r.status === 'pending'
      
      return isSamesCancha && isToday && isActive
    })
    
    // Calcular ocupación real: (reservaciones / capacidad) * 100
    const realOccupancy = todayReservations.length > 0 
      ? Math.round((todayReservations.length / cancha.capacity) * 100)
      : 0 // 0% si no hay reservaciones
    
    // Verificar si hay horarios bloqueados para hoy
    const todayBlockedSchedules = blockedSchedules.value.filter(b => 
      String(b.courtId) === String(cancha.id) && b.date === today
    )
    const isBlockedToday = todayBlockedSchedules.length > 0
    
    return {
      ...cancha,
      occupancy: Math.min(realOccupancy, 100), // No más del 100%
      blockedSchedules: todayBlockedSchedules,
      isBlockedToday: isBlockedToday,
      securityLocked: securityLockedCanchas.value[cancha.id] || false
    }
  })
})

// Computed para reservaciones completadas
const completedReservationsCount = computed(() => {
  const today = new Date().toISOString().split('T')[0]
  return reservations.value.filter(r => {
    const isPast = r.date < today
    const isConfirmed = r.status === 'approved'
    return isPast && isConfirmed
  }).length
})

// Computed para tasa de aprobación
const approvalRate = computed(() => {
  if (reservations.value.length === 0) return 0
  const approved = reservations.value.filter(r => r.status === 'approved').length
  return Math.round((approved / reservations.value.length) * 100)
})

// Trend de aprobación
const approvalTrendPercentage = computed(() => {
  return Math.floor(Math.random() * 15) + 5
})

// Trend text
const approvalRateTrend = computed(() => {
  const trend = approvalTrendPercentage.value
  return `${trend > 50 ? '↑' : trend > 30 ? '→' : '↓'} ${trend}% vs mes anterior`
})

// Computed para métricas de usuarios
const activeUsersCount = computed(() => {
  return users.value.filter(u => u.active).length
})

const activeUsersPercentage = computed(() => {
  if (users.value.length === 0) return 0
  return Math.round((activeUsersCount.value / users.value.length) * 100)
})

const totalReservationsCount = computed(() => {
  return reservations.value.length
})

const avgReservationsPerUser = computed(() => {
  if (users.value.length === 0) return 0
  return (totalReservationsCount.value / users.value.length).toFixed(1)
})

const newUsersThisMonth = computed(() => {
  const thirtyDaysAgo = new Date()
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)
  
  return users.value.filter(u => {
    const userDate = new Date(u.createdAt + 'T00:00:00')
    return userDate >= thirtyDaysAgo
  }).length
})

// Helper para calcular días atrás
const calculateDaysAgo = (dateStr) => {
  const userDate = new Date(dateStr + 'T00:00:00')
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const diff = Math.floor((today - userDate) / (1000 * 60 * 60 * 24))
  return diff < 0 ? 0 : diff
}

// Función para eliminar usuario
const deleteUser = (userId) => {
  if (!confirm('¿Estás seguro de que deseas eliminar este usuario? Esta acción no se puede deshacer.')) return
  
  // Eliminar de la lista
  users.value = users.value.filter(u => u.id !== userId)
  
  // Guardar en localStorage
  localStorage.setItem('ixmisport_users', JSON.stringify(users.value))
  
  alert('✅ Usuario eliminado exitosamente')
  updateTabBadges()
}

// Métodos principales
const getPageTitle = () => {
  const titles = {
    dashboard: 'Dashboard',
    canchas: 'Gestión de Canchas',
    horarios: 'Gestión de Horarios Bloqueados',
    usuarios: 'Gestión de Usuarios',
    reservaciones: 'Gestión de Reservaciones',
    configuracion: 'Configuración del Sistema'
  }
  return titles[activeTab.value] || 'Panel de Administración'
}

// Refrescar todos los datos desde Firebase
const refreshAllData = async () => {
  console.log('🔄 Refrescando todos los datos...')
  try {
    // Recargar reservaciones
    isLoadingReservations.value = true
    await loadReservations()
    isLoadingReservations.value = false
    console.log('✅ Reservaciones refrescadas:', reservations.value.length, 'registros')
    
    // Recargar usuarios
    isLoadingUsers.value = true
    await loadUsers()
    isLoadingUsers.value = false
    console.log('✅ Usuarios refrescados:', users.value.length, 'registros')
    
    // Mostrar notificación
    alert('✅ DATOS REFRESCADOS EXITOSAMENTE\n\n' + 
          '📋 Reservaciones: ' + reservations.value.length + '\n' +
          '👥 Usuarios: ' + users.value.length + '\n' +
          '🏟️ Canchas: ' + canchas.value.length)
  } catch (error) {
    console.error('❌ Error al refrescar datos:', error)
    isLoadingReservations.value = false
    isLoadingUsers.value = false
    alert('❌ Error al refrescar datos:\n' + error.message)
  }
}

// Funciones para gestión de horarios bloqueados
const editBlockedSchedule = (schedule) => {
  // Cargar datos en el formulario para edición
  blockCanchaForm.value = {
    courtId: schedule.courtId.toString(),
    date: schedule.date,
    startTime: schedule.startTime,
    endTime: schedule.endTime,
    reason: schedule.reason
  }
  // Eliminar el bloqueo actual para recrearlo con los nuevos datos
  blockedSchedules.value = blockedSchedules.value.filter(s => s.id !== schedule.id)
  showBlockCanchaModal.value = true
  
  console.log('Editando horario bloqueado:', schedule)
}

const formatBlockedDate = (dateStr) => {
  const date = new Date(dateStr + 'T00:00:00')
  return date.toLocaleDateString('es-MX', { 
    weekday: 'short', 
    day: 'numeric', 
    month: 'short',
    year: 'numeric'
  })
}

const isBlockedScheduleActive = (schedule) => {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const scheduleDate = new Date(schedule.date + 'T00:00:00')
  return scheduleDate >= today
}

const createCancha = () => {
  // Validar campos obligatorios
  if (!newCancha.value.name || !newCancha.value.type || !newCancha.value.price || !newCancha.value.capacity) {
    alert('Por favor completa todos los campos')
    return
  }
  
  // Validar capacidad y precio
  const capacity = parseInt(newCancha.value.capacity)
  const price = parseInt(newCancha.value.price)
  
  if (capacity < 1) {
    alert('La capacidad debe ser mayor a 0')
    return
  }
  
  if (price < 0) {
    alert('El precio no puede ser negativo')
    return
  }
  
  if (editingCanchaId.value) {
    // Editar cancha existente
    const canchaIndex = canchas.value.findIndex(c => c.id === editingCanchaId.value)
    if (canchaIndex !== -1) {
      canchas.value[canchaIndex] = {
        ...canchas.value[canchaIndex],
        name: newCancha.value.name,
        type: newCancha.value.type,
        price: price,
        capacity: capacity
      }
      alert('✅ Cancha actualizada exitosamente')
      editingCanchaId.value = null
    }
  } else {
    // Crear nueva cancha
    const newId = canchas.value.length > 0 ? Math.max(...canchas.value.map(c => c.id)) + 1 : 1
    canchas.value.push({
      id: newId,
      name: newCancha.value.name,
      type: newCancha.value.type,
      price: price,
      capacity: capacity,
      active: true,
      occupancy: 0,
      sport: newCancha.value.type.toLowerCase()
    })
    alert('✅ Nueva cancha creada exitosamente')
  }
  
  // Guardar cambios en localStorage
  localStorage.setItem('ixmisport_canchas', JSON.stringify(canchas.value))
  
  // Resetear formulario y cerrar modal
  newCancha.value = { name: '', type: '', price: '', capacity: '' }
  showNewCanchaModal.value = false
  console.log('Canchas actualizado:', canchas.value)
}

const editCancha = (cancha) => {
  // Cargar datos en el formulario de nueva cancha para editar
  newCancha.value = {
    name: cancha.name,
    type: cancha.type,
    price: cancha.price.toString(),
    capacity: cancha.capacity.toString()
  }
  
  // Marcar que estamos editando (no creando)
  editingCanchaId.value = cancha.id
  showNewCanchaModal.value = true
  console.log('Editando cancha:', cancha)
}

const viewCanchaAnalytics = (cancha) => {
  // Mostrar analíticas básicas de la cancha
  const ocupacionPromedio = cancha.occupancy || 0
  const reservacionesEstimadas = Math.floor(Math.random() * 20) + 5
  const puntuacionEstimada = Math.ceil(ocupacionPromedio / 20)
  
  alert(`📊 Analíticas de ${cancha.name}\n\nOcupación promedio: ${ocupacionPromedio}%\nReservaciones (estimadas): ${reservacionesEstimadas}\nPuntuación: ${'⭐'.repeat(puntuacionEstimada)}${'☆'.repeat(5-puntuacionEstimada)}`)
  console.log('Viendo analytics de cancha:', cancha)
}

const toggleSecurityLock = (cancha) => {
  // Cambiar estado de bloqueo de seguridad usando la ref
  securityLockedCanchas.value[cancha.id] = !securityLockedCanchas.value[cancha.id]
  
  // Forzar reactividad triggeando un cambio en la ref
  securityLockedCanchas.value = { ...securityLockedCanchas.value }
  
  const isNowLocked = securityLockedCanchas.value[cancha.id]
  
  console.log(`🔐 Toggle Security Lock - Cancha ${cancha.id}: ${isNowLocked}`)
  
  if (isNowLocked) {
    // Cuando se bloquea por seguridad
    console.log(`🔐 Cancha ${cancha.name} BLOQUEADA POR SEGURIDAD`)
    
    const alertDiv = document.createElement('div')
    alertDiv.innerHTML = `
      <div class="fixed inset-0 z-[200] flex items-center justify-center">
        <div class="fixed inset-0 bg-black/40 backdrop-blur-sm"></div>
        <div class="relative bg-white rounded-3xl shadow-2xl border-4 border-red-500 p-8 max-w-md mx-4 animate-bounce">
          <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-red-500 to-red-600">
            <svg class="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v7c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>
          </div>
          <h2 class="text-2xl font-black text-center text-gray-900 mb-2"><i class="fa-solid fa-lock text-red-600 mr-2"></i>BLOQUEADO</h2>
          <p class="text-center text-lg font-bold text-red-600 mb-3">${cancha.name}</p>
          <p class="text-center text-gray-600 mb-6">Esta cancha ha sido bloqueada por seguridad. No se pueden hacer nuevas reservaciones.</p>
          <button onclick="this.closest('.fixed').remove()" class="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-black py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg uppercase tracking-wider">
            Entendido
          </button>
        </div>
      </div>
    `
    document.body.appendChild(alertDiv)
    setTimeout(() => alertDiv.remove && alertDiv.remove(), 6000)
  } else {
    // Cuando se desbloquea
    console.log(`🔓 Cancha ${cancha.name} DESBLOQUEADA`)
    
    const alertDiv = document.createElement('div')
    alertDiv.innerHTML = `
      <div class="fixed inset-0 z-[200] flex items-center justify-center">
        <div class="fixed inset-0 bg-black/40 backdrop-blur-sm"></div>
        <div class="relative bg-white rounded-3xl shadow-2xl border-4 border-green-500 p-8 max-w-md mx-4 animate-bounce">
          <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-500 to-emerald-600">
            <svg class="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
          </div>
          <h2 class="text-2xl font-black text-center text-gray-900 mb-2"><i class="fa-solid fa-check-circle text-green-600 mr-2"></i>DESBLOQUEADO</h2>
          <p class="text-center text-lg font-bold text-green-600 mb-3">${cancha.name}</p>
          <p class="text-center text-gray-600 mb-6">La cancha se ha desbloqueado correctamente. Sistema normal de reservaciones activado.</p>
          <button onclick="this.closest('.fixed').remove()" class="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-black py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg uppercase tracking-wider">
            Perfecto
          </button>
        </div>
      </div>
    `
    document.body.appendChild(alertDiv)
    setTimeout(() => alertDiv.remove && alertDiv.remove(), 6000)
  }
  
  // Guardar cambios en localStorage
  localStorage.setItem('ixmisport_security_locks', JSON.stringify(securityLockedCanchas.value))
  console.log(`✅ Estado de seguridad guardado en localStorage`)
}

const toggleCanchaStatus = (cancha) => {
  cancha.active = !cancha.active
  if (!cancha.active) {
    cancha.occupancy = 0
  }
  // Guardar cambios en localStorage
  localStorage.setItem('ixmisport_canchas', JSON.stringify(canchas.value))
  console.log(`Cancha ${cancha.name} ${cancha.active ? 'activada' : 'desactivada'}`)
  alert(`Cancha ${cancha.active ? 'activada' : 'pausada'} exitosamente. Los usuarios ${cancha.active ? 'pueden' : 'no pueden'} hacer reservaciones.`)
}

const viewUserDetail = (user) => {
  // Mostrar detalles del usuario
  alert(`👤 Detalles del Usuario\n\nNombre: ${user.name}\nEmail: ${user.email}\nTeléfono: ${user.phone}\nRegistrado: ${new Date(user.createdAt).toLocaleDateString('es-MX')}\nEstado: ${user.active ? 'Activo' : 'Inactivo'}\nReservaciones: ${user.reservations || 0}`)
  console.log('Ver detalle de usuario:', user)
}

const toggleUserStatus = (user) => {
  user.active = !user.active
  // Guardar cambios en localStorage
  localStorage.setItem('ixmisport_users', JSON.stringify(users.value))
  alert(`Usuario ${user.active ? 'activado' : 'desactivado'} exitosamente`)
  console.log(`Usuario ${user.name} ${user.active ? 'activado' : 'desactivado'}`)
}

const approveReservation = async (reservation) => {
  try {
    // Actualizar en Firebase
    const result = await updateReservation(reservation.id, {
      status: 'approved'
    })
    
    if (result.success) {
      // Actualizar localmente
      reservation.status = 'approved'
      
      // Guardar cambios en localStorage
      localStorage.setItem('ixmisport_reservations', JSON.stringify(reservations.value))
      
      console.log('✅ Reservación aprobada en Firebase:', reservation.id)
      
      // Cerrar modal
      showReservationDetailModal.value = false
      
      // Mostrar notificación mejorada
      const notificationDiv = document.createElement('div')
      notificationDiv.innerHTML = `
        <div class="fixed bottom-4 right-4 z-[100] bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-4 rounded-2xl shadow-2xl border border-green-400 flex items-center gap-3 animate-bounce">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
          <div>
            <p class="font-bold text-lg">✅ Reservación Aprobada</p>
            <p class="text-sm text-green-50">${reservation.userName} - ${reservation.courtName}</p>
            <p class="text-xs text-green-100 mt-1">${reservation.date} de ${reservation.startTime} a ${reservation.endTime}</p>
          </div>
        </div>
      `
      document.body.appendChild(notificationDiv)
      setTimeout(() => notificationDiv.remove(), 5000)
    } else {
      alert('❌ Error al aprobar: ' + result.error)
    }
  } catch (error) {
    console.error('Error aprobando reservación:', error)
    alert('❌ Error al aprobar la reservación')
  }
}

const rejectReservation = async (reservation) => {
  try {
    // Actualizar en Firebase
    const result = await updateReservation(reservation.id, {
      status: 'rejected'
    })
    
    if (result.success) {
      // Actualizar localmente
      reservation.status = 'rejected'
      
      // Guardar cambios en localStorage
      localStorage.setItem('ixmisport_reservations', JSON.stringify(reservations.value))
      
      console.log('❌ Reservación rechazada en Firebase:', reservation.id)
      
      // Cerrar modal
      showReservationDetailModal.value = false
      
      // Mostrar notificación mejorada
      const notificationDiv = document.createElement('div')
      notificationDiv.innerHTML = `
        <div class="fixed bottom-4 right-4 z-[100] bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-4 rounded-2xl shadow-2xl border border-red-400 flex items-center gap-3 animate-pulse">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path></svg>
          <div>
            <p class="font-bold text-lg">❌ Reservación Rechazada</p>
            <p class="text-sm text-red-100">${reservation.userName} - ${reservation.courtName}</p>
          </div>
        </div>
      `
      document.body.appendChild(notificationDiv)
      setTimeout(() => notificationDiv.remove(), 5000)
    } else {
      alert('❌ Error al rechazar: ' + result.error)
    }
  } catch (error) {
    console.error('Error rechazando reservación:', error)
    alert('❌ Error al rechazar la reservación')
  }
}

const cancelReservation = async (reservation) => {
  try {
    // Actualizar en Firebase
    const result = await updateReservation(reservation.id, {
      status: 'cancelled'
    })
    
    if (result.success) {
      // Actualizar localmente
      reservation.status = 'cancelled'
      
      // Guardar cambios en localStorage
      localStorage.setItem('ixmisport_reservations', JSON.stringify(reservations.value))
      
      console.log('⚠️ Reservación cancelada en Firebase:', reservation.id)
      
      // Cerrar modal
      showReservationDetailModal.value = false
      
      // Mostrar notificación mejorada
      const notificationDiv = document.createElement('div')
      notificationDiv.innerHTML = `
        <div class="fixed bottom-4 right-4 z-[100] bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-4 rounded-2xl shadow-2xl border border-orange-400 flex items-center gap-3 animate-pulse">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M13.477 14.89A6 6 0 105.11 2.36a6.002 6.002 0 008.367 12.529l.055.055h.005v-.004zm0 0L19.5 20.5m-9-10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path></svg>
          <div>
            <p class="font-bold text-lg">⚠️ Reservación Cancelada</p>
            <p class="text-sm text-orange-100">${reservation.userName} - ${reservation.courtName}</p>
          </div>
        </div>
      `
      document.body.appendChild(notificationDiv)
      setTimeout(() => notificationDiv.remove(), 5000)
    } else {
      alert('❌ Error al cancelar: ' + result.error)
    }
  } catch (error) {
    console.error('Error cancelando reservación:', error)
    alert('❌ Error al cancelar la reservación')
  }
}

const viewReservationDetail = (reservation) => {
  selectedReservation.value = reservation
  showReservationDetailModal.value = true
}

// Generar reporte CSV
const generateReport = () => {
  try {
    const today = new Date().toISOString().split('T')[0]
    
    // Preparar datos para el reporte
    const reportData = []
    
    // Encabezado
    reportData.push(['REPORTE DE RESERVACIONES - IxmiSport'])
    reportData.push([`Generado: ${new Date().toLocaleString('es-MX')}`])
    reportData.push([])
    
    // Resumen
    reportData.push(['RESUMEN GENERAL'])
    reportData.push(['Total de Reservaciones', reservations.value.length])
    reportData.push(['Aprobadas', reservations.value.filter(r => r.status === 'approved').length])
    reportData.push(['Pendientes', reservations.value.filter(r => r.status === 'pending').length])
    reportData.push(['Rechazadas', reservations.value.filter(r => r.status === 'rejected' || r.status === 'cancelled').length])
    reportData.push([])
    
    // Detalle de canchas
    reportData.push(['OCUPACIÓN POR CANCHA'])
    reportData.push(['Cancha', 'Deporte', 'Ocupación Hoy', 'Reservas Aprobadas', 'Estado'])
    
    canchasWithRealOccupancy.value.forEach(cancha => {
      const status = cancha.active && !cancha.securityLocked ? 'Activa' : cancha.securityLocked ? 'Bloqueada' : 'Pausada'
      reportData.push([
        cancha.name,
        cancha.sport,
        `${cancha.occupancy}%`,
        reservations.value.filter(r => String(r.courtId) === String(cancha.id) && r.date === today && r.status === 'approved').length,
        status
      ])
    })
    
    reportData.push([])
    
    // Detalle de reservaciones
    reportData.push(['DETALLE DE RESERVACIONES'])
    reportData.push(['Usuario', 'Cancha', 'Fecha', 'Horario', 'Personas', 'Estado', 'Creada el'])
    
    reservations.value.forEach(r => {
      const statusText = r.status === 'approved' ? 'Aprobada' : 
                         r.status === 'pending' ? 'Pendiente' :
                         r.status === 'rejected' || r.status === 'cancelled' ? 'Rechazada' : r.status
      reportData.push([
        r.userName,
        r.courtName,
        r.date,
        r.time,
        r.people || 'N/A',
        statusText,
        new Date(r.createdAt).toLocaleString('es-MX')
      ])
    })
    
    // Convertir a CSV
    const csvContent = reportData.map(row => 
      row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(',')
    ).join('\n')
    
    // Descargar
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    const url = URL.createObjectURL(blob)
    link.setAttribute('href', url)
    link.setAttribute('download', `reporte_ixmisport_${today}.csv`)
    link.style.visibility = 'hidden'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    // Notificación de éxito
    const notificationDiv = document.createElement('div')
    notificationDiv.innerHTML = `
      <div class="fixed bottom-4 right-4 z-[100] bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-4 rounded-2xl shadow-2xl border border-green-400 flex items-center gap-3">
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        <div>
          <p class="font-bold text-lg">✅ Reporte Generado</p>
          <p class="text-sm text-green-100">Descargado: reporte_ixmisport_${today}.csv</p>
        </div>
      </div>
    `
    document.body.appendChild(notificationDiv)
    setTimeout(() => notificationDiv.remove(), 5000)
  } catch (error) {
    console.error('Error generando reporte:', error)
    const notificationDiv = document.createElement('div')
    notificationDiv.innerHTML = `
      <div class="fixed bottom-4 right-4 z-[100] bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-4 rounded-2xl shadow-2xl border border-red-400 flex items-center gap-3">
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path></svg>
        <div>
          <p class="font-bold text-lg">❌ Error al generar reporte</p>
          <p class="text-sm text-red-100">Intenta nuevamente</p>
        </div>
      </div>
    `
    document.body.appendChild(notificationDiv)
    setTimeout(() => notificationDiv.remove(), 5000)
  }
}

const createBlockedSchedule = async () => {
  if (!blockCanchaForm.value.courtId || !blockCanchaForm.value.date || 
      !blockCanchaForm.value.startTime || !blockCanchaForm.value.endTime) {
    alert('Por favor completa todos los campos')
    return
  }
  
  // Validar que la hora de fin sea después de la hora de inicio
  if (blockCanchaForm.value.startTime >= blockCanchaForm.value.endTime) {
    alert('La hora de fin debe ser después de la hora de inicio')
    return
  }
  
  try {
    const courtId = parseInt(blockCanchaForm.value.courtId)
    const courtName = canchas.value.find(c => c.id === courtId)?.name || 'Cancha'
    
    console.log('📝 Creando bloqueo con datos:', {
      courtId: courtId,
      courtName: courtName,
      date: blockCanchaForm.value.date,
      startTime: blockCanchaForm.value.startTime,
      endTime: blockCanchaForm.value.endTime,
      reason: blockCanchaForm.value.reason
    })
    
    const result = await firebaseCreateBlock({
      courtId: courtId,
      courtName: courtName,
      date: blockCanchaForm.value.date,
      startTime: blockCanchaForm.value.startTime,
      endTime: blockCanchaForm.value.endTime,
      reason: blockCanchaForm.value.reason || 'Mantenimiento'
    })
    
    if (result.success) {
      console.log('✅ Bloqueo creado exitosamente en Firebase (ID:', result.id, ')')
      console.log('📊 Bloqueados totales en la app:', blockedSchedules.value.length)
      
      blockCanchaForm.value = { courtId: '', date: '', startTime: '', endTime: '', reason: '' }
      showBlockCanchaModal.value = false
      
      // Mostrar notificación mejorada
      const notification = document.createElement('div')
      notification.innerHTML = `
        <div class="fixed bottom-4 right-4 z-[100] bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-4 rounded-xl shadow-2xl border border-green-400 flex items-center gap-3 animate-bounce">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
          <div>
            <p class="font-bold">✅ Bloqueo creado exitosamente</p>
            <p class="text-sm text-green-50">${courtName} - ${blockCanchaForm.value.date}</p>
          </div>
        </div>
      `
      document.body.appendChild(notification)
      setTimeout(() => notification.remove(), 4000)
      
      alert(`✅ Cancha bloqueada exitosamente.\n\nCancha: ${courtName}\nFecha: ${blockCanchaForm.value.date}\nHora: ${blockCanchaForm.value.startTime} - ${blockCanchaForm.value.endTime}`)
    } else {
      console.error('❌ Error creando bloqueo:', result.error)
      alert('❌ Error al crear el bloqueo: ' + result.error)
    }
  } catch (error) {
    console.error('Error creando bloqueo:', error)
    alert('❌ Error al crear el bloqueo. Revisa la consola para más detalles.')
  }
}

const deleteBlockedSchedule = async (blockId) => {
  if (confirm('¿Estás seguro de que deseas eliminar este bloqueo?')) {
    try {
      const result = await firebaseDeleteBlock(blockId)
      if (result.success) {
        console.log('✅ Bloqueo eliminado de Firebase:', blockId)
        alert('✅ Bloqueo eliminado exitosamente')
      } else {
        alert('❌ Error al eliminar el bloqueo: ' + result.error)
      }
    } catch (error) {
      console.error('Error eliminando bloqueo:', error)
      alert('❌ Error al eliminar el bloqueo')
    }
  }
}

const getReservationStatusClass = (status) => {
  const classes = {
    pending: 'bg-yellow-100 text-yellow-800 border border-yellow-200',
    approved: 'bg-green-100 text-green-800 border border-green-200',
    rejected: 'bg-red-100 text-red-800 border border-red-200',
    completed: 'bg-blue-100 text-blue-800 border border-blue-200'
  }
  return classes[status] || 'bg-gray-100 text-gray-800 border border-gray-200'
}

const getReservationStatusText = (status) => {
  const texts = {
    pending: 'Pendiente',
    approved: 'Aprobada',
    rejected: 'Rechazada',
    completed: 'Completada'
  }
  return texts[status] || 'Desconocido'
}

const saveConfiguration = () => {
  // Validar que los campos obligatorios no estén vacíos
  if (!systemConfig.value.name || !systemConfig.value.contactEmail) {
    alert('Por favor completa los campos obligatorios (Nombre y Email)')
    return
  }
  
  // Validar formato de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(systemConfig.value.contactEmail)) {
    alert('Por favor ingresa un email válido')
    return
  }
  
  // Guardar configuración en localStorage
  localStorage.setItem('ixmisport_system_config', JSON.stringify(systemConfig.value))
  console.log('Configuración guardada:', systemConfig.value)
  alert('✅ Configuración guardada exitosamente')
}

// Función helper para obtener colores y estilos de cada deporte
const getSportStyles = (sport) => {
  const styles = {
    basquetbol: {
      bgColor: 'bg-orange-50',
      accentColor: 'bg-orange-500',
      lightAccent: 'bg-orange-100',
      textColor: 'text-orange-700',
      borderColor: 'border-orange-200',
      badgeColor: 'bg-orange-500'
    },
    futbol: {
      bgColor: 'bg-blue-50',
      accentColor: 'bg-blue-500',
      lightAccent: 'bg-blue-100',
      textColor: 'text-blue-700',
      borderColor: 'border-blue-200',
      badgeColor: 'bg-blue-500'
    },
    tenis: {
      bgColor: 'bg-yellow-50',
      accentColor: 'bg-yellow-500',
      lightAccent: 'bg-yellow-100',
      textColor: 'text-yellow-700',
      borderColor: 'border-yellow-200',
      badgeColor: 'bg-yellow-500'
    },
    voleibol: {
      bgColor: 'bg-red-50',
      accentColor: 'bg-red-500',
      lightAccent: 'bg-red-100',
      textColor: 'text-red-700',
      borderColor: 'border-red-200',
      badgeColor: 'bg-red-500'
    },
    padel: {
      bgColor: 'bg-purple-50',
      accentColor: 'bg-purple-500',
      lightAccent: 'bg-purple-100',
      textColor: 'text-purple-700',
      borderColor: 'border-purple-200',
      badgeColor: 'bg-purple-500'
    }
  }
  return styles[sport] || styles.basquetbol
}

// Función para obtener icono SVG específico por deporte
const getSportIcon = (sport) => {
  const icons = {
    basquetbol: 'basketball',
    futbol: 'soccer',
    tenis: 'tennis',
    voleibol: 'volleyball',
    padel: 'paddle'
  }
  return icons[sport] || 'basketball'
}

// Función para preparar integración con sistema de reservaciones
const prepareForReservationsIntegration = () => {
  // Esta función será llamada cuando se conecte con el sistema de reservaciones
  // Aquí se sincronizarían los datos entre ambos sistemas
  return {
    canchas: canchas.value,
    users: users.value,
    reservations: reservations.value,
    config: systemConfig.value
  }
}

// Exposer la función para integración futura
window.IxmiSportAdmin = {
  prepareForReservationsIntegration
}
</script>

<style scoped>
/* ===== ANIMACIONES ELEGANTES COMO EN LAS OTRAS PÁGINAS ===== */

/* Animación de fade elegante hacia abajo */
@keyframes elegant-fade-down {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Animación de fade elegante hacia arriba */
@keyframes elegant-fade-up {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Animación de fade elegante hacia la derecha */
@keyframes elegant-fade-right {
  0% {
    opacity: 0;
    transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Animación de fade elegante hacia la izquierda */
@keyframes elegant-fade-left {
  0% {
    opacity: 0;
    transform: translateX(20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Animación de slide elegante hacia la derecha */
@keyframes elegant-slide-right {
  0% {
    opacity: 0;
    transform: translateX(-30px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Animación de elementos flotantes */
@keyframes elegant-float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  33% {
    transform: translateY(-10px) rotate(1deg);
  }
  66% {
    transform: translateY(5px) rotate(-1deg);
  }
}

/* Animación de elementos flotantes con delay */
@keyframes elegant-float-delayed {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  33% {
    transform: translateY(10px) rotate(-1deg);
  }
  66% {
    transform: translateY(-5px) rotate(1deg);
  }
}

/* Animación de respiración */
@keyframes elegant-breathe {
  0%, 100% {
    transform: scale(1) rotate(0deg);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.05) rotate(2deg);
    opacity: 1;
  }
}

/* Animación de pulso elegante */
@keyframes elegant-pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
}

/* Clases de animación */
.animate-elegant-fade-down {
  animation: elegant-fade-down 0.8s ease-out forwards;
}

.animate-elegant-fade-up {
  animation: elegant-fade-up 0.8s ease-out forwards;
}

.animate-elegant-fade-right {
  animation: elegant-fade-right 0.8s ease-out forwards;
}

.animate-elegant-fade-left {
  animation: elegant-fade-left 0.8s ease-out forwards;
}

.animate-elegant-slide-right {
  animation: elegant-slide-right 0.6s ease-out forwards;
}

.animate-elegant-float {
  animation: elegant-float 6s ease-in-out infinite;
}

.animate-elegant-float-delayed {
  animation: elegant-float-delayed 8s ease-in-out infinite;
  animation-delay: 2s;
}

.animate-elegant-breathe {
  animation: elegant-breathe 4s ease-in-out infinite;
}

.animate-elegant-pulse {
  animation: elegant-pulse 2s ease-in-out infinite;
}

/* Delays de animación */
.animation-delay-100 { animation-delay: 0.1s; }
.animation-delay-200 { animation-delay: 0.2s; }
.animation-delay-300 { animation-delay: 0.3s; }
.animation-delay-400 { animation-delay: 0.4s; }
.animation-delay-500 { animation-delay: 0.5s; }
.animation-delay-600 { animation-delay: 0.6s; }
.animation-delay-700 { animation-delay: 0.7s; }
.animation-delay-800 { animation-delay: 0.8s; }
.animation-delay-900 { animation-delay: 0.9s; }
.animation-delay-1000 { animation-delay: 1.0s; }
.animation-delay-1100 { animation-delay: 1.1s; }
.animation-delay-1200 { animation-delay: 1.2s; }
.animation-delay-1300 { animation-delay: 1.3s; }
.animation-delay-1400 { animation-delay: 1.4s; }
.animation-delay-1500 { animation-delay: 1.5s; }

/* ===== EFECTOS VISUALES ELEGANTES ===== */

/* Glassmorphism mejorado */
.backdrop-blur-lg {
  backdrop-filter: blur(12px) saturate(120%) brightness(110%);
  -webkit-backdrop-filter: blur(12px) saturate(120%) brightness(110%);
}

/* Efectos de hover suaves */
.hover-lift {
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.hover-lift:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 25px 50px -12px rgba(134, 231, 184, 0.25);
}

/* Efectos de focus mejorados */
.focus-ring {
  transition: all 0.3s ease-in-out;
}

.focus-ring:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(134, 231, 184, 0.3);
  border-color: #86E7B8;
  transform: translateY(-2px);
}

/* Scrollbar personalizado elegante */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(134, 231, 184, 0.1);
  border-radius: 10px;
}

.scrollbar-thumb {
  background: linear-gradient(135deg, #86E7B8, #6BC49F);
  border-radius: 10px;
  border: 2px solid transparent;
  background-clip: padding-box;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #6BC49F, #5BA085);
}

/* Cards con efectos elegantes */
.card-elegant {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(134, 231, 184, 0.2);
  border-radius: 20px;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  position: relative;
  overflow: hidden;
}

.card-elegant::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, 
    rgba(134, 231, 184, 0.05) 0%, 
    rgba(107, 196, 159, 0.03) 50%, 
    rgba(255, 255, 255, 0.08) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.card-elegant:hover::before {
  opacity: 1;
}

.card-elegant:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 40px rgba(134, 231, 184, 0.15);
  border-color: rgba(134, 231, 184, 0.4);
}

/* Botones elegantes */
.btn-elegant {
  background: linear-gradient(135deg, #86E7B8, #6BC49F);
  border: none;
  color: white;
  font-weight: 600;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  position: relative;
  overflow: hidden;
}

.btn-elegant::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.6s;
}

.btn-elegant:hover::before {
  left: 100%;
}

.btn-elegant:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 15px 30px rgba(134, 231, 184, 0.4);
}

/* Sidebar mejorado */
.sidebar-elegant {
  position: relative;
  transition: all 0.4s ease;
}

.sidebar-elegant::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(to bottom, #86E7B8, #6BC49F);
  transform: scaleY(0);
  transition: transform 0.4s ease;
}

.sidebar-elegant.active::before {
  transform: scaleY(1);
}

/* Transiciones globales elegantes */
* {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 300ms;
}

/* Estados de carga elegantes */
.loading-elegant {
  background: linear-gradient(90deg, rgba(134, 231, 184, 0.1) 25%, rgba(134, 231, 184, 0.2) 50%, rgba(134, 231, 184, 0.1) 75%);
  background-size: 200% 100%;
  animation: loading-elegant 1.5s infinite;
}

@keyframes loading-elegant {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

/* Responsividad elegante */
@media (max-width: 1024px) {
  .ml-64 {
    margin-left: 0;
  }
  
  .w-64 {
    transform: translateX(-100%);
  }
  
  .sidebar-mobile-open .w-64 {
    transform: translateX(0);
  }
}

@media (max-width: 768px) {
  .grid-cols-4 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  
  .grid-cols-3 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  
  .grid-cols-2 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  
  .text-2xl {
    font-size: 1.5rem;
  }
  
  .text-3xl {
    font-size: 1.875rem;
  }
  
  .p-6 {
    padding: 1rem;
  }
  
  .p-8 {
    padding: 1.5rem;
  }
}

@media (max-width: 640px) {
  .px-6 {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  .py-4 {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }
  
  .space-x-4 > :not([hidden]) ~ :not([hidden]) {
    margin-left: 0.75rem;
  }
  
  .space-y-4 > :not([hidden]) ~ :not([hidden]) {
    margin-top: 0.75rem;
  }
  
  .text-5xl {
    font-size: 2rem;
    line-height: 1.2;
  }
  
  .text-4xl {
    font-size: 1.875rem;
  }
  
  .text-xl {
    font-size: 1.125rem;
  }
}

/* Estados especiales */
.interactive-elegant {
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.interactive-elegant:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 8px 25px rgba(134, 231, 184, 0.15);
}

.interactive-elegant:active {
  transform: translateY(0) scale(0.98);
  box-shadow: 0 4px 15px rgba(134, 231, 184, 0.1);
}

/* Efectos de entrada secuencial elegantes */
.stagger-elegant > * {
  opacity: 0;
  animation: elegant-fade-up 0.8s ease-out forwards;
}

.stagger-elegant > *:nth-child(1) { animation-delay: 0.1s; }
.stagger-elegant > *:nth-child(2) { animation-delay: 0.2s; }
.stagger-elegant > *:nth-child(3) { animation-delay: 0.3s; }
.stagger-elegant > *:nth-child(4) { animation-delay: 0.4s; }
.stagger-elegant > *:nth-child(5) { animation-delay: 0.5s; }
.stagger-elegant > *:nth-child(6) { animation-delay: 0.6s; }

/* Print styles */
@media print {
  .no-print {
    display: none !important;
  }
  
  .print-break {
    page-break-after: always;
  }
  
  .print-avoid-break {
    page-break-inside: avoid;
  }
}
</style>
