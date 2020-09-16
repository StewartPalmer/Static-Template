<template>
<div class="flex flex-col" :class="{'md:flex-row-reverse': reverse, 'md:flex-row': !reverse }">
     <div class="flex w-full md:w-1/2 items-center">
        <div
          class="square w-full  relative"
        >
          <div
            class="flex w-full h-full absolute flex-col items-center justify-center"
          >
            <img class="w-full h-full object-cover" :src="image.url" />          
          </div>
        </div>
          
      </div>
      <div class="flex w-full md:w-1/2 items-center justify-center">
      <div class="m-4 md:mx-16 md:my-16 w-full">
        <VueMarkdown class="richtext" :source="content" id="editor" />
        </div>
      </div>
</div>
    
</template>

<script>
import VueMarkdown from "vue-markdown";

export default {
    components: {
VueMarkdown
    },
    props: {
        image: Object,
        content: String,
        reverse: Boolean,
    }
    
}
</script>