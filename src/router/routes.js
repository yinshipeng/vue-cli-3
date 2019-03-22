import Layout from '../views/layout/layout.vue';
import LoginRouter from './login.router';
import HomeRouter from './home.router';
import ErrorRouter from './error.router';

const routes = [
    {
        path: '/',
        component: Layout,
        children: [
            ...HomeRouter,
            ...ErrorRouter
        ]
    },
    ...LoginRouter
];

export default routes;
