<template>
  <div class="flex container w-full mx-auto">
    <div class="flex w-full items-center justify-evenly my-8">
      <div class="flex w-2/12 flex-col items-center" v-for="(logo, index) in logos" :key="index">
        <div
          class="bg-red-700 text-white square w-full  relative rounded-tl-xlg rounded-br-xlg mx-4"
        >
          <div
            class="flex w-full h-full absolute flex-col items-center justify-center"
          >
            <img class="h-20 w-auto m-4" :src="logo.image.url" />          
          </div>
        </div>
          <span class="font-display uppercase mt-4 text-2xl text-center">{{
              logo.title
            }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    logos: Array,
  },
};
</script>
