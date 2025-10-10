<template>
  <div class="min-h-screen min-w-full w-screen h-screen bg-white flex items-center justify-center relative overflow-hidden">
    
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

    <!-- Título elegante en la parte superior -->
    <div class="absolute top-4 sm:top-6 md:top-8 left-1/2 transform -translate-x-1/2 z-20 px-4">
      <div class="text-center opacity-0 animate-elegant-fade-down animation-delay-200">
        <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-ixmi-500 via-ixmi-400 to-ixmi-300 bg-clip-text text-transparent tracking-tight">
          IxmiSport
        </h1>
        <div class="h-0.5 w-12 sm:w-14 md:w-16 bg-gradient-to-r from-ixmi-300 to-ixmi-200 mx-auto mt-1 sm:mt-2 rounded-full opacity-0 animate-elegant-expand animation-delay-600"></div>
      </div>
    </div>

    <!-- Elementos decorativos de fondo con movimiento suave -->
    <div class="absolute inset-0">
      <div class="absolute top-16 left-8 sm:left-16 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-ixmi-100/30 rounded-full blur-3xl animate-elegant-float"></div>
      <div class="absolute bottom-16 right-8 sm:right-16 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-ixmi-200/20 rounded-full blur-3xl animate-elegant-float-delayed"></div>
      <div class="absolute top-1/3 left-1/3 w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 bg-ixmi-300/15 rounded-full blur-2xl animate-elegant-breathe"></div>
    </div>
    
    <!-- Contenedor principal -->
    <div class="relative z-10 w-full max-w-xs sm:max-w-sm md:max-w-md mx-2 sm:mx-4 mt-12 sm:mt-14 md:mt-16">
      <!-- Caja de registro con entrada cinematográfica -->
      <div class="bg-white/95 backdrop-blur-lg rounded-xl sm:rounded-2xl shadow-xl border border-ixmi-200/40 p-4 sm:p-6 md:p-8 transform transition-all duration-500 hover:shadow-2xl opacity-0 animate-elegant-rise animation-delay-400">
        <!-- Header con entrada suave -->
        <div class="text-center mb-6 sm:mb-8">
          <div class="relative">
            <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-ixmi-400 via-ixmi-300 to-ixmi-200 rounded-xl sm:rounded-2xl mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-lg transform transition-all duration-500 hover:scale-105 hover:rotate-3 opacity-0 animate-elegant-icon animation-delay-800">
              <UserPlusIcon class="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
            </div>
          </div>
          <h2 class="text-lg sm:text-xl font-semibold text-ixmi-600 mb-1 sm:mb-2 opacity-0 animate-elegant-text animation-delay-1000">
            Crear Cuenta
          </h2>
          <p class="text-gray-600 text-xs sm:text-sm opacity-0 animate-elegant-text animation-delay-1100">Comienza tu aventura deportiva</p>
        </div>

        <!-- Formulario con entrada secuencial elegante -->
        <form @submit.prevent="handleRegister" class="space-y-3 sm:space-y-4">
          <!-- Nombre completo -->
          <div class="relative group opacity-0 animate-elegant-slide-up animation-delay-1200" 
               :class="{ 'animate-gentle-shake': errors.fullName }"
               @animationend="errors.fullName = false">
            <input 
              type="text" 
              v-model="formData.fullName"
              placeholder="Nombre completo"
              class="w-full px-3 sm:px-4 py-2.5 sm:py-3.5 pl-10 sm:pl-12 border border-ixmi-200/60 rounded-lg sm:rounded-xl focus:outline-none focus:border-ixmi-400 focus:ring-3 focus:ring-ixmi-400/15 transition-all duration-300 bg-white/80 placeholder-gray-500 hover:border-ixmi-300 hover:bg-white/90 text-sm sm:text-base"
              :class="{ 'border-red-400 ring-red-400/20': errors.fullName }"
              required
            />
            <div class="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-ixmi-400 transition-all duration-300 group-focus-within:text-ixmi-500 group-focus-within:scale-110">
              <UserIcon class="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
          </div>

          <!-- Email -->
          <div class="relative group opacity-0 animate-elegant-slide-up animation-delay-1300"
               :class="{ 'animate-gentle-shake': errors.email }"
               @animationend="errors.email = false">
            <input 
              type="email" 
              v-model="formData.email"
              placeholder="Correo electrónico"
              class="w-full px-3 sm:px-4 py-2.5 sm:py-3.5 pl-10 sm:pl-12 border border-ixmi-200/60 rounded-lg sm:rounded-xl focus:outline-none focus:border-ixmi-400 focus:ring-3 focus:ring-ixmi-400/15 transition-all duration-300 bg-white/80 placeholder-gray-500 hover:border-ixmi-300 hover:bg-white/90 text-sm sm:text-base"
              :class="{ 'border-red-400 ring-red-400/20': errors.email }"
              required
            />
            <div class="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-ixmi-400 transition-all duration-300 group-focus-within:text-ixmi-500 group-focus-within:scale-110">
              <AtSymbolIcon class="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
          </div>

          <!-- Teléfono -->
          <div class="relative group opacity-0 animate-elegant-slide-up animation-delay-1400">
            <input 
              type="tel" 
              v-model="formData.phone"
              placeholder="Teléfono (opcional)"
              class="w-full px-3 sm:px-4 py-2.5 sm:py-3.5 pl-10 sm:pl-12 border border-ixmi-200/60 rounded-lg sm:rounded-xl focus:outline-none focus:border-ixmi-400 focus:ring-3 focus:ring-ixmi-400/15 transition-all duration-300 bg-white/80 placeholder-gray-500 hover:border-ixmi-300 hover:bg-white/90 text-sm sm:text-base"
            />
            <div class="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-ixmi-400 transition-all duration-300 group-focus-within:text-ixmi-500 group-focus-within:scale-110">
              <PhoneIcon class="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
          </div>

          <!-- Contraseña -->
          <div class="relative group opacity-0 animate-elegant-slide-up animation-delay-1500"
               :class="{ 'animate-gentle-shake': errors.password }"
               @animationend="errors.password = false">
            <input 
              :type="showPassword ? 'text' : 'password'" 
              v-model="formData.password"
              placeholder="Contraseña"
              class="w-full px-3 sm:px-4 py-2.5 sm:py-3.5 pl-10 sm:pl-12 pr-10 sm:pr-12 border border-ixmi-200/60 rounded-lg sm:rounded-xl focus:outline-none focus:border-ixmi-400 focus:ring-3 focus:ring-ixmi-400/15 transition-all duration-300 bg-white/80 placeholder-gray-500 hover:border-ixmi-300 hover:bg-white/90 text-sm sm:text-base"
              :class="{ 'border-red-400 ring-red-400/20': errors.password }"
              required
            />
            <div class="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-ixmi-400 transition-all duration-300 group-focus-within:text-ixmi-500 group-focus-within:scale-110">
              <LockClosedIcon class="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <button 
              type="button"
              @click="showPassword = !showPassword"
              class="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-ixmi-400 hover:text-ixmi-500 transition-all duration-300 hover:scale-110"
            >
              <EyeIcon v-if="!showPassword" class="w-4 h-4 sm:w-5 sm:h-5" />
              <EyeSlashIcon v-else class="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          <!-- Confirmar contraseña -->
          <div class="relative group opacity-0 animate-elegant-slide-up animation-delay-1600"
               :class="{ 'animate-gentle-shake': errors.confirmPassword }"
               @animationend="errors.confirmPassword = false">
            <input 
              :type="showConfirmPassword ? 'text' : 'password'" 
              v-model="formData.confirmPassword"
              placeholder="Confirmar contraseña"
              class="w-full px-3 sm:px-4 py-2.5 sm:py-3.5 pl-10 sm:pl-12 pr-10 sm:pr-12 border border-ixmi-200/60 rounded-lg sm:rounded-xl focus:outline-none focus:border-ixmi-400 focus:ring-3 focus:ring-ixmi-400/15 transition-all duration-300 bg-white/80 placeholder-gray-500 hover:border-ixmi-300 hover:bg-white/90 text-sm sm:text-base"
              :class="{ 'border-red-400 ring-red-400/20': errors.confirmPassword }"
              required
            />
            <div class="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-ixmi-400 transition-all duration-300 group-focus-within:text-ixmi-500 group-focus-within:scale-110">
              <ShieldCheckIcon class="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <button 
              type="button"
              @click="showConfirmPassword = !showConfirmPassword"
              class="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-ixmi-400 hover:text-ixmi-500 transition-all duration-300 hover:scale-110"
            >
              <EyeIcon v-if="!showConfirmPassword" class="w-4 h-4 sm:w-5 sm:h-5" />
              <EyeSlashIcon v-else class="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          <!-- Términos y condiciones -->
          <div class="flex items-start space-x-2 sm:space-x-3 pt-2 opacity-0 animate-elegant-slide-up animation-delay-1700">
            <input 
              type="checkbox" 
              id="terms"
              v-model="formData.acceptTerms"
              class="mt-0.5 sm:mt-1 w-4 h-4 text-ixmi-300 border border-ixmi-200 rounded focus:ring-ixmi-300 focus:ring-2 transition-all duration-300 hover:scale-105"
              required
            />
            <label for="terms" class="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Acepto los 
              <button 
                type="button"
                @click="showTermsModal = true"
                class="text-ixmi-400 hover:text-ixmi-300 font-medium transition-colors duration-300 hover:underline"
              >
                términos y condiciones
              </button> 
              y la 
              <button 
                type="button"
                @click="showPrivacyModal = true"
                class="text-ixmi-400 hover:text-ixmi-300 font-medium transition-colors duration-300 hover:underline"
              >
                política de privacidad
              </button>
            </label>
          </div>

          <!-- Botón de registro -->
          <div class="pt-2 opacity-0 animate-elegant-slide-up animation-delay-1800">
            <button 
              type="submit"
              :disabled="isLoading"
              class="w-full bg-gradient-to-r from-ixmi-400 via-ixmi-300 to-ixmi-200 text-white py-2.5 sm:py-3.5 rounded-lg sm:rounded-xl font-medium text-sm sm:text-base transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none hover:from-ixmi-300 hover:via-ixmi-200 hover:to-ixmi-100"
            >
              <span v-if="isLoading" class="flex items-center justify-center">
                <div class="w-4 h-4 sm:w-5 sm:h-5 mr-2 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Creando cuenta...
              </span>
              <span v-else>Crear mi cuenta</span>
            </button>
          </div>
        </form>

        <!-- Links con entrada suave -->
        <div class="text-center mt-6 sm:mt-8 opacity-0 animate-elegant-slide-up animation-delay-1900">
          <p class="text-xs sm:text-sm text-gray-600">
            ¿Ya tienes cuenta? 
            <router-link 
              to="/login" 
              class="text-ixmi-400 hover:text-ixmi-300 font-medium transition-colors duration-300 hover:underline"
            >
              Inicia sesión aquí
            </router-link>
          </p>
        </div>

        <!-- Separador elegante -->
        <div class="relative my-6 sm:my-8 opacity-0 animate-elegant-slide-up animation-delay-2100">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-ixmi-100"></div>
          </div>
          <div class="relative flex justify-center text-xs sm:text-sm">
            <span class="px-3 sm:px-4 bg-white text-gray-500">O continúa con</span>
          </div>
        </div>

        <!-- Botones sociales con entrada escalonada -->
        <div class="grid grid-cols-2 gap-2 sm:gap-3 opacity-0 animate-elegant-slide-up animation-delay-2200">
          <button 
            @click="handleSocialLogin('Google')"
            class="flex items-center justify-center px-2 sm:px-4 py-2 sm:py-3 border border-ixmi-200 rounded-lg sm:rounded-xl hover:bg-ixmi-50 transition-all duration-300 hover:border-ixmi-300 hover:shadow-sm group"
          >
            <svg class="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2 transition-transform duration-300 group-hover:scale-105" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span class="text-xs sm:text-sm font-medium text-gray-700">Google</span>
          </button>

          <button 
            @click="handleSocialLogin('Facebook')"
            class="flex items-center justify-center px-2 sm:px-4 py-2 sm:py-3 border border-ixmi-200 rounded-lg sm:rounded-xl hover:bg-ixmi-50 transition-all duration-300 hover:border-ixmi-300 hover:shadow-sm group"
          >
            <svg class="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2 transition-transform duration-300 group-hover:scale-105" fill="#1877F2" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span class="text-xs sm:text-sm font-medium text-gray-700">Facebook</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Modal de Términos y Condiciones -->
    <div v-if="showTermsModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" @click="showTermsModal = false">
      <div @click.stop class="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden">
        <!-- Header del modal -->
        <div class="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 class="text-xl font-semibold text-gray-900">Términos y Condiciones</h3>
          <button @click="showTermsModal = false" class="text-gray-400 hover:text-gray-600 transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        
        <!-- Contenido del modal -->
        <div class="p-6 overflow-y-auto max-h-96">
          <div class="prose prose-sm max-w-none">
            <h4 class="font-semibold text-gray-900 mb-3">1. Aceptación de los Términos</h4>
            <p class="mb-4 text-gray-700">Al acceder y utilizar IxmiSport, usted acepta estar legalmente obligado por estos términos y condiciones.</p>
            
            <h4 class="font-semibold text-gray-900 mb-3">2. Uso del Servicio</h4>
            <p class="mb-4 text-gray-700">IxmiSport es una plataforma digital para la gestión de servicios deportivos. Usted se compromete a usar el servicio de manera responsable y conforme a las leyes aplicables.</p>
            
            <h4 class="font-semibold text-gray-900 mb-3">3. Cuenta de Usuario</h4>
            <p class="mb-4 text-gray-700">Es responsable de mantener la confidencialidad de su cuenta y contraseña, así como de todas las actividades que ocurran bajo su cuenta.</p>
            
            <h4 class="font-semibold text-gray-900 mb-3">4. Reservaciones y Cancelaciones</h4>
            <p class="mb-4 text-gray-700">Las reservaciones están sujetas a disponibilidad. Las cancelaciones deben realizarse con al menos 24 horas de anticipación para evitar cargos.</p>
            
            <h4 class="font-semibold text-gray-900 mb-3">5. Pagos</h4>
            <p class="mb-4 text-gray-700">Todos los pagos deben realizarse a través de los métodos aceptados en la plataforma. Los precios están sujetos a cambios sin previo aviso.</p>
            
            <h4 class="font-semibold text-gray-900 mb-3">6. Limitación de Responsabilidad</h4>
            <p class="mb-4 text-gray-700">IxmiSport no será responsable por daños indirectos, incidentales o consecuentes que puedan surgir del uso de nuestros servicios.</p>
          </div>
        </div>
        
        <!-- Footer del modal -->
        <div class="flex justify-end p-6 border-t border-gray-200">
          <button @click="showTermsModal = false" class="px-6 py-2 bg-ixmi-400 text-white rounded-lg hover:bg-ixmi-300 transition-colors">
            Entendido
          </button>
        </div>
      </div>
    </div>

    <!-- Modal de Política de Privacidad -->
    <div v-if="showPrivacyModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" @click="showPrivacyModal = false">
      <div @click.stop class="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden">
        <!-- Header del modal -->
        <div class="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 class="text-xl font-semibold text-gray-900">Política de Privacidad</h3>
          <button @click="showPrivacyModal = false" class="text-gray-400 hover:text-gray-600 transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        
        <!-- Contenido del modal -->
        <div class="p-6 overflow-y-auto max-h-96">
          <div class="prose prose-sm max-w-none">
            <h4 class="font-semibold text-gray-900 mb-3">1. Recopilación de Información</h4>
            <p class="mb-4 text-gray-700">Recopilamos información personal que usted nos proporciona directamente, como nombre, email, teléfono y datos de reservaciones.</p>
            
            <h4 class="font-semibold text-gray-900 mb-3">2. Uso de la Información</h4>
            <p class="mb-4 text-gray-700">Utilizamos su información para proporcionar y mejorar nuestros servicios, procesar reservaciones y comunicarnos con usted.</p>
            
            <h4 class="font-semibold text-gray-900 mb-3">3. Compartir Información</h4>
            <p class="mb-4 text-gray-700">No vendemos, intercambiamos ni transferimos su información personal a terceros sin su consentimiento, excepto según se describe en esta política.</p>
            
            <h4 class="font-semibold text-gray-900 mb-3">4. Seguridad de Datos</h4>
            <p class="mb-4 text-gray-700">Implementamos medidas de seguridad apropiadas para proteger su información personal contra acceso no autorizado, alteración o divulgación.</p>
            
            <h4 class="font-semibold text-gray-900 mb-3">5. Cookies</h4>
            <p class="mb-4 text-gray-700">Utilizamos cookies para mejorar su experiencia en nuestro sitio web y analizar el uso del mismo.</p>
            
            <h4 class="font-semibold text-gray-900 mb-3">6. Sus Derechos</h4>
            <p class="mb-4 text-gray-700">Tiene derecho a acceder, actualizar o eliminar su información personal. Puede contactarnos para ejercer estos derechos.</p>
          </div>
        </div>
        
        <!-- Footer del modal -->
        <div class="flex justify-end p-6 border-t border-gray-200">
          <button @click="showPrivacyModal = false" class="px-6 py-2 bg-ixmi-400 text-white rounded-lg hover:bg-ixmi-300 transition-colors">
            Entendido
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import {
  UserIcon,
  UserPlusIcon,
  AtSymbolIcon,
  PhoneIcon,
  LockClosedIcon,
  ShieldCheckIcon,
  EyeIcon,
  EyeSlashIcon
} from '@heroicons/vue/24/outline'

