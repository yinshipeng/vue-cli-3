import { MENU } from '../mutation-types';

const state = {
    menu: {}
};

const mutations = {
    [MENU] (state, menu) {
        state.menu = menu;
    }
};

const actions = {
    updateMenuAction ({ commit }, menu) {
        commit(MENU, menu);
    }
};

const getters = {
    menu (state) {
        return state.menu;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};
