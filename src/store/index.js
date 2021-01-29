import Vue from 'vue'
import Vuex from 'vuex'
import userMod from '@/store/modules/userMod'
import postMod from '@/store/modules/postMod'
// import { auth } "@/firebase.js"

Vue.use(Vuex)

const store =  new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    // authState({commit}){
    //   auth.onAuthStateChanged((user)=>{
    //     user ? commit('userMod/mtnUser', user) : commit('userMod/mtnUser', null); 
    //   })
    // },
  },
  modules: {
    userMod,
    postMod
  }
})

export default store;

// store.dispatch('authState');
