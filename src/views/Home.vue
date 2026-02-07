<template>
  <div class="home-container">
    <!-- Elementos decorativos de fondo (optimizados) -->
    <div class="bg-decoration">
      <div class="bg-blob blob-1"></div>
      <div class="bg-blob blob-2"></div>
      <div class="bg-grid"></div>
    </div>

    <!-- Navbar -->
    <nav class="navbar" :class="{ 'navbar-scrolled': isScrolled }">
      <div class="nav-content">
        <router-link to="/" class="logo">
          <svg class="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
            <path d="M12 2C12 2 14.5 5.5 14.5 12C14.5 18.5 12 22 12 22" stroke="currentColor" stroke-width="2"/>
            <path d="M12 2C12 2 9.5 5.5 9.5 12C9.5 18.5 12 22 12 22" stroke="currentColor" stroke-width="2"/>
            <path d="M2 12H22" stroke="currentColor" stroke-width="2"/>
          </svg>
          <span>IxmiSport</span>
        </router-link>
        <div class="nav-links">
          <template v-if="!isAuthenticated">
            <router-link to="/login" class="nav-link">Iniciar Sesión</router-link>
            <router-link to="/register" class="nav-btn-primary">
              <span>Registrarse</span>
              <svg class="btn-icon" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
              </svg>
            </router-link>
          </template>
          <template v-else>
            <router-link to="/reservaciones" class="nav-link">Buscar Canchas</router-link>
            <router-link to="/mis-reservaciones" class="nav-link">Mis Reservaciones</router-link>
            <router-link to="/profile" class="nav-btn-primary">
              <span>Mi Perfil</span>
              <svg class="btn-icon" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
              </svg>
            </router-link>
          </template>
        </div>
        <!-- Mobile menu button -->
        <button class="mobile-menu-btn" @click="mobileMenuOpen = !mobileMenuOpen">
          <svg v-if="!mobileMenuOpen" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
      <!-- Mobile menu -->
      <transition name="mobile-menu">
        <div v-if="mobileMenuOpen" class="mobile-menu">
          <template v-if="!isAuthenticated">
            <router-link to="/login" class="mobile-link" @click="mobileMenuOpen = false">Iniciar Sesión</router-link>
            <router-link to="/register" class="mobile-link primary" @click="mobileMenuOpen = false">Registrarse</router-link>
          </template>
          <template v-else>
            <router-link to="/reservaciones" class="mobile-link" @click="mobileMenuOpen = false">Buscar Canchas</router-link>
            <router-link to="/mis-reservaciones" class="mobile-link" @click="mobileMenuOpen = false">Mis Reservaciones</router-link>
            <router-link to="/profile" class="mobile-link primary" @click="mobileMenuOpen = false">Mi Perfil</router-link>
          </template>
        </div>
      </transition>
    </nav>

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <div class="hero-text">
          <span class="hero-badge animate-fade-in">
            <svg class="badge-icon" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span>Ayuntamiento de Ixmiquilpan</span>
          </span>
          <h1 class="hero-title animate-slide-up">
            <span class="title-line">Reserva tu espacio</span>
            <span class="hero-highlight">
              <span class="highlight-text">deportivo</span>
              <svg class="highlight-underline" viewBox="0 0 200 12" preserveAspectRatio="none">
                <path d="M0,8 Q50,0 100,8 T200,8" stroke="currentColor" stroke-width="4" fill="none" stroke-linecap="round"/>
              </svg>
            </span>
          </h1>
          <p class="hero-description animate-slide-up-delay">
            Accede fácilmente a las instalaciones deportivas municipales. 
            Reserva en minutos y disfruta del deporte en tu comunidad.
          </p>
          <div class="hero-actions animate-slide-up-delay-2">
            <router-link to="/register" class="btn-primary">
              <span>Comenzar Ahora</span>
              <svg class="btn-arrow" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
              </svg>
            </router-link>
            <router-link to="/reservaciones" class="btn-secondary">
              <svg class="btn-icon-left" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/>
              </svg>
              <span>Ver Canchas</span>
            </router-link>
          </div>
          <!-- Trust indicators -->
          <div class="trust-indicators animate-slide-up-delay-3">
            <div class="trust-item">
              <div class="trust-avatars">
                <div class="avatar"></div>
                <div class="avatar"></div>
                <div class="avatar"></div>
              </div>
              <span>+500 usuarios activos</span>
            </div>
            <div class="trust-divider"></div>
            <div class="trust-item">
              <svg viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <span>100% Gratuito</span>
            </div>
          </div>
        </div>
        
        <div class="hero-visual animate-fade-in-right">
          <div class="stats-container">
            <div class="stats-grid">
              <div class="stat-card" v-for="(stat, index) in stats" :key="index" :class="{ featured: stat.featured }">
                <div class="stat-icon-wrapper">
                  <component :is="stat.icon" class="stat-icon" />
                </div>
                <span class="stat-number">{{ stat.number }}</span>
                <span class="stat-label">{{ stat.label }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Indicador de scroll mejorado -->
      <div class="scroll-indicator">
        <div class="scroll-line"></div>
        <div class="scroll-mouse">
          <div class="scroll-wheel"></div>
        </div>
        <span>Descubre más</span>
        <div class="scroll-arrows">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
          </svg>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features" ref="featuresSection">
      <div class="features-content">
        <div class="section-header" :class="{ 'animate-visible': featuresVisible }">
          <span class="section-badge">
            <span class="badge-dot"></span>
            Características
          </span>
          <h2 class="section-title">¿Por qué elegir <span>IxmiSport</span>?</h2>
          <p class="section-subtitle">Facilidad y comodidad en cada reservación</p>
        </div>

        <div class="features-grid">
          <div class="feature-card" v-for="(feature, index) in features" :key="index" :class="{ 'animate-visible': featuresVisible }">
            <div class="feature-icon-wrapper">
              <component :is="feature.icon" class="feature-icon" />
            </div>
            <div class="feature-number">{{ String(index + 1).padStart(2, '0') }}</div>
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-description">{{ feature.description }}</p>
            <div class="feature-link">
              <span>Más información</span>
              <svg viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
              </svg>
            </div>
            <div class="feature-decoration"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sports Section -->
    <section class="sports" ref="sportsSection">
      <div class="sports-bg-accent"></div>
      <div class="sports-content">
        <div class="section-header" :class="{ 'animate-visible': sportsVisible }">
          <span class="section-badge">
            <span class="badge-dot"></span>
            Instalaciones
          </span>
          <h2 class="section-title">Nuestras <span>Instalaciones</span></h2>
          <p class="section-subtitle">Variedad de espacios para tu deporte favorito</p>
        </div>
        
        <div class="sports-grid">
          <div class="sport-card" v-for="(sport, index) in sports" :key="index" :class="{ 'animate-visible': sportsVisible }">
            <div class="sport-icon-wrapper">
              <component :is="sport.icon" class="sport-icon" />
            </div>
            <div class="sport-info">
              <h3>{{ sport.name }}</h3>
              <p>{{ sport.description }}</p>
            </div>
            <div class="sport-arrow">
              <svg viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta" ref="ctaSection">
      <div class="cta-bg-pattern"></div>

      <div class="cta-content" :class="{ 'animate-visible': ctaVisible }">
        <div class="cta-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
          </svg>
        </div>
        <h2 class="cta-title">¿Listo para reservar?</h2>
        <p class="cta-description">
          Únete a cientos de deportistas que ya disfrutan de nuestras instalaciones
        </p>
        <div class="cta-stats">
          <div class="cta-stat">
            <strong>12+</strong>
            <span>Canchas</span>
          </div>
          <div class="cta-stat-divider"></div>
          <div class="cta-stat">
            <strong>500+</strong>
            <span>Usuarios</span>
          </div>
          <div class="cta-stat-divider"></div>
          <div class="cta-stat">
            <strong>24/7</strong>
            <span>Disponible</span>
          </div>
        </div>
        <router-link to="/register" class="cta-btn">
          <span>Crear Cuenta Gratis</span>
          <svg viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
          </svg>
        </router-link>
        <p class="cta-note">
          <svg viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
          </svg>
          Sin tarjeta de crédito requerida
        </p>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-grid">
          <div class="footer-brand">
            <div class="footer-logo">
              <svg class="footer-logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                <path d="M12 2C12 2 14.5 5.5 14.5 12C14.5 18.5 12 22 12 22" stroke="currentColor" stroke-width="2"/>
                <path d="M12 2C12 2 9.5 5.5 9.5 12C9.5 18.5 12 22 12 22" stroke="currentColor" stroke-width="2"/>
                <path d="M2 12H22" stroke="currentColor" stroke-width="2"/>
              </svg>
              <h3>IxmiSport</h3>
            </div>
            <p>Sistema de reservación de canchas deportivas del Ayuntamiento de Ixmiquilpan.</p>
            <div class="social-links">
              <a href="#" class="social-link" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" class="social-link" aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
              <a href="#" class="social-link" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>
          <div class="footer-links">
            <h4>Enlaces</h4>
            <ul>
              <li><router-link to="/reservaciones">Ver Canchas</router-link></li>
              <li><router-link to="/login">Iniciar Sesión</router-link></li>
              <li><router-link to="/register">Registrarse</router-link></li>
            </ul>
          </div>
          <div class="footer-contact">
            <h4>Contacto</h4>
            <ul>
              <li>
                <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/></svg>
                Ixmiquilpan, Hidalgo
              </li>
              <li>
                <svg viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>
                contacto@ixmisport.gob.mx
              </li>
              <li>
                <svg viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
                (771) 123-4567
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2025 Ayuntamiento de Ixmiquilpan. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, h, markRaw } from 'vue'
import { onAuthChange } from '@/firebase/auth'

