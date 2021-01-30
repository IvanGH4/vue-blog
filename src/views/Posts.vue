<template>
  <div class="container mx-auto px-6">
    <div class="flex justify-center items-center flex-col">
      <h2 class="font-bold text-4xl text-myDark-light my-6 tracking-widest">Articles</h2>
      <input type="text" @change="filteredPosts" class="shadow-inner rounded-xl px-4 py-2  mb-2" placeholder="Search by category" v-model="searchTerm" />

      <div class="p-4 w-full md:w-1/2 h-auto border border-gray-400 rounded-sm shadow-md mb-4 relative" v-for="(post, idx) in filteredPosts" :key="idx">
        <h2 class="font-bold text-4xl text-center mb-4">{{post.title}}</h2>
        <span class="absolute top-0 right-0 px-4 bg-myBlue-light text-white font-bold tracking-wider rounded-bl-xl">{{post.category}}</span>
        <p class="text-gray-600 mb-2">{{post.body}}</p>
        <a :href="post.link" target="_blank" class="text-sm text-myBlue-light">More info</a>
        <div class="flex justify-center items-end flex-col">
          <div class="flex items-end">
            <img class="w-10 h-10 rounded-full mr-1" :src="post.photoUrl" alt="#" />
            <small class="font-light text-gray-500">{{post.displayName}}</small> 
          </div>
          <div>
            <small class="text-gray-400 italic text-xs">
              {{post.created.month}}, {{post.created.day}}, {{post.created.year}} . {{post.created.hour}}:{{post.created.minute}}
            </small>
          </div>
        </div>
        <button @click="chargeImg(post.image)">Show Image</button>
        <div>
          <img :src="images[idx]" alt="#" />
        </div>
        <!-- {{images[idx]}} -->

      </div>

    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { storage } from '@/firebase.js'
const ref = storage.ref();

export default {
  name: 'Posts',
  data() {
    return {
      searchTerm: '',
      images: [],
      img: null,
      // filtered: [],
    }
  },
  async mounted() {
    if(this.posts) {
      try {
        await this.$store.dispatch('postMod/getPosts');
      } catch (error) {
        console.log(error);
      }
    }
  },  
  methods: {
    chargeImg(n) {
      // ref.child('imagenes/')
      //   .listAll()
      //   .then((res) => {
      //       console.log(res);
      //       res._delegate.items.map((item) => {
      //           ref.child(item._location.path_)
      //           .getDownloadURL()
      //           .then((url) => {
      //               this.images.push(url);
      //               console.log(this.images);
      //           })
      //       })
      //   })
      ref.child((`imagenes/${n}`)).getDownloadURL()
        .then((url) => {
            this.images.push(url)
            // console.log(url);
            // console.log(this.images);
        })
    },
  }, 
  computed: {
    filteredPosts() {
      return this.posts.filter(post => {
        return post.category.toLowerCase().includes(this.searchTerm.toLowerCase())
      })
    },
    ...mapState('postMod', {
      posts: state => state.posts,
    }),
  }
}
</script>