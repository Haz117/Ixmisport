<template>
  <div class="min-h-screen min-w-full w-screen h-screen bg-gradient-to-br from-ixmi-50 via-white to-ixmi-100 relative overflow-hidden">
    
    <!-- Elementos decorativos de fondo con movimiento suave -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-16 left-8 w-48 h-48 bg-ixmi-200/15 rounded-full blur-3xl animate-elegant-float"></div>
      <div class="absolute bottom-16 right-8 w-64 h-64 bg-ixmi-300/10 rounded-full blur-3xl animate-elegant-float-delayed"></div>
      <div class="absolute top-1/3 left-1/3 w-40 h-40 bg-ixmi-400/8 rounded-full blur-2xl animate-elegant-breathe"></div>
      <div class="absolute top-1/2 right-1/4 w-32 h-32 bg-ixmi-500/5 rounded-full blur-xl animate-elegant-pulse"></div>
    </div>

    <!-- Sidebar Navigation -->
    <div class="fixed inset-y-0 left-0 z-50 w-64 bg-white/95 backdrop-blur-lg shadow-2xl border-r border-ixmi-200/40 transform transition-all duration-500 ease-in-out opacity-0 animate-elegant-slide-right animation-delay-200">
      <!-- Logo Section -->
      <div class="flex items-center justify-center h-16 px-6 border-b border-ixmi-200/30 bg-gradient-to-r from-ixmi-50/50 to-ixmi-100/30">
        <div class="flex items-center space-x-3 opacity-0 animate-elegant-fade-down animation-delay-400">
          <div class="relative">
            <div class="w-10 h-10 bg-gradient-to-br from-ixmi-500 via-ixmi-400 to-ixmi-300 rounded-xl flex items-center justify-center shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <div class="absolute -top-1 -right-1 w-3 h-3 bg-ixmi-400 rounded-full border-2 border-white animate-elegant-pulse"></div>
          </div>
          <div>
            <h1 class="text-lg font-bold bg-gradient-to-r from-ixmi-600 to-ixmi-500 bg-clip-text text-transparent">IxmiSport</h1>
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
            @click="activeTab = tab.id"
            :class="[
              'group flex items-center w-full px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 relative overflow-hidden opacity-0 animate-elegant-slide-right',
              activeTab === tab.id 
                ? 'bg-gradient-to-r from-ixmi-500 to-ixmi-400 text-white shadow-lg shadow-ixmi-500/25 transform scale-[1.02]' 
                : 'text-ixmi-700 hover:text-ixmi-600 hover:bg-gradient-to-r hover:from-ixmi-50 hover:to-ixmi-100/50'
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
            <button class="group flex items-center w-full px-4 py-2 text-sm text-ixmi-700 rounded-lg hover:bg-ixmi-50 hover:text-ixmi-600 transition-all duration-300 hover:transform hover:translateX-1">
              <svg class="mr-3 h-4 w-4 text-ixmi-500 group-hover:text-ixmi-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
              Nueva Cancha
            </button>
            <button class="group flex items-center w-full px-4 py-2 text-sm text-ixmi-700 rounded-lg hover:bg-ixmi-50 hover:text-ixmi-600 transition-all duration-300 hover:transform hover:translateX-1">
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
        <div class="flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-ixmi-50/70 to-ixmi-100/30 border border-ixmi-200/40 backdrop-blur-sm">
          <div class="relative">
            <div class="w-10 h-10 bg-gradient-to-br from-ixmi-400 to-ixmi-500 rounded-full flex items-center justify-center shadow-md">
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
    <div class="ml-64 min-h-screen relative z-10">
      <!-- Top Header -->
      <header class="bg-white/90 backdrop-blur-lg shadow-sm border-b border-ixmi-200/40 sticky top-0 z-40 opacity-0 animate-elegant-fade-down animation-delay-300">
        <div class="px-6 py-4">
          <div class="flex items-center justify-between">
            <!-- Page Title and Breadcrumb -->
            <div class="flex items-center space-x-4">
              <div class="opacity-0 animate-elegant-fade-right animation-delay-500">
                <h2 class="text-2xl font-bold text-ixmi-900">{{ getPageTitle() }}</h2>
                <div class="flex items-center space-x-2 text-sm text-ixmi-500/70 mt-1">
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

            <!-- Header Actions -->
            <div class="flex items-center space-x-4 opacity-0 animate-elegant-fade-left animation-delay-700">
              <!-- Search -->
              <div class="relative hidden md:block">
                <input 
                  type="text" 
                  placeholder="Buscar..."
                  class="pl-10 pr-4 py-2 w-64 border border-ixmi-200/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-ixmi-400/50 focus:border-ixmi-400 bg-white/80 backdrop-blur-sm text-sm transition-all duration-300 hover:bg-white/90"
                >
                <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-ixmi-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>

              <!-- Notifications -->
              <div class="relative">
                <button class="relative p-2 text-ixmi-600 hover:text-ixmi-700 hover:bg-ixmi-50 rounded-xl transition-all duration-300 group hover:transform hover:scale-105">
                  <svg class="w-6 h-6 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5.5-5.5a5.5 5.5 0 10-7.5 0L1.5 17H7m8 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                  </svg>
                  <span class="absolute -top-1 -right-1 bg-gradient-to-r from-ixmi-500 to-ixmi-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold animate-elegant-pulse">3</span>
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
          <!-- Key Metrics Cards -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-elegant">
            <div 
              v-for="(metric, index) in metrics" 
              :key="metric.title"
              class="group relative card-elegant p-6 hover-lift opacity-0 animate-elegant-fade-up interactive-elegant"
              :style="{ animationDelay: `${1000 + index * 150}ms` }"
            >
              <!-- Background Gradient -->
              <div :class="['absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500', metric.gradientBg]"></div>
              
              <div class="relative">
                <div class="flex items-center justify-between mb-4">
                  <div :class="['w-12 h-12 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500', metric.color]">
                    <component :is="metric.icon" class="w-6 h-6 text-white" />
                  </div>
                  <div class="text-right">
                    <p class="text-xs font-semibold text-ixmi-500/70 uppercase tracking-wider">{{ metric.period }}</p>
                  </div>
                </div>
                
                <div class="space-y-2">
                  <h3 class="text-sm font-semibold text-ixmi-600">{{ metric.title }}</h3>
                  <div class="flex items-baseline space-x-2">
                    <p class="text-3xl font-bold text-ixmi-900">{{ metric.value }}</p>
                    <span :class="['text-sm font-semibold px-2 py-1 rounded-full', metric.changeColor]">
                      {{ metric.change }}
                    </span>
                  </div>
                  <p class="text-sm text-ixmi-500/70">{{ metric.subtitle }}</p>
                </div>

                <!-- Progress bar for some metrics -->
                <div v-if="metric.progress" class="mt-4">
                  <div class="flex justify-between text-xs text-gray-500 mb-1">
                    <span>Progreso</span>
                    <span>{{ metric.progress }}%</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      :class="['h-2 rounded-full transition-all duration-1000 delay-500', metric.progressColor]"
                      :style="{ width: `${metric.progress}%` }"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Charts and Analytics Section -->
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <!-- Weekly Activity Chart -->
            <div class="lg:col-span-2 bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-gray-200/60">
              <div class="flex items-center justify-between mb-6">
                <div>
                  <h3 class="text-lg font-bold text-gray-900">Actividad Semanal</h3>
                  <p class="text-sm text-gray-500">Reservaciones por día</p>
                </div>
                <div class="flex space-x-2">
                  <button class="px-3 py-1 text-sm bg-ixmi-100 text-ixmi-700 rounded-lg font-medium">7D</button>
                  <button class="px-3 py-1 text-sm text-gray-500 hover:bg-gray-100 rounded-lg">30D</button>
                </div>
              </div>
              
              <div class="space-y-4">
                <div v-for="(day, index) in weeklyReservations" :key="day.day" class="relative">
                  <div class="flex items-center justify-between mb-2">
                    <span class="text-sm font-medium text-gray-700">{{ day.day }}</span>
                    <span class="text-sm font-bold text-gray-900">{{ day.reservations }}</span>
                  </div>
                  <div class="relative w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div 
                      class="h-3 rounded-full bg-gradient-to-r from-ixmi-500 to-ixmi-400 transition-all duration-1000 ease-out"
                      :style="{ 
                        width: `${(day.reservations / Math.max(...weeklyReservations.map(d => d.reservations))) * 100}%`,
                        animationDelay: `${index * 200}ms`
                      }"
                    ></div>
                    <div class="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Recent Activity -->
            <div class="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-gray-200/60">
              <div class="flex items-center justify-between mb-6">
                <div>
                  <h3 class="text-lg font-bold text-gray-900">Actividad Reciente</h3>
                  <p class="text-sm text-gray-500">Últimas acciones</p>
                </div>
                <button class="text-ixmi-600 hover:text-ixmi-700 text-sm font-medium">Ver todo</button>
              </div>
              
              <div class="space-y-4">
                <div 
                  v-for="(activity, index) in recentActivities" 
                  :key="activity.id"
                  class="group flex items-start space-x-3 p-3 rounded-xl hover:bg-ixmi-50/50 transition-all duration-300 cursor-pointer"
                  :style="{ animationDelay: `${index * 100}ms` }"
                >
                  <div :class="['relative w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300', activity.color]">
                    <component :is="activity.icon" class="w-5 h-5 text-white" />
                    <div class="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full border border-gray-200"></div>
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-semibold text-gray-900 group-hover:text-ixmi-700 transition-colors duration-200">{{ activity.title }}</p>
                    <p class="text-sm text-gray-600 mt-1">{{ activity.description }}</p>
                    <div class="flex items-center mt-2 space-x-2">
                      <span class="text-xs text-gray-400">{{ activity.time }}</span>
                      <span class="w-1 h-1 bg-gray-300 rounded-full"></span>
                      <span :class="['text-xs px-2 py-1 rounded-full font-medium', activity.statusColor]">{{ activity.status }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Quick Stats Grid -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-lg">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-blue-100 text-sm font-medium">Usuarios Activos</p>
                  <p class="text-3xl font-bold mt-2">89%</p>
                  <p class="text-blue-200 text-sm mt-1">de 248 usuarios totales</p>
                </div>
                <div class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                  <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white shadow-lg">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-green-100 text-sm font-medium">Tasa de Ocupación</p>
                  <p class="text-3xl font-bold mt-2">76%</p>
                  <p class="text-green-200 text-sm mt-1">promedio esta semana</p>
                </div>
                <div class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                  <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white shadow-lg">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-purple-100 text-sm font-medium">Canchas Activas</p>
                  <p class="text-3xl font-bold mt-2">9</p>
                  <p class="text-purple-200 text-sm mt-1">Todas disponibles</p>
                </div>
                <div class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                  <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
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
              <p class="text-gray-600 mt-1">Administra todas las instalaciones deportivas</p>
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
                class="px-6 py-2 bg-gradient-to-r from-ixmi-500 to-ixmi-400 text-white rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium shadow-md"
              >
                <svg class="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
                Nueva Cancha
              </button>
            </div>
          </div>

          <!-- Canchas Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            <div 
              v-for="(cancha, index) in canchas" 
              :key="cancha.id"
              class="group bg-white/80 backdrop-blur-xl rounded-2xl overflow-hidden shadow-lg border border-gray-200/60 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              :style="{ animationDelay: `${index * 100}ms` }"
            >
              <!-- Image/Visual Section -->
              <div class="relative h-48 bg-gradient-to-br from-ixmi-400 via-ixmi-300 to-ixmi-500 overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                
                <!-- Sport Icon based on type -->
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <svg v-if="cancha.type === 'Fútbol'" class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                    <svg v-else-if="cancha.type === 'Básquetbol'" class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm10 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zM12 6.5c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0 11c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1z"/>
                    </svg>
                    <svg v-else class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                </div>

                <!-- Status Badge -->
                <div class="absolute top-4 right-4">
                  <span :class="[
                    'px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm border',
                    cancha.active 
                      ? 'bg-green-500/90 text-white border-green-400/50' 
                      : 'bg-red-500/90 text-white border-red-400/50'
                  ]">
                    {{ cancha.active ? 'Activa' : 'Inactiva' }}
                  </span>
                </div>

                <!-- Price Tag -->
                <div class="absolute bottom-4 left-4">
                  <div class="bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 border border-white/50">
                    <span class="text-lg font-bold text-gray-900">${{ cancha.price }}</span>
                    <span class="text-sm text-gray-600">/hora</span>
                  </div>
                </div>
              </div>

              <!-- Content Section -->
              <div class="p-6">
                <div class="mb-4">
                  <h3 class="text-lg font-bold text-gray-900 group-hover:text-ixmi-600 transition-colors duration-200">{{ cancha.name }}</h3>
                  <p class="text-sm text-gray-600 mt-1">{{ cancha.type }}</p>
                </div>

                <div class="grid grid-cols-2 gap-4 mb-6">
                  <div class="text-center p-3 bg-gray-50/80 rounded-xl">
                    <p class="text-xs font-semibold text-gray-500 uppercase tracking-wider">Capacidad</p>
                    <p class="text-lg font-bold text-gray-900 mt-1">{{ cancha.capacity }}</p>
                    <p class="text-xs text-gray-500">personas</p>
                  </div>
                  <div class="text-center p-3 bg-gray-50/80 rounded-xl">
                    <p class="text-xs font-semibold text-gray-500 uppercase tracking-wider">Ocupación</p>
                    <p class="text-lg font-bold text-gray-900 mt-1">{{ cancha.occupancy || '75' }}%</p>
                    <p class="text-xs text-gray-500">promedio</p>
                  </div>
                </div>

                <!-- Action Buttons -->
                <div class="flex space-x-2">
                  <button 
                    @click="editCancha(cancha)"
                    class="flex-1 px-4 py-2 text-sm text-ixmi-600 border border-ixmi-300 rounded-xl hover:bg-ixmi-50 hover:border-ixmi-400 transition-all duration-200 font-medium"
                  >
                    Editar
                  </button>
                  <button 
                    @click="viewCanchaAnalytics(cancha)"
                    class="flex-1 px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-xl hover:bg-gray-50 transition-all duration-200 font-medium"
                  >
                    Analytics
                  </button>
                  <button 
                    @click="toggleCanchaStatus(cancha)"
                    :class="[
                      'px-4 py-2 text-sm rounded-xl transition-all duration-200 font-medium',
                      cancha.active 
                        ? 'text-red-600 border border-red-300 hover:bg-red-50' 
                        : 'text-green-600 border border-green-300 hover:bg-green-50'
                    ]"
                  >
                    {{ cancha.active ? 'Pausar' : 'Activar' }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Gestión de Usuarios -->
        <div v-if="activeTab === 'usuarios'" class="space-y-8 animate-slide-up">
          <!-- Header with Search and Filters -->
          <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            <div>
              <h2 class="text-2xl font-bold text-gray-900">Gestión de Usuarios</h2>
              <p class="text-gray-600 mt-1">{{ filteredUsers.length }} usuarios registrados</p>
            </div>
            <div class="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
              <div class="relative">
                <input 
                  v-model="userSearch"
                  type="text" 
                  placeholder="Buscar usuarios..."
                  class="pl-10 pr-4 py-2 w-full sm:w-64 border border-gray-300/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-ixmi-500/20 focus:border-ixmi-400 bg-white/80 backdrop-blur-sm"
                >
                <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
              <select class="px-4 py-2 border border-gray-300/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-ixmi-500/20 focus:border-ixmi-400 bg-white/80">
                <option>Todos los usuarios</option>
                <option>Usuarios activos</option>
                <option>Usuarios inactivos</option>
              </select>
            </div>
          </div>

          <!-- Users Table -->
          <div class="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-gray-200/60 overflow-hidden">
            <div class="overflow-x-auto">
              <table class="w-full">
                <thead>
                  <tr class="bg-gray-50/80 border-b border-gray-200/60">
                    <th class="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Usuario</th>
                    <th class="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Contacto</th>
                    <th class="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Registro</th>
                    <th class="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Actividad</th>
                    <th class="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Estado</th>
                    <th class="px-6 py-4 text-right text-xs font-bold text-gray-600 uppercase tracking-wider">Acciones</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200/60">
                  <tr 
                    v-for="(user, index) in filteredUsers" 
                    :key="user.id"
                    class="group hover:bg-ixmi-50/30 transition-all duration-200"
                    :style="{ animationDelay: `${index * 50}ms` }"
                  >
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center space-x-4">
                        <div class="relative">
                          <div class="w-12 h-12 bg-gradient-to-br from-ixmi-400 to-ixmi-500 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-200">
                            <span class="text-white font-bold text-sm">{{ user.name.charAt(0) }}</span>
                          </div>
                          <div v-if="user.active" class="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
                        </div>
                        <div>
                          <div class="text-sm font-bold text-gray-900 group-hover:text-ixmi-600 transition-colors duration-200">{{ user.name }}</div>
                          <div class="text-sm text-gray-500">ID: {{ user.id.toString().padStart(4, '0') }}</div>
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">{{ user.email }}</div>
                      <div class="text-sm text-gray-500">{{ user.phone || 'Sin teléfono' }}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div>{{ user.createdAt }}</div>
                      <div class="text-xs text-gray-400">hace {{ user.daysAgo || '30' }} días</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm font-medium text-gray-900">{{ user.reservations || '12' }} reservas</div>
                      <div class="text-xs text-gray-500">Última: {{ user.lastActivity || 'hace 2 días' }}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span :class="[
                        'inline-flex items-center px-3 py-1 rounded-full text-xs font-bold',
                        user.active 
                          ? 'bg-green-100 text-green-800 border border-green-200' 
                          : 'bg-red-100 text-red-800 border border-red-200'
                      ]">
                        <div :class="['w-2 h-2 rounded-full mr-2', user.active ? 'bg-green-400' : 'bg-red-400']"></div>
                        {{ user.active ? 'Activo' : 'Inactivo' }}
                      </span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-right">
                      <div class="flex items-center justify-end space-x-2">
                        <button 
                          @click="viewUserDetail(user)"
                          class="p-2 text-ixmi-600 hover:text-ixmi-800 hover:bg-ixmi-100 rounded-lg transition-all duration-200"
                          title="Ver detalles"
                        >
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                          </svg>
                        </button>
                        <button 
                          @click="toggleUserStatus(user)"
                          :class="[
                            'p-2 rounded-lg transition-all duration-200',
                            user.active 
                              ? 'text-red-600 hover:text-red-800 hover:bg-red-100' 
                              : 'text-green-600 hover:text-green-800 hover:bg-green-100'
                          ]"
                          :title="user.active ? 'Desactivar usuario' : 'Activar usuario'"
                        >
                          <svg v-if="user.active" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                          <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- Gestión de Reservaciones -->
        <div v-if="activeTab === 'reservaciones'" class="space-y-8 animate-slide-up">
          <!-- Header with Filters -->
          <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            <div>
              <h2 class="text-2xl font-bold text-gray-900">Gestión de Reservaciones</h2>
              <p class="text-gray-600 mt-1">{{ filteredReservations.length }} reservaciones encontradas</p>
            </div>
            <div class="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
              <select 
                v-model="reservationFilter"
                class="px-4 py-2 border border-gray-300/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-ixmi-500/20 focus:border-ixmi-400 bg-white/80"
              >
                <option value="all">Todas las reservaciones</option>
                <option value="pending">Pendientes de aprobación</option>
                <option value="approved">Aprobadas</option>
                <option value="rejected">Rechazadas</option>
                <option value="completed">Completadas</option>
              </select>
              <button class="px-4 py-2 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-200 font-medium">
                Exportar CSV
              </button>
            </div>
          </div>

          <!-- Reservations List -->
          <div class="space-y-4">
            <div 
              v-for="(reservation, index) in filteredReservations" 
              :key="reservation.id"
              class="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-gray-200/60 hover:shadow-xl transition-all duration-300"
              :style="{ animationDelay: `${index * 50}ms` }"
            >
              <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                <!-- Reservation Info -->
                <div class="flex-1">
                  <div class="flex items-center space-x-4 mb-4">
                    <div class="w-12 h-12 bg-gradient-to-br from-ixmi-400 to-ixmi-500 rounded-xl flex items-center justify-center shadow-md">
                      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 class="text-lg font-bold text-gray-900">{{ reservation.cancha }}</h3>
                      <div class="flex items-center space-x-2">
                        <span :class="['px-3 py-1 rounded-full text-xs font-bold', getReservationStatusClass(reservation.status)]">
                          {{ getReservationStatusText(reservation.status) }}
                        </span>
                        <span v-if="reservation.priority" class="px-2 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-semibold">
                          Prioritaria
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div class="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                    <div class="flex items-center space-x-2">
                      <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                      <span class="font-medium text-gray-700">{{ reservation.userName }}</span>
                    </div>
                    <div class="flex items-center space-x-2">
                      <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                      <span class="text-gray-600">{{ reservation.date }}</span>
                    </div>
                    <div class="flex items-center space-x-2">
                      <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span class="text-gray-600">{{ reservation.time }}</span>
                    </div>
                    <div class="flex items-center space-x-2">
                      <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                      </svg>
                      <span class="font-semibold text-gray-900">${{ reservation.amount || '200' }}</span>
                    </div>
                  </div>
                </div>

                <!-- Action Buttons -->
                <div class="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 lg:ml-6">
                  <button 
                    v-if="reservation.status === 'pending'"
                    @click="approveReservation(reservation)"
                    class="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-xl transition-all duration-200 text-sm font-medium shadow-md hover:shadow-lg"
                  >
                    <svg class="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Aprobar
                  </button>
                  <button 
                    v-if="reservation.status === 'pending'"
                    @click="rejectReservation(reservation)"
                    class="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-xl transition-all duration-200 text-sm font-medium shadow-md hover:shadow-lg"
                  >
                    <svg class="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                    Rechazar
                  </button>
                  <button 
                    @click="viewReservationDetail(reservation)"
                    class="px-4 py-2 border border-ixmi-300 text-ixmi-600 hover:bg-ixmi-50 hover:border-ixmi-400 rounded-xl transition-all duration-200 text-sm font-medium"
                  >
                    Ver Detalle
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Gestión de Horarios Bloqueados -->
        <div v-if="activeTab === 'horarios'" class="space-y-8 animate-slide-up">
          <!-- Header -->
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
            <div>
              <h2 class="text-2xl font-bold text-gray-900">Gestión de Horarios</h2>
              <p class="text-gray-600 mt-1">Bloquea horarios específicos para mantenimiento, eventos o reservas especiales</p>
            </div>
            <button 
              @click="showBlockScheduleModal = true"
              class="px-6 py-3 bg-gradient-to-r from-ixmi-500 to-ixmi-400 text-white rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold shadow-md flex items-center gap-2"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
              Bloquear Horario
            </button>
          </div>

          <!-- Info Card -->
          <div class="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h3 class="font-bold text-amber-900 mb-1">Información Importante</h3>
                <p class="text-amber-800 text-sm">
                  Los horarios bloqueados <strong>no estarán disponibles</strong> para reservaciones públicas. 
                  Horario de operación: <strong>5:00 AM - 10:00 PM</strong>. 
                  Utiliza esta función para mantenimiento, eventos privados o reservas especiales.
                </p>
              </div>
            </div>
          </div>

          <!-- Blocked Schedules List -->
          <div class="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-gray-200/60 overflow-hidden">
            <div class="p-6 border-b border-gray-200/60">
              <h3 class="text-lg font-bold text-gray-900">Horarios Bloqueados Activos</h3>
              <p class="text-sm text-gray-500 mt-1">{{ blockedSchedules.length }} horarios bloqueados</p>
            </div>
            
            <div v-if="blockedSchedules.length === 0" class="p-12 text-center">
              <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
              <p class="text-gray-500 font-medium">No hay horarios bloqueados</p>
              <p class="text-gray-400 text-sm mt-1">Agrega un bloqueo para reservar horarios especiales</p>
            </div>

            <div v-else class="divide-y divide-gray-200/60">
              <div 
                v-for="schedule in blockedSchedules" 
                :key="schedule.id"
                class="p-6 hover:bg-ixmi-50/30 transition-all duration-200"
              >
                <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div class="flex items-start gap-4">
                    <div class="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 class="font-bold text-gray-900">{{ schedule.courtName }}</h4>
                      <div class="flex flex-wrap gap-3 mt-2 text-sm text-gray-600">
                        <span class="flex items-center gap-1">
                          <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                          </svg>
                          {{ schedule.date }}
                        </span>
                        <span class="flex items-center gap-1">
                          <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                          {{ schedule.startTime }} - {{ schedule.endTime }}
                        </span>
                      </div>
                      <p class="text-sm text-gray-500 mt-2">
                        <strong>Motivo:</strong> {{ schedule.reason }}
                      </p>
                    </div>
                  </div>
                  <div class="flex gap-2">
                    <button 
                      @click="editBlockedSchedule(schedule)"
                      class="px-4 py-2 text-sm text-ixmi-600 border border-ixmi-300 rounded-xl hover:bg-ixmi-50 transition-all duration-200 font-medium"
                    >
                      Editar
                    </button>
                    <button 
                      @click="deleteBlockedSchedule(schedule.id)"
                      class="px-4 py-2 text-sm text-red-600 border border-red-300 rounded-xl hover:bg-red-50 transition-all duration-200 font-medium"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Quick Stats -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-gray-200/60">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-semibold text-gray-500">Canchas Totales</p>
                  <p class="text-3xl font-bold text-gray-900 mt-1">9</p>
                </div>
                <div class="w-12 h-12 bg-ixmi-100 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-ixmi-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                </div>
              </div>
              <p class="text-xs text-gray-500 mt-2">4 Basquet • 2 Tennis • 2 Voleibol • 1 Pádel</p>
            </div>
            <div class="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-gray-200/60">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-semibold text-gray-500">Horario de Operación</p>
                  <p class="text-3xl font-bold text-gray-900 mt-1">5AM-10PM</p>
                </div>
                <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
              </div>
              <p class="text-xs text-gray-500 mt-2">17 horas disponibles por día</p>
            </div>
            <div class="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-gray-200/60">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-semibold text-gray-500">Bloqueos Activos</p>
                  <p class="text-3xl font-bold text-gray-900 mt-1">{{ blockedSchedules.length }}</p>
                </div>
                <div class="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path>
                  </svg>
                </div>
              </div>
              <p class="text-xs text-gray-500 mt-2">Horarios no disponibles para reserva</p>
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
                <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
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
                <div class="w-10 h-10 bg-gradient-to-br from-ixmi-500 to-ixmi-600 rounded-xl flex items-center justify-center">
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
              class="px-8 py-3 bg-gradient-to-r from-ixmi-500 to-ixmi-400 text-white rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold shadow-md"
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
              <div class="w-10 h-10 bg-gradient-to-br from-ixmi-500 to-ixmi-400 rounded-xl flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900">Nueva Cancha</h3>
            </div>
            <button 
              @click="showNewCanchaModal = false"
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
              @click="showNewCanchaModal = false"
              class="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-200 font-medium"
            >
              Cancelar
            </button>
            <button 
              type="submit"
              class="flex-1 px-6 py-3 bg-gradient-to-r from-ixmi-500 to-ixmi-400 text-white rounded-xl hover:shadow-lg transition-all duration-300 font-semibold shadow-md"
            >
              Crear Cancha
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Modal para Bloquear Horario -->
    <div v-if="showBlockScheduleModal" class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-gray-200/60 transform animate-modal-appear">
        <div class="p-6 border-b border-gray-200/60">
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900">Bloquear Horario</h3>
            </div>
            <button 
              @click="showBlockScheduleModal = false"
              class="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all duration-200"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>
        
        <form @submit.prevent="createBlockedSchedule" class="p-6">
          <div class="space-y-4">
            <!-- Selección de cancha -->
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Cancha a bloquear</label>
              <select 
                v-model="newBlockedSchedule.courtId"
                required
                class="w-full px-4 py-3 border border-gray-300/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-400 bg-white/80"
              >
                <option value="">Seleccionar cancha</option>
                <option v-for="cancha in canchas" :key="cancha.id" :value="cancha.id">
                  {{ cancha.name }}
                </option>
              </select>
            </div>

            <!-- Fecha -->
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Fecha del bloqueo</label>
              <input 
                v-model="newBlockedSchedule.date"
                type="date" 
                required
                class="w-full px-4 py-3 border border-gray-300/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-400 bg-white/80"
              >
            </div>

            <!-- Horario -->
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">Hora inicio</label>
                <input 
                  v-model="newBlockedSchedule.startTime"
                  type="time" 
                  required
                  min="05:00"
                  max="22:00"
                  class="w-full px-4 py-3 border border-gray-300/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-400 bg-white/80"
                >
              </div>
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">Hora fin</label>
                <input 
                  v-model="newBlockedSchedule.endTime"
                  type="time" 
                  required
                  min="05:00"
                  max="22:00"
                  class="w-full px-4 py-3 border border-gray-300/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-400 bg-white/80"
                >
              </div>
            </div>

            <!-- Motivo -->
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Motivo del bloqueo</label>
              <textarea 
                v-model="newBlockedSchedule.reason"
                required
                rows="3"
                class="w-full px-4 py-3 border border-gray-300/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-400 bg-white/80 resize-none"
                placeholder="Ej: Mantenimiento programado, evento privado, etc."
              ></textarea>
            </div>
          </div>

          <div class="flex space-x-3 pt-6 mt-6 border-t border-gray-200/60">
            <button 
              type="button"
              @click="showBlockScheduleModal = false"
              class="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-200 font-medium"
            >
              Cancelar
            </button>
            <button 
              type="submit"
              class="flex-1 px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 font-semibold shadow-md"
            >
              Bloquear Horario
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { getAllReservations } from '@/firebase/reservations'

