<template>
  <div class="min-h-screen bg-gradient-to-br from-white via-[#F8FDF9] to-[#F2F9F4]">
    <!-- Navbar -->
    <nav class="bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center group">
            <h2 class="text-2xl font-bold bg-gradient-to-r from-[#6BCF9F] to-[#7ED9A8] bg-clip-text text-transparent group-hover:scale-105 transition-transform">
              IxmiSport
            </h2>
          </div>
          <div class="flex gap-3 items-center">
            <!-- Botones cuando NO está autenticado -->
            <template v-if="!isAuthenticated">
              <router-link 
                to="/login" 
                class="px-5 py-2 text-gray-600 hover:text-[#6BCF9F] transition-all duration-300 font-medium relative group"
              >
                Iniciar Sesión
                <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-[#6BCF9F] group-hover:w-full transition-all duration-300"></span>
              </router-link>
              <router-link 
                to="/register" 
                class="px-6 py-2 bg-gradient-to-r from-[#6BCF9F] to-[#7ED9A8] text-white rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium"
              >
                Registrarse
              </router-link>
            </template>
            <!-- Botones cuando ESTÁ autenticado -->
            <template v-else>
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
              <router-link 
                to="/profile" 
                class="px-6 py-2 bg-gradient-to-r from-[#6BCF9F] to-[#7ED9A8] text-white rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium flex items-center gap-2"
              >
                <i class="fa-solid fa-user"></i>
                Perfil
              </router-link>
            </template>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Text Content -->
        <div class="space-y-6 animate-fade-in">
          <div class="inline-block px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full shadow-sm border border-[#D8F0E3] hover:shadow-md transition-all duration-300">
            <span class="text-sm font-medium text-gray-600 flex items-center gap-2">
              <svg class="w-4 h-4 text-[#6BCF9F]" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clip-rule="evenodd"/>
              </svg>
              Ayuntamiento de Ixmiquilpan
            </span>
          </div>
          
          <h1 class="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
            Reserva tu cancha
            <span class="bg-gradient-to-r from-[#6BCF9F] via-[#7ED9A8] to-[#95E3B3] bg-clip-text text-transparent animate-gradient">
              deportiva
            </span>
          </h1>
          
          <p class="text-xl text-gray-600 leading-relaxed">
            Accede fácilmente a las instalaciones deportivas municipales. 
            Reserva en minutos y disfruta del deporte en tu comunidad.
          </p>

          <div class="flex flex-wrap gap-4 pt-4">
            <router-link 
              to="/register" 
              class="group px-8 py-4 bg-gradient-to-r from-[#6BCF9F] to-[#7ED9A8] text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 relative overflow-hidden"
            >
              <span class="relative z-10">Comenzar Ahora</span>
              <div class="absolute inset-0 bg-gradient-to-r from-[#7ED9A8] to-[#6BCF9F] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </router-link>
            <router-link 
              to="/reservaciones" 
              class="px-8 py-4 bg-white border-2 border-[#6BCF9F] text-gray-700 rounded-full font-semibold hover:bg-[#F8FDF9] hover:shadow-lg transition-all duration-300"
            >
              Ver Canchas
            </router-link>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-6 pt-8">
            <div class="text-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div class="text-3xl font-bold bg-gradient-to-br from-[#6BCF9F] to-[#7ED9A8] bg-clip-text text-transparent">12+</div>
              <div class="text-sm text-gray-600 mt-1">Canchas</div>
            </div>
            <div class="text-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl hover:shadow-md transition-all duration-300 hover:-translate-y-1 animation-delay-100">
              <div class="text-3xl font-bold bg-gradient-to-br from-[#7ED9A8] to-[#95E3B3] bg-clip-text text-transparent">500+</div>
              <div class="text-sm text-gray-600 mt-1">Usuarios</div>
            </div>
            <div class="text-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl hover:shadow-md transition-all duration-300 hover:-translate-y-1 animation-delay-200">
              <div class="text-3xl font-bold bg-gradient-to-br from-[#95E3B3] to-[#AEEDC4] bg-clip-text text-transparent">24/7</div>
              <div class="text-sm text-gray-600 mt-1">Disponible</div>
            </div>
          </div>
        </div>

        <!-- Visual Element -->
        <div class="relative animate-fade-in-right">
          <div class="absolute inset-0 bg-gradient-to-br from-[#6BCF9F]/20 via-[#7ED9A8]/20 to-[#95E3B3]/20 rounded-3xl blur-3xl animate-pulse-slow"></div>
          <div class="relative bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/50">
            <div class="space-y-4">
              <!-- Decorative Cards -->
              <div class="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-[#D8F0E3] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <div class="flex items-center gap-4">
                  <div class="w-14 h-14 bg-gradient-to-br from-[#6BCF9F] to-[#7ED9A8] rounded-xl flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-md">
                    <i class="fa-solid fa-futbol text-2xl"></i>
                  </div>
                  <div class="flex-1">
                    <h3 class="font-semibold text-gray-800">Cancha de Fútbol</h3>
                  </div>
                </div>
              </div>

              <div class="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-[#D8F0E3] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group animation-delay-100">
                <div class="flex items-center gap-4">
                  <div class="w-14 h-14 bg-gradient-to-br from-[#7ED9A8] to-[#95E3B3] rounded-xl flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-md">
                    <i class="fa-solid fa-basketball text-2xl"></i>
                  </div>
                  <div class="flex-1">
                    <h3 class="font-semibold text-gray-800">Cancha de Basquetbol</h3>
                  </div>
                </div>
              </div>

              <div class="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-[#D8F0E3] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group animation-delay-200">
                <div class="flex items-center gap-4">
                  <div class="w-14 h-14 bg-gradient-to-br from-[#95E3B3] to-[#AEEDC4] rounded-xl flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-md">
                    <i class="fa-solid fa-table-tennis-paddle-ball text-2xl"></i>
                  </div>
                  <div class="flex-1">
                    <h3 class="font-semibold text-gray-800">Cancha de Tenis</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="bg-gradient-to-b from-transparent via-white/50 to-[#F8FDF9] py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-800 mb-4">
            ¿Por qué elegir
            <span class="bg-gradient-to-r from-[#6BCF9F] to-[#7ED9A8] bg-clip-text text-transparent">
              IxmiSport?
            </span>
          </h2>
          <p class="text-gray-600 text-lg">Facilidad y comodidad en cada reservación</p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Feature 1 -->
          <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#D8F0E3] hover:-translate-y-2 group">
            <div class="w-14 h-14 bg-gradient-to-br from-[#6BCF9F] to-[#7ED9A8] rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-3">Reserva Rápida</h3>
            <p class="text-gray-600">
              Reserva tu cancha en menos de 2 minutos. Sistema intuitivo y fácil de usar.
            </p>
          </div>

          <!-- Feature 2 -->
          <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#D8F0E3] hover:-translate-y-2 group animation-delay-100">
            <div class="w-14 h-14 bg-gradient-to-br from-[#7ED9A8] to-[#95E3B3] rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-3">100% Gratuito</h3>
            <p class="text-gray-600">
              Servicio completamente gratuito. Solo reserva tu horario preferido.
            </p>
          </div>

          <!-- Feature 3 -->
          <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#D8F0E3] hover:-translate-y-2 group animation-delay-200">
            <div class="w-14 h-14 bg-gradient-to-br from-[#95E3B3] to-[#AEEDC4] rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-3">Horario Flexible</h3>
            <p class="text-gray-600">
              Reserva desde cualquier dispositivo, de 6:00 AM a 8:00 PM todos los días.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-[#6BCF9F] via-[#7ED9A8] to-[#95E3B3] relative overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-blob"></div>
        <div class="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      </div>
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
          ¿Listo para reservar tu cancha?
        </h2>
        <p class="text-xl text-white/90 mb-8">
          Únete a cientos de deportistas que ya disfrutan de nuestras instalaciones
        </p>
        <router-link 
          to="/register" 
          class="inline-block px-10 py-4 bg-white text-[#6BCF9F] rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
        >
          Crear Cuenta Gratis
        </router-link>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-white/80 backdrop-blur-md border-t border-gray-100 py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 class="text-xl font-bold bg-gradient-to-r from-[#6BCF9F] to-[#7ED9A8] bg-clip-text text-transparent mb-4">
              IxmiSport
            </h3>
            <p class="text-gray-600">
              Sistema de reservación de canchas deportivas del Ayuntamiento de Ixmiquilpan.
            </p>
          </div>
          <div>
            <h4 class="font-semibold text-gray-800 mb-4">Enlaces Rápidos</h4>
            <ul class="space-y-2 text-gray-600">
              <li><router-link to="/reservaciones" class="hover:text-[#6BCF9F] transition-colors">Ver Canchas</router-link></li>
              <li><router-link to="/login" class="hover:text-[#6BCF9F] transition-colors">Iniciar Sesión</router-link></li>
              <li><router-link to="/register" class="hover:text-[#6BCF9F] transition-colors">Registrarse</router-link></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-gray-800 mb-4">Contacto</h4>
            <ul class="space-y-2 text-gray-600">
              <li class="flex items-center gap-2 hover:text-[#6BCF9F] transition-colors">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                </svg>
                Ixmiquilpan, Hidalgo
              </li>
              <li class="flex items-center gap-2 hover:text-[#6BCF9F] transition-colors">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                contacto@ixmisport.gob.mx
              </li>
              <li class="flex items-center gap-2 hover:text-[#6BCF9F] transition-colors">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                (771) 123-4567
              </li>
            </ul>
          </div>
        </div>
        <div class="border-t border-gray-100 pt-8 text-center text-gray-600">
          <p>&copy; 2025 Ayuntamiento de Ixmiquilpan. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { onAuthChange } from '@/firebase/auth'

const isAuthenticated = ref(false)
let unsubscribe = null

onMounted(() => {
  unsubscribe = onAuthChange((user) => {
    isAuthenticated.value = !!user
  })
})

onUnmounted(() => {
  if (unsubscribe) unsubscribe()
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

@keyframes fade-in-right {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes pulse-slow {
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.5;
  }
}

@keyframes blob {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  25% {
    transform: translate(20px, -20px) scale(1.1);
  }
  50% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  75% {
    transform: translate(20px, 20px) scale(1.05);
  }
}

@keyframes gradient {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out;
}

.animate-fade-in-right {
  animation: fade-in-right 0.8s ease-out;
}

.animate-pulse-slow {
  animation: pulse-slow 4s ease-in-out infinite;
}

.animate-blob {
  animation: blob 7s infinite;
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient 3s ease infinite;
}

.animation-delay-100 {
  animation-delay: 0.1s;
}

.animation-delay-200 {
  animation-delay: 0.2s;
}

.animation-delay-2000 {
  animation-delay: 2s;
}
</style>
