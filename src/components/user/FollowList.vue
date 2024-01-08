<template>
  <div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="我关注的人" name="follow">
        <el-empty description="关注为空"></el-empty>
      </el-tab-pane>
      <el-tab-pane label="关注我的人" name="fans">
        <el-empty description="粉丝为空"></el-empty>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: this.$route.query.activeName
        ? this.$route.query.activeName
        : "follow",
    };
  },
};
</script>

<style scoped>
</style>