// Estado reactivo principal
const activeTab = ref('dashboard')
const showNewCanchaModal = ref(false)
const userSearch = ref('')
const reservationFilter = ref('all')
const isLoadingReservations = ref(false)

// Configuración de pestañas del sidebar
const tabs = ref([
  { 
    id: 'dashboard', 
    name: 'Dashboard', 
    icon: 'svg',
    badge: null
  },
  { 
    id: 'canchas', 
    name: 'Canchas', 
    icon: 'svg',
    badge: '9'
  },
  { 
    id: 'horarios', 
    name: 'Gestión Horarios', 
    icon: 'svg',
    badge: null
  },
  { 
    id: 'usuarios', 
    name: 'Usuarios', 
    icon: 'svg',
    badge: '248'
  },
  { 
    id: 'reservaciones', 
    name: 'Reservaciones', 
    icon: 'svg',
    badge: '7'
  },
  { 
    id: 'configuracion', 
    name: 'Configuración', 
    icon: 'svg',
    badge: null
  }
])

// Datos de métricas principales mejoradas
const metrics = ref([
  {
    title: 'Total Usuarios',
    value: '248',
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
    value: '12',
    subtitle: '2 en mantenimiento',
    period: 'Disponibles',
    change: '+2',
    changeColor: 'bg-ixmi-100 text-ixmi-800',
    icon: 'svg',
    color: 'bg-gradient-to-br from-ixmi-500 to-ixmi-600',
    gradientBg: 'bg-gradient-to-br from-ixmi-500 to-ixmi-600',
    progress: 92,
    progressColor: 'bg-gradient-to-r from-ixmi-500 to-ixmi-600'
  },
  {
    title: 'Reservaciones',
    value: '34',
    subtitle: 'Hoy',
    period: 'Diarias',
    change: '+18%',
    changeColor: 'bg-green-100 text-green-800',
    icon: 'svg',
    color: 'bg-gradient-to-br from-purple-500 to-purple-600',
    gradientBg: 'bg-gradient-to-br from-purple-500 to-purple-600',
    progress: 76,
    progressColor: 'bg-gradient-to-r from-purple-500 to-purple-600'
  },
  {
    title: 'Usuarios Activos',
    value: '189',
    subtitle: 'Registrados',
    period: 'Totales',
    change: '+12%',
    changeColor: 'bg-green-100 text-green-800',
    icon: 'svg',
    color: 'bg-gradient-to-br from-green-500 to-green-600',
    gradientBg: 'bg-gradient-to-br from-green-500 to-green-600',
    progress: 68,
    progressColor: 'bg-gradient-to-r from-green-500 to-green-600'
  }
])

