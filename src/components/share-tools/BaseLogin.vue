<template>
    <div class="flex justify-center items-center flex-col">
        <div class="rounded-md shadow-inner w-4/5 md:w-2/5 flex items-center flex-col p-6 mt-6">
            <img class="w-16" src="@/assets/imgs/search.svg" alt="google" />
            <h3 class="font-bold tracking-wider text-xl text-center md:text-left mt-2">{{introText}}</h3>
            <button class="mt-4 w-full rounded-md bg-myBlue-light py-2 md:py-4 text-base md:text-2xl text-white font-bold hover:opacity-80 transition" v-if="!isLogin" @click="login">
                Log In
            </button>
            <router-link to="/create" v-else class="bg-green-400 w-full py-2 mt-4 text-center tracking-wider rounded-md">
                Start creating posts!
            </router-link>
        </div>
        <img class="absolute bottom-0" src="@/assets/imgs/vector.svg" alt="#" />
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
    name: 'BaseLogin',
    data() {
        return {
        }
    },
    methods: {
        login() {
            this.userLogin();
        },
        ...mapActions({
            userLogin:'userMod/setUser',
        })
    },
    computed: {
        ...mapState('userMod', {
            isLogin: state => state.user
        }),
        introText() {
            return this.isLogin ? 'Welcome!' : 'Please login to create your own posts';
        }
    }
}
</script>