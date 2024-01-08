<template>
  <div>
    <el-container>
      <el-header>
        <meun-bar
          :avatarImage="user.avatar"
          :messageNum="count"
          :searchValue="searchVal"
          :historyData="historyList"
          :messageData="messageData"
          @onClickTag="searchHistory"
          @onClearHistoryBtn="ClearHistory"
        ></meun-bar>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import MeunBar from "@/components/MenuBar.vue";
import{mapState} from 'vuex'
export default {
  components: {
    MeunBar,
  },
  computed:{
    ...mapState(['user'])
  },
  data() {
    return {
      count: 3,
      searchVal: "",
      historyList: [
        "学校",
        "历史",
        "JAVA",
        "C++",
        "删除登录状态信息",
        "跳到个人主页",
        "修改密码",
      ],
      messageData:[
        {
          id:1,
          content:'这是一条通知'
        },
        {
          id:2,
          content:'这是一条通知'
        }
      ],
    };
  },
  methods: {
    searchHistory(history) {
      this.searchVal = history
    },
    ClearHistory() {
      this.historyList = [];
    },
  },
};
</script>
<style scoped>
</style>