const isAuthenticated = ref(false)
const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

// Visibility refs para animaciones de scroll
const featuresSection = ref(null)
const sportsSection = ref(null)
const ctaSection = ref(null)
const featuresVisible = ref(false)
const sportsVisible = ref(false)
const ctaVisible = ref(false)

let unsubscribe = null
let observer = null

// Iconos como componentes funcionales
const IconCourt = markRaw({
  render: () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
    h('rect', { x: '2', y: '4', width: '20', height: '16', rx: '2' }),
    h('line', { x1: '12', y1: '4', x2: '12', y2: '20' }),
    h('circle', { cx: '12', cy: '12', r: '3' })
  ])
})

const IconUsers = markRaw({
  render: () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
    h('path', { d: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2' }),
    h('circle', { cx: '9', cy: '7', r: '4' }),
    h('path', { d: 'M23 21v-2a4 4 0 0 0-3-3.87' }),
    h('path', { d: 'M16 3.13a4 4 0 0 1 0 7.75' })
  ])
})

const IconClock = markRaw({
  render: () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
    h('circle', { cx: '12', cy: '12', r: '10' }),
    h('polyline', { points: '12 6 12 12 16 14' })
  ])
})

const IconGift = markRaw({
  render: () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
    h('polyline', { points: '20 12 20 22 4 22 4 12' }),
    h('rect', { x: '2', y: '7', width: '20', height: '5' }),
    h('line', { x1: '12', y1: '22', x2: '12', y2: '7' }),
    h('path', { d: 'M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z' }),
    h('path', { d: 'M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z' })
  ])
})

