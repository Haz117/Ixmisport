<template>
  <div class="reservaciones-container min-h-screen bg-gradient-to-br from-white via-[#F8FDF9] to-[#F2F9F4]">
    <!-- Elementos decorativos de fondo animados -->
    <div class="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div class="bg-blob blob-1"></div>
      <div class="bg-blob blob-2"></div>
      <div class="bg-blob blob-3"></div>
    </div>

    <!-- Navbar Mejorado -->
    <nav :class="['navbar-reservaciones', { 'navbar-scrolled': isScrolled }]">
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
    <section class="hero-section relative bg-gradient-to-br from-[#6BCF9F] via-[#7ED9A8] to-[#95E3B3] py-20 overflow-hidden">
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
          <h1 class="hero-title text-6xl md:text-7xl font-extrabold mb-6">
            <span class="title-line">Elige tu Cancha</span>
            <span class="title-highlight">Ideal</span>
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
    <section ref="filtersSection" :class="['filters-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20 mb-16', { 'animate-visible': filtersVisible }]">
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

    <!-- Interactive Courts Grid - Dinámico para las 9 canchas -->
    <section ref="courtsSection" class="courts-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <span class="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#6BCF9F]/10 to-[#7ED9A8]/10 rounded-full text-[#059669] text-sm font-semibold mb-4">
          <i class="fa-solid fa-futbol"></i>
          Espacios Disponibles
        </span>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Nuestras Canchas</h2>
        <p class="text-gray-500 max-w-2xl mx-auto">Selecciona la cancha ideal para tu próximo partido o entrenamiento</p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Iterar sobre todas las canchas dinámicamente -->
        <div 
          v-for="(court, index) in courts"
          :key="court.id"
          @click="openModal(court)"
          :class="['court-card group', { 'animate-visible': courtsVisible }]"
          :style="{ animationDelay: `${index * 0.08}s` }"
        >
          <!-- Card Header con Gradiente -->
          <div :class="['court-card-header', getCourtHeaderClass(court.sport)]">
            <!-- Status Badge -->
            <div class="court-status">
              <span class="status-dot"></span>
              <span class="status-text">Disponible</span>
            </div>
            
            <!-- Sport Icon -->
            <div class="court-icon-wrapper">
              <div class="court-icon-bg"></div>
              <i :class="court.icon" class="court-icon"></i>
            </div>
            
            <!-- Court Type Badge -->
            <div class="court-type-badge">
              <i :class="getSportBadgeIcon(court.sport)"></i>
              {{ court.sport.charAt(0).toUpperCase() + court.sport.slice(1) }}
            </div>
          </div>

          <!-- Card Body -->
          <div class="court-card-body">
            <h3 class="court-name">{{ court.name }}</h3>
            
            <div class="court-location">
              <i class="fa-solid fa-map-marker-alt"></i>
              <span>{{ court.location }}</span>
            </div>

            <!-- Court Stats -->
            <div class="court-stats">
              <div class="court-stat">
                <div class="stat-icon">
                  <i class="fa-solid fa-users"></i>
                </div>
                <div class="stat-info">
                  <span class="stat-value">{{ court.capacity }}</span>
                  <span class="stat-label">Capacidad</span>
                </div>
              </div>
              <div class="court-stat">
                <div class="stat-icon">
                  <i class="fa-solid fa-lightbulb"></i>
                </div>
                <div class="stat-info">
                  <span class="stat-value">{{ court.amenities[0] }}</span>
                  <span class="stat-label">Iluminación</span>
                </div>
              </div>
            </div>

            <!-- Amenities Tags -->
            <div class="court-amenities">
              <span v-for="amenity in court.amenities.slice(0, 3)" :key="amenity" class="amenity-tag">
                {{ amenity }}
              </span>
            </div>

            <!-- Card Footer -->
            <div class="court-card-footer">
              <div class="court-price">
                <span class="price-label">Precio</span>
                <span class="price-value">Gratuito</span>
              </div>
              <button class="reserve-btn">
                <span>Reservar</span>
                <i class="fa-solid fa-arrow-right"></i>
              </button>
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
                    <i class="fa-solid fa-calendar-alt"></i>
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
                      min="05:00"
                      max="22:00"
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
                      min="05:00"
                      max="22:00"
                      step="60"
                      class="w-full px-5 py-3.5 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7ED9A8]/50 focus:border-[#7ED9A8] transition-all duration-300 font-semibold text-gray-700 hover:border-[#7ED9A8] shadow-sm text-lg"
                      placeholder="HH:MM"
                    />
                  </div>
                </div>

                <!-- Mensaje de error -->
                <div v-if="timeError" class="mb-4 p-4 bg-red-50 border-2 border-red-200 rounded-xl">
                  <p class="text-sm font-semibold text-red-600 flex items-center gap-2">
                    <i class="fa-solid fa-exclamation-circle"></i>
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
                    <i class="fa-solid fa-info-circle mt-0.5 flex-shrink-0"></i>
                    <span>
                      <strong>Horario de operación:</strong> 5:00 AM - 10:00 PM. 
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
                      <i class="fa-solid fa-tasks text-[#6BCF9F]"></i>
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


  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { jsPDF } from 'jspdf'
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
import { createReservation, getOccupiedHours, checkAvailability } from '@/firebase/reservations'
import { onAuthChange, getCurrentUser } from '@/firebase/auth'

