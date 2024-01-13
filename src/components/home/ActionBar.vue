<template>
  <div class="wrapper">
    <el-button class="like-btn" style="background-color: rgb(219, 230, 241);" v-if="!isLiked" @click="handlerLike()"
      >点赞{{ likes }}</el-button
    >
    <el-button class="like-btn" type="primary" v-else @click="handlerLike()"
      >点赞{{ likes }}</el-button
    >

    <el-button class="btn" type="text" icon="el-icon-chat-round"
      >{{ comments }}条评论</el-button
    >
    <el-button
      class="btn"
      type="text"
      icon="el-icon-star-off"
      v-if="!isCollected"
      @click="handlerCollect()"
      >收藏</el-button
    >
    <el-button
      class="btn"
      type="text"
      icon="el-icon-star-on"
      v-else
      @click="handlerCollect()"
      >取消收藏</el-button
    >
  </div>
</template>

<script>
export default {
  props: {
    likes: {
      type: [Number, String],
      default: 0,
    },
    comments: {
      type: [Number, String],
      default: 0,
    },
    isLiked: {
      type: [Boolean, String],
      default: false,
    },
    isCollected: {
      type: [Boolean, String],
      default: false,
    },
  },
  methods: {
    handlerLike() {
      this.$emit("handlerLike", this.isLiked);
    },
    handlerCollect() {
      this.$emit("handlerCollect", this.isCollected);
    },
  },
};
</script>

<style scoped>
.wrapper {
  height: 50px;
  display: flex;
  align-items: center;
  margin-top: 10px;
}
.like-btn {
  width: 120px;
  height: 35px;
  margin-right: 30px;
}

.btn {
  height: 35px;
  width: 70px;
  margin-right: 30px;
  color: rgb(75, 72, 72);
  font-size: 16px;
}
</style>