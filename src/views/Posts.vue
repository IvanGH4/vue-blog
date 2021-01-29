<template>
  <div class="container mx-auto px-6">
    <div class="flex justify-center items-center flex-col">
      <h2 class="font-bold text-4xl text-myDark-light my-6">Articles</h2>
      <div class="p-4 w-1/2 h-auto border border-gray-400 rounded-sm shadow-sm mb-4" v-for="post in posts" :key="post.title">
        <h2 class="font-bold text-4xl text-center">{{post.title}}</h2>
        <p class="text-gray-600">{{post.body}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Posts',
  async mounted() {
    await this.$store.dispatch('postMod/getPosts')
  },  
  computed: {
    ...mapState('postMod', {
      posts: state => state.posts,
    })
  }
}
</script>