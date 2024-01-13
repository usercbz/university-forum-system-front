<template>
  <div>
    <el-empty
      v-if="data == null || data.length == 0"
      description="没有内容"
    ></el-empty>
    <ul
      class="list"
      v-infinite-scroll="load"
      infinite-scroll-disabled="disabled"
      infinite-scroll-distance="10"
      v-else
    >
      <li v-for="article in data" :key="article.id">
        <el-card :body-style="{ paddingBottom: '3px' }">
          <div>
            <el-link @click="toArticleDetail(article.id)">
              <h3>{{ article.title }}</h3>
            </el-link>
          </div>
          <div class="row" v-if="article.imageUrl">
            <div>
              <el-image :src="article.imageUrl" class="image"></el-image>
            </div>
            <div class="image-text">
              <p>{{ article.text }}</p>
            </div>
          </div>
          <div v-else>
            <div class="text">
              <p>{{ article.text }}</p>
            </div>
          </div>
          <action-bar
            :likes="article.likes"
            :comments="article.comments"
            :isCollected="article.isCollected"
            :isLiked="article.isLiked"
          ></action-bar>
        </el-card>
      </li>
    </ul>

    <p v-if="disabled" class="loading-text">加载中...</p>
  </div>
</template>

<script>
import ActionBar from "./ActionBar.vue";
export default {
  props: ["data", "disabled"],
  components: {
    ActionBar,
  },
  data() {
    return {
      test: true,
    };
  },
  methods: {
    toArticleDetail(articleId) {
      //传递数据、跳转到详细页面
      this.$router.push({
        path: "/articleDetail",
        query: {
          articleId: articleId,
        },
      });
    },
    load() {
      this.$emit("loadMethod");
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}

.list {
  list-style-type: none;
  height: 650px;
  overflow-y: auto;
}
h3 {
  color: #000;
}
.row {
  display: flex;
}
.image-text p {
  word-break: break-all;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  font-size: 14px;

  margin-left: 3px;
  margin-top: 6px;
}
.text p {
  word-break: break-all;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 14px;
}
.image {
  width: 100px;
  height: 80px;
  margin-top: 3px;
}
.loading-text {
  width: 200px;
  margin: 0 auto;

  text-align: center;
}
.el-card{
  border-radius: 0;
  border-top: 0;
  border-left: 0;
  border-right: 0;
}
</style>