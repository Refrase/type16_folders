import Vue from 'vue';
import Vuex from 'vuex';

import documents from './modules/documents'

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    documents
  }
});