const IconZap = markRaw({
  render: () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
    h('polygon', { points: '13 2 3 14 12 14 11 22 21 10 12 10 13 2' })
  ])
})

const IconDollar = markRaw({
  render: () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
    h('line', { x1: '12', y1: '1', x2: '12', y2: '23' }),
    h('path', { d: 'M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' })
  ])
})

const IconCalendar = markRaw({
  render: () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
    h('rect', { x: '3', y: '4', width: '18', height: '18', rx: '2', ry: '2' }),
    h('line', { x1: '16', y1: '2', x2: '16', y2: '6' }),
    h('line', { x1: '8', y1: '2', x2: '8', y2: '6' }),
    h('line', { x1: '3', y1: '10', x2: '21', y2: '10' })
  ])
})

const IconSoccer = markRaw({
  render: () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
    h('circle', { cx: '12', cy: '12', r: '10' }),
    h('path', { d: 'M12 2l3 7h-6l3-7' }),
    h('path', { d: 'M12 22l-3-7h6l-3 7' }),
    h('path', { d: 'M2 12l7-3v6l-7-3' }),
    h('path', { d: 'M22 12l-7 3v-6l7 3' })
  ])
})

const IconBasketball = markRaw({
  render: () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
    h('circle', { cx: '12', cy: '12', r: '10' }),
    h('path', { d: 'M4.93 4.93l14.14 14.14' }),
    h('path', { d: 'M19.07 4.93L4.93 19.07' }),
    h('path', { d: 'M12 2v20' }),
    h('path', { d: 'M2 12h20' })
  ])
})