// Actividad reciente mejorada
const recentActivities = ref([
  {
    id: 1,
    title: 'Nueva reservación aprobada',
    description: 'Juan Pérez reservó Cancha de Fútbol #1 para mañana',
    time: 'Hace 5 minutos',
    icon: 'svg',
    color: 'bg-gradient-to-br from-ixmi-500 to-ixmi-600',
    status: 'Completado',
    statusColor: 'bg-green-100 text-green-800'
  },
  {
    id: 2,
    title: 'Usuario verificado',
    description: 'María González completó su verificación de cuenta',
    time: 'Hace 15 minutos',
    icon: 'svg',
    color: 'bg-gradient-to-br from-blue-500 to-blue-600',
    status: 'Nuevo',
    statusColor: 'bg-blue-100 text-blue-800'
  },
  {
    id: 3,
    title: 'Mantenimiento programado',
    description: 'Cancha de Tenis #2 programada para mantenimiento',
    time: 'Hace 1 hora',
    icon: 'svg',
    color: 'bg-gradient-to-br from-orange-500 to-orange-600',
    status: 'Pendiente',
    statusColor: 'bg-orange-100 text-orange-800'
  },
  {
    id: 4,
    title: 'Reservación confirmada',
    description: 'Carlos López confirmó su reservación',
    time: 'Hace 2 horas',
    icon: 'svg',
    color: 'bg-gradient-to-br from-green-500 to-green-600',
    status: 'Confirmado',
    statusColor: 'bg-green-100 text-green-800'
  }
])

