<template>
  <Layout>
    <div class="uk-section">
      <div class="uk-container uk-container-large">
        <ArticleCard :articles="$page.strapi.articles" />
      </div>
    </div>
  </Layout>
</template>

<page-query>
   query { 
       strapi {
      homePage {
      id,
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
import Articles from "~/components/ArticleCard";

export default {
  components: {
    ArticleCard,
  },
  metaInfo() {
    return {
       title: this.$page.strapi.homepage.seo.metatitle,
    };
  },
};
</script>
