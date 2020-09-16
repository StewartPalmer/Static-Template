<template>
  <Layout>
    <div class="uk-section">
      <div class="uk-container uk-container-large">
        <!-- <ArticleCard :articles="$page.strapi.articles" /> -->
      </div>
    </div>
  </Layout>
</template>

<page-query>

</page-query>

<script>
import ArticleCard from "~/components/ArticleCard";

export default {
  components: {
    ArticleCard,
  },
  metaInfo() {
    return {
       //title: this.$page.strapi.homepage.seo.metatitle,
    };
  },
};
</script>
