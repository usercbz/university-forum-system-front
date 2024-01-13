<template>
  <div class="my-article-item-wrapper">
    <article-card-item :article="article">
      <template #bottom>
        <div class="bottom">
          <span class="time">{{ article.datetime }}</span>
          <div class="tag">
            <span class="on-click">
              <el-tag size="mini">编辑</el-tag>
            </span>
            <span class="on-click sold-out" @click="handleStatus"
              ><el-tag size="mini" type="warning">下架</el-tag>
            </span>
            <span class="on-click delete"
              ><el-tag size="mini" type="danger">删除</el-tag>
            </span>
          </div>
        </div>
      </template>
    </article-card-item>
  </div>
</template>

<script>
import ArticleCardItem from "./ArticleCardItem.vue";
export default {
  props: ["article"],
  components: {
    ArticleCardItem,
  },
  methods: {
    handleStatus() {},
  },
};
</script>

<style scoped>
.my-article-item-wrapper .bottom {
  padding: 0 8px;
  margin-bottom: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.my-article-item-wrapper .bottom .time {
  font-size: 13px;
  color: rgb(115, 112, 112);
}
.my-article-item-wrapper .bottom .sold-out {
  margin: 0 8px;
}
.my-article-item-wrapper .bottom .on-click:hover {
  cursor: pointer;
}
</style>