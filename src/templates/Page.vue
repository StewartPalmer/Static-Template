<template>
  <Layout>
    <template v-if="this.$page.strapi.pages">
      <div
        v-for="(component, index) in this.$page.strapi.pages[0].components"
        :key="index"
      >
        <HeroComponent
          v-if="
            component.__typename === 'strapiTypes_ComponentComponentsHeroImage'
          "
          v-bind="component"
        ></HeroComponent>
        <LogoGridComponent
          v-if="
            component.__typename === 'strapiTypes_ComponentComponentsLogoGrid'
          "
          v-bind="component"
        />
        <FiftyFiftyComponent
          v-if="
            component.__typename ===
              'strapiTypes_ComponentComponentsFiftyFiftyComponent'
          "
          v-bind="component"
        />
        <CallToActionComponent
          v-if="
            component.__typename ===
              'strapiTypes_ComponentComponentsCallToAction'
          "
          v-bind="component"
        />
        <TestiomnalComponent
          v-if="
            component.__typename ===
              'strapiTypes_ComponentComponentsTestimonial'
          "
          v-bind="component"
        />
      </div>
    </template>
  </Layout>
</template>

<page-query>
  query ($slug: String!) {
    strapi {
      pages(where: { slug: $slug }) {
        title
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
          call_to_action {
             url
             title
         }
        
        }
        ... on strapiTypes_ComponentComponentsLogoGrid {
          __typename
          title
          logos {
            ... on strapiTypes_ComponentNestedLogo {
              image {
                url
                formats
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
        }
      
      }
       
	  }
  }
}
</page-query>

<script>
import HeroComponent from "./../components/HeroComponent";
import LogoGridComponent from "./../components/LogoGridComponent";
import FiftyFiftyComponent from "./../components/FiftyFiftyComponent";
import CallToActionComponent from "./../components/CallToActionComponent";
import TestiomnalComponent from "./../components/TestimonalComponent";

var moment = require("moment");

export default {
  data() {
    return {
      moment: moment,
    };
  },
  components: {
    HeroComponent,
    LogoGridComponent,
    FiftyFiftyComponent,
    CallToActionComponent,
    TestiomnalComponent,
  },
};
</script>
