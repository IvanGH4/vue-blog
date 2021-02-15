<template>
  <div class="container mx-auto px-6">
    <div class="flex justify-center items-center flex-col">
      <h2 class="font-bold text-4xl text-myDark-light my-6 tracking-widest">Articles</h2>
      <input type="text" @change="filteredPosts" class="shadow-inner rounded-xl px-4 py-2  mb-2" placeholder="Search by category" v-model="searchTerm" />

      <div class="p-4 w-full md:w-1/2 h-auto border border-gray-400 rounded-sm shadow-md mb-4 relative" v-for="(post, idx) in filteredPosts" :key="idx">
      <span class="absolute top-0 right-0 px-4 bg-myBlue-light text-white font-bold tracking-wider rounded-bl-xl">{{post.category}}</span>
      <router-link to="/post">
        <div class="flex justify-between items-center">
          <img class="w-full md:w-20 rounded-md" :src="post.imageUrl" alt="#" v-if="!loading" />
          <h2 class="text-xl font-semibold ml-5">{{post.title}}</h2>
          <div class="flex justify-end items-end">
            <img class="w-10 h-10 rounded-full mr-1" :src="post.photoUrl" alt="#" />
            <small class="font-light text-gray-500">{{post.displayName}}</small> 
          </div>
        </div>
        <div class="flex justify-end">
          <button class="py-2 px-4 bg-myBlue-light text-white rounded-lg hover:opacity-80 transition duration-300" @click="setPost({title: post.title, body: post.body, image: post.imageUrl, user: post.displayName, userPic: post.photoUrl, category: post.category, link: post.link})">Read</button>
        </div>
      </router-link>
        <!-- <h2 class="font-bold text-3xl text-center mb-4">{{post.title}}</h2>
        <div class="flex justify-center" v-if="post.imageUrl.length > 0">
          <div class="spinner w-12 h-12 rounded-full border-2 border-dashed border-green-500" v-if="loading"></div>
          <img class="w-full md:w-2/4 rounded-md" :src="post.imageUrl" alt="#" v-if="!loading" />
        </div>
        <span class="absolute top-0 right-0 px-4 bg-myBlue-light text-white font-bold tracking-wider rounded-bl-xl">{{post.category}}</span>
        <p class="text-gray-600 my-2">{{post.body}}</p>
        <a :href="post.link" target="_blank" class="text-sm text-myBlue-light" v-if="post.link.length > 0">Visit site</a>
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
        </div> -->

      </div>

    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
// import { storage } from '@/firebase.js'
// const ref = storage.ref();

export default {
  name: 'Posts',
  data() {
    return {
      searchTerm: '',
      loading: true,
      // filtered: [],
    }
  },
  async mounted() {
    await this.$store.dispatch('postMod/getPosts');
    setTimeout(() => {
      this.searchTerm = 'v';
      this.searchTerm = '';
      this.loading = false;
    }, 3000);
  },  
  methods: {
    // chargeImg(n) {
    //   // ref.child('imagenes/')
    //   //   .listAll()
    //   //   .then((res) => {
    //   //       console.log(res);
    //   //       res._delegate.items.map((item) => {
    //   //           ref.child(item._location.path_)
    //   //           .getDownloadURL()
    //   //           .then((url) => {
    //   //               this.images.push(url);
    //   //               console.log(this.images);
    //   //           })
    //   //       })
    //   //   })
    //   ref.child((`imagenes/${n}`)).getDownloadURL()
    //     .then((url) => {
    //         this.images.push(`{${n}: ${url}}`)
    //     })
    // },
    setPost(data) {
      console.log(data);
      this.$store.dispatch('singlePostMod/setPostData', data);
    }
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