// Reservaciones semanales mejoradas
const weeklyReservations = ref([
  { day: 'Lunes', reservations: 18 },
  { day: 'Martes', reservations: 15 },
  { day: 'Miércoles', reservations: 22 },
  { day: 'Jueves', reservations: 19 },
  { day: 'Viernes', reservations: 25 },
  { day: 'Sábado', reservations: 28 },
  { day: 'Domingo', reservations: 12 }
])

// Datos de canchas - 9 canchas: 4 basquet, 2 tennis, 2 voleibol, 1 pádel
const canchas = ref([
  {
    id: 1,
    name: 'Cancha de Basquetbol #1',
    type: 'Básquetbol',
    price: 0,
    capacity: 10,
    active: true,
    occupancy: 85,
    sport: 'basquetbol'
  },
  {
    id: 2,
    name: 'Cancha de Basquetbol #2',
    type: 'Básquetbol',
    price: 0,
    capacity: 10,
    active: true,
    occupancy: 72,
    sport: 'basquetbol'
  },
  {
    id: 3,
    name: 'Cancha de Basquetbol #3',
    type: 'Básquetbol',
    price: 0,
    capacity: 10,
    active: true,
    occupancy: 68,
    sport: 'basquetbol'
  },
  {
    id: 4,
    name: 'Cancha de Basquetbol #4',
    type: 'Básquetbol',
    price: 0,
    capacity: 10,
    active: true,
    occupancy: 60,
    sport: 'basquetbol'
  },
  {
    id: 5,
    name: 'Cancha de Tennis #1',
    type: 'Tennis',
    price: 0,
    capacity: 4,
    active: true,
    occupancy: 55,
    sport: 'tenis'
  },
  {
    id: 6,
    name: 'Cancha de Tennis #2',
    type: 'Tennis',
    price: 0,
    capacity: 4,
    active: true,
    occupancy: 48,
    sport: 'tenis'
  },
  {
    id: 7,
    name: 'Cancha de Voleibol #1',
    type: 'Voleibol',
    price: 0,
    capacity: 12,
    active: true,
    occupancy: 75,
    sport: 'voleibol'
  },
  {
    id: 8,
    name: 'Cancha de Voleibol #2',
    type: 'Voleibol',
    price: 0,
    capacity: 12,
    active: true,
    occupancy: 62,
    sport: 'voleibol'
  },
  {
    id: 9,
    name: 'Cancha de Pádel #1',
    type: 'Pádel',
    price: 0,
    capacity: 4,
    active: true,
    occupancy: 90,
    sport: 'padel'
  }
])

