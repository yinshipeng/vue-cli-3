export default [
    {
        path: '/403',
        component: () => import('../views/error/403.vue'),
        meta: {
            requiresAuth: false
        }
    },
    {
        path: '/502',
        component: () => import('../views/error/502.vue'),
        meta: {
            requiresAuth: false
        }
    },
    {
        path: '/404',
        component: () => import('../views/error/404.vue'),
        meta: {
            requiresAuth: false
        }
    },
    {
        path: '/welcome',
        alias: '/',
        component: () => import('../views/error/welcome.vue')
    }
];
