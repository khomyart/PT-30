import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import InputString from './modules/inputString/store'

export const store = new Vuex.Store({
    modules: {
        inputString: InputString,
    }
});

