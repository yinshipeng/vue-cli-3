import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

let router = new VueRouter({
    mode: 'history',
    routes
});

// 路由权限控制
router.beforeEach(async (to, from, next) => {
    if (to.meta.hasOwnProperty('requiresAuth') && !to.meta['requiresAuth']) {
        next();
    } else {
        next();
    }
});

export default router;
