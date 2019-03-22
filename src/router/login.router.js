export default [
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/login/login.vue')
    },
    {
        path: '/mobile',
        name: 'mobile',
        component: () => import('../views/mobile/mobile.vue')
    }
];
