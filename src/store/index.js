import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  default: 0,
  userCount: 0
}
const mutations = {
}
const getters = {
}
export default new Vuex.Store({
  state,
  mutations,
  getters
})