// Estado del modal
const showModal = ref(false)
const selectedCourt = ref(null)

// Estado del usuario actual
const currentUser = ref(null)
let unsubscribeAuth = null

// Estado de carga
const isLoading = ref(false)
const loadingMessage = ref('')

// Estado de scroll y animaciones
const isScrolled = ref(false)
const filtersSection = ref(null)
const courtsSection = ref(null)
const filtersVisible = ref(false)
const courtsVisible = ref(false)
let observer = null

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

// Horas ocupadas para la fecha y cancha seleccionada (cargadas desde Firebase)
const currentOccupiedHours = ref([])

// Montar y desmontar
onMounted(() => {
  unsubscribeAuth = onAuthChange((user) => {
    currentUser.value = user
  })

  // Scroll handler para navbar
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
  }
  window.addEventListener('scroll', handleScroll)

  // Intersection Observer para animaciones de scroll
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target === filtersSection.value) filtersVisible.value = true
        if (entry.target === courtsSection.value) courtsVisible.value = true
      }
    })
  }, { threshold: 0.1 })

  // Observar secciones
  setTimeout(() => {
    if (filtersSection.value) observer.observe(filtersSection.value)
    if (courtsSection.value) observer.observe(courtsSection.value)
  }, 100)
})

onUnmounted(() => {
  if (unsubscribeAuth) unsubscribeAuth()
  window.removeEventListener('scroll', () => {})
  if (observer) observer.disconnect()
})

// Cargar horas ocupadas cuando cambia la fecha o la cancha
watch([() => reservationData.value.date, () => selectedCourt.value], async ([newDate, newCourt]) => {
  if (newDate && newCourt) {
    const result = await getOccupiedHours(newDate, newCourt.id)
    currentOccupiedHours.value = result.occupiedHours || []
  } else {
    currentOccupiedHours.value = []
  }
}, { immediate: true })

