// main.js
import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router/router';
import { Quasar } from 'quasar';
import quasarLang from 'quasar/lang/es'; 
import 'quasar/src/css/index.sass';
import '@quasar/extras/material-icons/material-icons.css';
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css';
import '@quasar/extras/eva-icons/eva-icons.css';
import '@quasar/extras/themify/themify.css';
import '@quasar/extras/line-awesome/line-awesome.css';

// Importar Firebase
import './Firebase/Firebase'; // Esto carga la configuración de Firebase

// Crear la app y usar Quasar con el idioma español
createApp(App)
  .use(router)
  .use(Quasar, {
    lang: quasarLang, // Configurar Quasar en español
  })
  .mount('#app');
