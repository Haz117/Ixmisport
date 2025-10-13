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
                <FunnelIcon class="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-800">Filtros de Búsqueda</h3>
                <p class="text-sm text-gray-500">Personaliza tu búsqueda para encontrar la cancha perfecta</p>
              </div>
            </div>
            <button class="px-4 py-2 text-sm font-semibold text-[#6BCF9F] hover:bg-[#6BCF9F]/10 rounded-lg transition-all duration-300 flex items-center gap-2">
              <ArrowPathIcon class="w-4 h-4" />
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
                  <TrophyIcon class="w-5 h-5 text-[#6BCF9F]" />
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
                <ChevronDownIcon class="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <!-- Date Filter -->
            <div class="relative group">
              <label class="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                <div class="w-8 h-8 bg-gradient-to-br from-[#7ED9A8]/20 to-[#95E3B3]/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <CalendarIcon class="w-5 h-5 text-[#7ED9A8]" />
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
                  <ClockIcon class="w-5 h-5 text-[#95E3B3]" />
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
                <ChevronDownIcon class="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <!-- Location Filter -->
            <div class="relative group">
              <label class="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                <div class="w-8 h-8 bg-gradient-to-br from-[#6BCF9F]/20 to-[#95E3B3]/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MapPinIcon class="w-5 h-5 text-[#6BCF9F]" />
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
                <ChevronDownIcon class="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
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
            <div class="px-6 py-2 bg-white/20 backdrop-blur-md rounded-full">
              <span class="text-lg font-bold">Gratuito</span>
            </div>
            
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
            <div class="px-6 py-2 bg-white/20 backdrop-blur-md rounded-full">
              <span class="text-lg font-bold">Gratuito</span>
            </div>
            
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
            <div class="px-6 py-2 bg-white/20 backdrop-blur-md rounded-full">
              <span class="text-lg font-bold">Gratuito</span>
            </div>
            
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
            <div class="px-6 py-2 bg-white/20 backdrop-blur-md rounded-full">
              <span class="text-lg font-bold">Gratuito</span>
            </div>
            
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
            <div class="px-6 py-2 bg-white/20 backdrop-blur-md rounded-full">
              <span class="text-lg font-bold">Gratuito</span>
            </div>
            
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
            <div class="px-6 py-2 bg-white/20 backdrop-blur-md rounded-full">
              <span class="text-lg font-bold">Gratuito</span>
            </div>
            
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

    <!-- Modal de Reservación Profesional -->
    <Transition name="modal">
      <div 
        v-if="showModal" 
        class="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        @click.self="closeModal"
      >
        <div class="bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[94vh] overflow-hidden flex flex-col animate-modal-in">
          <!-- Modal Header - Profesional y Limpio -->
          <div class="relative bg-gradient-to-r from-[#6BCF9F] via-[#7ED9A8] to-[#95E3B3] px-8 py-6 text-white flex-shrink-0 border-b-4 border-white/20">
            <!-- Patrón sutil de fondo -->
            <div class="absolute inset-0 opacity-10" style="background-image: url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;1&quot;%3E%3Cpath d=&quot;M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');"></div>
            
            <button 
              @click="closeModal"
              class="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center transition-all duration-300 hover:rotate-90 z-10 group border border-white/20"
            >
              <XMarkIcon class="w-6 h-6" />
            </button>
            
            <div class="flex items-start gap-5 relative z-10">
              <div class="w-16 h-16 bg-white/15 backdrop-blur-md rounded-xl flex items-center justify-center shadow-lg flex-shrink-0 border border-white/30">
                <i :class="selectedCourt?.icon" class="text-4xl drop-shadow-lg"></i>
              </div>
              <div class="flex-1 pt-1">
                <div class="flex items-center gap-3 mb-2">
                  <h2 class="text-3xl font-bold drop-shadow-md">{{ selectedCourt?.name }}</h2>
                  <span class="px-3 py-1 bg-green-400/20 backdrop-blur-md rounded-lg text-xs font-bold flex items-center gap-1.5 border border-green-300/30">
                    <span class="w-2 h-2 bg-green-300 rounded-full animate-pulse"></span>
                    DISPONIBLE
                  </span>
                </div>
                <p class="text-white/90 text-base font-medium">{{ selectedCourt?.description }}</p>
              </div>
            </div>
          </div>

          <!-- Modal Content - Scrollable CON scrollbar elegante -->
          <div class="flex-1 overflow-y-auto custom-scrollbar">
            <!-- Información de la Cancha - Grid Compacto -->
            <div class="px-8 py-6 bg-gradient-to-b from-gray-50/50 to-white border-b border-gray-100">
              <div class="grid grid-cols-2 gap-4">
                <div class="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all group">
                  <div class="w-12 h-12 bg-gradient-to-br from-[#6BCF9F] to-[#7ED9A8] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                    <UsersIcon class="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Capacidad</p>
                    <p class="text-lg font-bold text-gray-900">{{ selectedCourt?.capacity }}</p>
                  </div>
                </div>
                <div class="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all group">
                  <div class="w-12 h-12 bg-gradient-to-br from-[#7ED9A8] to-[#95E3B3] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                    <MapPinIcon class="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Ubicación</p>
                    <p class="text-lg font-bold text-gray-900">{{ selectedCourt?.location }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Servicios Incluidos - Diseño Compacto -->
            <div class="px-8 py-6 border-b border-gray-100">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 bg-gradient-to-br from-[#6BCF9F] to-[#7ED9A8] rounded-lg flex items-center justify-center shadow-md">
                  <CheckBadgeIcon class="w-6 h-6 text-white" />
                </div>
                <h3 class="text-xl font-bold text-gray-900">Servicios Incluidos</h3>
              </div>
              <div class="grid grid-cols-2 md:grid-cols-3 gap-2.5">
                <div 
                  v-for="amenity in selectedCourt?.amenities" 
                  :key="amenity"
                  class="flex items-center gap-2.5 p-3 bg-gradient-to-r from-[#F8FDF9] to-white rounded-lg border border-[#D8F0E3] hover:border-[#6BCF9F] hover:shadow-sm transition-all group"
                >
                  <CheckCircleIcon class="w-5 h-5 text-[#6BCF9F] flex-shrink-0" />
                  <span class="font-medium text-gray-700 text-sm">{{ amenity }}</span>
                </div>
              </div>
            </div>

            <!-- Tipo de Reservación -->
            <div class="px-8 py-6 border-b border-gray-100">
              <div class="flex items-center gap-3 mb-5">
                <div class="w-10 h-10 bg-gradient-to-br from-[#6BCF9F] to-[#7ED9A8] rounded-lg flex items-center justify-center shadow-md">
                  <TrophyIcon class="w-6 h-6 text-white" />
                </div>
                <h3 class="text-xl font-bold text-gray-900">Tipo de Reservación</h3>
              </div>
              
              <div class="grid grid-cols-2 gap-4">
                <button
                  @click="reservationData.type = 'normal'"
                  :class="[
                    'p-5 rounded-xl border-2 transition-all duration-300 text-left',
                    reservationData.type === 'normal'
                      ? 'bg-gradient-to-br from-[#6BCF9F]/10 to-[#7ED9A8]/10 border-[#6BCF9F] shadow-lg shadow-[#6BCF9F]/20'
                      : 'bg-white border-gray-200 hover:border-[#6BCF9F]/50 hover:shadow-md'
                  ]"
                >
                  <div class="flex items-center justify-between mb-2">
                    <div class="flex items-center gap-2">
                      <div class="w-8 h-8 bg-gradient-to-br from-[#6BCF9F] to-[#7ED9A8] rounded-lg flex items-center justify-center">
                        <i class="fa-solid fa-clock text-white text-sm"></i>
                      </div>
                      <span class="font-bold text-gray-900">Normal</span>
                    </div>
                    <div v-if="reservationData.type === 'normal'" class="w-6 h-6 bg-[#6BCF9F] rounded-full flex items-center justify-center">
                      <CheckCircleIcon class="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <p class="text-xs text-gray-600 mb-2">Partidos y entrenamientos</p>
                  <div class="flex items-center gap-2 text-xs font-semibold text-[#6BCF9F]">
                    <i class="fa-solid fa-hourglass-half"></i>
                    <span>Máximo: 1 hora</span>
                  </div>
                </button>

                <button
                  @click="reservationData.type = 'tournament'"
                  :class="[
                    'p-5 rounded-xl border-2 transition-all duration-300 text-left',
                    reservationData.type === 'tournament'
                      ? 'bg-gradient-to-br from-[#7ED9A8]/10 to-[#95E3B3]/10 border-[#7ED9A8] shadow-lg shadow-[#7ED9A8]/20'
                      : 'bg-white border-gray-200 hover:border-[#7ED9A8]/50 hover:shadow-md'
                  ]"
                >
                  <div class="flex items-center justify-between mb-2">
                    <div class="flex items-center gap-2">
                      <div class="w-8 h-8 bg-gradient-to-br from-[#7ED9A8] to-[#95E3B3] rounded-lg flex items-center justify-center">
                        <i class="fa-solid fa-trophy text-white text-sm"></i>
                      </div>
                      <span class="font-bold text-gray-900">Torneo</span>
                    </div>
                    <div v-if="reservationData.type === 'tournament'" class="w-6 h-6 bg-[#7ED9A8] rounded-full flex items-center justify-center">
                      <CheckCircleIcon class="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <p class="text-xs text-gray-600 mb-2">Eventos y competencias</p>
                  <div class="flex items-center gap-2 text-xs font-semibold text-[#7ED9A8]">
                    <i class="fa-solid fa-calendar-days"></i>
                    <span>Duración: Flexible</span>
                  </div>
                </button>
              </div>
            </div>

            <!-- Selección de Fecha y Horario -->
            <div class="px-8 py-6 border-b border-gray-100">
              <div class="flex items-center gap-3 mb-5">
                <div class="w-10 h-10 bg-gradient-to-br from-[#7ED9A8] to-[#95E3B3] rounded-lg flex items-center justify-center shadow-md">
                  <CalendarDaysIcon class="w-6 h-6 text-white" />
                </div>
                <h3 class="text-xl font-bold text-gray-900">Fecha y Horario</h3>
              </div>
              
              <!-- Date Picker -->
              <div class="mb-5">
                <label class="text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                  <CalendarIcon class="w-4 h-4 text-[#7ED9A8]" />
                  Selecciona la fecha
                </label>
                <input 
                  v-model="reservationData.date"
                  type="date" 
                  class="w-full px-5 py-3.5 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7ED9A8]/50 focus:border-[#7ED9A8] transition-all duration-300 font-medium text-gray-700 hover:border-[#7ED9A8] shadow-sm"
                />
              </div>

              <!-- Time Slots Grid - Horario libre -->
              <div>
                <div class="flex items-center justify-between mb-3">
                  <label class="text-sm font-bold text-gray-700 flex items-center gap-2">
                    <ClockIcon class="w-4 h-4 text-[#95E3B3]" />
                    Selecciona tu horario
                  </label>
                  <span class="text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {{ reservationData.type === 'tournament' ? 'Sin límite' : 'Máx. 1 hora' }}
                  </span>
                </div>

                <!-- Grid de inputs de tiempo -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <!-- Hora de inicio -->
                  <div>
                    <label class="text-xs font-semibold text-gray-600 mb-2 flex items-center gap-1.5">
                      <i class="fa-solid fa-play text-[#6BCF9F]"></i>
                      Hora de inicio
                    </label>
                    <input 
                      v-model="reservationData.startTime"
                      @input="watchStartTime"
                      type="time" 
                      min="06:00"
                      max="23:59"
                      step="60"
                      class="w-full px-5 py-3.5 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6BCF9F]/50 focus:border-[#6BCF9F] transition-all duration-300 font-semibold text-gray-700 hover:border-[#6BCF9F] shadow-sm text-lg"
                      placeholder="HH:MM"
                    />
                  </div>

                  <!-- Hora de finalización -->
                  <div>
                    <label class="text-xs font-semibold text-gray-600 mb-2 flex items-center gap-1.5">
                      <i class="fa-solid fa-flag-checkered text-[#7ED9A8]"></i>
                      Hora de finalización
                    </label>
                    <input 
                      v-model="reservationData.endTime"
                      @input="watchEndTime"
                      type="time" 
                      min="06:00"
                      max="23:59"
                      step="60"
                      class="w-full px-5 py-3.5 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7ED9A8]/50 focus:border-[#7ED9A8] transition-all duration-300 font-semibold text-gray-700 hover:border-[#7ED9A8] shadow-sm text-lg"
                      placeholder="HH:MM"
                    />
                  </div>
                </div>

                <!-- Mensaje de error -->
                <div v-if="timeError" class="mb-4 p-4 bg-red-50 border-2 border-red-200 rounded-xl">
                  <p class="text-sm font-semibold text-red-600 flex items-center gap-2">
                    <i class="fa-solid fa-circle-exclamation"></i>
                    {{ timeError }}
                  </p>
                </div>

                <!-- Indicador de duración (solo si ambos tiempos están seleccionados y son válidos) -->
                <div v-if="reservationData.startTime && reservationData.endTime && !timeError" class="p-4 bg-gradient-to-r from-[#F8FDF9] to-white rounded-xl border-2 border-[#D8F0E3]">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 bg-gradient-to-br from-[#6BCF9F] to-[#7ED9A8] rounded-lg flex items-center justify-center shadow-md">
                        <i class="fa-solid fa-hourglass-half text-white"></i>
                      </div>
                      <div>
                        <p class="text-xs font-semibold text-gray-500">Duración total</p>
                        <p class="text-lg font-bold text-gray-900">{{ calculateDuration() }}</p>
                      </div>
                    </div>
                    <div class="text-right">
                      <p class="text-xs font-semibold text-gray-500">Horario</p>
                      <p class="text-sm font-bold text-[#6BCF9F]">
                        {{ reservationData.startTime }} - {{ reservationData.endTime }}
                      </p>
                    </div>
                  </div>
                </div>

                <!-- Ayuda contextual -->
                <div class="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <p class="text-xs text-blue-700 flex items-start gap-2">
                    <i class="fa-solid fa-circle-info mt-0.5 flex-shrink-0"></i>
                    <span>
                      <strong>Horario de operación:</strong> 6:00 AM - 12:00 AM (medianoche). 
                      <span v-if="reservationData.type === 'normal'">
                        <br/><strong>Reservaciones normales:</strong> Máximo 1 hora de duración.
                      </span>
                      <span v-else>
                        <br/><strong>Torneos:</strong> Sin límite de duración.
                      </span>
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <!-- Número de Personas - Diseño más compacto y profesional -->
            <div class="px-8 py-6 border-b border-gray-100">
              <div class="flex items-center gap-3 mb-5">
                <div class="w-10 h-10 bg-gradient-to-br from-[#95E3B3] to-[#6BCF9F] rounded-lg flex items-center justify-center shadow-md">
                  <UserGroupIcon class="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900">Número de Jugadores</h3>
                  <p class="text-xs text-gray-500">Mínimo {{ selectedCourt?.minPeople }} - Máximo {{ selectedCourt?.maxPeople }} personas</p>
                </div>
              </div>
              <div class="flex items-center justify-center gap-4 bg-gradient-to-br from-[#F8FDF9] to-white p-6 rounded-xl border-2 border-[#D8F0E3]">
                <button 
                  @click="decrementPeople"
                  class="w-12 h-12 bg-gradient-to-br from-[#6BCF9F] to-[#7ED9A8] text-white rounded-xl font-bold hover:shadow-lg hover:scale-110 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center"
                  :disabled="reservationData.people <= selectedCourt?.minPeople"
                >
                  <MinusIcon class="w-6 h-6" />
                </button>
                <div class="text-center min-w-[100px]">
                  <div class="text-4xl font-extrabold text-[#6BCF9F] mb-1">{{ reservationData.people }}</div>
                  <div class="text-xs font-semibold text-gray-500">Jugadores</div>
                </div>
                <button 
                  @click="incrementPeople"
                  class="w-12 h-12 bg-gradient-to-br from-[#6BCF9F] to-[#7ED9A8] text-white rounded-xl font-bold hover:shadow-lg hover:scale-110 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center"
                  :disabled="reservationData.people >= (selectedCourt?.maxPeople || 22)"
                >
                  <PlusIcon class="w-6 h-6" />
                </button>
              </div>
            </div>

            <!-- Resumen de Reservación - Diseño Premium -->
            <div class="px-8 py-6 bg-gradient-to-br from-gray-50 to-white">
              <div class="flex items-center gap-3 mb-5">
                <div class="w-10 h-10 bg-gradient-to-br from-[#6BCF9F] to-[#7ED9A8] rounded-lg flex items-center justify-center shadow-md">
                  <DocumentTextIcon class="w-6 h-6 text-white" />
                </div>
                <h3 class="text-xl font-bold text-gray-900">Resumen de Reservación</h3>
              </div>
              <div class="bg-white rounded-xl border-2 border-[#6BCF9F]/20 shadow-md overflow-hidden">
                <div class="divide-y divide-gray-100">
                  <div class="flex justify-between items-center px-5 py-4 hover:bg-gray-50 transition-colors">
                    <span class="font-semibold text-gray-600 flex items-center gap-2.5">
                      <i class="fa-solid fa-list-check text-[#6BCF9F]"></i>
                      Tipo
                    </span>
                    <span class="font-bold text-gray-900">{{ reservationData.type === 'normal' ? 'Partido Normal' : 'Torneo/Evento' }}</span>
                  </div>
                  <div class="flex justify-between items-center px-5 py-4 hover:bg-gray-50 transition-colors">
                    <span class="font-semibold text-gray-600 flex items-center gap-2.5">
                      <TrophyIcon class="w-5 h-5 text-[#6BCF9F]" />
                      Cancha
                    </span>
                    <span class="font-bold text-gray-900">{{ selectedCourt?.name }}</span>
                  </div>
                  <div class="flex justify-between items-center px-5 py-4 hover:bg-gray-50 transition-colors">
                    <span class="font-semibold text-gray-600 flex items-center gap-2.5">
                      <CalendarIcon class="w-5 h-5 text-[#7ED9A8]" />
                      Fecha
                    </span>
                    <span class="font-bold text-gray-900">{{ reservationData.date || 'No seleccionada' }}</span>
                  </div>
                  <div class="flex justify-between items-center px-5 py-4 hover:bg-gray-50 transition-colors">
                    <span class="font-semibold text-gray-600 flex items-center gap-2.5">
                      <ClockIcon class="w-5 h-5 text-[#95E3B3]" />
                      Horario
                    </span>
                    <span class="font-bold text-gray-900">
                      {{ reservationData.startTime && reservationData.endTime ? `${reservationData.startTime} - ${reservationData.endTime}` : 'No seleccionado' }}
                    </span>
                  </div>
                  <div class="flex justify-between items-center px-5 py-4 hover:bg-gray-50 transition-colors">
                    <span class="font-semibold text-gray-600 flex items-center gap-2.5">
                      <i class="fa-solid fa-hourglass-half text-[#95E3B3]"></i>
                      Duración
                    </span>
                    <span class="font-bold text-gray-900">{{ calculateDuration() }}</span>
                  </div>
                  <div class="flex justify-between items-center px-5 py-4 hover:bg-gray-50 transition-colors">
                    <span class="font-semibold text-gray-600 flex items-center gap-2.5">
                      <UsersIcon class="w-5 h-5 text-[#6BCF9F]" />
                      Jugadores
                    </span>
                    <span class="font-bold text-gray-900">{{ reservationData.people }} personas</span>
                  </div>
                  <div class="flex justify-between items-center px-5 py-4 bg-gradient-to-r from-[#6BCF9F]/5 to-[#95E3B3]/5">
                    <span class="font-bold text-gray-900 flex items-center gap-2.5">
                      <i class="fa-solid fa-tag text-[#6BCF9F]"></i>
                      Costo Total
                    </span>
                    <span class="font-extrabold text-2xl bg-gradient-to-r from-[#6BCF9F] to-[#7ED9A8] bg-clip-text text-transparent">GRATUITO</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Action Buttons - Footer fijo con diseño profesional -->
          <div class="flex gap-4 px-8 py-5 bg-white border-t-2 border-gray-100 flex-shrink-0 shadow-lg">
            <button 
              @click="closeModal"
              class="flex-1 px-6 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-xl font-bold text-base hover:bg-gray-50 hover:border-gray-400 hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2.5"
            >
              <XCircleIcon class="w-5 h-5" />
              Cancelar
            </button>
            <button 
              @click="confirmReservation"
              :disabled="!isReservationValid"
              class="flex-[2] px-6 py-4 bg-gradient-to-r from-[#6BCF9F] via-[#7ED9A8] to-[#95E3B3] text-white rounded-xl font-bold text-base hover:shadow-xl hover:shadow-[#6BCF9F]/30 hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none flex items-center justify-center gap-2.5"
            >
              <CheckCircleIcon class="w-6 h-6" />
              Confirmar Reservación Gratuita
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
import { 
  FunnelIcon, 
  ArrowPathIcon, 
  TrophyIcon, 
  CalendarIcon, 
  ClockIcon, 
  MapPinIcon,
  ChevronDownIcon,
  XMarkIcon,
  UsersIcon,
  CheckBadgeIcon,
  CalendarDaysIcon,
  UserGroupIcon,
  DocumentTextIcon,
  PlusIcon,
  MinusIcon,
  CheckCircleIcon,
  XCircleIcon
} from '@heroicons/vue/24/outline'

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
  type: 'normal', // 'normal' o 'tournament'
  date: '',
  startTime: '', // Hora de inicio (formato: '06:00', '06:30', '07:00', etc.)
  endTime: '', // Hora de fin (formato: '06:30', '07:00', etc.)
  people: 10
})

// Horas disponibles (6 AM - 11 PM)
const availableHours = ref([
  '06', '07', '08', '09', '10', '11', 
  '12', '13', '14', '15', '16', '17', 
  '18', '19', '20', '21', '22', '23'
])

// Error de validación de tiempo
const timeError = ref('')

// TODO: Integración con Base de Datos
// Este array simula los slots ocupados. En producción, esto vendrá de la API/BD
// Formato: { date: 'YYYY-MM-DD', courtId: number, occupiedHours: ['06:00', '06:30', '14:00', ...] }
const occupiedSlots = ref([
  // Ejemplo de datos simulados - REMOVER cuando se conecte a BD
  { date: '2025-10-13', courtId: 1, occupiedHours: ['08:00', '08:30', '11:00', '15:00', '19:00', '19:30'] },
  { date: '2025-10-13', courtId: 2, occupiedHours: ['09:00', '09:30', '14:00', '18:00'] },
  { date: '2025-10-14', courtId: 1, occupiedHours: ['10:00', '16:00', '20:00'] },
])

// Datos de las canchas
const courts = ref([
  {
    id: 1,
    name: 'Cancha de Fútbol #1',
    description: 'Campo profesional de pasto sintético',
    icon: 'fa-solid fa-futbol',
    capacity: '11 vs 11',
    maxPeople: 22,
    minPeople: 10, // Mínimo 5 vs 5
    location: 'Centro Deportivo',
    amenities: ['Pasto Sintético', 'Iluminación LED', 'Vestidores', 'Estacionamiento', 'Duchas', 'Cafetería']
  },
  {
    id: 2,
    name: 'Cancha de Basquetbol #1',
    description: 'Duela profesional techada',
    icon: 'fa-solid fa-basketball',
    capacity: '5 vs 5',
    maxPeople: 10,
    minPeople: 6, // Mínimo 3 vs 3
    location: 'Polideportivo Norte',
    amenities: ['Duela Profesional', 'Techada', 'WiFi Gratis', 'Hidratación', 'Marcador Electrónico', 'Gradas']
  },
  {
    id: 3,
    name: 'Cancha de Tenis #1',
    description: 'Superficie de arcilla sintética',
    icon: 'fa-solid fa-table-tennis-paddle-ball',
    capacity: 'Individual/Dobles',
    maxPeople: 4,
    minPeople: 2, // Mínimo 1 vs 1
    location: 'Club Deportivo Sur',
    amenities: ['Arcilla Sintética', 'Techada', 'Renta de Equipo', 'Clases Disponibles', 'Iluminación', 'Graderías']
  },
  {
    id: 4,
    name: 'Cancha de Voleibol #1',
    description: 'Arena profesional al aire libre',
    icon: 'fa-solid fa-volleyball',
    capacity: '6 vs 6',
    maxPeople: 12,
    minPeople: 6, // Mínimo 3 vs 3
    location: 'Centro',
    amenities: ['Arena Fina', 'Al Aire Libre', 'Malla Reglamentaria', 'Torneos', 'Graderías', 'Zona de Espectadores']
  },
  {
    id: 5,
    name: 'Cancha de Pádel #1',
    description: 'Pista panorámica con cristales premium',
    icon: 'fa-solid fa-baseball-bat-ball',
    capacity: '2 vs 2',
    maxPeople: 4,
    minPeople: 2, // Mínimo 1 vs 1
    location: 'Norte',
    amenities: ['Cristales Premium', 'Climatizada', 'Iluminación LED', 'Césped Artificial', 'Pro Level', 'Renta Equipo']
  },
  {
    id: 6,
    name: 'Cancha de Fútbol 7',
    description: 'Pasto sintético de alta densidad',
    icon: 'fa-solid fa-futbol',
    capacity: '7 vs 7',
    maxPeople: 14,
    minPeople: 6, // Mínimo 3 vs 3
    location: 'Sur',
    amenities: ['Alta Densidad', 'Iluminación', 'Cámaras', 'Bebederos', 'Estacionamiento', 'Vestidores']
  }
])

// TODO: REMOVER - Datos de ejemplo para timeSlots (ya no se usan)
// const timeSlots = ref([...])

// Funciones del modal
const openModal = (court) => {
  selectedCourt.value = court
  showModal.value = true
  // Reset form
  const today = new Date().toISOString().split('T')[0]
  reservationData.value = {
    type: 'normal',
    date: today,
    startTime: '',
    endTime: '',
    people: court.minPeople // Iniciar con el mínimo requerido
  }
  timeError.value = '' // Reset error
}

const closeModal = () => {
  showModal.value = false
  setTimeout(() => {
    selectedCourt.value = null
  }, 300)
}

// TODO: Integración con Base de Datos
// Esta función verificará en la BD si un rango de tiempo está ocupado
const isTimeRangeOccupied = () => {
  if (!reservationData.value.date || !selectedCourt.value || !reservationData.value.startTime || !reservationData.value.endTime) {
    return false
  }
  
  // Aquí se validaría contra la base de datos
  // Por ahora retornamos false (disponible)
  return false
  
  /* TODO: Reemplazar con llamada a API
  try {
    const response = await fetch(`/api/reservations/check-range`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        date: reservationData.value.date,
        courtId: selectedCourt.value.id,
        startTime: reservationData.value.startTime,
        endTime: reservationData.value.endTime
      })
    })
    const data = await response.json()
    return data.isOccupied
  } catch (error) {
    console.error('Error checking availability:', error)
    return false
  }
  */
}

// Validar tiempos cuando cambian
const validateTimes = () => {
  timeError.value = ''
  
  if (!reservationData.value.startTime || !reservationData.value.endTime) {
    return
  }
  
  const startMinutes = timeToMinutes(reservationData.value.startTime)
  const endMinutes = timeToMinutes(reservationData.value.endTime)
  const duration = endMinutes - startMinutes
  
  // Validar que la hora de fin sea posterior a la de inicio
  if (duration <= 0) {
    timeError.value = '❌ La hora de finalización debe ser posterior a la hora de inicio'
    return
  }
  
  // Validar duración máxima para reservaciones normales (60 minutos)
  if (reservationData.value.type === 'normal' && duration > 60) {
    timeError.value = '❌ Las reservaciones normales no pueden exceder 1 hora (60 minutos)'
    return
  }
  
  // Validar horario de operación (6 AM - 12 AM)
  if (startMinutes < 360 || endMinutes > 1440) { // 360 = 6:00 AM, 1440 = 12:00 AM
    timeError.value = '❌ El horario de operación es de 6:00 AM a 12:00 AM (medianoche)'
    return
  }
}

// Watchers para validar en tiempo real
const watchStartTime = () => {
  validateTimes()
}

const watchEndTime = () => {
  validateTimes()
}

// Convertir tiempo a minutos para comparaciones
const timeToMinutes = (time) => {
  const [hours, minutes] = time.split(':').map(Number)
  return hours * 60 + minutes
}

// Convertir minutos a formato de tiempo
const minutesToTime = (minutes) => {
  // Manejar el caso de medianoche del día siguiente
  const adjustedMinutes = minutes % 1440 // 1440 = 24 horas en minutos
  const hours = Math.floor(adjustedMinutes / 60)
  const mins = adjustedMinutes % 60
  return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`
}

// Calcular duración total
const calculateDuration = () => {
  if (!reservationData.value.startTime) return '0 minutos'
  if (!reservationData.value.endTime) return 'Selecciona duración'
  
  const startMinutes = timeToMinutes(reservationData.value.startTime)
  const endMinutes = timeToMinutes(reservationData.value.endTime)
  const durationMinutes = endMinutes - startMinutes
  
  const hours = Math.floor(durationMinutes / 60)
  const minutes = durationMinutes % 60
  
  if (hours === 0) {
    return `${minutes} minutos`
  } else if (minutes === 0) {
    return hours === 1 ? '1 hora' : `${hours} horas`
  } else {
    return `${hours} hora${hours > 1 ? 's' : ''} y ${minutes} minutos`
  }
}

// TODO: REMOVER - Función antigua (ya no se usa)
// const selectTimeSlot = (slot) => { ... }

const incrementPeople = () => {
  if (reservationData.value.people < selectedCourt.value.maxPeople) {
    reservationData.value.people++
  }
}

const decrementPeople = () => {
  if (reservationData.value.people > selectedCourt.value.minPeople) {
    reservationData.value.people--
  }
}

const isReservationValid = computed(() => {
  const baseValid = reservationData.value.date && 
                    reservationData.value.startTime && 
                    reservationData.value.endTime && 
                    reservationData.value.people >= selectedCourt.value.minPeople && // Validar mínimo
                    reservationData.value.people <= selectedCourt.value.maxPeople && // Validar máximo
                    timeError.value === '' // No debe haber errores de validación
  
  return baseValid
})

// TODO: Integración con Base de Datos
// Esta función enviará la reservación a la BD
const confirmReservation = () => {
  if (!isReservationValid.value) return
  
  // Datos que se enviarán a la BD
  const reservationPayload = {
    courtId: selectedCourt.value.id,
    courtName: selectedCourt.value.name,
    type: reservationData.value.type,
    date: reservationData.value.date,
    startTime: reservationData.value.startTime,
    endTime: reservationData.value.endTime,
    duration: calculateDuration(),
    people: reservationData.value.people,
    status: 'confirmed',
    createdAt: new Date().toISOString()
  }
  
  console.log('📋 Datos de reservación (enviar a BD):', reservationPayload)
  
  /* TODO: Implementar llamada a API
  try {
    const response = await fetch('/api/reservations/create', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userToken}` // Agregar autenticación
      },
      body: JSON.stringify(reservationPayload)
    })
    
    if (!response.ok) throw new Error('Error al crear reservación')
    
    const data = await response.json()
    
    // Mostrar confirmación exitosa
    alert(`¡Reservación confirmada! 🎉\n\nID: ${data.reservationId}\nCancha: ${selectedCourt.value.name}\nFecha: ${reservationData.value.date}\nHorario: ${reservationPayload.startTime} - ${reservationPayload.endTime}\nDuración: ${reservationPayload.duration}\nPersonas: ${reservationData.value.people}\n\n✅ Reservación gratuita`)
    
    // Actualizar lista de horarios ocupados (opcional, o hacer refetch)
    // fetchOccupiedSlots()
    
    closeModal()
    
    // Redirigir a mis reservaciones o mostrar notificación
    // router.push('/mis-reservaciones')
    
  } catch (error) {
    console.error('Error al confirmar reservación:', error)
    alert('❌ Error al procesar tu reservación. Por favor intenta de nuevo.')
  }
  */
  
  // SIMULACIÓN - Mostrar alerta temporal (REMOVER en producción)
  alert(`¡Reservación confirmada! 🎉\n\nTipo: ${reservationPayload.type === 'normal' ? 'Partido Normal' : 'Torneo'}\nCancha: ${selectedCourt.value.name}\nFecha: ${reservationData.value.date}\nHorario: ${reservationPayload.startTime} - ${reservationPayload.endTime}\nDuración: ${reservationPayload.duration}\nPersonas: ${reservationData.value.people}\n\n✅ Reservación gratuita`)
  
  closeModal()
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
    transform: scale(0.96) translateY(20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.animate-modal-in {
  animation: modal-in 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Modal Transitions */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.25s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .animate-modal-in {
  animation: modal-in 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.modal-leave-active .animate-modal-in {
  animation: modal-in 0.25s cubic-bezier(0.16, 1, 0.3, 1) reverse;
}

/* Scrollbar personalizado y elegante */
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: #6BCF9F #f1f5f9;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #f1f5f9;
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #6BCF9F, #7ED9A8);
  border-radius: 10px;
  transition: background 0.3s ease;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #5ab88d, #6BCF9F);
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

/* Estilos para inputs de fecha mejorados */
input[type="date"]::-webkit-calendar-picker-indicator {
  cursor: pointer;
  filter: opacity(0.6);
  transition: filter 0.3s ease;
}

input[type="date"]::-webkit-calendar-picker-indicator:hover {
  filter: opacity(1);
}

/* Focus states mejorados */
input:focus,
textarea:focus,
select:focus,
button:focus-visible {
  outline: none;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

</style>
