import { LOADING } from '../mutation-types';

const state = {
    loading: false
};

const mutations = {
    [LOADING] (state, loading) {
        state.loading = loading;
    }
};

const actions = {
    updateLoadingAction ({ commit }, loading) {
        commit(LOADING, loading);
    }
};

const getters = {
    loading (state) {
        return state.loading;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};