// Datos de las canchas - 9 canchas totales: 4 basquet, 2 tennis, 2 voleibol, 1 pádel
const courts = ref([
  // 4 Canchas de Basquetbol
  {
    id: 1,
    name: 'Cancha de Basquetbol #1',
    description: 'Duela profesional techada',
    icon: 'fa-solid fa-basketball',
    capacity: '5 vs 5',
    maxPeople: 10,
    minPeople: 6,
    location: 'Polideportivo Norte',
    sport: 'basquetbol',
    amenities: ['Duela Profesional', 'Techada', 'WiFi Gratis', 'Hidratación', 'Marcador Electrónico', 'Gradas']
  },
  {
    id: 2,
    name: 'Cancha de Basquetbol #2',
    description: 'Duela profesional con iluminación LED',
    icon: 'fa-solid fa-basketball',
    capacity: '5 vs 5',
    maxPeople: 10,
    minPeople: 6,
    location: 'Polideportivo Norte',
    sport: 'basquetbol',
    amenities: ['Duela Profesional', 'Iluminación LED', 'WiFi Gratis', 'Vestidores', 'Marcador Electrónico', 'Gradas']
  },
  {
    id: 3,
    name: 'Cancha de Basquetbol #3',
    description: 'Cancha al aire libre con piso anti-derrapante',
    icon: 'fa-solid fa-basketball',
    capacity: '5 vs 5',
    maxPeople: 10,
    minPeople: 6,
    location: 'Centro Deportivo',
    sport: 'basquetbol',
    amenities: ['Piso Anti-derrapante', 'Iluminación', 'Bebederos', 'Estacionamiento', 'Gradas', 'Área de Calentamiento']
  },
  {
    id: 4,
    name: 'Cancha de Basquetbol #4',
    description: 'Cancha cubierta climatizada',
    icon: 'fa-solid fa-basketball',
    capacity: '5 vs 5',
    maxPeople: 10,
    minPeople: 6,
    location: 'Gimnasio Municipal',
    sport: 'basquetbol',
    amenities: ['Climatizada', 'Duela Premium', 'Vestidores', 'Duchas', 'Marcador Digital', 'Sonido Ambiente']
  },
  // 2 Canchas de Tennis
  {
    id: 5,
    name: 'Cancha de Tennis #1',
    description: 'Superficie de arcilla sintética profesional',
    icon: 'fa-solid fa-baseball',
    capacity: 'Individual/Dobles',
    maxPeople: 4,
    minPeople: 2,
    location: 'Club Deportivo Sur',
    sport: 'tenis',
    amenities: ['Arcilla Sintética', 'Techada', 'Renta de Equipo', 'Clases Disponibles', 'Iluminación', 'Graderías']
  },
  {
    id: 6,
    name: 'Cancha de Tennis #2',
    description: 'Superficie dura profesional al aire libre',
    icon: 'fa-solid fa-baseball',
    capacity: 'Individual/Dobles',
    maxPeople: 4,
    minPeople: 2,
    location: 'Centro Deportivo',
    sport: 'tenis',
    amenities: ['Superficie Dura', 'Iluminación LED', 'Renta de Equipo', 'Bancas', 'Bebederos', 'Estacionamiento']
  },
  // 2 Canchas de Voleibol
  {
    id: 7,
    name: 'Cancha de Voleibol #1',
    description: 'Arena profesional al aire libre',
    icon: 'fa-solid fa-volleyball',
    capacity: '6 vs 6',
    maxPeople: 12,
    minPeople: 6,
    location: 'Centro Deportivo',
    sport: 'voleibol',
    amenities: ['Arena Fina', 'Al Aire Libre', 'Malla Reglamentaria', 'Torneos', 'Graderías', 'Zona de Espectadores']
  },
  {
    id: 8,
    name: 'Cancha de Voleibol #2',
    description: 'Cancha techada con piso especial',
    icon: 'fa-solid fa-volleyball',
    capacity: '6 vs 6',
    maxPeople: 12,
    minPeople: 6,
    location: 'Polideportivo Norte',
    sport: 'voleibol',
    amenities: ['Piso Especial', 'Techada', 'Malla Reglamentaria', 'Iluminación', 'Gradas', 'Vestidores']
  },
  // 1 Cancha de Pádel
  {
    id: 9,
    name: 'Cancha de Pádel #1',
    description: 'Pista panorámica con cristales premium',
    icon: 'fa-solid fa-table-tennis-paddle-ball',
    capacity: '2 vs 2',
    maxPeople: 4,
    minPeople: 2,
    location: 'Norte',
    sport: 'padel',
    amenities: ['Cristales Premium', 'Climatizada', 'Iluminación LED', 'Césped Artificial', 'Pro Level', 'Renta Equipo']
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

// Verificar si un rango de tiempo está ocupado usando los datos cargados
const isTimeRangeOccupied = () => {
  if (!reservationData.value.date || !selectedCourt.value || !reservationData.value.startTime || !reservationData.value.endTime) {
    return false
  }
  
  // Convertir tiempo a minutos
  const timeToMins = (time) => {
    const [hours, minutes] = time.split(':').map(Number)
    return hours * 60 + minutes
  }
  
  const startMins = timeToMins(reservationData.value.startTime)
  const endMins = timeToMins(reservationData.value.endTime)
  
  // Verificar si algún slot ocupado está dentro del rango seleccionado
  for (const occupiedTime of currentOccupiedHours.value) {
    const occupiedMins = timeToMins(occupiedTime)
    if (occupiedMins >= startMins && occupiedMins < endMins) {
      return true
    }
  }
  
  return false
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
    timeError.value = 'Error: La hora de finalización debe ser posterior a la hora de inicio'
    return
  }
  
  // Validar duración máxima para reservaciones normales (60 minutos)
  if (reservationData.value.type === 'normal' && duration > 60) {
    timeError.value = 'Error: Las reservaciones normales no pueden exceder 1 hora (60 minutos)'
    return
  }
  
  // Validar horario de operación (5 AM - 10 PM)
  if (startMinutes < 300 || endMinutes > 1320) { // 300 = 5:00 AM, 1320 = 10:00 PM
    timeError.value = 'Error: El horario de operación es de 5:00 AM a 10:00 PM'
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

// Función para obtener el gradiente de color según el deporte
const getCourtGradient = (sport) => {
  const gradients = {
    basquetbol: 'bg-gradient-to-br from-[#d35400] to-[#e67e22] hover:shadow-[#e67e22]/50',
    tenis: 'bg-gradient-to-br from-[#c0392b] to-[#e74c3c] hover:shadow-[#e74c3c]/50',
    voleibol: 'bg-gradient-to-br from-[#f39c12] to-[#f1c40f] hover:shadow-[#f1c40f]/50',
    padel: 'bg-gradient-to-br from-[#16a085] to-[#1abc9c] hover:shadow-[#1abc9c]/50'
  }
  return gradients[sport] || 'bg-gradient-to-br from-[#6BCF9F] to-[#7ED9A8] hover:shadow-[#6BCF9F]/50'
}

// Función para obtener clase de header según deporte
const getCourtHeaderClass = (sport) => {
  const classes = {
    basquetbol: 'header-basketball',
    tenis: 'header-tennis',
    voleibol: 'header-volleyball',
    padel: 'header-padel'
  }
  return classes[sport] || 'header-default'
}

// Función para obtener icono del badge según deporte
const getSportBadgeIcon = (sport) => {
  const icons = {
    basquetbol: 'fa-solid fa-basketball',
    tenis: 'fa-solid fa-baseball',
    voleibol: 'fa-solid fa-volleyball',
    padel: 'fa-solid fa-table-tennis-paddle-ball'
  }
  return icons[sport] || 'fa-solid fa-futbol'
}

// Función para generar PDF de la reservación
const generateReservationPDF = (reservationPayload) => {
  const doc = new jsPDF()
  const reservationId = reservationPayload.id || `RES-${Date.now().toString(36).toUpperCase()}`
  
  // Configuración de colores
  const primaryColor = [107, 207, 159] // #6BCF9F
  const darkColor = [45, 55, 72]
  const grayColor = [113, 128, 150]
  
  // Header con fondo verde
  doc.setFillColor(...primaryColor)
  doc.rect(0, 0, 210, 50, 'F')
  
  // Logo/Título
  doc.setTextColor(255, 255, 255)
  doc.setFontSize(28)
  doc.setFont('helvetica', 'bold')
  doc.text('IxmiSport', 20, 25)
  
  doc.setFontSize(12)
  doc.setFont('helvetica', 'normal')
  doc.text('Comprobante de Reservación', 20, 35)
  
  // ID de reservación en la esquina
  doc.setFontSize(10)
  doc.text(`ID: ${reservationId.slice(0, 15)}`, 140, 25)
  doc.text(new Date().toLocaleDateString('es-MX', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  }), 140, 32)
  
  // Cuerpo del documento
  let yPosition = 70
  
  // Título de sección
  doc.setTextColor(...darkColor)
  doc.setFontSize(16)
  doc.setFont('helvetica', 'bold')
  doc.text('Detalles de la Reservación', 20, yPosition)
  
  yPosition += 15
  
  // Línea decorativa
  doc.setDrawColor(...primaryColor)
  doc.setLineWidth(2)
  doc.line(20, yPosition - 5, 190, yPosition - 5)
  
  // Información de la reservación
  doc.setFontSize(11)
  doc.setFont('helvetica', 'normal')
  
  const details = [
    { label: 'Cancha:', value: reservationPayload.courtName },
    { label: 'Tipo de Reservación:', value: reservationPayload.type === 'normal' ? 'Partido Normal' : 'Torneo/Evento' },
    { label: 'Fecha:', value: new Date(reservationPayload.date + 'T00:00:00').toLocaleDateString('es-MX', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) },
    { label: 'Horario:', value: `${reservationPayload.startTime} - ${reservationPayload.endTime}` },
    { label: 'Duración:', value: reservationPayload.duration },
    { label: 'Número de Jugadores:', value: `${reservationPayload.people} personas` },
    { label: 'Ubicación:', value: reservationPayload.courtLocation || selectedCourt.value?.location || 'Centro Deportivo' },
    { label: 'Costo:', value: 'GRATUITO' }
  ]
  
  details.forEach((detail, index) => {
    const rowY = yPosition + (index * 12)
    
    // Fondo alternado
    if (index % 2 === 0) {
      doc.setFillColor(248, 253, 249)
      doc.rect(20, rowY - 4, 170, 10, 'F')
    }
    
    doc.setTextColor(...grayColor)
    doc.setFont('helvetica', 'normal')
    doc.text(detail.label, 25, rowY + 3)
    
    doc.setTextColor(...darkColor)
    doc.setFont('helvetica', 'bold')
    doc.text(detail.value, 80, rowY + 3)
  })
  
  yPosition += (details.length * 12) + 20
  
  // Código QR simulado (rectángulo)
  doc.setFillColor(240, 240, 240)
  doc.rect(20, yPosition, 40, 40, 'F')
  doc.setFontSize(8)
  doc.setTextColor(...grayColor)
  doc.text('Código de', 27, yPosition + 18)
  doc.text('Verificación', 25, yPosition + 24)
  
  // Instrucciones
  doc.setFontSize(10)
  doc.setTextColor(...darkColor)
  doc.text('Instrucciones:', 70, yPosition + 5)
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(9)
  doc.setTextColor(...grayColor)
  const instructions = [
    '• Presenta este comprobante al llegar a las instalaciones',
    '• Llega 10 minutos antes de tu horario reservado',
    '• Respeta el horario asignado para tu reservación',
    '• Cualquier cambio debe notificarse con 24 hrs de anticipación'
  ]
  instructions.forEach((inst, i) => {
    doc.text(inst, 70, yPosition + 15 + (i * 6))
  })
  
  // Footer
  doc.setFillColor(...primaryColor)
  doc.rect(0, 275, 210, 22, 'F')
  
  doc.setTextColor(255, 255, 255)
  doc.setFontSize(9)
  doc.setFont('helvetica', 'normal')
  doc.text('IxmiSport - Centro Deportivo Municipal', 20, 283)
  doc.text('Contacto: admin@ixmisport.com | Tel: 771-123-4567', 20, 289)
  doc.text(`Generado: ${new Date().toLocaleString('es-MX')}`, 140, 286)
  
  // Guardar el PDF
  doc.save(`Reservacion_${reservationId}_${reservationPayload.date}.pdf`)
  
  return reservationId
}

// Confirmar reservación y guardar en Firebase
const confirmReservation = async () => {
  if (!isReservationValid.value) return
  
  // Verificar que el usuario esté autenticado
  if (!currentUser.value) {
    alert('Error: Debes iniciar sesión para hacer una reservación')
    return
  }
  
  isLoading.value = true
  loadingMessage.value = 'Verificando disponibilidad...'
  
  try {
    // Verificar disponibilidad una última vez antes de confirmar
    const availability = await checkAvailability(
      reservationData.value.date,
      selectedCourt.value.id,
      reservationData.value.startTime,
      reservationData.value.endTime
    )
    
    if (!availability.available) {
      alert(`Error: Este horario ya no está disponible.\n${availability.message || 'Por favor selecciona otro horario.'}`)
      // Recargar horas ocupadas
      const result = await getOccupiedHours(reservationData.value.date, selectedCourt.value.id)
      currentOccupiedHours.value = result.occupiedHours || []
      isLoading.value = false
      return
    }
    
    loadingMessage.value = 'Guardando reservación...'
    
    // Datos de la reservación
    const reservationPayload = {
      userId: currentUser.value.uid,
      userEmail: currentUser.value.email,
      userName: currentUser.value.displayName || currentUser.value.email.split('@')[0],
      courtId: selectedCourt.value.id,
      courtName: selectedCourt.value.name,
      courtSport: selectedCourt.value.sport,
      courtLocation: selectedCourt.value.location,
      type: reservationData.value.type,
      date: reservationData.value.date,
      startTime: reservationData.value.startTime,
      endTime: reservationData.value.endTime,
      duration: calculateDuration(),
      people: reservationData.value.people
    }
    
    // Guardar en Firebase
    const result = await createReservation(reservationPayload)
    
    if (!result.success) {
      throw new Error(result.error || 'Error al guardar la reservación')
    }
    
    // Generar el PDF de la reservación
    const reservationId = generateReservationPDF({ ...reservationPayload, id: result.id })
    
    // Mostrar confirmación
    alert(`Reservación confirmada exitosamente\n\nID: ${result.id}\nTipo: ${reservationPayload.type === 'normal' ? 'Partido Normal' : 'Torneo'}\nCancha: ${selectedCourt.value.name}\nFecha: ${reservationData.value.date}\nHorario: ${reservationPayload.startTime} - ${reservationPayload.endTime}\nDuración: ${reservationPayload.duration}\nPersonas: ${reservationData.value.people}\n\nSe ha descargado el comprobante PDF`)
    
    closeModal()
    
  } catch (error) {
    console.error('Error al confirmar reservación:', error)
    alert(`Error al procesar tu reservación: ${error.message}\nPor favor intenta de nuevo.`)
  } finally {
    isLoading.value = false
    loadingMessage.value = ''
  }
}
</script>

<style scoped>
/* ================================================
   IXMISPORT RESERVACIONES - PREMIUM UI/UX
   ================================================ */

/* Keyframe Animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slideDown {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes titleReveal {
  from { 
    opacity: 0; 
    transform: translateY(20px);
  }
  to { 
    opacity: 1; 
    transform: translateY(0);
    filter: blur(0);
  }
}

/* Container principal */
.reservaciones-container {
  position: relative;
  overflow-x: hidden;
}

/* Background Blobs - Simplificados para rendimiento */
.bg-blob {
  position: absolute;
  border-radius: 50%;
  opacity: 0.15;
  z-index: 0;
}

.blob-1 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(107, 207, 159, 0.4) 0%, transparent 70%);
  top: -150px;
  right: -150px;
}

.blob-2 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(126, 217, 168, 0.35) 0%, transparent 70%);
  bottom: 30%;
  left: -100px;
}