const router = useRouter()

// Estado del formulario
const formData = reactive({
  fullName: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
  acceptTerms: false
})

// Estados de UI
const showPassword = ref(false)
const showConfirmPassword = ref(false)
const isLoading = ref(false)
const showTermsModal = ref(false)
const showPrivacyModal = ref(false)

// Errores de validación
const errors = reactive({
  fullName: false,
  email: false,
  password: false,
  confirmPassword: false
})

// Validaciones
const validateForm = () => {
  let isValid = true
  
  // Reset errores
  Object.keys(errors).forEach(key => errors[key] = false)
  
  // Validar nombre
  if (!formData.fullName || formData.fullName.length < 2) {
    errors.fullName = true
    isValid = false
  }
  
  // Validar email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!formData.email || !emailRegex.test(formData.email)) {
    errors.email = true
    isValid = false
  }
  
  // Validar contraseña
  if (!formData.password || formData.password.length < 6) {
    errors.password = true
    isValid = false
  }
  
  // Validar confirmación de contraseña
  if (formData.password !== formData.confirmPassword) {
    errors.confirmPassword = true
    isValid = false
  }
  
  return isValid
}

// Manejar registro
const handleRegister = async () => {
  if (!validateForm()) {
    // Disparar animaciones de error
    setTimeout(() => {
      Object.keys(errors).forEach(key => {
        if (errors[key]) {
          errors[key] = true
        }
      })
    }, 100)
    return
  }
  
  if (!formData.acceptTerms) {
    alert('Debes aceptar los términos y condiciones')
    return
  }
  
  isLoading.value = true
  
  try {
    // Simulación de registro
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Registro exitoso:', {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone
    })
    
    // Guardar estado de autenticación
    localStorage.setItem('isAuthenticated', 'true')
    localStorage.setItem('userInfo', JSON.stringify({
      name: formData.fullName,
      email: formData.email,
      phone: formData.phone
    }))
    
    // Mostrar mensaje de éxito y redirigir
    alert('¡Cuenta creada exitosamente! Bienvenido a IxmiSport')
    router.push('/home')
    
  } catch (error) {
    console.error('Error en registro:', error)
    alert('Error al crear la cuenta. Por favor intenta nuevamente.')
  } finally {
    isLoading.value = false
  }
}

