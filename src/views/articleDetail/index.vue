<template>
  <div>
    文章详情页面
    {{articleId}}
  </div>

</template>

<script>
export default {
  mounted() {
    this.articleId = this.$route.query.articleId;
  },
  data() {
    return {
      articleId:''
    };
  },
};
</script>

<style scoped>
</style>