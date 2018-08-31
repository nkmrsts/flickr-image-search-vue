import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'
import api from './api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchWords: '',
    pageNum: '',
    maxPage: '',
    total: '',
    results: [],
    photoInfo: ''
  },
  mutations: {
    initSearch (state, payload) {
      state.searchWords = payload.input
      state.pageNum = 1
    },
    setResults (state, payload) {
      [ state.pageNum,
        state.maxPage,
        state.total,
        state.results ] = [payload.page, payload.pages, payload.total, payload.photo]
    },
    addResults (state, payload) {
      state.results.push(...payload.photo)
    },
    increment (state) {
      state.pageNum += 1
    },
    decrement (state) {
      state.pageNum -= 1
    },
    photoInfo (state, payload) {
      state.photoInfo = payload
    }
  },
  actions: {
    searchPhoto ({ commit }, input) {
      commit('initSearch', { input })
      api.fetchPhotos(this.state.searchWords, this.state.pageNum)
        .then(data => {
          commit('setResults', data.photos)
        })
    },
    readMore ({ commit }) {
      commit('increment')
      api.fetchPhotos(this.state.searchWords, this.state.pageNum)
        .then(data => {
          commit('addResults', data.photos)
        })
    },
    getInfo ({ commit }, id) {
      api.fetchInfo(id)
        .then(data => {
          commit('photoInfo', data.photo)
        })
    }
  },
  getters: {}
})
