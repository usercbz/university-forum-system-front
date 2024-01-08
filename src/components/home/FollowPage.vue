<template>
  <div class="wrapper">
    <div class="left">
      <article-list
        :data="articleData"
        @loadMethod="load"
        :disabled="loading"
      ></article-list>
    </div>

    <div class="right">
      <hot-list :data="hotData"></hot-list>
      <div class="creative-center-wrapper">
        <creative-center></creative-center>
      </div>
    </div>
  </div>
</template>
  
  <script>
import ArticleList from "@/components/ArticleList.vue";
import HotList from "@/components/HotList.vue";
import CreativeCenter from "../CreativeCenter.vue";
export default {
  components: {
    ArticleList,
    HotList,
    CreativeCenter,
  },
  mounted() {
    // 初始化
    //后端加载数据articleData、热点数据hotArticle
  },
  data() {
    return {
      articleData: [],
      hotData: [
        {
          id: 1,
          title: "Java为什么这么火,还能火多久？",
          text: "Java 是由 Sun Microsystems 公司于 1995 年 5 月推出的高级程序设计语言。Java 可运行于多个平台，如 Windows, Mac OS 及其他多种 UNIX 版本的系统。本教程通过简单的实例将让大家更好的了解 Java 编程语言。移动操作系统 Android 大部分的代码采用 Java 编程语言编程。移动操作系统 Android 大部分的代码采用 Java 编程语言编程。",
          likes: 320,
          isLiked: true,
          comments: 28,
          isCollected: false,
        },
        {
          id: 2,
          title: "大数据现在面临的挑战有哪些？",
          text: "大数据(big data)，或称巨量资料，指的是所涉及的资料量规模巨大到无法透过主流软件工具，在合理时间内达到撷取、管理、处理、并整理成为帮助企业经营决策更积极目的的资讯。大数据(big data)，或称巨量资料，指的是所涉及的资料量规模巨大到无法透过主流软件工具，在合理时间内达到撷取、管理、处理、并整理成为帮助企业经营决策更积极目的的资讯。",
          imageUrl:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          likes: 3100,
          isLiked: false,
          comments: 290,
          isCollected: true,
        },
        {
          id: 3,
          title: "Java为什么这么火,还能火多久？",
          text: "Java 是由 Sun Microsystems 公司于 1995 年 5 月推出的高级程序设计语言。Java 可运行于多个平台，如 Windows, Mac OS 及其他多种 UNIX 版本的系统。本教程通过简单的实例将让大家更好的了解 Java 编程语言。移动操作系统 Android 大部分的代码采用 Java 编程语言编程。移动操作系统 Android 大部分的代码采用 Java 编程语言编程。",
          likes: 320,
          isLiked: true,
          comments: 28,
          isCollected: false,
        },
      ],
      loading: false,
    };
  },
  methods: {
    load() {},
  },
};
</script>
  
  <style scoped>
.wrapper {
  display: flex;
  margin: 5px auto;
  width: 1200px;
}
.left {
  flex: 2;
  margin-right: 10px;
}

.right {
  flex: 1;
}
.creative-center-wrapper {
  margin-top: 10px;
}
</style>