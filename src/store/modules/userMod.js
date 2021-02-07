import { fb, auth } from "@/firebase.js";

const state = {
    user: null,
}

const mutations = {
    mtnUser(state,n){
        state.user = n;
    },
}

const actions = {
    async setUser({commit}) {
        const provider = new fb.auth.GoogleAuthProvider();
        try {
            await auth.signInWithPopup(provider);
        } catch (error) {
            console.log(error);
        } finally {
            commit('mtnUser', auth.currentUser);
            // console.log(auth.currentUser);
        }

    },
    async setLogOut({commit}) {
        try {
            await auth.signOut();
        } catch (error) {
            console.log(error);
        } finally {
            commit('mtnUser', null);
            // console.log('logged out!');
        }
    },
    setUserState(){
        return new Promise((resolve, reject)=>{
            const unsubscribe = auth.onAuthStateChanged(
                user => {
                    unsubscribe();
                    resolve(user);
                },
                ()=> {
                    reject();
                }
            )
        })
    },
}

// export default {
//     namespaced: true,
//     state: {
//         user: null,
//     },
//     mutations: {
//         mtnUser(state,n){
//             state.user = n;
//         },
//     },
//     actions: {
//         setUser:({commit}) => {
//             const provider = new fb.auth.GoogleAuthProvider();
//             auth.signInWithPopup(provider)
//             .then((result) => {
//                 commit('mtnUser', result.user);
//             })
//             .catch((error)=>{
//                 console.log(error.message);
//             })
//         },
//         setLogOut:({commit}) =>{
//             auth.signOut()
//             .then(()=>{
//                 //sign out successful
//                 commit('mtnUser', null);
//             })
//             .catch((error)=>{
//                 //error happened
//                 console.log(error.message);
//             })
//         },
//         setUserState(){
//             return new Promise((resolve, reject)=>{
//                 const unsubscribe = auth.onAuthStateChanged(
//                     user => {
//                         unsubscribe();
//                         resolve(user);
//                     },
//                     ()=> {
//                         reject();
//                     }
//                 )
//             })
//         },
//     },
//     getters:{
//        getUserName(state){
//            return state.user.displayName;
//        },
//     }
// }

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}