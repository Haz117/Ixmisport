import { createRouter, createWebHistory } from 'vue-router';
import { auth } from '../firebase/config';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Reservaciones from '../views/Reservaciones.vue';
import MisReservaciones from '../views/MisReservaciones.vue';
import Profile from '../views/Profile.vue';
import Admin from '../views/Admin.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/reservaciones',
    name: 'Reservaciones',
    component: Reservaciones,
    meta: { requiresAuth: true }
  },
  {
    path: '/mis-reservaciones',
    name: 'MisReservaciones',
    component: MisReservaciones,
    meta: { requiresAuth: true }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: { requiresAuth: true }
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
    // Temporalmente sin autenticación
    // meta: { requiresAuth: true, requiresAdmin: true }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Guard de navegación para rutas protegidas
router.beforeEach((to, from, next) => {
  const user = auth.currentUser;
  
  if (to.meta.requiresAuth && !user) {
    next('/login');
  } else if ((to.path === '/login' || to.path === '/register') && user) {
    next('/');
  } else {
    next();
  }
});

export default router;
