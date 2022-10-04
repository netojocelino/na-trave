import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunckName: 'home' */ '/src/page/Home.vue')
    },
];


const route = createRouter({
    history: createWebHistory(),
    routes,
})

export default route;
