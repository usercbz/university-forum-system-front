<template>
  <div class="item-wrapper">
    <div class="left-avatar">
      <el-avatar :size="50" :src="commentData.avatar"></el-avatar>
    </div>

    <div class="right-body">
      <div>
        <span class="author-name">{{ commentData.username }}</span>
      </div>
      <div class="body-content">
        <span>{{ commentData.content }}</span>
      </div>
      <div class="right-bottom">
        <div>
          <span class="publish-time">{{ commentData.time }}</span>
        </div>

        <div class="icon-btn">
          <span @click="show(commentData)" class="onclick">
            <i class="el-icon-s-comment"></i>{{ commentData.commentNum }}
          </span>
          <span class="onclick">
            <i class="el-icon-caret-top"></i>{{ commentData.likeNum }}
          </span>
        </div>
      </div>
      <div v-if="commentData.showInput" class="reply-input">
        <el-input
          v-model="commentData.replyText"
          :placeholder="`回复${commentData.username}`"
        >
          <el-button
            slot="append"
            type="primary"
            @click="onReplyBtn(commentData)"
            >回复</el-button
          >
        </el-input>
      </div>
      <div v-if="commentData.commentNum > 0 && !spread">
        <el-divider content-position="left">
          <span class="onclick" @click="onClickSpread(commentData)">
            展开{{ commentData.commentNum }}条回复
            <i class="el-icon-arrow-down"></i>
          </span>
        </el-divider>
      </div>
      <div v-else-if="commentData.commentNum > 0">
        <div
          v-for="reply in commentData.replies"
          :key="reply.id"
          class="reply-wrapper"
        >
          <div class="left-avatar">
            <el-avatar :size="50" :src="reply.avatar"></el-avatar>
          </div>

          <div class="right-body">
            <div>
              <span class="author-name">{{ reply.username }}</span>
            </div>
            <div class="body-content">
              <span>{{ reply.content }}</span>
            </div>
            <div class="right-bottom">
              <div>
                <span class="publish-time">{{ reply.time }}</span>
              </div>

              <div class="icon-btn">
                <span @click="show(reply)" class="onclick">
                  <i class="el-icon-s-comment"></i>
                </span>
                <span class="onclick">
                  <i class="el-icon-caret-top"></i>{{ reply.likeNum }}
                </span>
              </div>
            </div>
            <div v-if="reply.showInput" class="reply-input">
              <el-input
                v-model="reply.replyText"
                :placeholder="`回复${reply.username}`"
              >
                <el-button
                  slot="append"
                  type="primary"
                  @click="onReplyBtn(reply)"
                  >回复</el-button
                >
              </el-input>
            </div>
          </div>
        </div>
        <el-divider content-position="right">
          <span class="onclick" @click="packup">
            收起回复
            <i class="el-icon-arrow-up"></i>
          </span>
        </el-divider>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["commentData"],
  data(){
    return {
      spread:false,
    }
  },
  methods: {
    show(item) {
      item.showInput = !item.showInput;
    },
    onReplyBtn(commentData) {
      this.$emit("onReplyBtn", commentData);
    },
    onClickSpread(commentData) {
      this.getReplyData(commentData)
      this.spread = true
    },
    packup(){
      this.spread = false
    },
    getReplyData(item) {
      this.$emit("getReplyData", item);
    },
  },
};
</script>

<style scoped>
.item-wrapper {
  display: flex;
  width: 100%;
}
.left-avatar {
  width: 50px;
  margin-right: 10px;
}
.right-body {
  flex-grow: 1;
}

.author-name {
  font-weight: 700;
}
.publish-time {
  font-size: 13px;
  font-weight: 400;
}
.right-bottom {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.icon-btn span {
  margin-left: 10px;
}

.body-content {
  margin-top: 6px;
  margin-bottom: 5px;
  font-size: 14px;
}
.reply-input {
  margin-top: 6px;
}
.reply-wrapper {
  display: flex;
  width: 100%;
  margin-top: 15px;
}

.onclick:hover {
  cursor: pointer;
}
</style>