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
              <div class="text-3xl font-bold">8</div>
              <div class="text-sm text-white/80">Total</div>
            </div>
            <div class="text-center bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/30">
              <div class="text-3xl font-bold">3</div>
              <div class="text-sm text-white/80">Próximas</div>
            </div>
            <div class="text-center bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/30">
              <div class="text-3xl font-bold">5</div>
              <div class="text-sm text-white/80">Completadas</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tabs Filter -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
      <div class="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-2 border border-white/50 inline-flex gap-2">
        <button class="px-6 py-3 bg-gradient-to-r from-[#6BCF9F] to-[#7ED9A8] text-white rounded-xl font-medium transition-all duration-300 shadow-md">
          <i class="fa-solid fa-clock mr-2"></i>
          Próximas (3)
        </button>
        <button class="px-6 py-3 text-gray-600 hover:bg-gray-100 rounded-xl font-medium transition-all duration-300">
          <i class="fa-solid fa-check-circle mr-2"></i>
          Completadas (5)
        </button>
        <button class="px-6 py-3 text-gray-600 hover:bg-gray-100 rounded-xl font-medium transition-all duration-300">
          <i class="fa-solid fa-ban mr-2"></i>
          Canceladas (0)
        </button>
        <button class="px-6 py-3 text-gray-600 hover:bg-gray-100 rounded-xl font-medium transition-all duration-300">
          <i class="fa-solid fa-list mr-2"></i>
          Todas (8)
        </button>
      </div>
    </section>

    <!-- Upcoming Reservations -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
        <i class="fa-solid fa-calendar-days text-[#6BCF9F]"></i>
        Próximas Reservaciones
      </h2>

      <div class="space-y-6">
        <!-- Reservation Card 1 - Upcoming -->
        <div class="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-l-4 border-[#6BCF9F] overflow-hidden group hover:-translate-y-1">
          <div class="p-6">
            <div class="flex items-start justify-between">
              <!-- Left Content -->
              <div class="flex gap-6 flex-1">
                <!-- Date Badge -->
                <div class="bg-gradient-to-br from-[#6BCF9F] to-[#7ED9A8] text-white rounded-2xl p-4 text-center min-w-[100px] shadow-md">
                  <div class="text-3xl font-bold">15</div>
                  <div class="text-sm opacity-90">OCT</div>
                  <div class="text-xs opacity-80 mt-1">2025</div>
                </div>

                <!-- Details -->
                <div class="flex-1">
                  <div class="flex items-center gap-3 mb-3">
                    <div class="w-12 h-12 bg-gradient-to-br from-[#6BCF9F] to-[#7ED9A8] rounded-xl flex items-center justify-center text-white shadow-md">
                      <i class="fa-solid fa-futbol text-xl"></i>
                    </div>
                    <div>
                      <h3 class="text-xl font-bold text-gray-800">Cancha de Fútbol #1</h3>
                      <p class="text-sm text-gray-500">Código: RSV-2024-001</p>
                    </div>
                  </div>

                  <div class="grid md:grid-cols-4 gap-4 mb-4">
                    <div class="flex items-center gap-2 text-gray-600">
                      <i class="fa-solid fa-clock text-[#6BCF9F]"></i>
                      <div>
                        <p class="text-xs text-gray-500">Horario</p>
                        <p class="font-semibold">18:00 - 20:00</p>
                      </div>
                    </div>
                    <div class="flex items-center gap-2 text-gray-600">
                      <i class="fa-solid fa-location-dot text-[#6BCF9F]"></i>
                      <div>
                        <p class="text-xs text-gray-500">Ubicación</p>
                        <p class="font-semibold">Centro Deportivo</p>
                      </div>
                    </div>
                    <div class="flex items-center gap-2 text-gray-600">
                      <i class="fa-solid fa-users text-[#6BCF9F]"></i>
                      <div>
                        <p class="text-xs text-gray-500">Capacidad</p>
                        <p class="font-semibold">11 vs 11</p>
                      </div>
                    </div>
                    <div class="flex items-center gap-2 text-gray-600">
                      <i class="fa-solid fa-dollar-sign text-[#6BCF9F]"></i>
                      <div>
                        <p class="text-xs text-gray-500">Precio</p>
                        <p class="font-semibold">$500.00</p>
                      </div>
                    </div>
                  </div>

                  <!-- Status & Actions -->
                  <div class="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div class="flex items-center gap-2">
                      <span class="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold flex items-center gap-2">
                        <i class="fa-solid fa-circle-check"></i>
                        Confirmada
                      </span>
                      <span class="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold flex items-center gap-2">
                        <i class="fa-solid fa-credit-card"></i>
                        Pagada
                      </span>
                    </div>
                    <div class="flex gap-3">
                      <button class="px-5 py-2 bg-gradient-to-r from-[#6BCF9F] to-[#7ED9A8] text-white rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
                        <i class="fa-solid fa-eye mr-2"></i>
                        Ver Detalles
                      </button>
                      <button class="px-5 py-2 bg-red-50 text-red-600 border border-red-200 rounded-xl font-medium hover:bg-red-100 transition-all duration-300">
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

        <!-- Reservation Card 2 - Upcoming -->
        <div class="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-l-4 border-[#7ED9A8] overflow-hidden group hover:-translate-y-1">
          <div class="p-6">
            <div class="flex items-start justify-between">
              <div class="flex gap-6 flex-1">
                <div class="bg-gradient-to-br from-[#7ED9A8] to-[#95E3B3] text-white rounded-2xl p-4 text-center min-w-[100px] shadow-md">
                  <div class="text-3xl font-bold">18</div>
                  <div class="text-sm opacity-90">OCT</div>
                  <div class="text-xs opacity-80 mt-1">2025</div>
                </div>

                <div class="flex-1">
                  <div class="flex items-center gap-3 mb-3">
                    <div class="w-12 h-12 bg-gradient-to-br from-[#7ED9A8] to-[#95E3B3] rounded-xl flex items-center justify-center text-white shadow-md">
                      <i class="fa-solid fa-basketball text-xl"></i>
                    </div>
                    <div>
                      <h3 class="text-xl font-bold text-gray-800">Cancha de Basquetbol #1</h3>
                      <p class="text-sm text-gray-500">Código: RSV-2024-002</p>
                    </div>
                  </div>

                  <div class="grid md:grid-cols-4 gap-4 mb-4">
                    <div class="flex items-center gap-2 text-gray-600">
                      <i class="fa-solid fa-clock text-[#7ED9A8]"></i>
                      <div>
                        <p class="text-xs text-gray-500">Horario</p>
                        <p class="font-semibold">16:00 - 18:00</p>
                      </div>
                    </div>
                    <div class="flex items-center gap-2 text-gray-600">
                      <i class="fa-solid fa-location-dot text-[#7ED9A8]"></i>
                      <div>
                        <p class="text-xs text-gray-500">Ubicación</p>
                        <p class="font-semibold">Polideportivo Norte</p>
                      </div>
                    </div>
                    <div class="flex items-center gap-2 text-gray-600">
                      <i class="fa-solid fa-users text-[#7ED9A8]"></i>
                      <div>
                        <p class="text-xs text-gray-500">Capacidad</p>
                        <p class="font-semibold">5 vs 5</p>
                      </div>
                    </div>
                    <div class="flex items-center gap-2 text-gray-600">
                      <i class="fa-solid fa-dollar-sign text-[#7ED9A8]"></i>
                      <div>
                        <p class="text-xs text-gray-500">Precio</p>
                        <p class="font-semibold">$400.00</p>
                      </div>
                    </div>
                  </div>

                  <div class="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div class="flex items-center gap-2">
                      <span class="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold flex items-center gap-2">
                        <i class="fa-solid fa-circle-check"></i>
                        Confirmada
                      </span>
                    </div>
                    <div class="flex gap-3">
                      <button class="px-5 py-2 bg-gray-50 text-gray-600 border border-gray-200 rounded-xl font-medium hover:bg-gray-100 transition-all duration-300">
                        <i class="fa-solid fa-eye mr-2"></i>
                        Detalles
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Reservation Card 3 - Upcoming -->
        <div class="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-l-4 border-[#95E3B3] overflow-hidden group hover:-translate-y-1">
          <div class="p-6">
            <div class="flex items-start justify-between">
              <div class="flex gap-6 flex-1">
                <div class="bg-gradient-to-br from-[#95E3B3] to-[#AEEDC4] text-white rounded-2xl p-4 text-center min-w-[100px] shadow-md">
                  <div class="text-3xl font-bold">22</div>
                  <div class="text-sm opacity-90">OCT</div>
                  <div class="text-xs opacity-80 mt-1">2025</div>
                </div>

                <div class="flex-1">
                  <div class="flex items-center gap-3 mb-3">
                    <div class="w-12 h-12 bg-gradient-to-br from-[#95E3B3] to-[#AEEDC4] rounded-xl flex items-center justify-center text-white shadow-md">
                      <i class="fa-solid fa-table-tennis-paddle-ball text-xl"></i>
                    </div>
                    <div>
                      <h3 class="text-xl font-bold text-gray-800">Cancha de Tenis #1</h3>
                      <p class="text-sm text-gray-500">Código: RSV-2024-003</p>
                    </div>
                  </div>

                  <div class="grid md:grid-cols-4 gap-4 mb-4">
                    <div class="flex items-center gap-2 text-gray-600">
                      <i class="fa-solid fa-clock text-[#95E3B3]"></i>
                      <div>
                        <p class="text-xs text-gray-500">Horario</p>
                        <p class="font-semibold">10:00 - 12:00</p>
                      </div>
                    </div>
                    <div class="flex items-center gap-2 text-gray-600">
                      <i class="fa-solid fa-location-dot text-[#95E3B3]"></i>
                      <div>
                        <p class="text-xs text-gray-500">Ubicación</p>
                        <p class="font-semibold">Club Deportivo Sur</p>
                      </div>
                    </div>
                    <div class="flex items-center gap-2 text-gray-600">
                      <i class="fa-solid fa-users text-[#95E3B3]"></i>
                      <div>
                        <p class="text-xs text-gray-500">Capacidad</p>
                        <p class="font-semibold">Individual/Dobles</p>
                      </div>
                    </div>
                    <div class="flex items-center gap-2 text-gray-600">
                      <i class="fa-solid fa-dollar-sign text-[#95E3B3]"></i>
                      <div>
                        <p class="text-xs text-gray-500">Precio</p>
                        <p class="font-semibold">$360.00</p>
                      </div>
                    </div>
                  </div>

                  <div class="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div class="flex items-center gap-2">
                      <span class="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold flex items-center gap-2">
                        <i class="fa-solid fa-circle-check"></i>
                        Confirmada
                      </span>
                      <span class="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold flex items-center gap-2">
                        <i class="fa-solid fa-credit-card"></i>
                        Pagada
                      </span>
                    </div>
                    <div class="flex gap-3">
                      <button class="px-5 py-2 bg-gradient-to-r from-[#95E3B3] to-[#AEEDC4] text-white rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
                        <i class="fa-solid fa-eye mr-2"></i>
                        Ver Detalles
                      </button>
                      <button class="px-5 py-2 bg-gray-50 text-gray-600 border border-gray-200 rounded-xl font-medium hover:bg-gray-100 transition-all duration-300">
                        <i class="fa-solid fa-share mr-2"></i>
                        Compartir
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

    <!-- Past Reservations Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
        <i class="fa-solid fa-history text-gray-500"></i>
        Historial de Reservaciones
      </h2>

      <div class="grid md:grid-cols-2 gap-6">
        <!-- Compact Past Reservation Card 1 -->
        <div class="bg-white/60 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-5 border border-gray-200 opacity-80">
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-gray-300 rounded-lg flex items-center justify-center text-white">
                <i class="fa-solid fa-volleyball"></i>
              </div>
              <div>
                <h4 class="font-bold text-gray-700">Cancha de Voleibol #1</h4>
                <p class="text-xs text-gray-500">05 OCT 2025 • 14:00 - 16:00</p>
              </div>
            </div>
            <span class="px-3 py-1 bg-gray-200 text-gray-600 rounded-full text-xs font-semibold">
              Completada
            </span>
          </div>
          <div class="flex items-center justify-between text-sm text-gray-600">
            <span>$300.00</span>
            <button class="text-[#6BCF9F] hover:underline font-medium">
              <i class="fa-solid fa-redo mr-1"></i>
              Reservar de nuevo
            </button>
          </div>
        </div>

        <!-- Compact Past Reservation Card 2 -->
        <div class="bg-white/60 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-5 border border-gray-200 opacity-80">
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-gray-300 rounded-lg flex items-center justify-center text-white">
                <i class="fa-solid fa-baseball-bat-ball"></i>
              </div>
              <div>
                <h4 class="font-bold text-gray-700">Cancha de Pádel #1</h4>
                <p class="text-xs text-gray-500">28 SEP 2025 • 18:00 - 20:00</p>
              </div>
            </div>
            <span class="px-3 py-1 bg-gray-200 text-gray-600 rounded-full text-xs font-semibold">
              Completada
            </span>
          </div>
          <div class="flex items-center justify-between text-sm text-gray-600">
            <span>$440.00</span>
            <button class="text-[#6BCF9F] hover:underline font-medium">
              <i class="fa-solid fa-redo mr-1"></i>
              Reservar de nuevo
            </button>
          </div>
        </div>

        <!-- Compact Past Reservation Card 3 -->
        <div class="bg-white/60 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-5 border border-gray-200 opacity-80">
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-gray-300 rounded-lg flex items-center justify-center text-white">
                <i class="fa-solid fa-futbol"></i>
              </div>
              <div>
                <h4 class="font-bold text-gray-700">Cancha de Fútbol 7</h4>
                <p class="text-xs text-gray-500">20 SEP 2025 • 20:00 - 22:00</p>
              </div>
            </div>
            <span class="px-3 py-1 bg-gray-200 text-gray-600 rounded-full text-xs font-semibold">
              Completada
            </span>
          </div>
          <div class="flex items-center justify-between text-sm text-gray-600">
            <span>$360.00</span>
            <button class="text-[#6BCF9F] hover:underline font-medium">
              <i class="fa-solid fa-redo mr-1"></i>
              Reservar de nuevo
            </button>
          </div>
        </div>

        <!-- Compact Past Reservation Card 4 -->
        <div class="bg-white/60 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-5 border border-gray-200 opacity-80">
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-gray-300 rounded-lg flex items-center justify-center text-white">
                <i class="fa-solid fa-basketball"></i>
              </div>
              <div>
                <h4 class="font-bold text-gray-700">Cancha de Basquetbol #2</h4>
                <p class="text-xs text-gray-500">15 SEP 2025 • 16:00 - 18:00</p>
              </div>
            </div>
            <span class="px-3 py-1 bg-gray-200 text-gray-600 rounded-full text-xs font-semibold">
              Completada
            </span>
          </div>
          <div class="flex items-center justify-between text-sm text-gray-600">
            <span>$400.00</span>
            <button class="text-[#6BCF9F] hover:underline font-medium">
              <i class="fa-solid fa-redo mr-1"></i>
              Reservar de nuevo
            </button>
          </div>
        </div>

        <!-- Compact Past Reservation Card 5 -->
        <div class="bg-white/60 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-5 border border-gray-200 opacity-80 md:col-span-2">
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-gray-300 rounded-lg flex items-center justify-center text-white">
                <i class="fa-solid fa-table-tennis-paddle-ball"></i>
              </div>
              <div>
                <h4 class="font-bold text-gray-700">Cancha de Tenis #2</h4>
                <p class="text-xs text-gray-500">10 SEP 2025 • 09:00 - 11:00</p>
              </div>
            </div>
            <span class="px-3 py-1 bg-gray-200 text-gray-600 rounded-full text-xs font-semibold">
              Completada
            </span>
          </div>
          <div class="flex items-center justify-between text-sm text-gray-600">
            <span>$360.00</span>
            <button class="text-[#6BCF9F] hover:underline font-medium">
              <i class="fa-solid fa-redo mr-1"></i>
              Reservar de nuevo
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Actions Section -->
    <section class="bg-gradient-to-r from-[#6BCF9F] via-[#7ED9A8] to-[#95E3B3] py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-3 gap-6 text-white">
          <!-- Quick Action 1 -->
          <div class="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30 hover:bg-white/30 transition-all duration-300 cursor-pointer group">
            <div class="w-14 h-14 bg-white/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300">
              <i class="fa-solid fa-plus text-3xl"></i>
            </div>
            <h3 class="text-xl font-bold mb-2">Nueva Reservación</h3>
            <p class="text-white/80">Encuentra y reserva tu cancha favorita</p>
          </div>

          <!-- Quick Action 2 -->
          <div class="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30 hover:bg-white/30 transition-all duration-300 cursor-pointer group">
            <div class="w-14 h-14 bg-white/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300">
              <i class="fa-solid fa-download text-3xl"></i>
            </div>
            <h3 class="text-xl font-bold mb-2">Descargar Historial</h3>
            <p class="text-white/80">Obtén un resumen de todas tus reservaciones</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
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
