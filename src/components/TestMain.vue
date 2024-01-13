<template>
  <div>
    <my-article-item :article="article"></my-article-item>
  </div>
</template>

<script>
import MyArticleItem from './user/MyArticleItem.vue';

export default {
  components:{
    MyArticleItem
  },
  data() {
    return {
      article:{
        image:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        datetime: "2024-1-11",
        title:"这是一个标题"
      },
    };
  },

  methods: {
    handleStatus() {
      
    },
  },
};
</script>

<style scoped>

</style>