// Formulario para nueva cancha
const newCancha = ref({
  name: '',
  type: '',
  price: '',
  capacity: ''
})

// Datos de usuarios mejorados
const users = ref([
  {
    id: 1,
    name: 'Juan Pérez Rodríguez',
    email: 'juan.perez@email.com',
    phone: '555-0123',
    createdAt: '2024-01-15',
    active: true,
    reservations: 15,
    lastActivity: 'hace 2 horas',
    daysAgo: 45
  },
  {
    id: 2,
    name: 'María González López',
    email: 'maria.gonzalez@email.com',
    phone: '555-0124',
    createdAt: '2024-02-20',
    active: true,
    reservations: 8,
    lastActivity: 'hace 1 día',
    daysAgo: 20
  },
  {
    id: 3,
    name: 'Carlos López Martínez',
    email: 'carlos.lopez@email.com',
    phone: '555-0125',
    createdAt: '2024-01-25',
    active: false,
    reservations: 3,
    lastActivity: 'hace 2 semanas',
    daysAgo: 35
  },
  {
    id: 4,
    name: 'Ana Sofía Hernández',
    email: 'ana.hernandez@email.com',
    phone: '555-0126',
    createdAt: '2024-03-10',
    active: true,
    reservations: 22,
    lastActivity: 'hace 30 min',
    daysAgo: 10
  },
  {
    id: 5,
    name: 'Roberto Díaz García',
    email: 'roberto.diaz@email.com',
    phone: '555-0127',
    createdAt: '2024-02-05',
    active: true,
    reservations: 12,
    lastActivity: 'hace 3 días',
    daysAgo: 25
  }
])

