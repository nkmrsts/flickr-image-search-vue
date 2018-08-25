import 'babel-polyfill'
// import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchWords: '',
    pageNum: '',
    result: ''
  },
  mutations: {
    setSearchWords (state, payload) {
      state.searchWords = payload.input
    }
  },
  actions: {
    getInput ({ commit }, input) {
      commit('setSearchWords', { input })
    }
  },
  getters: {
    searchWords: (state) => state.searchWords
  }
})
