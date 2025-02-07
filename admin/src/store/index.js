import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";  //持久化插件
export default createStore({
  state: {
    isGetterRouter: false,
    isCollapsed: false
  },
  getters: {
  },
  mutations: {
    changeGetterRouter(state, value) {
     state.isGetterRouter = value
    },
    changeCollapsed(state, value) {
     state.isCollapsed = !state.isCollapsed
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState({
    paths: ['isCollapsed']
  })],
})
