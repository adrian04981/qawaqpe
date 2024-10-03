import { createRouter, createWebHistory } from 'vue-router';

// Importar componentes
import Home from '../views/Website/Home.vue';
import Loggeo from '../views/Security/Loggeo.vue';

// Definir las rutas
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/loggeo',
    name: 'Loggeo',
    component: Loggeo,
  },
];

// Crear el router
const router = createRouter({
  history: createWebHistory(),
  routes, // Aquí están las rutas que definimos
});

export default router;
