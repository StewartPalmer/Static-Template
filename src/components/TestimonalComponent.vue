<template>
    <div class="flex">

        <div class="container mx-auto my-16 flex flex-col relative">
            <div class="text-red-700 w-8 h-8 absolute left-0 top-0"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left" class="svg-inline--fa fa-quote-left fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path></svg></div>
            <div class="font-display text-3xl text-center my-8 mt-8" v-html="content"></div>
            <div class="text-right text-red-700 font-display text-xl mt-4 my-8">{{attribution}}</div>
           
        </div>
    </div>
</template>
<script>
export default {
    props: {
        content: String,
        attribution: String

    }
}
</script>