// Manejar login social (placeholder)
const handleSocialLogin = (provider) => {
  console.log(`Login con ${provider}`)
  alert(`Función de login con ${provider} será implementada próximamente`)
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

/* Sacudida suave para errores */
@keyframes gentle-shake {
  0%, 100% { 
    transform: translateX(0); 
  }
  25% { 
    transform: translateX(-5px); 
  }
  75% { 
    transform: translateX(5px); 
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

.animate-gentle-shake {
  animation: gentle-shake 0.5s ease-in-out;
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
.animation-delay-1600 { animation-delay: 1.6s; }
.animation-delay-1700 { animation-delay: 1.7s; }
.animation-delay-1800 { animation-delay: 1.8s; }
.animation-delay-1900 { animation-delay: 1.9s; }
.animation-delay-2000 { animation-delay: 2s; }
.animation-delay-2100 { animation-delay: 2.1s; }

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

/* Efectos hover elegantes */
input:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

input:focus {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(134, 231, 184, 0.15);
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(134, 231, 184, 0.25);
}

/* Efectos de checkbox */
input[type="checkbox"]:checked {
  background-color: var(--ixmi-400);
  border-color: var(--ixmi-400);
  transform: scale(1.05);
}

input[type="checkbox"]:hover {
  transform: scale(1.05);
  border-color: var(--ixmi-300);
}

/* Responsividad mejorada */
@media (max-width: 640px) {
  .text-4xl {
    font-size: 2rem;
    line-height: 1.2;
  }
  
  .text-3xl {
    font-size: 1.875rem;
  }
  
  .p-8 {
    padding: 1rem;
  }
  
  .mt-16 {
    margin-top: 3rem;
  }
  
  .space-y-4 > :not([hidden]) ~ :not([hidden]) {
    margin-top: 0.75rem;
  }
  
  .grid-cols-2 {
    gap: 0.5rem;
  }
}

@media (max-width: 480px) {
  .text-4xl {
    font-size: 1.75rem;
  }
  
  .text-2xl {
    font-size: 1.5rem;
  }
  
  .text-xl {
    font-size: 1.125rem;
  }
  
  .p-8 {
    padding: 0.75rem;
  }
  
  .mt-16 {
    margin-top: 2.5rem;
  }
  
  .mx-4 {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
  
  .space-y-4 > :not([hidden]) ~ :not([hidden]) {
    margin-top: 0.75rem;
  }
}

@media (max-width: 360px) {
  .text-4xl {
    font-size: 1.5rem;
  }
  
  .text-2xl {
    font-size: 1.25rem;
  }
  
  .p-8 {
    padding: 0.5rem;
  }
  
  .mt-16 {
    margin-top: 2rem;
  }
  
  .grid-cols-2 > * {
    font-size: 0.75rem;
  }
}
</style>