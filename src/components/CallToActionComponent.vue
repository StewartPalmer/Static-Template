<template>
    <div class="w-full bg-red-700 flex flex-col items-center justify-center">
        <div class="flex-col items-center justify-center flex mx-16 my-16">
        <h2 class="text-white font-display text-3xl uppercase">{{heading}}</h2>
        <span v-if="subHeading" class="text-white uppercase font-display text-lg">{{subHeading}}</span>

       <div class="mt-4" v-if="call_to_action">
      <a class="text-red-700 bg-white inline-block w-auto rounded-tl-xlg rounded-br-xlg" :href="call_to_action.url"><div class="mx-8 my-4 font-display uppercase">{{call_to_action.title}}</div></a>
      </div>
        </div>

    </div>
</template>
<script>
export default {
    props: {
        call_to_action: Object,
        heading: String,
        subHeading: String
    }
}
</script>