<template>
  <el-form :model="user" label-width="80px">
    <el-form-item label="昵称">
      <el-input v-model="user.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="个人简介">
      <el-input type="textarea" v-model="user.desc"></el-input>
    </el-form-item>
    <el-form-item label="性别">
      <el-radio-group v-model="user.sex">
        <el-radio label="男"></el-radio>
        <el-radio label="女"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="邮箱">
      <el-input v-model="user.email" autocomplete="off"></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  props: ["user"],
};
</script>

<style scoped>
.el-form-item {
  width: 400px;
}
</style>