// Datos de reservaciones - cargados desde Firebase
const reservations = ref([])

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
        createdAt: r.createdAt
      }))
    }
  } catch (error) {
    console.error('Error loading reservations:', error)
  }
  isLoadingReservations.value = false
}

// Cargar datos al montar el componente
onMounted(() => {
  loadReservations()
})

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

// Horarios bloqueados por el administrador
const blockedSchedules = ref([
  {
    id: 1,
    courtId: 1,
    courtName: 'Cancha de Basquetbol #1',
    date: '2026-01-20',
    startTime: '08:00',
    endTime: '10:00',
    reason: 'Mantenimiento programado',
    createdAt: '2026-01-15'
  },
  {
    id: 2,
    courtId: 5,
    courtName: 'Cancha de Tennis #1',
    date: '2026-01-21',
    startTime: '14:00',
    endTime: '16:00',
    reason: 'Evento privado',
    createdAt: '2026-01-15'
  }
])

// Formulario para nuevo bloqueo de horario
const newBlockedSchedule = ref({
  courtId: '',
  date: '',
  startTime: '',
  endTime: '',
  reason: ''
})

// Modal para nuevo bloqueo
const showBlockScheduleModal = ref(false)

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
  if (reservationFilter.value === 'all') return reservations.value
  return reservations.value.filter(reservation => reservation.status === reservationFilter.value)
})

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

