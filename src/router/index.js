import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue'
import RegistrationView from '../views/RegistrationView.vue'
import ProfilePageView from '../views/ProfilePageView.vue'
import PasswordChange from '../views/PasswordChangeView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView
        },
        {
            path: '/register',
            name: 'register', 
            component: RegistrationView
        },
        {
            path: '/profile',
            name: 'profile',
            component: ProfilePageView
        },
        {
            path: '/passwordchange',
            name: 'passwordchange',
            component: PasswordChange
        },
    ],
});

export default router;
