
import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);

const store = new Vuex.Store({

    state: {
        local: null
    },
    getters : {
        getLocal(state) {
            return state.local;
        }
    },
    mutations: {
        SET_LOCAL(state, payload) {
            state.local = payload;
        }
    }
})


export default store;