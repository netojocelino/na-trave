import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunckName: 'home' */ '/src/page/Home.vue')
    },
    {
        path: '/signin',
        name: 'Signin',
        component: () => import(/* webpackChunckName: 'signin' */ '/src/page/SignIn.vue')
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: () => import(/* webpackChunckName: 'signup' */ '/src/page/SignUp.vue')
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import(/* webpackChunckName: 'dashboard' */ '/src/page/Dashboard.vue')
    },
    {
        path: '/profile',
        name: 'Profile',
        component: () => import(/* webpackChunckName: 'profile' */ '/src/page/Profile.vue')
    },
];

const route = createRouter({
    history: createWebHistory(),
    routes,
})

export default route;
