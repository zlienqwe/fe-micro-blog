import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    breadcrumb: []
  },
  mutations: {
    setbreadcrumbroute(state, data){
      state.breadcrumb = data;
    },
  },
})

export default store;