const IconVolleyball = markRaw({
  render: () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
    h('circle', { cx: '12', cy: '12', r: '10' }),
    h('path', { d: 'M12 2a10 10 0 0 0-6 18' }),
    h('path', { d: 'M12 2a10 10 0 0 1 6 18' }),
    h('path', { d: 'M2 12h20' })
  ])
})

const IconTennis = markRaw({
  render: () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
    h('circle', { cx: '12', cy: '12', r: '10' }),
    h('path', { d: 'M18.4 5.6c-4.8 4.8-4.8 12.6 0 17.4' }),
    h('path', { d: 'M5.6 5.6c4.8 4.8 4.8 12.6 0 17.4' })
  ])
})

// Datos
const stats = ref([
  { number: '12+', label: 'Canchas Disponibles', icon: IconCourt },
  { number: '500+', label: 'Usuarios Activos', icon: IconUsers },
  { number: '24/7', label: 'Sistema en Línea', icon: IconClock },
  { number: '100%', label: 'Gratuito', icon: IconGift, featured: true }
])

const features = ref([
  { title: 'Reserva Rápida', description: 'Reserva tu cancha en menos de 2 minutos. Sistema intuitivo y fácil de usar para todos.', icon: IconZap },
  { title: 'Sin Costo', description: 'Servicio completamente gratuito para todos los ciudadanos. Solo reserva tu horario.', icon: IconDollar },
  { title: 'Horario Flexible', description: 'Reserva desde cualquier dispositivo, de 6:00 AM a 8:00 PM todos los días.', icon: IconCalendar }
])

const sports = ref([
  { name: 'Fútbol', description: 'Canchas de pasto sintético con iluminación nocturna', icon: IconSoccer },
  { name: 'Basquetbol', description: 'Superficie profesional con tableros reglamentarios', icon: IconBasketball },
  { name: 'Voleibol', description: 'Canchas techadas y al aire libre disponibles', icon: IconVolleyball },
  { name: 'Tenis', description: 'Pistas de arcilla y cemento para todos los niveles', icon: IconTennis }
])

// Scroll handler
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  unsubscribe = onAuthChange((user) => {
    isAuthenticated.value = !!user
  })

  window.addEventListener('scroll', handleScroll)

  // Intersection Observer para animaciones de scroll
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target === featuresSection.value) featuresVisible.value = true
        if (entry.target === sportsSection.value) sportsVisible.value = true
        if (entry.target === ctaSection.value) ctaVisible.value = true
      }
    })
  }, { threshold: 0.2 })

  if (featuresSection.value) observer.observe(featuresSection.value)
  if (sportsSection.value) observer.observe(sportsSection.value)
  if (ctaSection.value) observer.observe(ctaSection.value)
})

onUnmounted(() => {
  if (unsubscribe) unsubscribe()
  window.removeEventListener('scroll', handleScroll)
  if (observer) observer.disconnect()
})
</script>

<style scoped>
/* ================================================
   IXMISPORT - OPTIMIZED UI/UX DESIGN
   ================================================ */

/* Keyframe Animations - Optimized */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slideInRight {
  from { opacity: 0; transform: translateX(40px); }
  to { opacity: 1; transform: translateX(0); }
}

/* Animation Classes */
.animate-fade-in {
  animation: fadeIn 0.6s ease-out forwards;
}

.animate-slide-up {
  animation: slideUp 0.6s ease-out forwards;
}

.animate-slide-up-delay {
  opacity: 0;
  animation: slideUp 0.6s ease-out 0.1s forwards;
}

.animate-slide-up-delay-2 {
  opacity: 0;
  animation: slideUp 0.6s ease-out 0.2s forwards;
}

.animate-slide-up-delay-3 {
  opacity: 0;
  animation: slideUp 0.6s ease-out 0.3s forwards;
}

