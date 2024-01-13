<template>
  <el-card class="my-article-card">
    <div slot="header" class="header">
      <h5>我的文章</h5>

      <el-input
        placeholder="输入关键字"
        size="small"
        v-model="searchText"
        class="search-input"
      >
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>
    <ul
      class="article-list-wrapper"
      v-if="myArticleList.length != 0"
      v-infinite-scroll="load"
      infinite-scroll-disabled="disabled"
      infinite-scroll-distance="5"
    >
      <li
        v-for="(item, index) in myArticleList"
        :key="index"
        class="article-item-wrapper"
      >
        <my-article-item :article="item"></my-article-item>
      </li>
    </ul>
    <el-empty description="文章为空" v-else></el-empty>
  </el-card>
</template>

<script>
import MyArticleItem from "./MyArticleItem.vue";
export default {
  mounted() {
    //获取文章信息
  },
  components: {
    MyArticleItem,
  },
  data() {
    return {
      searchText: "",
      myArticleList: [
        {
          image:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          datetime: "2024-1-11",
          title: "这是一个标题",
        },
        {
          image:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          datetime: "2024-1-11",
          title: "这是一个标题",
        },
        {
          image:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          datetime: "2024-1-11",
          title: "这是一个标题",
        },
      ],
      noMore: false,
      loading: false,
      
    };
  },
  methods: {
    load() {
      if (this.myArticleList.length > 12) {
        this.noMore = true;
        return;
      }
      this.loading = true;
      setTimeout(() => {
        this.myArticleList.push(
          {
            image:
              "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
            datetime: "2024-1-11",
            title: "这是一个标题",
          },
          {
            image:
              "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
            datetime: "2024-1-11",
            title: "这是一个标题",
          },
          {
            image:
              "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
            datetime: "2024-1-11",
            title: "这是一个标题",
          }
        );
        this.loading = false;
      }, 200);
    },
  },
  computed: {
    disabled() {
      return this.noMore || this.loading;
    },
  },
};
</script>

<style scoped>
.my-article-card >>> .el-card__header{
  padding: 10px 20px;
}
.my-article-card >>> .el-card__body {
  padding: 0;
}
.my-article-card .header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.my-article-card .header .search-input{
  width: 300px;
}
.my-article-card .article-list-wrapper {
  overflow-y: auto;
  height: 430px;
  display: flex;
  list-style-type: none;
  flex-wrap: wrap;
  align-content: flex-start;
}
.my-article-card .article-list-wrapper .article-item-wrapper {
  margin: 10px 12px;
}
</style>