// Funciones para gestión de horarios bloqueados
const createBlockedSchedule = () => {
  const newId = blockedSchedules.value.length > 0 
    ? Math.max(...blockedSchedules.value.map(s => s.id)) + 1 
    : 1
  
  const court = canchas.value.find(c => c.id === parseInt(newBlockedSchedule.value.courtId))
  
  blockedSchedules.value.push({
    id: newId,
    courtId: parseInt(newBlockedSchedule.value.courtId),
    courtName: court ? court.name : 'Cancha desconocida',
    date: newBlockedSchedule.value.date,
    startTime: newBlockedSchedule.value.startTime,
    endTime: newBlockedSchedule.value.endTime,
    reason: newBlockedSchedule.value.reason,
    createdAt: new Date().toISOString()
  })
  
  // Resetear formulario y cerrar modal
  newBlockedSchedule.value = { courtId: '', date: '', startTime: '', endTime: '', reason: '' }
  showBlockScheduleModal.value = false
  
  console.log('Nuevo horario bloqueado creado:', blockedSchedules.value[blockedSchedules.value.length - 1])
}

const editBlockedSchedule = (schedule) => {
  // Cargar datos en el formulario para edición
  newBlockedSchedule.value = {
    courtId: schedule.courtId.toString(),
    date: schedule.date,
    startTime: schedule.startTime,
    endTime: schedule.endTime,
    reason: schedule.reason
  }
  // Eliminar el bloqueo actual para recrearlo con los nuevos datos
  blockedSchedules.value = blockedSchedules.value.filter(s => s.id !== schedule.id)
  showBlockScheduleModal.value = true
  
  console.log('Editando horario bloqueado:', schedule)
}

