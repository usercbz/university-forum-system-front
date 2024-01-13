<template>
  <div class="article-item-wrapper">
    <el-card :body-style="{ padding: '0px' }">
      <el-image
        class="image on-click"
        :src="article.image"
        :fit="fit"
      ></el-image>
      <div class="title">
        <h5 class="on-click">{{ article.title }}</h5>
      </div>
      <slot name="bottom"></slot>
    </el-card>
  </div>
</template>
  
  <script>
export default {
  props: ["article"],
  data() {
    return {
      fit: "cover",
    };
  },
  methods: {
    handleStatus() {},
  },
};
</script>
  
  <style scoped>
.article-item-wrapper {
  width: 210px;
  height: 190px;
}
.article-item-wrapper .image {
  width: 100%;
  height: 120px;
  display: block;
}
.article-item-wrapper .title {
  height: 36px;
  margin-top: 5px;
  padding: 0 10px;
}

.article-item-wrapper .title h5 {
  word-break: break-all;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.on-click:hover {
  cursor: pointer;
}
</style>