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

// 导航守卫，用于动态加载路由
router.beforeEach(async (to, _, next) => {
    const permissionStore = usePermissionStore();
    if (permissionStore.routes.length === 0) {
        // 如果没有路由信息，获取动态路由
        const accessedRoutes: RouteRecordRaw[] = await permissionStore.fetchRoutes()
        accessedRoutes.forEach(route => {
            // 动态添加路由
            router.addRoute(route)
        });
        // 重新导航到目标路由
        next({...to, replace: true})
    } else {
        next();
    }
});
export default router