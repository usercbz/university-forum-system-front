<template>
  <div class="wrapper">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="综合" name="first">综合</el-tab-pane>
      <el-tab-pane label="用户" name="second">用户</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style scoped>
.wrapper {
  width: 800px;
  margin: 5px auto;
}
</style>