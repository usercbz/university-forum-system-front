<template>
  <div class="wrapper">
    <div class="comment-header-wrapper">
      <div class="header-avatar-wrapper">
        <el-avatar :size="50" :src="user.avatar"></el-avatar>
      </div>
      <el-input placeholder="输入评论..." class="header-input"></el-input>
      <el-button type="primary" class="header-publish-btn">发表评论</el-button>
    </div>
    <div class="comment-wrapper">
      <comment-item
        v-for="item in list"
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
import { mapState } from "vuex";
export default {
  components: {
    CommentItem,
  },
  data() {
    return {
      list: [
        {
          id: 1,
          avatar:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          username: "Lana Del Rey",
          time: "2023-11-11 18:30",
          commentNum: 2,
          likeNum: 1,
          content: "我发布了新的专辑NOmocjochwncmow,大家快来听呀",
          replies: [],
          showInput: false,
        },
        {
          id: 2,
          avatar:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          username: "Lana Del Rey",
          time: "2023-11-11 18:30",
          commentNum: 2,
          likeNum: 3,
          content: "我发布了新的专辑,大家快来听呀",
          replies: [],
          showInput: false,
        },
      ],
    };
  },
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    commentReply(item) {
      this.$message.success(item.replyText);
    },
    getReplyData(item) {
      item.replies = [
        {
          id: 1,
          avatar:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          username: "米凯拉",
          time: "2023-11-11 18:30",
          likeNum: 1,
          content:
            "我发布了新的专辑NOmocjochwncmow,大家快来听呀我发布了新的专辑,大家快来听呀我发布了新的专辑大家快来听呀我发布了新的专辑大家快来听呀我发布了新的专辑,大家快来听呀",
          showInput: false,
        },
        {
          id: 2,
          avatar:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          username: "Lana Del Rey",
          time: "2023-11-11 18:30",
          likeNum: 1,
          content: "我发布了新的专辑NOmocjochwncmow,大家快来听呀",
          showInput: false,
        },
      ];
    },
  },
};
</script>

<style scoped>
.wrapper {
  margin: 30px auto;
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
.comment-wrapper{
  padding: 20px;
  border: solid 1px #e6e6e6;
}
</style>