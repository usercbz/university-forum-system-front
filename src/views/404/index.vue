<template>
  <el-empty :image="imageUrl" image-size="600" description="页面不存在">
    <el-button  @click="back">返回</el-button>
  </el-empty>
</template>

<script>

export default {
  data() {
    return {
      imageUrl: require("@/assets/404.png"),
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
  },
};
</script>

<style>
</style>