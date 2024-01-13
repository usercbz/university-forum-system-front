<template>
  <el-menu mode="horizontal" router :default-active="$route.path" class="meun">
    <el-menu-item class="no-border">
      <a href="/home" class="logo">logo</a>
    </el-menu-item>
    <el-menu-item index="/home/index">首页</el-menu-item>
    <el-menu-item index="/home/follow">关注</el-menu-item>
    <el-menu-item index="/home/info">公告信息</el-menu-item>
    <el-menu-item class="search no-border">
      <el-popover
        placement="bottom"
        title="搜索历史"
        width="360"
        trigger="click"
        :visible-arrow="false"
      >
        <div class="seach-history-wrapper">
          <!-- 填充 -->
          <el-tag
            size="small"
            v-for="history in historyData"
            :key="history"
            class="history-tag"
            @click="onClickTag(history)"
            >{{ history }}</el-tag
          >
          <el-button
            type="text"
            icon="el-icon-delete"
            size="mini"
            class="history-clear-btn"
            @click="onClearHistoryBtn()"
            v-if="historyData.length"
            >清空历史</el-button
          >
        </div>
        <el-input
          placeholder="搜索内容"
          v-model="searchValue"
          size="medium "
          slot="reference"
          class="search-input"
        >
          <el-button
            slot="append"
            icon="el-icon-search"
            @click="handleSearch"
          ></el-button>
        </el-input>
      </el-popover>
    </el-menu-item>
    <el-menu-item class="message-icon no-border">
      <el-popover placement="bottom" width="320" trigger="click" title="我的消息" popper-class="message-popper">
        <div class="message-wrapper">
          <!-- <el-empty description="没有消息"></el-empty> -->
          <ul class="message-list">
            <li v-for="msg in messageData" :key="msg.id" class="message-item">
              {{ msg.content }}
            </li>
          </ul>
          <div class="message-bottom">
            <el-button type="text"  class="all-btn">查看所有</el-button>
          </div>
        </div>

        <el-badge :value="messageNum" :max="99" slot="reference">
          <el-button type="text" icon="el-icon-chat-dot-square"></el-button>
        </el-badge>
      </el-popover>
    </el-menu-item>

    <el-menu-item class="user-avatar no-border">
      <el-dropdown @command="handleDropdown">
        <span>
          <el-avatar
            shape="square"
            :size="30"
            fit="fill"
            :src="avatarImage"
          ></el-avatar>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-user" command="1"
            >个人主页</el-dropdown-item
          >
          <el-dropdown-item icon="el-icon-edit" command="2"
            >修改密码</el-dropdown-item
          >
          <el-dropdown-item icon="el-icon-switch-button" command="3"
            >退出登录</el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  props: ["avatarImage", "messageNum", "searchValue", "historyData",'messageData'],
  mounted() {},
  methods: {
    handleSearch() {
      // alert(this.search)
    },
    handle() {},
    handleDropdown(command) {
      if (command == "1") {
        this.$router.push("/home/user");
      } else if (command == "2") {
        //修改密码
      } else {
        // 退出登录
        //删除登录状态信息
        this.$router.push("/login");
      }
    },
    //点击标签
    onClickTag(history) {
      this.$emit("onClickTag", history);
    },
    //点击清除历史
    onClearHistoryBtn() {
      this.$emit("onClearHistoryBtn");
    },
  },
};
</script>
<style scoped>
.meun {
  width: 1200px;
  margin: 0 auto;
  padding-top: 10px;
}
.el-menu-item {
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo {
  display: block;
  width: 100px;
  height: 40px;
  margin-right: 30px;

  background-image: url("@/assets/bbs-logo.png");
  background-repeat: no-repeat;

  font-size: 0;
}
.search {
  margin-left: 80px;
}
.search-input {
  width: 400px;
}
.message-icon {
  margin-left: 100px;
  margin-top: 3px;
}
.user-avatar {
  margin-left: 5px;
}
.no-border.is-active {
  border-bottom: 0;
}
.seach-history-wrapper {
  display: flex;
  flex-wrap: wrap;
}
.history-tag {
  margin-left: 10px;
  margin-bottom: 10px;
}
.history-tag:hover {
  cursor: pointer;
}
.history-clear-btn {
  margin-left: auto;
}

.message-wrapper {
  height: 360px;
  border-top: solid 1px #e6e6e6;
}
.message-list{
  list-style: none;
  height: 320px;
}
.message-bottom{
  border-top: solid 1px #e6e6e6;
}
.all-btn{
  float:right;
  margin-right: 20px;
}
</style>