.animate-fade-in-right {
  animation: slideInRight 0.7s ease-out 0.15s forwards;
  opacity: 0;
}

/* Visibility animations for scroll */
.section-header,
.feature-card,
.sport-card,
.cta-content {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}

.section-header.animate-visible,
.feature-card.animate-visible,
.sport-card.animate-visible,
.cta-content.animate-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Base Container */
.home-container {
  min-height: 100vh;
  background: linear-gradient(145deg, #fafffe 0%, #ffffff 50%, #f0fdf4 100%);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  position: relative;
  overflow-x: hidden;
}

/* Background Decorations - Optimized */
.bg-decoration {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.bg-grid {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(16, 185, 129, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(16, 185, 129, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
  opacity: 0.5;
}

.bg-blob {
  position: absolute;
  border-radius: 50%;
  opacity: 0.4;
}

.blob-1 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(167, 243, 208, 0.4) 0%, transparent 70%);
  top: -150px;
  right: -150px;
}

.blob-2 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(209, 250, 229, 0.5) 0%, transparent 70%);
  bottom: 20%;
  left: -100px;
}

/* Navbar */
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(229, 231, 235, 0.5);
  transition: background 0.3s ease, box-shadow 0.3s ease;
}

.navbar-scrolled {
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.05);
}

.nav-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: #059669;
  text-decoration: none;
}

.logo:hover {
  opacity: 0.9;
}

.logo-icon {
  width: 32px;
  height: 32px;
  color: #059669;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.nav-link {
  padding: 0.625rem 1.25rem;
  color: #374151;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9375rem;
  border-radius: 10px;
  transition: color 0.2s ease, background 0.2s ease;
}

.nav-link:hover {
  color: #059669;
  background: rgba(240, 253, 244, 0.8);
}

.nav-btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1.5rem;
  background: linear-gradient(135deg, #059669 0%, #10b981 100%);
  color: white;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9375rem;
  border-radius: 10px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 4px 15px rgba(5, 150, 105, 0.2);
}

.nav-btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(5, 150, 105, 0.3);
}

.nav-btn-primary .btn-icon {
  width: 16px;
  height: 16px;
}

/* Mobile Menu Button */
.mobile-menu-btn {
  display: none;
  padding: 0.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #374151;
  border-radius: 8px;
}

.mobile-menu-btn:hover {
  background: rgba(240, 253, 244, 0.8);
  color: #059669;
}

.mobile-menu-btn svg {
  width: 24px;
  height: 24px;
}

/* Mobile Menu */
.mobile-menu {
  display: none;
  flex-direction: column;
  padding: 1rem 2rem 2rem;
  gap: 0.5rem;
  background: white;
  border-top: 1px solid rgba(229, 231, 235, 0.5);
}

.mobile-link {
  padding: 0.875rem 1rem;
  color: #374151;
  text-decoration: none;
  font-weight: 500;
  border-radius: 10px;
}

.mobile-link:hover,
.mobile-link.primary {
  background: #f0fdf4;
  color: #059669;
}

