import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import RegistrationView from '../views/RegistrationView.vue';
import ProfilePageView from '../views/ProfilePageView.vue';
import BookDetailView from '../views/BookDetailView.vue';
import PasswordChange from '../views/PasswordChangeView.vue';
import PageNotFoundView from '../views/PageNotFoundView.vue';
import CartView from '../views/CartView.vue';
import CategoryView from '../views/CategoryView.vue';

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
            component: LoginView,
        },
        {
            path: '/register',
            name: 'register',
            component: RegistrationView,
        },
        {
            path: '/profile',
            name: 'profile',
            component: ProfilePageView,
        },
        {
            path: '/book/:id',
            name: 'book',
            component: BookDetailView,
        },
        {
            path: '/passwordchange',
            name: 'passwordchange',
            component: PasswordChange,
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'PageNotFound',
            component: PageNotFoundView,
        },
        {
            path: '/cart',
            name: 'cart',
            component: CartView,
        },
        {
            path: '/category/:name',
            name: 'category',
            component: CategoryView,
            props: true,
        },
    ],
});

export default router;
