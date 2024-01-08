<template>
  <div class="box-wrapper">
    <div class="card-wrapper">
      <el-card class="box-card" v-for="info in infos" :key="info.id">
        <div slot="header">
          <h5 class="card-title" @click="handlerClick(info)">
            {{ info.title }}
          </h5>
        </div>
        <p>
          {{ info.content }}
        </p>
      </el-card>

      <el-dialog
        :title="dialogData.title"
        :visible.sync="dialogVisible"
        :before-close="dialogBeforeClose"
        width="30%"
      >
        <span>{{ dialogData.content }}</span>
        <div slot="footer">
          <span> publish_time</span>
        </div>
      </el-dialog>
    </div>

    <el-pagination
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-size="12"
      layout="total, prev, pager, next"
      :total="1000"
      class="pagination"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  mounted() {
    //获取数据
  },
  data() {
    return {
      infos: [
        {
          id: Math.random(),
          title: "天气情况",
          content:
            "世界气象组织刚在11月30日宣布，2023年是有记录以来人类历史上最热的一年。由于气候变化和厄尔尼诺现象，截至今年10月底的数据显示，今年平均气温较工业化前的基线高出约1.4℃。",
        },
        {
          id: Math.random(),
          title: "公告",
          content: "这是一段公告",
        },
        {
          id: Math.random(),
          title: "公告",
          content: "这是一段公告",
        },
        {
          id: Math.random(),
          title: "公告",
          content: "这是一段公告",
        },
        {
          id: Math.random(),
          title: "公告",
          content: "这是一段公告",
        },
        {
          id: Math.random(),
          title: "公告",
          content: "这是一段公告",
        },
        {
          id: Math.random(),
          title: "公告",
          content: "这是一段公告",
        },
        {
          id: Math.random(),
          title: "公告",
          content: "这是一段公告",
        },
        {
          id: Math.random(),
          title: "公告",
          content: "这是一段公告",
        },
        {
          id: Math.random(),
          title: "公告",
          content: "这是一段公告",
        },
        {
          id: Math.random(),
          title: "公告",
          content: "这是一段公告",
        },
        {
          id: Math.random(),
          title: "公告",
          content: "这是一段公告",
        },
      ],
      dialogData: {},
      dialogVisible: false,
      currentPage: 1,
    };
  },
  methods: {
    handlerClick(info) {
      //处理点击事件
      this.dialogData = info;
      this.dialogVisible = true;
      console.log(info);
    },
    dialogBeforeClose(done) {
      done();
      this.dialogData = {};
    },
    handleCurrentChange(val) {
      this.$message("当前页" + val);
    },
  },
};
</script>

<style scoped>
.box-wrapper {
  width: 1200px;
  margin: 5px auto;
}
.card-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 1200px;
}
.box-card {
  width: 240px;
  height: 200px;
  margin-right: 30px;
  margin-bottom: 12px;
}
.card-title {
  cursor: pointer;
  font-weight: 400;

  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
  white-space: nowrap;
}
.card-title:hover {
  font-weight: 700;
}
.box-card p {
  word-break: break-all;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  font-size: 15px;
}
.pagination {
 text-align: center;
}
</style>