.blob-3 {
  width: 350px;
  height: 350px;
  background: radial-gradient(circle, rgba(149, 227, 179, 0.3) 0%, transparent 70%);
  top: 60%;
  right: 5%;
}

/* Navbar Profesional */
.navbar-reservaciones {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(107, 207, 159, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.navbar-scrolled {
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 8px 32px rgba(107, 207, 159, 0.12);
  border-bottom-color: rgba(107, 207, 159, 0.2);
}

/* Hero Section */
.hero-section {
  position: relative;
  z-index: 1;
}

.hero-title {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.hero-title .title-line {
  animation: titleReveal 0.8s ease-out forwards;
  display: block;
}

.hero-title .title-highlight {
  background: linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.9) 50%, #ffffff 100%);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: titleReveal 0.8s ease-out 0.2s forwards, gradientShift 4s ease infinite;
  opacity: 0;
  display: block;
}

/* Filters Section */
.filters-section {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.filters-section.animate-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Courts Grid */
.courts-section {
  position: relative;
  z-index: 1;
}

/* ========== PROFESSIONAL COURT CARDS ========== */
.court-card {
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  opacity: 0;
  transform: translateY(30px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(229, 231, 235, 0.6);
}

.court-card.animate-visible {
  opacity: 1;
  transform: translateY(0);
}

.court-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}

/* Card Header */
.court-card-header {
  position: relative;
  height: 140px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
}

.court-card-header::before {
  content: '';
  position: absolute;
  inset: 0;
  background: inherit;
  z-index: 0;
}

/* Header Sport Variants */
.header-basketball {
  background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
}

.header-tennis {
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
}

.header-volleyball {
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
}

.header-padel {
  background: linear-gradient(135deg, #14b8a6 0%, #0d9488 100%);
}

.header-default {
  background: linear-gradient(135deg, #6BCF9F 0%, #059669 100%);
}

/* Status Badge */
.court-status {
  position: relative;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  border-radius: 20px;
  width: fit-content;
}

.status-dot {
  width: 8px;
  height: 8px;
  background: #4ade80;
  border-radius: 50%;
  animation: pulse-dot 2s ease-in-out infinite;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.2); }
}

.status-text {
  font-size: 0.75rem;
  font-weight: 600;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Court Icon */
.court-icon-wrapper {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  transition: transform 0.3s ease;
}

.court-card:hover .court-icon-wrapper {
  transform: translateY(-50%) scale(1.1) rotate(5deg);
}

.court-icon-bg {
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  backdrop-filter: blur(4px);
}

.court-icon {
  position: relative;
  z-index: 1;
  font-size: 2rem;
  color: white;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
}

/* Court Type Badge */
.court-type-badge {
  position: relative;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 10px;
  width: fit-content;
  font-size: 0.8rem;
  font-weight: 700;
  color: #374151;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.court-type-badge i {
  font-size: 0.85rem;
  color: #6BCF9F;
}

/* Card Body */
.court-card-body {
  padding: 1.25rem;
}

.court-name {
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.5rem;
  line-height: 1.3;
}

.court-location {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 1rem;
}

.court-location i {
  color: #6BCF9F;
  font-size: 0.8rem;
}

/* Court Stats */
.court-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
  margin-bottom: 1rem;
  padding: 0.75rem;
  background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
  border-radius: 12px;
}

.court-stat {
  display: flex;
  align-items: center;
  gap: 0.625rem;
}

.stat-icon {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.04);
}

.stat-icon i {
  font-size: 0.875rem;
  color: #6BCF9F;
}

.stat-info {
  display: flex;
  flex-direction: column;
}

.stat-value {
  font-size: 0.8rem;
  font-weight: 700;
  color: #111827;
  line-height: 1.2;
}

.stat-label {
  font-size: 0.7rem;
  color: #9ca3af;
  font-weight: 500;
}

/* Amenities Tags */
.court-amenities {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.amenity-tag {
  padding: 4px 10px;
  background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
  color: #047857;
  font-size: 0.7rem;
  font-weight: 600;
  border-radius: 6px;
  border: 1px solid rgba(167, 243, 208, 0.5);
}

/* Card Footer */
.court-card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;
  border-top: 1px solid #f3f4f6;
}

.court-price {
  display: flex;
  flex-direction: column;
}

.price-label {
  font-size: 0.7rem;
  color: #9ca3af;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.price-value {
  font-size: 1.125rem;
  font-weight: 800;
  color: #059669;
}

.reserve-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: linear-gradient(135deg, #6BCF9F 0%, #059669 100%);
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(5, 150, 105, 0.25);
}

.reserve-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(5, 150, 105, 0.35);
}

.reserve-btn i {
  font-size: 0.75rem;
  transition: transform 0.2s ease;
}

.reserve-btn:hover i {
  transform: translateX(3px);
}

/* Animaciones originales mejoradas */
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
    transform: scale(0.92) translateY(30px);
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

/* Hover effects mejorados */
.hover\:scale-105:hover {
  transform: scale(1.05);
}

.hover\:scale-110:hover {
  transform: scale(1.10);
}

/* Animación de pulso mejorada */
@keyframes pulse-slow {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.05);
  }
}

