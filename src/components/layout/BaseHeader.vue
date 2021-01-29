<template>
    <header class="bg-myDark-dark">
        <nav class="container mx-auto px-6 py-2 flex justify-between items-center">
            <div>
                <img src="@/assets/imgs/logo.svg" alt="logo" />
            </div>
            <ul class="flex items-center md:text-lg text-white font-light">
                <li class="sm:mr-2 md:mr-10">
                    <router-link to="/">Home</router-link>
                </li>
                <li class="sm:mr-2 md:mr-10">
                    <router-link to="/posts">Posts</router-link>
                </li>
                <li class="sm:mr-2 md:mr-10">
                    <router-link to="/create">Create</router-link>
                </li>
                <li v-if="!isLogin">
                    <router-link to="/login" class="bg-myBlue px-6 py-1.5 rounded-3xl font-bold hover:opacity-90 transition">
                        Sign Up
                    </router-link>
                </li>
                <li v-if="isLogin">
                    <button @click="logout">
                        <i class="fas fa-sign-out-alt"></i>
                    </button>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    name: 'BaseHeader',
    data() {
        return {
        }
    },
    methods: {
        logout() {
            this.userLogout();
        },  
        ...mapActions({
            userLogout:'userMod/setLogOut',
        })
    },
    computed: {
        ...mapState('userMod', {
            isLogin: state => state.user
        }),
    }
}
</script>