.mobile-link.primary {
  background: linear-gradient(135deg, #059669 0%, #10b981 100%);
  color: white;
  text-align: center;
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Hero Section */
.hero {
  padding: 5rem 2rem 4rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-text {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  width: fit-content;
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, rgba(220, 252, 231, 0.9) 0%, rgba(167, 243, 208, 0.7) 100%);
  color: #047857;
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: 100px;
  border: 1px solid rgba(167, 243, 208, 0.6);
}

.badge-icon {
  width: 16px;
  height: 16px;
}

.hero-title {
  font-size: 3.75rem;
  font-weight: 800;
  color: #111827;
  line-height: 1.1;
  letter-spacing: -0.03em;
}

.title-line {
  display: block;
}

.hero-highlight {
  display: inline-block;
  position: relative;
}

.highlight-text {
  background: linear-gradient(135deg, #059669 0%, #10b981 50%, #34d399 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.highlight-underline {
  position: absolute;
  bottom: 2px;
  left: 0;
  width: 100%;
  height: 10px;
  color: #34d399;
  opacity: 0.5;
}

.hero-description {
  font-size: 1.125rem;
  color: #4b5563;
  line-height: 1.7;
  max-width: 500px;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #059669 0%, #10b981 100%);
  color: white;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(5, 150, 105, 0.25);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(5, 150, 105, 0.35);
}

.btn-primary .btn-arrow {
  width: 18px;
  height: 18px;
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: white;
  color: #374151;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  border: 2px solid rgba(209, 213, 219, 0.8);
  border-radius: 12px;
  transition: border-color 0.2s ease, color 0.2s ease, background 0.2s ease;
}

.btn-secondary:hover {
  border-color: #10b981;
  color: #059669;
  background: rgba(240, 253, 244, 0.9);
}

.btn-icon-left {
  width: 18px;
  height: 18px;
}

/* Trust Indicators */
.trust-indicators {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-top: 1rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(229, 231, 235, 0.5);
}

.trust-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 500;
}

.trust-item svg {
  width: 16px;
  height: 16px;
  color: #f59e0b;
}

.trust-avatars {
  display: flex;
}

.avatar {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: linear-gradient(135deg, #a7f3d0, #6ee7b7);
  border: 2px solid white;
  margin-left: -8px;
}

.avatar:first-child {
  margin-left: 0;
}

.trust-divider {
  width: 1px;
  height: 20px;
  background: rgba(209, 213, 219, 0.6);
}

/* Stats Grid */
.hero-visual {
  display: flex;
  justify-content: center;
}

.stats-container {
  position: relative;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  width: 100%;
  max-width: 400px;
}

.stat-card {
  background: white;
  padding: 1.5rem;
  border-radius: 20px;
  text-align: center;
  border: 1px solid rgba(229, 231, 235, 0.6);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
}

.stat-card.featured {
  background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
  border-color: rgba(167, 243, 208, 0.5);
}

.stat-icon-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 0.75rem;
}

.stat-icon {
  width: 28px;
  height: 28px;
  color: #10b981;
  opacity: 0.7;
}

.stat-number {
  display: block;
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #059669 0%, #10b981 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.8125rem;
  color: #6b7280;
  font-weight: 500;
  z-index: 1;
}

/* Scroll Indicator */
.scroll-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.625rem;
  margin-top: 4rem;
  animation: fadeIn 1s ease-out 1.2s forwards;
  opacity: 0;
}

.scroll-line {
  width: 1px;
  height: 40px;
  background: linear-gradient(to bottom, rgba(156, 163, 175, 0.4), transparent);
}

.scroll-mouse {
  width: 26px;
  height: 42px;
  border: 2px solid rgba(107, 114, 128, 0.35);
  border-radius: 13px;
  display: flex;
  justify-content: center;
  padding-top: 10px;
  transition: border-color 0.3s ease;
}

.scroll-indicator:hover .scroll-mouse {
  border-color: #10b981;
}

.scroll-wheel {
  width: 4px;
  height: 8px;
  background: linear-gradient(to bottom, #10b981, #34d399);
  border-radius: 2px;
}

.scroll-indicator span {
  font-size: 0.75rem;
  color: #9ca3af;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.scroll-arrows {
  color: #9ca3af;
}

.scroll-arrows svg {
  width: 20px;
  height: 20px;
}

/* Features Section */
.features {
  padding: 8rem 2rem;
  background: rgba(255, 255, 255, 0.95);
  position: relative;
  z-index: 1;
}

.features-content {
  max-width: 1280px;
  margin: 0 auto;
}

.section-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, rgba(220, 252, 231, 0.7) 0%, rgba(167, 243, 208, 0.5) 100%);
  color: #047857;
  font-size: 0.8125rem;
  font-weight: 600;
  border-radius: 100px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 1.25rem;
  border: 1px solid rgba(167, 243, 208, 0.4);
}

