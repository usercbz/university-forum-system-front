<template>
  <div class="comment-section-wrapper">
    <div class="comment-header-wrapper">
      <div class="header-avatar-wrapper">
        <el-avatar :size="50" :src="userAvatar"></el-avatar>
      </div>
      <el-input placeholder="输入评论..." class="header-input" v-model="publishText"></el-input>
      <el-button type="primary" class="header-publish-btn" @click="onPublishBtn">发表评论</el-button>
    </div>
    <div class="comment-wrapper">
      <comment-item
        v-for="item in comments"
        :key="item.id"
        :commentData="item"
        @onReplyBtn="commentReply"
        @getReplyData="getReplyData"
      ></comment-item>
    </div>
  </div>
</template>

<script>
import CommentItem from "./CommentItem.vue";
export default {
  components: {
    CommentItem,
  },
  props:['comments','userAvatar','publishText'],
  methods:{
    commentReply(item){
        //父组件通信
    },
    getReplyData(item){
        //父组件通信
    },
    onPublishBtn(){

    }
  }
};
</script>

<style scoped>
.comment-section-wrapper {
  margin: 30px auto;
  /* 宽度 */
  width: 800px;
}
.comment-header-wrapper {
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;

  margin-bottom: 10px;
}
.header-input {
  margin-left: 10px;
  margin-right: 12px;
}
.comment-wrapper {
  padding: 20px;
  border: solid 1px #e6e6e6;
}
</style>