export default {
    namespaced: true,
    state: {
        postData: []
    },
    mutations: {
        mtnPostData(state, n) {
            state.postData = [];
            state.postData.push(n);
        }
    },
    actions: {
        setPostData:({commit}, data) => {
            commit('mtnPostData', data);
        }
    }
}