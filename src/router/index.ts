import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/index.vue')
    },
    {
        path: '/',
        name: 'layout',
        component: () => import('@/views/home/index.vue')
    },
    {
        path: '/404',
        name: '404',
        component: () => import('@/views/404/index.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'any',
        redirect: '/404'
    }
];
const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior() {
        return {
            left: 0,
            top: 0
        }
    }
})

export default router