const deleteBlockedSchedule = (id) => {
  if (confirm('¿Estás seguro de que deseas eliminar este bloqueo de horario?')) {
    blockedSchedules.value = blockedSchedules.value.filter(s => s.id !== id)
    console.log('Horario bloqueado eliminado, ID:', id)
  }
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
  const newId = Math.max(...canchas.value.map(c => c.id)) + 1
  canchas.value.push({
    id: newId,
    name: newCancha.value.name,
    type: newCancha.value.type,
    price: parseInt(newCancha.value.price),
    capacity: parseInt(newCancha.value.capacity),
    active: true,
    occupancy: 0
  })
  
  // Resetear formulario y cerrar modal
  newCancha.value = { name: '', type: '', price: '', capacity: '' }
  showNewCanchaModal.value = false
  
  // Aquí se conectaría con la API real para crear la cancha
  console.log('Nueva cancha creada:', canchas.value[canchas.value.length - 1])
}

const editCancha = (cancha) => {
  // Aquí se abriría un modal de edición o navegaría a una página de edición
  console.log('Editando cancha:', cancha)
}

const viewCanchaAnalytics = (cancha) => {
  // Aquí se mostrarían las analíticas específicas de la cancha
  console.log('Viendo analytics de cancha:', cancha)
}

const toggleCanchaStatus = (cancha) => {
  cancha.active = !cancha.active
  if (!cancha.active) {
    cancha.occupancy = 0
  }
  // Aquí se conectaría con la API para actualizar el estado
  console.log(`Cancha ${cancha.name} ${cancha.active ? 'activada' : 'desactivada'}`)
}

const viewUserDetail = (user) => {
  // Aquí se abriría un modal con detalles completos del usuario
  console.log('Ver detalle de usuario:', user)
}

const toggleUserStatus = (user) => {
  user.active = !user.active
  // Aquí se conectaría con la API para actualizar el estado del usuario
  console.log(`Usuario ${user.name} ${user.active ? 'activado' : 'desactivado'}`)
}

const approveReservation = (reservation) => {
  reservation.status = 'approved'
  // Aquí se enviaría notificación al usuario y se conectaría con la API
  console.log('Reservación aprobada:', reservation)
}

const rejectReservation = (reservation) => {
  reservation.status = 'rejected'
  // Aquí se enviaría notificación al usuario con el motivo del rechazo
  console.log('Reservación rechazada:', reservation)
}

const viewReservationDetail = (reservation) => {
  // Aquí se abriría un modal con todos los detalles de la reservación
  console.log('Ver detalle de reservación:', reservation)
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
  // Aquí se guardaría la configuración en la base de datos
  console.log('Guardando configuración:', systemConfig.value)
  
  // Simulación de guardado exitoso
  alert('Configuración guardada exitosamente')
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
