<template>
  <div class="min-h-screen min-w-full w-screen h-screen bg-gradient-to-br from-ixmi-50 via-white to-ixmi-100 flex items-center justify-center relative overflow-hidden">
    
    <!-- Botón de regreso al Home en esquina superior izquierda -->
    <div class="absolute top-4 left-4 z-30">
      <router-link 
        to="/" 
        class="inline-flex items-center justify-center px-3 py-2 text-sm text-ixmi-600 bg-white/90 backdrop-blur-sm border border-ixmi-200 rounded-lg hover:bg-white hover:border-ixmi-300 transition-all duration-300 hover:shadow-md opacity-0 animate-elegant-fade-down animation-delay-100"
      >
        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
        </svg>
        Home
      </router-link>
    </div>

    <!-- Título elegante y profesional en la parte superior -->
    <div class="absolute top-4 sm:top-6 left-1/2 transform -translate-x-1/2 z-20 px-4">
      <div class="text-center opacity-0 animate-elegant-fade-down animation-delay-200">
        <!-- Logo y título principal -->
        <div class="flex items-center justify-center space-x-2 sm:space-x-3 mb-2 sm:mb-3">
          <div class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-green-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
            <svg class="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black tracking-tight">
            IxmiSport
          </h1>
        </div>
        <!-- Subtítulo -->
        <p class="text-black text-sm sm:text-base md:text-lg font-medium opacity-0 animate-elegant-text animation-delay-400">
          Tu centro deportivo digital
        </p>
        <!-- Línea decorativa -->
        <div class="h-0.5 w-16 sm:w-20 md:w-24 bg-green-500 mx-auto mt-2 sm:mt-3 rounded-full opacity-0 animate-elegant-expand animation-delay-600"></div>
      </div>
    </div>

    <!-- Elementos decorativos de fondo con movimiento suave -->
    <div class="absolute inset-0">
      <div class="absolute top-16 left-8 sm:left-16 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-ixmi-200/25 rounded-full blur-3xl animate-elegant-float"></div>
      <div class="absolute bottom-16 right-8 sm:right-16 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-ixmi-300/15 rounded-full blur-3xl animate-elegant-float-delayed"></div>
      <div class="absolute top-1/3 left-1/3 w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 bg-ixmi-400/10 rounded-full blur-2xl animate-elegant-breathe"></div>
    </div>
    
    <!-- Contenedor del login centrado -->
    <div class="relative z-10 w-full max-w-xs sm:max-w-sm md:max-w-md mx-2 sm:mx-4 mt-16 sm:mt-20 md:mt-24">
      <!-- Caja de login elegante -->
      <div class="bg-white/95 backdrop-blur-lg rounded-xl sm:rounded-2xl shadow-xl border border-ixmi-200/40 p-4 sm:p-6 md:p-8 transform transition-all duration-500 opacity-0 animate-elegant-rise animation-delay-400">
        <!-- Header con entrada suave -->
        <div class="text-center mb-6 sm:mb-8">
          <div class="relative">
            <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-ixmi-500 via-ixmi-400 to-ixmi-300 rounded-xl sm:rounded-2xl mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-lg transform transition-all duration-500 opacity-0 animate-elegant-icon animation-delay-800">
              <svg class="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
              </svg>
            </div>
          </div>
          <h2 class="text-lg sm:text-xl font-semibold text-ixmi-600 mb-1 sm:mb-2 opacity-0 animate-elegant-text animation-delay-1000">
            Iniciar Sesión
          </h2>
          <p class="text-gray-600 text-xs sm:text-sm opacity-0 animate-elegant-text animation-delay-1100">Bienvenido de vuelta</p>
        </div>

        <!-- Formulario con entrada secuencial elegante -->
        <form @submit.prevent="handleLogin" class="space-y-3 sm:space-y-4">
          <!-- Email -->
          <div class="relative group opacity-0 animate-elegant-slide-up animation-delay-1200">
            <input 
              type="email" 
              v-model="email"
              placeholder="Correo electrónico"
              class="w-full px-3 sm:px-4 py-2.5 sm:py-3.5 pl-10 sm:pl-12 border border-ixmi-200/60 rounded-lg sm:rounded-xl focus:outline-none focus:border-ixmi-400 focus:ring-3 focus:ring-ixmi-400/15 transition-all duration-300 bg-white placeholder-gray-500 text-sm sm:text-base"
              required
            />
            <div class="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-ixmi-400 transition-all duration-300">
              <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path>
              </svg>
            </div>
          </div>

          <!-- Password -->
          <div class="relative group opacity-0 animate-elegant-slide-up animation-delay-1300">
            <input 
              type="password" 
              v-model="password"
              placeholder="Contraseña"
              class="w-full px-3 sm:px-4 py-2.5 sm:py-3.5 pl-10 sm:pl-12 border border-ixmi-200/60 rounded-lg sm:rounded-xl focus:outline-none focus:border-ixmi-400 focus:ring-3 focus:ring-ixmi-400/15 transition-all duration-300 bg-white placeholder-gray-500 text-sm sm:text-base"
              required
            />
            <div class="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-ixmi-400 transition-all duration-300">
              <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
            </div>
          </div>

          <!-- Submit Button -->
          <div class="pt-2 opacity-0 animate-elegant-slide-up animation-delay-1400">
            <button 
              type="submit"
              class="w-full bg-gradient-to-r from-ixmi-500 via-ixmi-400 to-ixmi-300 text-white py-2.5 sm:py-3.5 rounded-lg sm:rounded-xl font-medium text-sm sm:text-base transition-all duration-300"
            >
              Iniciar Sesión
            </button>
          </div>
        </form>

        <!-- Links con entrada suave -->
        <div class="text-center mt-6 sm:mt-8 opacity-0 animate-elegant-slide-up animation-delay-1500">
          <p class="text-xs sm:text-sm text-gray-600">
            ¿No tienes cuenta? 
            <router-link to="/register" class="text-ixmi-500 font-medium transition-colors duration-300">
              Regístrate aquí
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')

