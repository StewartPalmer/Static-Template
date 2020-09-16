<template>
  <Layout>
    <div v-for="(component, index) in this.$page.strapi.homePage.components" :key="index">  
      <HeroComponent v-if="component.__typename === 'strapiTypes_ComponentComponentsHeroImage'" v-bind="component"></HeroComponent>
      <LogoGridComponent  v-if="component.__typename === 'strapiTypes_ComponentComponentsLogoGrid'" v-bind="component"/>
        <FiftyFiftyComponent  v-if="component.__typename === 'strapiTypes_ComponentComponentsFiftyFiftyComponent'" v-bind="component"/>
        <CallToActionComponent v-if="component.__typename === 'strapiTypes_ComponentComponentsCallToAction'" v-bind="component"/>
        <TestiomnalComponent v-if="component.__typename === 'strapiTypes_ComponentComponentsTestimonial'" v-bind="component"/>
    </div>
  </Layout>
</template>
<page-query>
# Write your query or mutation here
query {
  strapi {
    homePage {
      id
      components {
        ... on strapiTypes_ComponentComponentsHeroImage {
          __typename
          preTitle
          title
          subTitle
          small
          background {
            url 
          }
          link
        }
        ... on strapiTypes_ComponentComponentsLogoGrid {
          __typename
          title
          background_color
          logos {
            ... on strapiTypes_ComponentNestedLogo {
              image {
                url
              }
              title
              url
            }
          }
        }
        ... on strapiTypes_ComponentComponentsFiftyFiftyComponent {
          __typename        
          image {
              url
          }
          content
          reverse
        }

        ... on strapiTypes_ComponentComponentsCallToAction {
          __typename          
          heading
          subHeading
           call_to_action {
             url
             title
         }
        }
        
        ... on strapiTypes_ComponentComponentsTestimonial {
          __typename
          content
          attribution
          reverse
        }
      
      }
      seo {
        ... on strapiTypes_ComponentSharedSeo {
          metatitle
          metaDescription
          shareImage {
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
import LogoGridComponent from "./../components/LogoGridComponent"
import FiftyFiftyComponent from "./../components/FiftyFiftyComponent"
import CallToActionComponent from "./../components/CallToActionComponent"
import TestiomnalComponent from "./../components/TestimonalComponent"

export default {
  components: {
    HeroComponent,
    LogoGridComponent,
    FiftyFiftyComponent,
    CallToActionComponent,
    TestiomnalComponent
  },
  metaInfo() {
   
    return {
     // title: this.$page.strapi.homePage.seo.metatitle,
    };
  },
};
</script>

<style>

</style>
