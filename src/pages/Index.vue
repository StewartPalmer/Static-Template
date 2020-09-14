<template>
  <Layout>
    <div v-for="(component, index) in this.$page.strapi.homePage.components" :key="index">  
      <HeroComponent v-if="component.__typename === 'strapiTypes_ComponentComponentsHeroImage'" v-bind="component"></HeroComponent>
    </div>
  </Layout>
</template>
<page-query>
   query { 
       strapi {
      homePage {
      id,
      components {
... on strapiTypes_ComponentComponentsHeroImage {
  __typename,
  preTitle,
  title,
  subTitle,
  background { url},
  link
}
      },
        seo {
      ... on strapiTypes_ComponentSharedSeo  {        
        metatitle,
        metaDescription,
        shareImage{
          url
        }
      }
      }
      } 
       }
  }
</page-query>
<script>
import HeroComponent from "./../components/HeroComponent";
export default {
  components: {
    HeroComponent
  },
  metaInfo() {
    console.log(this);
    return {
      title: this.$page.strapi.homePage.seo.metatitle,
    };
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
