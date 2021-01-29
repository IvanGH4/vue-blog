import { db } from "@/firebase.js";

export default {
    namespaced: true,
    state: {
        posts: [],
    },
    mutations: {
        mtnPosts(state, n) {
            state.posts = n;
        }
    },
    actions: {
        setPost:({dispatch}, data) => {
            db.collection('posts').add(data)
            .then(() => {
                dispatch('getPosts')
            })
            .catch((err) => {
                console.log(err);
            })
        },
        getPosts:({commit}) => {
            db.collection('posts').onSnapshot((query) => {
                let posts = query.docs.map(doc => doc.data())
                commit('mtnPosts', posts);
            });
        },
    },
    getters:{
    }
}