.animate-pulse {
  animation: pulse-slow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Indicadores de disponibilidad */
.hero-section .flex.items-center.gap-3:hover .w-5.h-5 {
  transform: scale(1.2);
  transition: transform 0.2s ease;
}

/* Botones con efecto hover simple */
.filters-section button {
  transition: all 0.2s ease;
}

/* Filter cards hover */
.filters-section .relative.group:hover {
  transform: translateY(-2px);
}

.filters-section input,
.filters-section select {
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

/* Border personalizado para mejor visualización */
.border-3 {
  border-width: 3px;
}

/* Estilos para inputs de fecha mejorados */
input[type="date"]::-webkit-calendar-picker-indicator {
  cursor: pointer;
  filter: opacity(0.6);
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

/* Responsive adjustments */
@media (max-width: 768px) {
  .bg-blob {
    opacity: 0.2;
  }
  
  .hero-title {
    font-size: 2.5rem !important;
  }
  
  .court-card:hover {
    transform: translateY(-4px);
  }
  
  .court-card-header {
    height: 120px;
  }
  
  .court-icon-wrapper {
    width: 56px;
    height: 56px;
  }
  
  .court-icon {
    font-size: 1.5rem;
  }
}

/* Modal overlay */
.fixed.inset-0.bg-black\/75 {
  animation: fadeIn 0.2s ease-out;
}

/* Info cards hover effect in modal */
.custom-scrollbar .flex.items-center.gap-4.p-4:hover {
  transform: translateX(4px);
  transition: transform 0.2s ease;
}

</style>
