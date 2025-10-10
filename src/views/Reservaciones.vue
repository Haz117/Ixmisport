<template>
  <div class="min-h-screen bg-gradient-to-br from-white via-[#F8FDF9] to-[#F2F9F4]">
    <!-- Navbar Mejorado -->
    <nav class="bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100/50 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-20">
          <div class="flex items-center group">
            <router-link to="/" class="flex items-center gap-3">
              <div class="w-12 h-12 bg-gradient-to-br from-[#6BCF9F] to-[#7ED9A8] rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                <i class="fa-solid fa-trophy text-white text-xl"></i>
              </div>
              <h2 class="text-3xl font-bold bg-gradient-to-r from-[#6BCF9F] via-[#7ED9A8] to-[#95E3B3] bg-clip-text text-transparent group-hover:scale-105 transition-transform cursor-pointer">
                IxmiSport
              </h2>
            </router-link>
          </div>
          <div class="flex gap-4 items-center">
            <router-link 
              to="/mis-reservaciones" 
              class="px-6 py-3 text-gray-700 hover:text-[#6BCF9F] transition-all duration-300 font-semibold relative group flex items-center gap-2 hover:bg-[#F8FDF9] rounded-xl"
            >
              <div class="w-10 h-10 bg-gradient-to-br from-[#6BCF9F]/10 to-[#7ED9A8]/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <i class="fa-solid fa-calendar-check text-lg"></i>
              </div>
              <span class="hidden md:inline">Mis Reservaciones</span>
              <span class="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#6BCF9F] to-[#7ED9A8] group-hover:w-full transition-all duration-300 rounded-full"></span>
            </router-link>
            <router-link 
              to="/profile" 
              class="px-6 py-3 bg-gradient-to-r from-[#6BCF9F] via-[#7ED9A8] to-[#95E3B3] text-white rounded-xl hover:shadow-2xl hover:shadow-[#6BCF9F]/30 hover:scale-105 transition-all duration-300 font-semibold flex items-center gap-3"
            >
              <i class="fa-solid fa-user-circle text-xl"></i>
              <span class="hidden md:inline">Mi Perfil</span>
            </router-link>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Header Mejorado -->
    <section class="relative bg-gradient-to-br from-[#6BCF9F] via-[#7ED9A8] to-[#95E3B3] py-20 overflow-hidden">
      <!-- Efectos de fondo animados -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute top-20 -left-20 w-72 h-72 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-20 -right-20 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      </div>
      
      <!-- Patrón de puntos decorativo -->
      <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(circle, white 1px, transparent 1px); background-size: 30px 30px;"></div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center text-white">
          <div class="inline-block mb-4 px-6 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-semibold">
            <i class="fa-solid fa-star text-yellow-300 mr-2"></i>
            Reserva en segundos
          </div>
          <h1 class="text-6xl md:text-7xl font-extrabold mb-6 animate-fade-in">
            Elige tu Cancha Ideal
          </h1>
          <p class="text-2xl text-white/95 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Selecciona tu espacio deportivo favorito y reserva al instante. <br/>
            <span class="font-semibold">¡Tu próximo partido comienza aquí!</span>
          </p>
          
          <!-- Indicadores de disponibilidad mejorados -->
          <div class="flex flex-wrap items-center justify-center gap-8 text-white/90 bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-2xl mx-auto border border-white/20">
            <div class="flex items-center gap-3 group">
              <div class="relative">
                <div class="w-5 h-5 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                <div class="absolute inset-0 w-5 h-5 bg-green-400 rounded-full animate-ping opacity-75"></div>
              </div>
              <span class="font-semibold group-hover:scale-105 transition-transform">Disponible</span>
            </div>
            <div class="flex items-center gap-3 group">
              <div class="relative">
                <div class="w-5 h-5 bg-yellow-400 rounded-full animate-pulse shadow-lg shadow-yellow-400/50"></div>
              </div>
              <span class="font-semibold group-hover:scale-105 transition-transform">Parcialmente Ocupada</span>
            </div>
            <div class="flex items-center gap-3 group">
              <div class="w-5 h-5 bg-red-400 rounded-full shadow-lg shadow-red-400/50"></div>
              <span class="font-semibold group-hover:scale-105 transition-transform">Ocupada</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Onda decorativa en la parte inferior -->
      <div class="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="url(#wave-gradient)"/>
          <defs>
            <linearGradient id="wave-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="rgba(255,255,255,0.1)"/>
              <stop offset="100%" stop-color="rgba(255,255,255,0)"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>

    <!-- Filters Section Mejorada -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20 mb-16">
      <div class="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
        <!-- Header del filtro -->
        <div class="bg-gradient-to-r from-[#6BCF9F]/10 via-[#7ED9A8]/10 to-[#95E3B3]/10 px-8 py-5 border-b border-gray-100">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 bg-gradient-to-br from-[#6BCF9F] to-[#7ED9A8] rounded-xl flex items-center justify-center shadow-lg">
                <i class="fa-solid fa-filter text-white text-lg"></i>
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-800">Filtros de Búsqueda</h3>
                <p class="text-sm text-gray-500">Personaliza tu búsqueda para encontrar la cancha perfecta</p>
              </div>
            </div>
            <button class="px-4 py-2 text-sm font-semibold text-[#6BCF9F] hover:bg-[#6BCF9F]/10 rounded-lg transition-all duration-300">
              <i class="fa-solid fa-rotate-right mr-2"></i>
              Limpiar filtros
            </button>
          </div>
        </div>
        
        <!-- Contenido de filtros -->
        <div class="p-8">
          <div class="grid md:grid-cols-4 gap-6">
            <!-- Sport Type Filter -->
            <div class="relative group">
              <label class="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                <div class="w-8 h-8 bg-gradient-to-br from-[#6BCF9F]/20 to-[#7ED9A8]/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <i class="fa-solid fa-basketball text-[#6BCF9F]"></i>
                </div>
                Tipo de Deporte
              </label>
              <div class="relative">
                <select v-model="filters.sport" class="w-full px-5 py-4 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#6BCF9F] focus:border-transparent transition-all duration-300 cursor-pointer hover:border-[#6BCF9F] hover:shadow-lg appearance-none font-medium text-gray-700">
                  <option value="">Todos los deportes</option>
                  <option value="futbol">Fútbol</option>
                  <option value="basquetbol">Basquetbol</option>
                  <option value="tenis">Tenis</option>
                  <option value="voleibol">Voleibol</option>
                  <option value="padel">Pádel</option>
                </select>
                <i class="fa-solid fa-chevron-down absolute right-4 top-1/2 transform -translate-y-1/2 text-[#6BCF9F] pointer-events-none"></i>
              </div>
            </div>

            <!-- Date Filter -->
            <div class="relative group">
              <label class="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                <div class="w-8 h-8 bg-gradient-to-br from-[#7ED9A8]/20 to-[#95E3B3]/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <i class="fa-solid fa-calendar text-[#7ED9A8]"></i>
                </div>
                Fecha de Reserva
              </label>
              <input 
                v-model="filters.date"
                type="date" 
                class="w-full px-5 py-4 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#7ED9A8] focus:border-transparent transition-all duration-300 cursor-pointer hover:border-[#7ED9A8] hover:shadow-lg font-medium text-gray-700"
              />
            </div>

            <!-- Time Filter -->
            <div class="relative group">
              <label class="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                <div class="w-8 h-8 bg-gradient-to-br from-[#95E3B3]/20 to-[#6BCF9F]/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <i class="fa-solid fa-clock text-[#95E3B3]"></i>
                </div>
                Horario Preferido
              </label>
              <div class="relative">
                <select v-model="filters.time" class="w-full px-5 py-4 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#95E3B3] focus:border-transparent transition-all duration-300 cursor-pointer hover:border-[#95E3B3] hover:shadow-lg appearance-none font-medium text-gray-700">
                  <option value="">Cualquier hora</option>
                  <option value="morning">Mañana (6AM - 12PM)</option>
                  <option value="afternoon">Tarde (12PM - 6PM)</option>
                  <option value="night">Noche (6PM - 11PM)</option>
                </select>
                <i class="fa-solid fa-chevron-down absolute right-4 top-1/2 transform -translate-y-1/2 text-[#95E3B3] pointer-events-none"></i>
              </div>
            </div>

            <!-- Location Filter -->
            <div class="relative group">
              <label class="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                <div class="w-8 h-8 bg-gradient-to-br from-[#6BCF9F]/20 to-[#95E3B3]/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <i class="fa-solid fa-location-dot text-[#6BCF9F]"></i>
                </div>
                Zona / Ubicación
              </label>
              <div class="relative">
                <select v-model="filters.location" class="w-full px-5 py-4 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#6BCF9F] focus:border-transparent transition-all duration-300 cursor-pointer hover:border-[#6BCF9F] hover:shadow-lg appearance-none font-medium text-gray-700">
                  <option value="">Todas las zonas</option>
                  <option value="centro">Centro</option>
                  <option value="norte">Norte</option>
                  <option value="sur">Sur</option>
                </select>
                <i class="fa-solid fa-chevron-down absolute right-4 top-1/2 transform -translate-y-1/2 text-[#6BCF9F] pointer-events-none"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Interactive Courts Grid -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Court 1 - Fútbol -->
        <div 
          @click="openModal(courts[0])"
          class="relative bg-gradient-to-br from-[#1a4d2e] to-[#2d7a4f] rounded-3xl overflow-hidden cursor-pointer group hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-[#6BCF9F]/50"
          style="height: 350px;"
        >
          <!-- Field Lines -->
          <div class="absolute inset-0 opacity-20">
            <div class="absolute top-1/2 left-0 right-0 h-0.5 bg-white"></div>
            <div class="absolute top-1/2 left-1/2 w-20 h-20 border-2 border-white rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
            <div class="absolute top-4 left-4 right-4 bottom-4 border-2 border-white rounded-lg"></div>
          </div>
          
          <!-- Status Indicator -->
          <div class="absolute top-4 right-4 z-10">
            <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg"></div>
          </div>

          <!-- Content -->
          <div class="relative h-full flex flex-col items-center justify-center p-6 text-white">
            <div class="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
              <i class="fa-solid fa-futbol text-4xl"></i>
            </div>
            <h3 class="text-2xl font-bold mb-2">Cancha de Fútbol</h3>
            <p class="text-sm opacity-90 mb-1">Campo #1</p>
            <div class="flex items-center gap-2 text-xs opacity-75 mb-4">
              <i class="fa-solid fa-users"></i>
              <span>11 vs 11</span>
              <span>•</span>
              <i class="fa-solid fa-lightbulb"></i>
              <span>Iluminada</span>
            </div>
            <div class="text-2xl font-bold">$250<span class="text-sm opacity-75">/hora</span></div>
            
            <!-- Hover Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
              <div class="text-center">
                <p class="text-lg font-semibold mb-2">Click para reservar</p>
                <div class="flex gap-2 text-xs flex-wrap justify-center">
                  <span class="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">Pasto Sintético</span>
                  <span class="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">Vestidores</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Court 2 - Basquetbol -->
        <div 
          @click="openModal(courts[1])"
          class="relative bg-gradient-to-br from-[#d35400] to-[#e67e22] rounded-3xl overflow-hidden cursor-pointer group hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-[#7ED9A8]/50"
          style="height: 350px;"
        >
          <!-- Court Lines -->
          <div class="absolute inset-0 opacity-20">
            <div class="absolute top-1/2 left-0 right-0 h-0.5 bg-white"></div>
            <div class="absolute top-4 left-1/2 w-16 h-32 border-2 border-white rounded-b-full transform -translate-x-1/2"></div>
            <div class="absolute bottom-4 left-1/2 w-16 h-32 border-2 border-white rounded-t-full transform -translate-x-1/2"></div>
          </div>
          
          <div class="absolute top-4 right-4 z-10">
            <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg"></div>
          </div>

          <div class="relative h-full flex flex-col items-center justify-center p-6 text-white">
            <div class="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 100 100" fill="currentColor" class="text-white">
                <path d="M50 18.472a31.93 31.93 0 0 1 5.331.448 1.461 1.461 0 0 0 .254.022 1.5 1.5 0 0 0 .25-2.979A34.868 34.868 0 0 0 50 15.472a1.5 1.5 0 1 0 0 3z"/>
                <path d="M89.105 39.944a40.419 40.419 0 0 0-11.959-19.8 1.482 1.482 0 0 0-.337-.294 40.278 40.278 0 0 0-39.162-8.281 1.492 1.492 0 0 0-.318.108 40.555 40.555 0 0 0-25.382 24.851 1.418 1.418 0 0 0-.106.31A40.184 40.184 0 0 0 9.627 50a40.655 40.655 0 0 0 .3 4.862c0 .033.007.065.013.1A40.16 40.16 0 0 0 18 74.579a1.5 1.5 0 0 0 .3.384 40.334 40.334 0 0 0 41.859 14.114c.045-.012.09-.023.133-.038a40.491 40.491 0 0 0 22.573-15.634 1.48 1.48 0 0 0 .27-.379 40.293 40.293 0 0 0 6-32.964l-.03-.118zm-3.187-.244a82.039 82.039 0 0 1-2.5 1.647 34.47 34.47 0 0 0-7.41-14.056 1.5 1.5 0 0 0-2.26 1.973 31.483 31.483 0 0 1 6.986 13.709c-18.108 10.544-37 12.64-50.413 12.367q-.5-3.537-.729-6.72c7.792-.62 15.228-5.572 25.185-16.662a27.986 27.986 0 0 1 12.835-8.1c.649.439 1.291.891 1.909 1.379a1.5 1.5 0 0 0 1.939-2.278 26.094 26.094 0 0 1 3.917-.366A37.416 37.416 0 0 1 85.918 39.7zM20.02 72.288a37.192 37.192 0 0 1-6.794-15.667 100.317 100.317 0 0 0 14.519 1.627 58.2 58.2 0 0 0 1.491 6.5c-5.048.627-6.664 3.6-7.767 5.652-.642 1.2-.969 1.709-1.449 1.888zM12.627 50a37.264 37.264 0 0 1 1.522-10.536 20.772 20.772 0 0 1 1.286 1.691c1.872 2.633 4.645 6.53 11.14 7.4q.219 3.169.7 6.681a93.605 93.605 0 0 1-14.485-1.758A39.212 39.212 0 0 1 12.627 50zm59.386-30.176a32.333 32.333 0 0 0-3.941.757 34.273 34.273 0 0 0-7.106-3.331 1.5 1.5 0 1 0-.953 2.845 31.228 31.228 0 0 1 4.148 1.757 30.787 30.787 0 0 0-11.616 8.1c-9.355 10.42-16.184 15.08-23.115 15.669-.749-21.721 7.9-30.071 9.253-31.238a37.29 37.29 0 0 1 33.33 5.441zm-39.295-2.945c-3.165 4.927-6.8 13.864-6.306 28.61-4.778-.814-6.767-3.589-8.533-6.073A12.158 12.158 0 0 0 15.2 36.4a37.581 37.581 0 0 1 17.518-19.521zM21.94 74.645a7.752 7.752 0 0 0 2.17-2.82c1.075-2 2.1-3.886 6.1-4.161 4.384 11.963 12 17.314 18.434 19.675A37.292 37.292 0 0 1 21.94 74.645zm37.538 11.507c-1.937.164-18.479.925-26.085-18.5 5.722.147 8.045.975 14.742 3.379 2.06.739 4.625 1.66 7.8 2.738a41.89 41.89 0 0 0 13.505 2.268 38.606 38.606 0 0 0 8.15-.856 37.411 37.411 0 0 1-18.112 10.971zM80.8 71.135a36.66 36.66 0 0 1-23.9-.2c-3.148-1.07-5.7-1.985-7.749-2.721-7.112-2.553-9.743-3.491-16.823-3.574a54.754 54.754 0 0 1-1.515-6.3c.566.008 1.132.018 1.716.018 13.412 0 31.378-2.4 48.757-12.232A31.5 31.5 0 0 1 81.528 50a1.5 1.5 0 1 0 3 0 34.544 34.544 0 0 0-.454-5.532 86.841 86.841 0 0 0 2.6-1.653 37.259 37.259 0 0 1-5.874 28.32z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-2">Cancha de Basquetbol</h3>
            <p class="text-sm opacity-90 mb-1">Duela #1</p>
            <div class="flex items-center gap-2 text-xs opacity-75 mb-4">
              <i class="fa-solid fa-users"></i>
              <span>5 vs 5</span>
              <span>•</span>
              <i class="fa-solid fa-wind"></i>
              <span>Techada</span>
            </div>
            <div class="text-2xl font-bold">$200<span class="text-sm opacity-75">/hora</span></div>
            
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
              <div class="text-center">
                <p class="text-lg font-semibold mb-2">Click para reservar</p>
                <div class="flex gap-2 text-xs flex-wrap justify-center">
                  <span class="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">Duela Profesional</span>
                  <span class="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">WiFi</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Court 3 - Tenis -->
        <div 
          @click="openModal(courts[2])"
          class="relative bg-gradient-to-br from-[#c0392b] to-[#e74c3c] rounded-3xl overflow-hidden cursor-pointer group hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-[#95E3B3]/50"
          style="height: 350px;"
        >
          <!-- Tennis Court Lines -->
          <div class="absolute inset-0 opacity-20">
            <div class="absolute top-1/2 left-0 right-0 h-1 bg-white"></div>
            <div class="absolute top-8 left-8 right-8 bottom-8 border-2 border-white"></div>
            <div class="absolute top-1/4 left-8 right-8 h-0.5 bg-white"></div>
            <div class="absolute bottom-1/4 left-8 right-8 h-0.5 bg-white"></div>
          </div>
          
          <div class="absolute top-4 right-4 z-10">
            <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg"></div>
          </div>

          <div class="relative h-full flex flex-col items-center justify-center p-6 text-white">
            <div class="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 409.6 409" fill="currentColor" class="text-white">
                <path d="M16.066 402.063c5.172 5.148 11.957 7.722 18.743 7.722 6.789 0 13.574-2.574 18.738-7.723l54.824-54.613c5.012-4.992 7.77-11.637 7.77-18.707 0-.972-.18-1.91-.282-2.863 7.918-5.746 42.5-29.629 73.407-32.59 15.05 5.496 31.172 8.254 47.66 8.254 41.906 0 86.097-17.59 120.52-51.91 33.144-33.043 52.156-76.836 52.156-120.14 0-35.848-13.125-68.673-36.961-92.434-54.579-54.422-150.207-47.625-213.172 15.152-33.145 33.047-52.156 76.84-52.156 120.152 0 18.367 3.472 35.934 10.039 51.899-2.938 29.992-25.946 61.617-32.528 70.11-7.902-1.044-16.176 1.355-22.23 7.39L7.77 356.375C2.762 361.371 0 368.012 0 375.082c0 7.066 2.762 13.711 7.77 18.703zM166.7 59.46C225.672.66 314.81-6.133 365.414 44.309c21.89 21.828 33.945 52.078 33.945 85.183 0 40.606-17.91 81.754-49.144 112.89-58.977 58.798-148.121 65.598-198.715 15.153-21.89-21.824-33.945-52.07-33.95-85.176 0-40.605 17.915-81.757 49.15-112.898zm-41.785 180.172c5.328 9.168 11.797 17.617 19.356 25.152 8.601 8.578 18.242 15.598 28.593 21.156-25.86 6.813-50.363 22.7-60.32 29.707-1.156-2.011-2.484-3.93-4.172-5.613l-8.297-8.27c-1.543-1.538-3.265-2.773-5.054-3.85 7.535-10.048 23.289-33.15 29.894-58.282zM14.996 363.625l54.824-54.61a16.277 16.277 0 0 1 11.512-4.745c4.172 0 8.34 1.585 11.512 4.746l8.297 8.27a16.077 16.077 0 0 1 4.757 11.456 16.07 16.07 0 0 1-4.757 11.457l-54.82 54.61c-6.348 6.328-16.676 6.324-23.024 0L15 386.535c-3.07-3.058-4.762-7.125-4.762-11.453s1.692-8.394 4.758-11.457zm0 0"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-2">Cancha de Tenis</h3>
            <p class="text-sm opacity-90 mb-1">Arcilla #1</p>
            <div class="flex items-center gap-2 text-xs opacity-75 mb-4">
              <i class="fa-solid fa-users"></i>
              <span>Individual/Dobles</span>
              <span>•</span>
              <i class="fa-solid fa-umbrella"></i>
              <span>Techada</span>
            </div>
            <div class="text-2xl font-bold">$180<span class="text-sm opacity-75">/hora</span></div>
            
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
              <div class="text-center">
                <p class="text-lg font-semibold mb-2">Click para reservar</p>
                <div class="flex gap-2 text-xs flex-wrap justify-center">
                  <span class="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">Arcilla Sintética</span>
                  <span class="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">Renta Equipo</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Court 4 - Voleibol -->
        <div 
          @click="openModal(courts[3])"
          class="relative bg-gradient-to-br from-[#f39c12] to-[#f1c40f] rounded-3xl overflow-hidden cursor-pointer group hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-[#6BCF9F]/50"
          style="height: 350px;"
        >
          <div class="absolute inset-0 opacity-20">
            <div class="absolute top-1/2 left-0 right-0 h-0.5 bg-white"></div>
            <div class="absolute top-8 left-8 right-8 bottom-8 border-2 border-white"></div>
          </div>
          
          <div class="absolute top-4 right-4 z-10">
            <div class="w-3 h-3 bg-yellow-400 rounded-full animate-pulse shadow-lg"></div>
          </div>

          <div class="relative h-full flex flex-col items-center justify-center p-6 text-white">
            <div class="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                <path d="M11.1 7.1a16.55 16.55 0 0 1 10.9 4"/>
                <path d="M12 12a12.6 12.6 0 0 1-8.7 5"/>
                <path d="M16.8 13.6a16.55 16.55 0 0 1-9 7.5"/>
                <path d="M20.7 17a12.8 12.8 0 0 0-8.7-5 13.3 13.3 0 0 1 0-10"/>
                <path d="M6.3 3.8a16.55 16.55 0 0 0 1.9 11.5"/>
                <circle cx="12" cy="12" r="10"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-2">Cancha de Voleibol</h3>
            <p class="text-sm opacity-90 mb-1">Arena #1</p>
            <div class="flex items-center gap-2 text-xs opacity-75 mb-4">
              <i class="fa-solid fa-users"></i>
              <span>6 vs 6</span>
              <span>•</span>
              <i class="fa-solid fa-umbrella-beach"></i>
              <span>Arena</span>
            </div>
            <div class="text-2xl font-bold">$150<span class="text-sm opacity-75">/hora</span></div>
            
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
              <div class="text-center">
                <p class="text-lg font-semibold mb-2">Click para reservar</p>
                <div class="flex gap-2 text-xs flex-wrap justify-center">
                  <span class="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">Arena Fina</span>
                  <span class="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">Al Aire Libre</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Court 5 - Pádel -->
        <div 
          @click="openModal(courts[4])"
          class="relative bg-gradient-to-br from-[#16a085] to-[#1abc9c] rounded-3xl overflow-hidden cursor-pointer group hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-[#7ED9A8]/50"
          style="height: 350px;"
        >
          <div class="absolute inset-0 opacity-20">
            <div class="absolute top-1/2 left-0 right-0 h-0.5 bg-white"></div>
            <div class="absolute top-12 left-12 right-12 bottom-12 border-2 border-white rounded-lg"></div>
            <div class="absolute top-1/2 left-12 right-12 h-0.5 bg-white"></div>
          </div>
          
          <div class="absolute top-4 right-4 z-10">
            <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg"></div>
          </div>

          <div class="relative h-full flex flex-col items-center justify-center p-6 text-white">
            <div class="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
              <i class="fa-solid fa-baseball-bat-ball text-4xl"></i>
            </div>
            <h3 class="text-2xl font-bold mb-2">Cancha de Pádel</h3>
            <p class="text-sm opacity-90 mb-1">Panorámica #1</p>
            <div class="flex items-center gap-2 text-xs opacity-75 mb-4">
              <i class="fa-solid fa-users"></i>
              <span>2 vs 2</span>
              <span>•</span>
              <i class="fa-solid fa-lightbulb"></i>
              <span>Iluminada</span>
            </div>
            <div class="text-2xl font-bold">$220<span class="text-sm opacity-75">/hora</span></div>
            
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
              <div class="text-center">
                <p class="text-lg font-semibold mb-2">Click para reservar</p>
                <div class="flex gap-2 text-xs flex-wrap justify-center">
                  <span class="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">Cristales Premium</span>
                  <span class="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">Climatizada</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Court 6 - Fútbol 7 -->
        <div 
          @click="openModal(courts[5])"
          class="relative bg-gradient-to-br from-[#27ae60] to-[#2ecc71] rounded-3xl overflow-hidden cursor-pointer group hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-[#95E3B3]/50"
          style="height: 350px;"
        >
          <div class="absolute inset-0 opacity-20">
            <div class="absolute top-1/2 left-0 right-0 h-0.5 bg-white"></div>
            <div class="absolute top-1/2 left-1/2 w-16 h-16 border-2 border-white rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
            <div class="absolute top-6 left-6 right-6 bottom-6 border-2 border-white rounded-lg"></div>
          </div>
          
          <div class="absolute top-4 right-4 z-10">
            <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg"></div>
          </div>

          <div class="relative h-full flex flex-col items-center justify-center p-6 text-white">
            <div class="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
              <i class="fa-solid fa-futbol text-4xl"></i>
            </div>
            <h3 class="text-2xl font-bold mb-2">Fútbol 7</h3>
            <p class="text-sm opacity-90 mb-1">Campo #2</p>
            <div class="flex items-center gap-2 text-xs opacity-75 mb-4">
              <i class="fa-solid fa-users"></i>
              <span>7 vs 7</span>
              <span>•</span>
              <i class="fa-solid fa-video"></i>
              <span>Cámaras</span>
            </div>
            <div class="text-2xl font-bold">$180<span class="text-sm opacity-75">/hora</span></div>
            
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
              <div class="text-center">
                <p class="text-lg font-semibold mb-2">Click para reservar</p>
                <div class="flex gap-2 text-xs flex-wrap justify-center">
                  <span class="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">Alta Densidad</span>
                  <span class="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">Bebederos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal de Reservación Mejorado -->
    <Transition name="modal">
      <div 
        v-if="showModal" 
        class="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4"
        @click.self="closeModal"
      >
        <div class="bg-white rounded-3xl shadow-2xl max-w-5xl w-full max-h-[92vh] overflow-hidden flex flex-col animate-modal-in">
          <!-- Modal Header - Fijo -->
          <div class="relative bg-gradient-to-br from-[#6BCF9F] via-[#7ED9A8] to-[#95E3B3] p-10 text-white flex-shrink-0">
            <!-- Efectos decorativos -->
            <div class="absolute inset-0 overflow-hidden opacity-20">
              <div class="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              <div class="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full blur-3xl"></div>
            </div>
            
            <button 
              @click="closeModal"
              class="absolute top-6 right-6 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-2xl flex items-center justify-center transition-all duration-300 hover:rotate-90 hover:scale-110 z-10 group"
            >
              <i class="fa-solid fa-xmark text-2xl group-hover:scale-110 transition-transform"></i>
            </button>
            
            <div class="flex items-center gap-6 relative z-10">
              <div class="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-2xl">
                <i :class="selectedCourt?.icon" class="text-5xl"></i>
              </div>
              <div>
                <div class="inline-block mb-2 px-4 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold">
                  <i class="fa-solid fa-star text-yellow-300 mr-1"></i>
                  Mejor valorada
                </div>
                <h2 class="text-4xl font-extrabold mb-3 drop-shadow-lg">{{ selectedCourt?.name }}</h2>
                <p class="text-xl text-white/95 font-light">{{ selectedCourt?.description }}</p>
              </div>
            </div>
          </div>

          <!-- Modal Content - Scrollable SIN barra visible -->
          <div class="flex-1 overflow-y-auto scrollbar-hide p-10">
            <!-- Court Info Cards -->
            <div class="grid md:grid-cols-4 gap-5 mb-10">
              <div class="bg-gradient-to-br from-[#6BCF9F]/10 via-white to-[#6BCF9F]/5 p-6 rounded-2xl border-2 border-[#6BCF9F]/20 hover:border-[#6BCF9F]/40 transition-all duration-300 hover:shadow-xl hover:scale-105 group">
                <div class="w-14 h-14 bg-gradient-to-br from-[#6BCF9F] to-[#7ED9A8] rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform shadow-lg">
                  <i class="fa-solid fa-users text-white text-2xl"></i>
                </div>
                <p class="text-sm font-semibold text-gray-500 mb-1">Capacidad</p>
                <p class="text-xl font-bold text-gray-800">{{ selectedCourt?.capacity }}</p>
              </div>
              <div class="bg-gradient-to-br from-[#7ED9A8]/10 via-white to-[#7ED9A8]/5 p-6 rounded-2xl border-2 border-[#7ED9A8]/20 hover:border-[#7ED9A8]/40 transition-all duration-300 hover:shadow-xl hover:scale-105 group">
                <div class="w-14 h-14 bg-gradient-to-br from-[#7ED9A8] to-[#95E3B3] rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform shadow-lg">
                  <i class="fa-solid fa-location-dot text-white text-2xl"></i>
                </div>
                <p class="text-sm font-semibold text-gray-500 mb-1">Ubicación</p>
                <p class="text-xl font-bold text-gray-800">{{ selectedCourt?.location }}</p>
              </div>
              <div class="bg-gradient-to-br from-yellow-400/10 via-white to-yellow-400/5 p-6 rounded-2xl border-2 border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 hover:shadow-xl hover:scale-105 group">
                <div class="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform shadow-lg">
                  <i class="fa-solid fa-star text-white text-2xl"></i>
                </div>
                <p class="text-sm font-semibold text-gray-500 mb-1">Valoración</p>
                <p class="text-xl font-bold text-gray-800 flex items-center gap-1">
                  {{ selectedCourt?.rating }} 
                  <i class="fa-solid fa-star text-yellow-400"></i>
                </p>
              </div>
              <div class="bg-gradient-to-br from-[#95E3B3]/10 via-white to-[#95E3B3]/5 p-6 rounded-2xl border-2 border-[#95E3B3]/20 hover:border-[#95E3B3]/40 transition-all duration-300 hover:shadow-xl hover:scale-105 group">
                <div class="w-14 h-14 bg-gradient-to-br from-[#95E3B3] to-[#6BCF9F] rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform shadow-lg">
                  <i class="fa-solid fa-dollar-sign text-white text-2xl"></i>
                </div>
                <p class="text-sm font-semibold text-gray-500 mb-1">Precio/hora</p>
                <p class="text-xl font-bold text-gray-800">${{ selectedCourt?.price }}</p>
              </div>
            </div>

            <!-- Amenities -->
            <div class="mb-10">
              <h3 class="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <div class="w-12 h-12 bg-gradient-to-br from-[#6BCF9F] to-[#7ED9A8] rounded-xl flex items-center justify-center shadow-lg">
                  <i class="fa-solid fa-list-check text-white text-xl"></i>
                </div>
                Servicios Premium Incluidos
              </h3>
              <div class="grid md:grid-cols-3 gap-4">
                <div 
                  v-for="amenity in selectedCourt?.amenities" 
                  :key="amenity"
                  class="flex items-center gap-3 p-4 bg-gradient-to-r from-[#F8FDF9] to-white rounded-xl border-2 border-[#D8F0E3] hover:border-[#6BCF9F] hover:shadow-lg transition-all duration-300 group"
                >
                  <div class="w-10 h-10 bg-gradient-to-br from-[#6BCF9F] to-[#7ED9A8] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-md flex-shrink-0">
                    <i class="fa-solid fa-check text-white font-bold"></i>
                  </div>
                  <span class="font-semibold text-gray-700">{{ amenity }}</span>
                </div>
              </div>
            </div>

            <!-- Time Slots -->
            <div class="mb-10">
              <h3 class="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <div class="w-12 h-12 bg-gradient-to-br from-[#7ED9A8] to-[#95E3B3] rounded-xl flex items-center justify-center shadow-lg">
                  <i class="fa-solid fa-clock text-white text-xl"></i>
                </div>
                Selecciona Fecha y Horario
              </h3>
              
              <!-- Date Picker -->
              <div class="mb-6">
                <label class="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                  <i class="fa-solid fa-calendar-days text-[#7ED9A8]"></i>
                  Fecha de Reserva
                </label>
                <input 
                  v-model="reservationData.date"
                  type="date" 
                  class="w-full px-6 py-4 bg-gradient-to-br from-gray-50 to-white border-3 border-[#D8F0E3] rounded-2xl focus:outline-none focus:ring-4 focus:ring-[#7ED9A8]/30 focus:border-[#7ED9A8] transition-all duration-300 font-semibold text-lg text-gray-700 hover:shadow-lg"
                />
              </div>

              <!-- Time Slots Grid -->
              <div class="grid grid-cols-3 md:grid-cols-4 gap-3">
                <button
                  v-for="slot in timeSlots"
                  :key="slot.time"
                  @click="selectTimeSlot(slot)"
                  :disabled="!slot.available"
                  :class="[
                    'px-4 py-4 rounded-2xl font-bold transition-all duration-300 relative overflow-hidden',
                    reservationData.timeSlot === slot.time
                      ? 'bg-gradient-to-br from-[#6BCF9F] to-[#7ED9A8] text-white shadow-2xl shadow-[#6BCF9F]/40 scale-105 border-2 border-white'
                      : slot.available
                        ? 'bg-white border-2 border-[#D8F0E3] text-gray-700 hover:border-[#6BCF9F] hover:shadow-xl hover:scale-105'
                        : 'bg-gray-50 border-2 border-gray-200 text-gray-400 cursor-not-allowed opacity-60'
                  ]"
                >
                  <div class="text-base font-bold">{{ slot.time }}</div>
                  <div v-if="!slot.available" class="text-xs mt-1 font-semibold">No disponible</div>
                  <div v-if="reservationData.timeSlot === slot.time" class="absolute top-1 right-1">
                    <i class="fa-solid fa-circle-check text-white"></i>
                  </div>
                </button>
              </div>
            </div>

            <!-- Number of People -->
            <div class="mb-10">
              <h3 class="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <div class="w-12 h-12 bg-gradient-to-br from-[#95E3B3] to-[#6BCF9F] rounded-xl flex items-center justify-center shadow-lg">
                  <i class="fa-solid fa-user-group text-white text-xl"></i>
                </div>
                ¿Cuántas personas jugarán?
              </h3>
              <div class="flex items-center gap-6 bg-gradient-to-br from-[#F8FDF9] to-white p-8 rounded-2xl border-2 border-[#D8F0E3]">
                <button 
                  @click="decrementPeople"
                  class="w-16 h-16 bg-gradient-to-br from-[#6BCF9F] to-[#7ED9A8] text-white rounded-2xl font-bold text-3xl hover:shadow-2xl hover:shadow-[#6BCF9F]/30 hover:scale-110 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center"
                  :disabled="reservationData.people <= 1"
                >
                  <i class="fa-solid fa-minus"></i>
                </button>
                <div class="flex-1 text-center">
                  <input 
                    v-model.number="reservationData.people"
                    type="number"
                    min="1"
                    :max="selectedCourt?.maxPeople || 22"
                    class="w-32 px-6 py-5 bg-white border-3 border-[#6BCF9F]/30 rounded-2xl text-center text-4xl font-extrabold focus:outline-none focus:ring-4 focus:ring-[#6BCF9F]/30 focus:border-[#6BCF9F] transition-all duration-300 text-[#6BCF9F] shadow-lg"
                  />
                  <p class="text-sm font-semibold text-gray-500 mt-3">Máximo: {{ selectedCourt?.maxPeople }} personas</p>
                </div>
                <button 
                  @click="incrementPeople"
                  class="w-16 h-16 bg-gradient-to-br from-[#6BCF9F] to-[#7ED9A8] text-white rounded-2xl font-bold text-3xl hover:shadow-2xl hover:shadow-[#6BCF9F]/30 hover:scale-110 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center"
                  :disabled="reservationData.people >= (selectedCourt?.maxPeople || 22)"
                >
                  <i class="fa-solid fa-plus"></i>
                </button>
              </div>
            </div>

            <!-- Additional Notes -->
            <div class="mb-10">
              <h3 class="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <div class="w-12 h-12 bg-gradient-to-br from-[#6BCF9F] to-[#95E3B3] rounded-xl flex items-center justify-center shadow-lg">
                  <i class="fa-solid fa-comment-dots text-white text-xl"></i>
                </div>
                Notas Adicionales
                <span class="text-sm font-normal text-gray-400">(Opcional)</span>
              </h3>
              <textarea 
                v-model="reservationData.notes"
                placeholder="¿Necesitas algo especial? Equipamiento adicional, evento privado, clases, etc..."
                rows="4"
                class="w-full px-6 py-5 bg-gradient-to-br from-gray-50 to-white border-3 border-[#D8F0E3] rounded-2xl focus:outline-none focus:ring-4 focus:ring-[#6BCF9F]/30 focus:border-[#6BCF9F] transition-all duration-300 resize-none font-medium text-gray-700 hover:shadow-lg"
              ></textarea>
            </div>

            <!-- Summary -->
            <div class="bg-gradient-to-br from-[#6BCF9F]/10 via-white to-[#95E3B3]/10 p-8 rounded-3xl border-3 border-[#6BCF9F]/30 mb-8 shadow-xl">
              <h3 class="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <div class="w-12 h-12 bg-gradient-to-br from-[#6BCF9F] to-[#7ED9A8] rounded-xl flex items-center justify-center shadow-lg">
                  <i class="fa-solid fa-receipt text-white text-xl"></i>
                </div>
                Resumen de tu Reservación
              </h3>
              <div class="space-y-4">
                <div class="flex justify-between items-center p-4 bg-white rounded-xl">
                  <span class="font-semibold text-gray-600 flex items-center gap-2">
                    <i class="fa-solid fa-basketball text-[#6BCF9F]"></i>
                    Cancha:
                  </span>
                  <span class="font-bold text-gray-800 text-lg">{{ selectedCourt?.name }}</span>
                </div>
                <div class="flex justify-between items-center p-4 bg-white rounded-xl">
                  <span class="font-semibold text-gray-600 flex items-center gap-2">
                    <i class="fa-solid fa-calendar text-[#7ED9A8]"></i>
                    Fecha:
                  </span>
                  <span class="font-bold text-gray-800 text-lg">{{ reservationData.date || 'No seleccionada' }}</span>
                </div>
                <div class="flex justify-between items-center p-4 bg-white rounded-xl">
                  <span class="font-semibold text-gray-600 flex items-center gap-2">
                    <i class="fa-solid fa-clock text-[#95E3B3]"></i>
                    Horario:
                  </span>
                  <span class="font-bold text-gray-800 text-lg">{{ reservationData.timeSlot || 'No seleccionado' }}</span>
                </div>
                <div class="flex justify-between items-center p-4 bg-white rounded-xl">
                  <span class="font-semibold text-gray-600 flex items-center gap-2">
                    <i class="fa-solid fa-users text-[#6BCF9F]"></i>
                    Personas:
                  </span>
                  <span class="font-bold text-gray-800 text-lg">{{ reservationData.people }}</span>
                </div>
                <div class="border-t-3 border-[#6BCF9F]/20 pt-5 mt-5">
                  <div class="flex justify-between items-center p-5 bg-gradient-to-r from-[#6BCF9F] to-[#7ED9A8] rounded-2xl shadow-2xl">
                    <span class="text-2xl font-bold text-white flex items-center gap-3">
                      <i class="fa-solid fa-money-bill-wave"></i>
                      Total a Pagar:
                    </span>
                    <span class="text-4xl font-extrabold text-white drop-shadow-lg">
                      ${{ calculateTotal() }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Action Buttons - Fijo en la parte inferior -->
          <div class="flex gap-5 p-8 bg-gradient-to-r from-gray-50 to-white border-t-2 border-gray-100 flex-shrink-0">
            <button 
              @click="closeModal"
              class="flex-1 px-8 py-5 bg-white border-3 border-gray-300 text-gray-700 rounded-2xl font-bold text-lg hover:bg-gray-50 hover:border-gray-400 hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
            >
              <i class="fa-solid fa-times-circle text-2xl"></i>
              Cancelar
            </button>
            <button 
              @click="confirmReservation"
              :disabled="!isReservationValid"
              class="flex-1 px-8 py-5 bg-gradient-to-r from-[#6BCF9F] via-[#7ED9A8] to-[#95E3B3] text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-[#6BCF9F]/40 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-3"
            >
              <i class="fa-solid fa-circle-check text-2xl"></i>
              Confirmar Reservación
            </button>
          </div>
        </div>
      </div>
    </Transition>

    <!-- CTA Section Mejorado -->
    <section class="relative bg-gradient-to-br from-[#6BCF9F] via-[#7ED9A8] to-[#95E3B3] py-24 overflow-hidden">
      <!-- Efectos decorativos -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute top-10 -left-20 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-10 -right-20 w-80 h-80 bg-white/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 1.5s;"></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
      </div>
      
      <!-- Patrón de puntos -->
      <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(circle, white 1px, transparent 1px); background-size: 40px 40px;"></div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
        <div class="inline-block mb-6 px-6 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-semibold">
          <i class="fa-solid fa-headset text-yellow-300 mr-2"></i>
          Soporte 24/7 disponible
        </div>
        <h2 class="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-2xl">
          ¿No encuentras lo que buscas?
        </h2>
        <p class="text-2xl mb-10 text-white/95 max-w-3xl mx-auto leading-relaxed">
          Nuestro equipo está aquí para ayudarte. Contáctanos y te ayudaremos a encontrar la cancha perfecta para tu evento.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <button class="group px-10 py-5 bg-white text-[#6BCF9F] rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center gap-3">
            <div class="w-12 h-12 bg-gradient-to-br from-[#6BCF9F] to-[#7ED9A8] rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform">
              <i class="fa-solid fa-headset text-white text-xl"></i>
            </div>
            Contactar Soporte
          </button>
          <button class="px-10 py-5 bg-white/10 backdrop-blur-md border-3 border-white/30 text-white rounded-2xl font-bold text-lg hover:bg-white/20 hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center gap-3">
            <i class="fa-solid fa-phone text-xl"></i>
            (555) 123-4567
          </button>
        </div>
        
        <!-- Estadísticas -->
        <div class="grid md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          <div class="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div class="text-5xl font-extrabold mb-2">500+</div>
            <p class="text-lg text-white/90">Canchas Disponibles</p>
          </div>
          <div class="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div class="text-5xl font-extrabold mb-2">10K+</div>
            <p class="text-lg text-white/90">Reservaciones Exitosas</p>
          </div>
          <div class="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div class="text-5xl font-extrabold mb-2 flex items-center justify-center gap-2">
              4.9 
              <i class="fa-solid fa-star text-yellow-300 text-4xl"></i>
            </div>
            <p class="text-lg text-white/90">Valoración Promedio</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Estado del modal
const showModal = ref(false)
const selectedCourt = ref(null)

// Filtros
const filters = ref({
  sport: '',
  date: '',
  time: '',
  location: ''
})

// Datos de reservación
const reservationData = ref({
  date: '',
  timeSlot: '',
  people: 10,
  notes: ''
})

// Datos de las canchas
const courts = ref([
  {
    id: 1,
    name: 'Cancha de Fútbol #1',
    description: 'Campo profesional de pasto sintético',
    icon: 'fa-solid fa-futbol',
    capacity: '11 vs 11',
    maxPeople: 22,
    location: 'Centro Deportivo',
    rating: 4.8,
    price: 250,
    amenities: ['Pasto Sintético', 'Iluminación LED', 'Vestidores', 'Estacionamiento', 'Duchas', 'Cafetería']
  },
  {
    id: 2,
    name: 'Cancha de Basquetbol #1',
    description: 'Duela profesional techada',
    icon: 'fa-solid fa-basketball',
    capacity: '5 vs 5',
    maxPeople: 10,
    location: 'Polideportivo Norte',
    rating: 4.9,
    price: 200,
    amenities: ['Duela Profesional', 'Techada', 'WiFi Gratis', 'Hidratación', 'Marcador Electrónico', 'Gradas']
  },
  {
    id: 3,
    name: 'Cancha de Tenis #1',
    description: 'Superficie de arcilla sintética',
    icon: 'fa-solid fa-table-tennis-paddle-ball',
    capacity: 'Individual/Dobles',
    maxPeople: 4,
    location: 'Club Deportivo Sur',
    rating: 5.0,
    price: 180,
    amenities: ['Arcilla Sintética', 'Techada', 'Renta de Equipo', 'Clases Disponibles', 'Iluminación', 'Graderías']
  },
  {
    id: 4,
    name: 'Cancha de Voleibol #1',
    description: 'Arena profesional al aire libre',
    icon: 'fa-solid fa-volleyball',
    capacity: '6 vs 6',
    maxPeople: 12,
    location: 'Centro',
    rating: 4.7,
    price: 150,
    amenities: ['Arena Fina', 'Al Aire Libre', 'Malla Reglamentaria', 'Torneos', 'Graderías', 'Zona de Espectadores']
  },
  {
    id: 5,
    name: 'Cancha de Pádel #1',
    description: 'Pista panorámica con cristales premium',
    icon: 'fa-solid fa-baseball-bat-ball',
    capacity: '2 vs 2',
    maxPeople: 4,
    location: 'Norte',
    rating: 4.9,
    price: 220,
    amenities: ['Cristales Premium', 'Climatizada', 'Iluminación LED', 'Césped Artificial', 'Pro Level', 'Renta Equipo']
  },
  {
    id: 6,
    name: 'Cancha de Fútbol 7',
    description: 'Pasto sintético de alta densidad',
    icon: 'fa-solid fa-futbol',
    capacity: '7 vs 7',
    maxPeople: 14,
    location: 'Sur',
    rating: 4.6,
    price: 180,
    amenities: ['Alta Densidad', 'Iluminación', 'Cámaras', 'Bebederos', 'Estacionamiento', 'Vestidores']
  }
])

// Horarios disponibles
const timeSlots = ref([
  { time: '06:00 - 07:00', available: true },
  { time: '07:00 - 08:00', available: true },
  { time: '08:00 - 09:00', available: false },
  { time: '09:00 - 10:00', available: true },
  { time: '10:00 - 11:00', available: true },
  { time: '11:00 - 12:00', available: false },
  { time: '12:00 - 13:00', available: true },
  { time: '13:00 - 14:00', available: true },
  { time: '14:00 - 15:00', available: true },
  { time: '15:00 - 16:00', available: false },
  { time: '16:00 - 17:00', available: true },
  { time: '17:00 - 18:00', available: true },
  { time: '18:00 - 19:00', available: true },
  { time: '19:00 - 20:00', available: false },
  { time: '20:00 - 21:00', available: true },
  { time: '21:00 - 22:00', available: true }
])

// Funciones del modal
const openModal = (court) => {
  selectedCourt.value = court
  showModal.value = true
  // Reset form
  const today = new Date().toISOString().split('T')[0]
  reservationData.value = {
    date: today,
    timeSlot: '',
    people: Math.floor(court.maxPeople / 2),
    notes: ''
  }
}

const closeModal = () => {
  showModal.value = false
  setTimeout(() => {
    selectedCourt.value = null
  }, 300)
}

const selectTimeSlot = (slot) => {
  if (slot.available) {
    reservationData.value.timeSlot = slot.time
  }
}

const incrementPeople = () => {
  if (reservationData.value.people < selectedCourt.value.maxPeople) {
    reservationData.value.people++
  }
}

const decrementPeople = () => {
  if (reservationData.value.people > 1) {
    reservationData.value.people--
  }
}

const calculateTotal = () => {
  if (!selectedCourt.value) return 0
  return selectedCourt.value.price
}

const isReservationValid = computed(() => {
  return reservationData.value.date && 
         reservationData.value.timeSlot && 
         reservationData.value.people > 0
})

const confirmReservation = () => {
  if (isReservationValid.value) {
    alert(`¡Reservación confirmada!\n\nCancha: ${selectedCourt.value.name}\nFecha: ${reservationData.value.date}\nHorario: ${reservationData.value.timeSlot}\nPersonas: ${reservationData.value.people}\nTotal: $${calculateTotal()}`)
    closeModal()
  }
}
</script>

<style scoped>
/* Animaciones */
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out;
}

@keyframes gradient {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient 3s ease infinite;
}

@keyframes modal-in {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(30px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.animate-modal-in {
  animation: modal-in 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Modal Transitions */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .animate-modal-in {
  animation: modal-in 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.modal-leave-active .animate-modal-in {
  animation: modal-in 0.3s cubic-bezier(0.16, 1, 0.3, 1) reverse;
}

/* Ocultar scrollbar pero mantener funcionalidad */
.scrollbar-hide {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;  /* Chrome, Safari and Opera */
}

/* Estilos personalizados para inputs de número */
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
  appearance: textfield;
}

/* Estilos para select (ocultar flecha por defecto) */
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

/* Efectos hover mejorados */
.hover\:scale-105:hover {
  transform: scale(1.05);
}

.hover\:scale-110:hover {
  transform: scale(1.10);
}

/* Animación de pulso personalizada */
@keyframes pulse-slow {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

.animate-pulse {
  animation: pulse-slow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Border personalizado para mejor visualización */
.border-3 {
  border-width: 3px;
}

/* Efectos de sombra personalizados */
.shadow-2xl {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

/* Transiciones suaves globales */
* {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
