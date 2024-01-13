<template>
  <div class="wrapper">
    <div class="info-bar">
      <!-- 头像 -->
      <div class="user-avatar">
        <el-avatar :size="100" :src="user.avatarUrl" shape="square"></el-avatar>
      </div>

      <!-- 详细信息 -->
      <div class="user-descriptions">
        <el-descriptions :title="user.name" column="2">
          <el-descriptions-item label="账号">{{
            user.account
          }}</el-descriptions-item>
          <el-descriptions-item label="性别">{{
            user.sex
          }}</el-descriptions-item>
          <el-descriptions-item label="个人简介">{{
            user.desc
          }}</el-descriptions-item>
        </el-descriptions>
      </div>
      <!-- 编辑按钮 -->
      <el-button class="edit-user-btn" @click="showDialog()"
        >编辑个人信息</el-button
      >
      <el-dialog
        title="个人信息"
        :visible.sync="dialogVisible"
        center
        width="40%"
        :before-close="handleDialogClose"
      >
        <div class="dialog-wrapper">
          <div class="dialog-avatar-wrapper">
            <el-avatar
              :size="120"
              :src="dialogAvatar"
              shape="square"
            ></el-avatar>
            <el-upload
              ref="upload"
              action="#"
              :auto-upload="false"
              :show-file-list="false"
              :before-upload="beforeAvatarUpload"
              :http-request="uploadFile"
              :on-change="fileChange"
            >
              <el-button class="upload-btn"> 上传头像</el-button>
            </el-upload>
          </div>
          <update-form :user="updateUser"></update-form>
        </div>

        <div slot="footer">
          <el-button type="primary" @click="save()">保 存</el-button>
          <el-button @click="cancel()">取 消</el-button>
        </div>
      </el-dialog>
    </div>

    <div class="body-wrapper">
      <div class="menu-wrapper">
        <div>
          <!-- 菜单栏 -->
          <el-menu
            mode="horizontal"
            router
            :default-active="$route.path"
            class="body-menu-bar"
          >
            <el-menu-item index="/home/user/article">文章</el-menu-item>
            <el-menu-item index="/home/user/collect">收藏</el-menu-item>
            <el-menu-item index="/home/user/follow">关注</el-menu-item>
          </el-menu>
        </div>
        <router-view></router-view>
      </div>

      <div class="creation-wrapper">
        <creation-wrapper
          :follow="followNums"
          :fans="fansNums"
          @clickText="handlerClickText"
        ></creation-wrapper>
      </div>
    </div>
  </div>
</template>

<script>
import CreationWrapper from "./CreationWrapper.vue";
import UpdateForm from "./UpdateForm.vue";
import { mapState } from "vuex";
export default {
  mounted() {
    //session里取用户信息
    // let userJSON =  sessionStorage.getItem('userInfo');
    // this.userInfo = JSON.parse(userJSON);
  },
  components: {
    CreationWrapper,
    UpdateForm,
  },
  computed: {
    dialogAvatar() {
      return this.updateUser.avatarUrl
        ? this.updateUser.avatarUrl
        : this.user.avatarUrl;
    },
    ...mapState(["user"]),
  },
  data() {
    return {
      dialogVisible: false,

      updateUser: {},
      followNums: 3,
      fansNums: 4,
    };
  },
  methods: {
    showDialog() {
      this.dialogVisible = true;
      this.updateUser = { ...this.user };
    },
    //关闭对话框前的逻辑
    handleDialogClose(done) {
      done();
      this.updateUser = {};
    },
    //校验上传文件
    beforeAvatarUpload(file) {
      //允许的图片类型
      const imgType =
        file.type === "image/jpeg" ||
        file.type === "image/png" ||
        file.type === "image/gif";
      //文件大小3M
      const imgLimit = file.size / 1024 / 1024 < 3;
      if (!imgType) {
        this.$message.error("只允许jpg、png、gif格式的图片");
        return false;
      }
      if (!imgLimit) {
        this.$message.error("上传的图片大小不能超过3MB");
        return false;
      }
      //通过
      return true;
    },
    //修改文件触发逻辑
    fileChange(file) {
      this.updateUser.avatarUrl = URL.createObjectURL(file.raw);
      console.log(this.updateUser.avatarUrl);
    },
    //文件上传逻辑
    uploadFile(params) {
      console.log(params.file);
      this.$message.success("上传成功");
    },
    //保存
    save() {
      //提交
      if (this.updateUser.avatarUrl != this.user.avatarUrl) {
        this.$refs.upload.submit();
      }

      this.dialogVisible = false;
    },
    //取消
    cancel() {
      this.dialogVisible = false;
    },
    handlerClickText(data) {
      // this.$message(data)
      this.$router.push({
        path: "/home/user/follow",
        query: {
          activeName: data,
        },
      });
    },
  },
};
</script>

<style scoped>
.wrapper {
  width: 1100px;
  margin: 10px auto;
}
.dialog-wrapper {
  display: flex;
}
.dialog-avatar-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.upload-btn {
  margin-top: 5px;
}
.info-bar {
  display: flex;
}
.user-avatar {
  width: 100px;
  height: 100px;
}
.user-descriptions {
  width: 500px;
  height: 100px;
  margin-left: 50px;
}
.edit-user-btn {
  width: 120px;
  height: 35px;
  align-self: flex-end;
  margin-left: auto;
}
.body-wrapper {
  display: flex;
  margin-top: 20px;
}
.body-menu-bar {
  border: #e6e6e6 1px solid;
}
.menu-wrapper {
  flex: 2;
}

.creation-wrapper {
  flex: 1;
  height: 360px;
  margin-left: 10px;
}
</style>