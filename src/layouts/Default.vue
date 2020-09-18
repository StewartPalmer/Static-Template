<template>
  <div class="layout">
    <header class="flex absolute top-0 z-50 w-full">
      <div class="mx-4 md:mx-16 my-4 md:my-8 flex w-full align-middle">
     
        <g-link to="/"><g-image class="w-2/3 md:w-full" src="~/assets/logo.png"></g-image></g-link>
    
      <div class="absolute top-0 right-0"> 
        <button class="block w-8 h-8 mt-4 mr-4 text-white md:hidden" @click="toggleMenu()"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" class="svg-inline--fa fa-bars fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg></button>
      </div>
      <div  v-click-outside="closeMenu" class="bg-red-700 md:bg-transparent md:ml-auto fixed top-0 right-0 md:right-auto md:top-auto md:relative h-screen md:h-auto flex w-4/5 md:w-auto transform  transition-all duration-500 ease-in-out" :class="{'translate-x-0': isOpen, 'translate-x-full md:translate-x-0': !isOpen}">
      <nav class="flex flex-col md:flex-row mx-4 my-4 md:ml-auto ">
        <g-link class="text-white font-display text-lg uppercase mr-4 mb-4 md:mb-0" exact-active-class="md:text-red-700" to="/">Home</g-link>
        <g-link class="text-white font-display text-lg uppercase mr-4 mb-4 md:mb-0" active-class="md:text-red-700" :to="`/${page.slug}`" v-for="(page,index) in $static.strapi.pages" :key="index">{{page.title}}</g-link>
      </nav>
      </div>
      </div>
    </header> 
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  },
  strapi {
        pages {
          slug
          title
        }
        
      }
}
</static-query>
<script>
export default {
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    toggleMenu() {
this.isOpen = !this.isOpen
    },
    closeMenu(){
     
      this.isOpen = false;
    }
   }
}
</script>


