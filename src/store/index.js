import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    breadcrumb: [],
    showCommentPopup: false,
    currentPosterId: 0,
    currentPosterComment: []
  },
  mutations: {
    setbreadcrumbroute(state, data){
      state.breadcrumb = data;
    },
    toogleCommentPopup(state, data){
      state.showCommentPopup = data;
    },
    changeCurrentPosterId(state, data){
      state.currentPosterId = data;
    },
    changeCurrentPosterComment(state, data){
      state.currentPosterComment = data;
    }
  },
})

export default store;
