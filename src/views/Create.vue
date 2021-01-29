<template>
  <div class="container mx-auto">

    <h2 class="text-center font-bold text-3xl my-4 tracking-wider">Create a new Post</h2>

    <form class="flex justify-center items-center flex-col" @submit.prevent="addPost">
      <div>
        <label class="text-left text-lg font-bold mb-2 block">Title</label>
        <input class="shadow-md rounded-md bg-gray-100 p-2 mb-4 font-light" type="text" v-model="post.title" />
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
      <div>
        <label class="text-lg font-bold block">Body</label>
        <textarea class="shadow-md rounded-md bg-gray-100 p-2 font-light" cols="auto" rows="auto" v-model="post.body"></textarea>
      </div>
      <div>
        <label class="text-left text-lg font-bold mb-2 block">Link</label>
        <input class="shadow-md rounded-md bg-gray-100 p-2 mb-4 font-light" type="text" placeholder="Paste a link to the source of the info" v-model="post.link" />
      </div>
        <button type="submit" class="bg-green-300 py-2 px-36 mt-6 rounded-md shadow-md tracking-wider hover:opacity-80 transition">Publish</button>
    </form>
  </div>
</template>

<script>

export default {
  name: 'Create',
  data() {
    return {
      post: {
        title: '',
        body: '',
        link: '',
      }
    }
  },
  methods: {
    async addPost() {
        try {
          await this.$store.dispatch("postMod/setPost", this.post);
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
}
</script>