.badge-dot {
  width: 6px;
  height: 6px;
  background: linear-gradient(135deg, #10b981, #059669);
  border-radius: 50%;
}

.section-header {
  text-align: center;
  margin-bottom: 4.5rem;
}

.section-title {
  font-size: 3rem;
  font-weight: 800;
  color: #111827;
  margin-bottom: 1rem;
  letter-spacing: -0.025em;
}

.section-title span {
  background: linear-gradient(135deg, #059669 0%, #10b981 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-subtitle {
  font-size: 1.125rem;
  color: #6b7280;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.feature-card {
  padding: 2.5rem 2rem;
  background: #fafafa;
  border-radius: 24px;
  border: 1px solid rgba(243, 244, 246, 0.8);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  position: relative;
}

.feature-card:hover {
  background: white;
  border-color: rgba(167, 243, 208, 0.5);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.06);
  transform: translateY(-6px);
}

.feature-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
  border-radius: 18px;
  margin-bottom: 1.5rem;
}

.feature-icon {
  width: 28px;
  height: 28px;
  color: #059669;
}

.feature-number {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  font-size: 3rem;
  font-weight: 800;
  color: rgba(209, 250, 229, 0.5);
  line-height: 1;
}

.feature-title {
  font-size: 1.375rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.75rem;
}

.feature-description {
  font-size: 0.9375rem;
  color: #6b7280;
  line-height: 1.7;
  margin-bottom: 1.25rem;
}

.feature-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9375rem;
  font-weight: 600;
  color: #059669;
  transition: gap 0.2s ease;
}

.feature-link svg {
  width: 16px;
  height: 16px;
}

.feature-link:hover {
  gap: 0.75rem;
}

/* Sports Section */
.sports {
  padding: 8rem 2rem;
  background: linear-gradient(180deg, rgba(240, 253, 244, 0.85) 0%, rgba(255, 255, 255, 0.95) 100%);
  position: relative;
  z-index: 1;
  overflow: hidden;
}

.sports-bg-accent {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 400px;
  background: radial-gradient(ellipse at center top, rgba(167, 243, 208, 0.25) 0%, transparent 70%);
  pointer-events: none;
}

.sports-content {
  max-width: 1280px;
  margin: 0 auto;
  position: relative;
}

.sports-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.sport-card {
  position: relative;
  padding: 2.5rem 1.5rem;
  background: white;
  border-radius: 20px;
  border: 1px solid rgba(229, 231, 235, 0.5);
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
}

.sport-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
  border-color: rgba(167, 243, 208, 0.4);
}

.sport-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 68px;
  height: 68px;
  background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
  border-radius: 50%;
  margin: 0 auto 1.25rem;
  transition: background 0.2s ease;
}

.sport-card:hover .sport-icon-wrapper {
  background: linear-gradient(135deg, #dcfce7 0%, #a7f3d0 100%);
}

.sport-icon {
  width: 32px;
  height: 32px;
  color: #059669;
}

.sport-info h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.5rem;
}

.sport-card:hover .sport-info h3 {
  color: #059669;
}

.sport-info p {
  font-size: 0.875rem;
  color: #6b7280;
  line-height: 1.5;
}

.sport-arrow {
  position: absolute;
  bottom: 1.25rem;
  right: 1.25rem;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f0fdf4;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.sport-arrow svg {
  width: 16px;
  height: 16px;
  color: #059669;
}

.sport-card:hover .sport-arrow {
  opacity: 1;
}

/* CTA Section */
.cta {
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #059669 0%, #10b981 100%);
  position: relative;
  z-index: 1;
}

.cta-bg-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.08) 0%, transparent 40%),
    radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.06) 0%, transparent 40%);
  pointer-events: none;
}

.cta-content {
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
}

.cta-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 72px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  margin: 0 auto 1.5rem;
}

.cta-icon svg {
  width: 36px;
  height: 36px;
  color: white;
}

.cta-title {
  font-size: 2.75rem;
  font-weight: 800;
  color: white;
  margin-bottom: 1rem;
}

.cta-description {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.cta-stats {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
  padding: 1rem 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
}

.cta-stat {
  text-align: center;
}

.cta-stat strong {
  display: block;
  font-size: 1.5rem;
  font-weight: 800;
  color: white;
}

.cta-stat span {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
}

.cta-stat-divider {
  width: 1px;
  height: 40px;
  background: rgba(255, 255, 255, 0.25);
}

.cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.125rem 2.5rem;
  background: white;
  color: #059669;
  text-decoration: none;
  font-weight: 700;
  font-size: 1rem;
  border-radius: 14px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.cta-btn svg {
  width: 18px;
  height: 18px;
}

.cta-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
}

