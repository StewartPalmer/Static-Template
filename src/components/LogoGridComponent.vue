<template>
<div class="flex flex-wrap" :class="{ 'bg-red-700':background_color}">
  <div class="flex container w-full md:mx-auto justify-center flex-col items-center my-8">
       <h2 v-if="title" class="center font-display text-3xl uppercase" :class="{ 'text-white':background_color }">{{title}}</h2>
    <div class="flex mx-4 w-full items-start justify-evenly  flex-row my-4 flex-wrap">
   
      <div class="flex w-1/2 md:w-2/12 flex-col items-center p-4" v-for="(logo, index) in logos" :key="index">
        <div
          class="bg-red-700 text-white square w-full  relative rounded-tl-xlg rounded-br-xlg"
        >
          <div
            class="flex w-full h-full absolute flex-col items-center justify-center "
          >
          <div class="flex h-full w-full items-center justify-center p-8">
            <img class="w-full h-full flex object-scale-down" :src="logo.image.url" />     
            </div>     
          </div>
        </div>
          <span class="font-display uppercase mt-4  text-lg md:text-2xl text-center">{{
              logo.title
            }}</span>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    logos: Array,
    background_color: Boolean
  },
};
</script>
