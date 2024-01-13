<template>
  <div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="我关注的人" name="follow">
        <el-card v-if="follows.length != 0" class="box-card" > 
          <ul class="list follow-list">
            <li v-for="item in follows" :key="item" class="list-item-wrapper">{{item}}</li>
          </ul>
         </el-card>
        <el-empty description="关注为空" v-else></el-empty>
      </el-tab-pane>
      <el-tab-pane label="关注我的人" name="fans">
        <el-card v-if="fans.length != 0" class="box-card">
          <ul class="list fans-list">
            <li v-for="item in fans" :key="item" class="list-item-wrapper">{{item}}</li>
          </ul> 
        </el-card>
        <el-empty description="粉丝为空" v-else></el-empty>
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
      follows: ['1','2','3'],
      fans: [],
    };
  },
};
</script>

<style scoped>
.box-card >>> .el-card__body{
  padding: 0;
}
.list{
  list-style: none;
  height:  400px;
}
</style>