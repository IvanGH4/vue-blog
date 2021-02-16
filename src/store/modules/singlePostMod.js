// import { db } from '@/firebase.js'

// export default {
//     namespaced: true,
//     state: {
//         postData: []
//     },
//     mutations: {
//         mtnPostData(state, n) {
//             state.postData = [];
//             state.postData.push(n);
//         }
//     },
//     actions: {
//         setPostData:({commit}, data) => {
//             commit('mtnPostData', data);
//         },
//         // getPostDB:({commit}, id) => {
            
//         // }
//     }
// }

const state = {
    postData: []
}

const mutations = {
    mtnPostData(state, n) {
        state.postData = [];
        state.postData.push(n);
    }
}

const actions = {
    setPostData({commit}, data) {
        commit('mtnPostData', data);
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}