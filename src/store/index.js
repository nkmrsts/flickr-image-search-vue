import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'
import fetchFlickr from './api'
const fetchPhotos = (text, page) => {
  return fetchFlickr({
    method: 'flickr.photos.search',
    api_key: '',
    text: text,
    extras: 'description,date_taken,owner_name,icon_server,url_m,tags,views,url_o',
    per_page: 16,
    page: page,
    format: 'json',
    nojsoncallback: 1
  })
}
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchWords: '',
    pageNum: '',
    maxPage: '',
    total: '',
    results: []
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
    }
  },
  actions: {
    searchPhoto ({ commit }, input) {
      commit('initSearch', { input })
      fetchPhotos(this.state.searchWords, this.state.pageNum)
        .then(data => {
          commit('setResults', data.photos)
        })
    },
    readMore ({ commit }) {
      commit('increment')
      fetchPhotos(this.state.searchWords, this.state.pageNum)
        .then(data => {
          commit('addResults', data.photos)
        })
    }
  },
  getters: {}
})
