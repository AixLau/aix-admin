import type {RouteRecordRaw} from "vue-router";
// 模拟后端返回的路由数据
const mockRoutes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'layout',
        component: () => import('@/views/home/index.vue'),
        children: [
            {
                path: '/',
                name: '123',
                component: () => import('@/views/home/index.vue'),
                meta: {
                    title: '首页'
                }
            }
        ],
        meta: {
            title: '首页'
        }
    },
];
export const usePermissionStore = defineStore('permission', () => {
    const routes = ref<RouteRecordRaw[]>([]); // 用于存储当前用户可以访问的路由

    // 异步获取路由
    const fetchRoutes = async () => {
        return new Promise<RouteRecordRaw[]>(resolve => {
            setTimeout(() => {
                routes.value = mockRoutes;
                resolve(mockRoutes);
            }, 500) // 模拟网络延迟
        })
    };

    return {
        routes,
        fetchRoutes
    }
})