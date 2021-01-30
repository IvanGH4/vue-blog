<template>
<div>
  <div class="container mx-auto px-6 flex justify-between items-center pt-4 flex-col md:flex-row">
    <div class="sm:w-full md:w-1/2">
      <h1 class="text-center md:text-left text-4xl md:text-6xl lg:text-7xl leading-normal lg:leading-relaxed">
        The Best <br md:hidden> <span class="text-myBlue uppercase">dev</span> articles.
      </h1>
      <div class="flex items-center mt-4">
        <img class="w-10" src="@/assets/imgs/three.svg" alt="arrows" />
        <p class="text-myDark-light text-2xl ml-4">
          Create, learn, share
        </p>
      </div>
      <div class="mt-8">
        <router-link to="/posts" class="bg-myBlue-light text-white px-20 py-2 rounded-md tracking-wider hover:opacity-80 transition">
          See What's New
        </router-link>
      </div>
    </div>
    <div class="flex justify-end">
      <img class="sm:w-1/4 md:w-2/3 object-cover" src="@/assets/imgs/hero.svg" alt="hero" />
    </div>
  </div>
</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
    }
  },
  methods: {
  },
  computed: {
  }

}
</script>
