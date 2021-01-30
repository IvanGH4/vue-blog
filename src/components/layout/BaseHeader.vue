<template>
    <header class="bg-myDark-dark">
        <nav class="container mx-auto px-6 py-2 flex justify-between items-center">
            <div>
                <img src="@/assets/imgs/logo.svg" alt="logo" />
            </div>
            <ul :class="[burger, {'scale-x-0': !isShow}, {'scale-x-1': isShow}]">
                <span class="text-2xl absolute top-10 right-10 md:hidden cursor-pointer" @click="toggleMenu">
                    <i class="fas fa-times"></i>
                </span>
                <li class="mr-2 md:mr-10 mb-6 md:mb-0">
                    <router-link to="/">Home</router-link>
                </li>
                <li class="mr-2 md:mr-10 mb-6 md:mb-0">
                    <router-link to="/posts">Posts</router-link>
                </li>
                <li class="mr-2 md:mr-10 mb-6 md:mb-0">
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
            <span class="text-white text-2xl cursor-pointer md:hidden" @click="toggleMenu">
                <i class="fas fa-bars"></i>
            </span>
        </nav>
    </header>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    name: 'BaseHeader',
    props: {
        burger: {
            type:String,
            default: 'flex items-center justify-center flex-col md:flex-row md:text-lg text-white font-light absolute top-0 left-0 z-50 bg-myDark-dark md:relative h-screen w-full md:h-auto md:w-auto transform origin-left md:transform-none transition ease-in-out duration-500'
        }
    },
    data() {
        return {
            isShow: false,
        }
    },
    methods: {
        logout() {
            this.userLogout();
        },  
        toggleMenu() {
            this.isShow = !this.isShow;
        },
        ...mapActions({
            userLogout:'userMod/setLogOut',
        })
    },
    computed: {
        ...mapState('userMod', {
            isLogin: state => state.user
        }),
    },
    watch: {
        '$route' () { //esto detecta si cambias de pagina.
            this.isShow = false;
        }
    }
}
</script>