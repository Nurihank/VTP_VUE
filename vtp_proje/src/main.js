import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import HomePage from './views/HomePage.vue'

const app = createApp(App)

const router = createRouter({ 
    history: createWebHistory(), // Tarayıcı geçmişi
    routes:[{
        path:'/Home' , component:HomePage
    }]
})

app.use(router)
app.use(createPinia())
app.mount('#app');
