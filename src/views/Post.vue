<template>
<div class="container mx-auto px-6">
    <div class="flex justify-center items-center">
        <div class="p-8 w-full md:w-1/2 h-auto border border-gray-400 rounded-sm shadow-md mt-4 relative" v-for="item in info" :key="item.user">
            <h2 class="font-bold text-3xl text-center mb-4">{{item.title}}</h2>
            <div class="flex justify-center" v-if="item.image.length > 0">
                <img class="w-full md:w-2/4 rounded-md" :src="item.image" alt="#" />
            </div>
            <span class="absolute top-0 right-0 px-4 bg-myBlue-light text-white font-bold tracking-wider rounded-bl-xl">{{item.category}}</span>
            <p class="text-gray-600 my-2">{{item.body}}</p>
            <a :href="item.link" target="_blank" class="text-sm text-myBlue-light" v-if="item.link.length > 0">Visit site</a>
            <div class="flex justify-center items-end flex-col">
                <div class="flex items-end">
                <img class="w-10 h-10 rounded-full mr-1" :src="item.userPic" alt="#" v-if="item.userPic" />
                <small class="font-light text-gray-500">{{item.user}}</small> 
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'Post',
    mounted() {
        console.log(this.info);
    },
    methods: {
    },
    computed: {
        ...mapState('singlePostMod', {
            info: state => state.postData
        })
    }
}
</script>