.cta-note {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
}

.cta-note svg {
  width: 16px;
  height: 16px;
}

/* Footer */
.footer {
  padding: 5.5rem 2rem 2rem;
  background: linear-gradient(180deg, #fafafa 0%, #f5f5f5 100%);
  border-top: 1px solid rgba(229, 231, 235, 0.5);
  position: relative;
  z-index: 1;
}

.footer-content {
  max-width: 1280px;
  margin: 0 auto;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 4rem;
  margin-bottom: 3.5rem;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
}

.footer-logo-icon {
  width: 38px;
  height: 38px;
  color: #059669;
}

.footer-brand h3 {
  font-size: 1.5rem;
  font-weight: 800;
  color: #059669;
  margin: 0;
}

.footer-brand p {
  font-size: 1rem;
  color: #6b7280;
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.social-links {
  display: flex;
  gap: 0.75rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: #f0fdf4;
  border-radius: 10px;
  color: #6b7280;
  transition: background 0.2s ease, color 0.2s ease;
}

.social-link svg {
  width: 18px;
  height: 18px;
}

.social-link:hover {
  background: linear-gradient(135deg, #059669, #10b981);
  color: white;
}

.footer-links h4,
.footer-contact h4 {
  font-size: 1rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1.25rem;
  letter-spacing: -0.01em;
}

.footer-links ul,
.footer-contact ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li,
.footer-contact li {
  margin-bottom: 0.875rem;
}

.footer-links a {
  color: #6b7280;
  text-decoration: none;
  font-size: 0.9375rem;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
}

.footer-links a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #059669, #10b981);
  transition: width 0.3s ease;
  border-radius: 1px;
}

.footer-links a:hover {
  color: #059669;
}

.footer-links a:hover::after {
  width: 100%;
}

.footer-contact li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #6b7280;
  font-size: 0.9375rem;
}

.footer-contact li svg {
  width: 18px;
  height: 18px;
  color: #10b981;
  flex-shrink: 0;
}

.footer-bottom {
  padding-top: 2rem;
  border-top: 1px solid rgba(229, 231, 235, 0.7);
  text-align: center;
}

.footer-bottom p {
  color: #9ca3af;
  font-size: 0.875rem;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 3.5rem;
    text-align: center;
  }

  .hero-text {
    align-items: center;
  }

  .hero-description {
    max-width: 100%;
  }

  .hero-actions {
    justify-content: center;
  }

  .trust-indicators {
    justify-content: center;
  }

  .hero-title {
    font-size: 3.25rem;
  }

  .features-grid {
    grid-template-columns: 1fr;
    max-width: 520px;
    margin: 0 auto;
  }

  .sports-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    text-align: center;
  }

  .footer-logo {
    justify-content: center;
  }

  .social-links {
    justify-content: center;
  }

  .scroll-indicator {
    display: none;
  }

  .floating-shapes {
    opacity: 0.5;
  }
}

@media (max-width: 640px) {
  .nav-links {
    display: none;
  }

  .mobile-menu-btn {
    display: block;
  }

  .mobile-menu {
    display: flex;
  }

  .hero {
    padding: 3.5rem 1.5rem 2.5rem;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-actions {
    flex-direction: column;
    width: 100%;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
    justify-content: center;
  }

  .trust-indicators {
    flex-direction: column;
    gap: 1rem;
  }

  .trust-divider {
    width: 60px;
    height: 1px;
  }

  .stats-grid {
    grid-template-columns: 1fr;
    max-width: 300px;
  }

  .stat-card {
    padding: 1.75rem;
  }

  .sports-grid {
    grid-template-columns: 1fr;
    max-width: 340px;
    margin: 0 auto;
  }

  .section-title {
    font-size: 2.25rem;
  }

  .cta-title {
    font-size: 2.25rem;
  }

  .cta-stats {
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;
  }

  .cta-stat-divider {
    width: 60px;
    height: 1px;
  }

  .cta {
    padding: 5.5rem 1.5rem;
  }

  .features,
  .sports {
    padding: 5.5rem 1.5rem;
  }

  .bg-blob {
    opacity: 0.35;
  }

  .bg-grid {
    opacity: 0.5;
  }
}
</style>