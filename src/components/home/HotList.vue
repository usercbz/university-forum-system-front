<template>
  <el-card class="hot">
    <div slot="header">
      <span><h3>论坛热点</h3></span>
    </div>
    <div v-for="article in data" :key="article.id">
      <el-link class="link" @click="toArticleDetail(article.id)">
        <h4>{{ article.title }}</h4>
      </el-link>
    </div>
  </el-card>
</template>
<script>
export default {
  props: ["data"],
  methods: {
    toArticleDetail(articleId) {
      //传递数据、跳转到详细页面
      this.$router.push({
        path:'/articleDetail',
        query:{
          articleId:articleId
        }
      });
    },
  },
};
</script>

<style scoped>
.hot {
  height: 400px;
}
.link {
  margin-bottom: 13px;
}
</style>