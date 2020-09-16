// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import vClickOutside from 'v-click-outside'

import "./assets/app.scss"

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.use(vClickOutside)
  Vue.component("Layout", DefaultLayout);

  head.link.push({
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Fira+Sans&family=Oswald:wght@300&display=swap",
  });

 
}
