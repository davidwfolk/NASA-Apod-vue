import Vue from 'vue'
import Vuex from 'vuex'
import { BootstrapVue } from 'bootstrap-vue'
import axios from 'axios'

Vue.use(Vuex),
Vue.use( BootstrapVue ),
Vue.use(BootstrapVue)

let _api = axios.create({ 
  baseURL:'https://api.nasa.gov/planetary/apod?api_key=bCtNFFLFAQteKVdhbaeEemDMcbgc6hvRcyCKqDeF',
  timeout: 10000
}) 
  

export default new Vuex.Store({
  state: {
    photos: []
  },
  mutations: {
    setPhotos(state, photos) {
      state.photos = photos
    }
  },
  actions: {
    async getPhotos({ commit, dispatch }) {
      try {
        let res = await _api.get("")
        console.log (res.data)
        commit('setPhotos', res.data)
      } catch (error) {
        console.error(error);
        
        
      }

    }
  },
  modules: {
  }
})
