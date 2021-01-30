import { db, storage } from "@/firebase.js";

export default {
    namespaced: true,
    state: {
        posts: [],
        // imgs: []
    },
    mutations: {
        mtnPosts(state, n) {
            state.posts = n;
        },
        // mtnImgs(state, n) {
        //     state.imgs.push(n);
        // }
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
                for(let i in posts) {
                    if(posts[i].image !== null) {
                        const ref = storage.ref();
                        ref.child((`imagenes/${posts[i].image}`)).getDownloadURL()
                        .then((url) => {
                            posts[i].imageUrl = url;
                        })
                    }
                }
                commit('mtnPosts', posts);
                // console.log(posts);
            });
        },
        // getImg:({commit}, n) => {
        //     let ref = storage.ref();
        //     ref.child((`imagenes/${n}`)).getDownloadURL()
        //     .then((url) => {
        //         commit('mtnImgs', url);
        //         // this.images.push(url)
        //         // console.log(url);
        //         // console.log(this.images);
        //     });
        // }
    },
    getters:{
    }
}