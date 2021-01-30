<template>
  <div class="container mx-auto">

    <h2 class="text-center font-bold text-3xl my-4 tracking-wider">Create a new Post</h2>

    <form class="px-20 md:px-60" @submit.prevent="addPost"> <!--flex justify-center items-center flex-col -->
      <div>
        <label class="text-left text-lg font-bold mb-2 block">Title</label>
        <input class="shadow-md rounded-md bg-gray-100 p-2 mb-4 font-light w-full" type="text" v-model="postData.title" />
      </div>
      

      <!-- <div>
        <label class="text-left text-lg font-bold mb-2">Category</label>
        <div class="flex items-center">
          <small class="mr-2 font-light">Vue</small>
          <input type="checkbox" />
        </div>
        <div class="flex items-center">
          <small class="mr-2 font-light">JavaScript</small>
          <input type="checkbox" />
        </div>
        <div class="flex items-center">
          <small class="mr-2 font-light">CSS</small>
          <input type="checkbox" />
        </div>
        <div class="flex items-center">
          <small class="mr-2 font-light">Other</small>
          <input type="checkbox" />
        </div>
      </div> -->
      <div class="mb-2">
        <label class="text-lg font-bold block">Body</label>
        <textarea class="w-full shadow-md rounded-md bg-gray-100 p-2 font-light" cols="auto" rows="auto" v-model="postData.body"></textarea>
      </div>
      <div class="mb-2">
        <label class="text-lg font-bold block">Category</label>
        <input class="w-full shadow-md rounded-md bg-gray-100 p-2 mb-4 font-light" type="text" placeholder="Vue, Javascript, Css, Scss, Bootstrap, etc" v-model="postData.category" />
      </div>
      <div class="mb-2">
        <label class="text-lg font-bold block">Upload an image</label>
        <input class="bg-gray-100 shadow-md rounded-md p-2 w-full" type="file" accept="image/" @change="saveImg($event)" />
      </div>
      <div>
        <label class="text-left text-lg font-bold mb-2 block">Link</label>
        <input class="w-full shadow-md rounded-md bg-gray-100 p-2 mb-4 font-light" type="text" placeholder="Paste a link to the source of the info" v-model="postData.link" />
      </div>
        <button type="submit" class="w-full bg-green-300 py-2 mt-6 rounded-md shadow-md tracking-wider hover:opacity-80 transition">Publish</button>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { storage } from '@/firebase.js'
const ref = storage.ref();
export default {
  name: 'Create',
  data() {
    return {
      postData: {
        title: '',
        body: '',
        link: '',
        category: '',
        image: null
      },
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    }
  },
  methods: {
    async addPost() {
      if(!this.user) {
        this.$toasted.show('Please login first', {
          type: 'danger',
          fullWidth: true,
          duration: 2000,
          position: 'bottom-center'
        })
      }
      if(this.user) {
        try {
          const date = new Date();
          await this.$store.dispatch("postMod/setPost", {
            'title': this.postData.title,
            'body': this.postData.body,
            'link': this.postData.link,
            'category': this.postData.category,
            'displayName': this.user.displayName,
            'photoUrl': this.user.photoURL,
            'image': this.postData.image.name,
            'created': {
              'day': date.getDate(),
              'month': this.months[date.getMonth()],
              'hour': date.getHours(),
              'minute': date.getMinutes(),
              'year': date.getFullYear(),
            }
          });
          this.uploadImg();
        } catch (error) {
          console.log(error);
        } finally {
          this.$toasted.show('Post added succesfully', {
            type: 'success',
            fullWidth: true,
            duration: 2000,
            position: 'bottom-center'
          })
        }
      }
    },
    saveImg(e) {
      this.postData.image = e.target.files[0];
    },
    uploadImg() {
      const refImg = ref.child('imagenes/'+this.postData.image.name)
      const metaData = { contentType: 'img/jpeg' }
      refImg.put(this.postData.image, metaData)
      .then( e => console.log(e))
    }
  },
  computed: {
    ...mapState('userMod', {
      user: state => state.user
    }),
  }
}
</script>