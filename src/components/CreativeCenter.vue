<template>
  <!-- 创作中心 -->
  <div class="creation-body">
    <div class="creation-top-title">
      <el-image style="width: 80px; height: 40px" :src="imageUrl"> </el-image>
      <h4>创作中心</h4>
    </div>
    <div class="creation-desciption">
      <h5>发表你的作品</h5>
      <p>发布首篇内容，快来成为创作者吧～</p>
    </div>
    <el-button icon="el-icon-plus" class="creation-btn" @click="handleClick">开始创作</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: require("@/assets/creator_icon.png"),
    };
  },
  methods:{
    handleClick(){
      this.$router.push('/publish')
    }
  }
};
</script>

<style scoped>
.creation-body {
  display: flex;
  flex-direction: column;
  padding: 15px;

  border: solid 1px #e6e6e6;
  border-radius: 5px;
}
.creation-top-title {
  display: flex;
}
.creation-top-title h4 {
  align-self: center;
}
.creation-desciption {
  padding: 5px 10px;
  margin-bottom: 10px;
}
.creation-desciption p {
  font-size: 12px;
}
</style>