const handleLogin = async () => {
  console.log('Login:', { email: email.value, password: password.value })
  // Simulación de login
  localStorage.setItem('isAuthenticated', 'true')
  router.push('/home')
}
</script>

<style scoped>
/* Animaciones elegantes y sutiles */

/* Entrada desde arriba con desvanecimiento */
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

/* Expansión suave de la línea */
@keyframes elegant-expand {
  0% {
    width: 0;
    opacity: 0;
  }
  100% {
    width: 4rem;
    opacity: 1;
  }
}

/* Flotación elegante para elementos de fondo */
@keyframes elegant-float {
  0%, 100% {
    transform: translateY(0px) translateX(0px);
    opacity: 0.4;
  }
  33% {
    transform: translateY(-10px) translateX(5px);
    opacity: 0.6;
  }
  66% {
    transform: translateY(5px) translateX(-3px);
    opacity: 0.5;
  }
}

@keyframes elegant-float-delayed {
  0%, 100% {
    transform: translateY(0px) translateX(0px);
    opacity: 0.3;
  }
  50% {
    transform: translateY(-8px) translateX(-5px);
    opacity: 0.5;
  }
}

/* Respiración suave */
@keyframes elegant-breathe {
  0%, 100% {
    transform: scale(1);
    opacity: 0.2;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.4;
  }
}

/* Elevación del contenedor principal */
@keyframes elegant-rise {
  0% {
    opacity: 0;
    transform: translateY(30px) scale(0.96);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Aparición del icono con ligera rotación */
@keyframes elegant-icon {
  0% {
    opacity: 0;
    transform: translateY(20px) scale(0.8) rotate(-10deg);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1) rotate(0deg);
  }
}

/* Revelación de texto */
@keyframes elegant-text {
  0% {
    opacity: 0;
    transform: translateY(15px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Deslizamiento hacia arriba para elementos del formulario */
@keyframes elegant-slide-up {
  0% {
    opacity: 0;
    transform: translateY(25px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Clases de animación */
.animate-elegant-fade-down {
  animation: elegant-fade-down 0.8s ease-out forwards;
}

.animate-elegant-expand {
  animation: elegant-expand 1s ease-out forwards;
}

.animate-elegant-float {
  animation: elegant-float 6s ease-in-out infinite;
}

.animate-elegant-float-delayed {
  animation: elegant-float-delayed 8s ease-in-out infinite;
}

.animate-elegant-breathe {
  animation: elegant-breathe 4s ease-in-out infinite;
}

.animate-elegant-rise {
  animation: elegant-rise 1s ease-out forwards;
}

.animate-elegant-icon {
  animation: elegant-icon 0.8s ease-out forwards;
}

.animate-elegant-text {
  animation: elegant-text 0.6s ease-out forwards;
}

.animate-elegant-slide-up {
  animation: elegant-slide-up 0.7s ease-out forwards;
}

/* Delays para las animaciones escalonadas */
.animation-delay-200 { animation-delay: 0.2s; }
.animation-delay-400 { animation-delay: 0.4s; }
.animation-delay-600 { animation-delay: 0.6s; }
.animation-delay-800 { animation-delay: 0.8s; }
.animation-delay-1000 { animation-delay: 1s; }
.animation-delay-1100 { animation-delay: 1.1s; }
.animation-delay-1200 { animation-delay: 1.2s; }
.animation-delay-1300 { animation-delay: 1.3s; }
.animation-delay-1400 { animation-delay: 1.4s; }
.animation-delay-1500 { animation-delay: 1.5s; }

/* Mejoras visuales sutiles */
.backdrop-blur-lg {
  backdrop-filter: blur(12px) saturate(120%);
  -webkit-backdrop-filter: blur(12px) saturate(120%);
}

/* Transiciones suaves globales */
* {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Efectos de focus */
input:focus {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(134, 231, 184, 0.15);
}n

/* Responsividad mejorada */
@media (max-width: 640px) {
  .text-5xl {
    font-size: 2rem;
    line-height: 1.2;
  }
  
  .text-4xl {
    font-size: 1.875rem;
  }
  
  .p-8 {
    padding: 1rem;
  }
  
  .mt-24 {
    margin-top: 4rem;
  }
  
  .space-y-4 > :not([hidden]) ~ :not([hidden]) {
    margin-top: 0.75rem;
  }
}

@media (max-width: 480px) {
  .text-xl {
    font-size: 1.125rem;
  }
  
  .p-8 {
    padding: 0.75rem;
  }
  
  .mt-24 {
    margin-top: 3rem;
  }
  
  .mx-4 {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
}

@media (max-width: 360px) {
  .text-5xl {
    font-size: 1.75rem;
  }
  
  .text-2xl {
    font-size: 1.5rem;
  }
  
  .p-8 {
    padding: 0.5rem;
  }
}
</style>