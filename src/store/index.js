import Vue from 'vue';
import Vuex from 'vuex';
import loading from './modules/loading';
import menu from './modules/menu';
Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        loading,
        menu
    },
    strict: process.env.NODE_ENV !== 'production'
});

export default store;
