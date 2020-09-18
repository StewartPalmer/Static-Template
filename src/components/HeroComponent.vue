<template>
  <div class="w-full bg-green-100 relative flex items-center" :class="{'h-screen' : !small}">
    <g-image 
      :src="background.url" 
      class="absolute top-0 left-0 w-full h-full object-cover"
    />
    <div
      class="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-25"
    ></div>
    <div
      class="absolute top-0 right-0 w-3/6 h-full bg-red-600 opacity-25"
    ></div>
    <div class="flex flex-col text-white z-10 ml-16 my-32">
      <span>{{ preTitle }}</span>
      <h1 v-html="title" class="font-display text-2xl sm:text-4xl md:text-6xl uppercase font-light"></h1>
      <span class="font-display text-lg sm:text-xl md:text-2xl uppercase">{{ subTitle }}</span>
<div class="mt-4">
      <a  v-if="call_to_action" class="bg-red-700 inline-block w-auto rounded-tl-xlg rounded-br-xlg" :href="call_to_action.url"><div class="mx-8 my-4 font-display uppercase">{{call_to_action.title}}</div></a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HeroComponent",
  props: {
    preTitle: String,
    title: String,
    background: Object,
    subTitle: String,
    call_to_action: Object,
    small: Boolean
  },
};
</script>
