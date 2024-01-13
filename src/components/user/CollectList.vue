<template>
  <el-card class="my-collection-card">
    <div slot="header" class="header">
      <h5>我的收藏</h5>
      <el-input
        placeholder="输入关键字"
        size="small"
        v-model="searchText"
        class="search-input"
      >
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>
    <el-empty description="收藏为空"></el-empty>
  </el-card>
</template>

<script>
export default {
  data(){
    return{
      searchText:""
    }
  }
};
</script>

<style scoped>
.my-collection-card >>> .el-card__header{
  padding: 10px 20px;
}
.my-collection-card >>> .el-card__body {
  padding: 0;
}
.my-collection-card .header{
  display: flex;
  justify-content:space-between;
  align-items: center;
}
.my-collection-card .header .search-input{
  width: 300px;
}
</style>