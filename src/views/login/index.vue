<template>
  <div class="body">
    <div class="box">
      <h4>欢迎登录</h4>
      <el-form
        :model="formData"
        label-width="80px"
        class="form"
        :rules="rules"
        ref="loginForm"
      >
        <el-form-item label="账号" prop="account">
          <el-input
            v-model="formData.account"
            autocomplete="off"
            placeholder="账号"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="formData.password"
            autocomplete="off"
            placeholder="密码"
          ></el-input>
        </el-form-item>
        <el-form-item label="验证" prop="isLock">
          <slider-verify
            v-model="formData.isLock"
            @change="handlerLock"
          ></slider-verify>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm()" class="login-btn"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
      <div class="bottom">
        <router-link to="/register">没有账号？去注册</router-link>
        <router-link to="/retrieve">找回密码</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import SliderVerify from "@/components/SliderVerify.vue";
export default {
  components: {
    SliderVerify,
  },
  data() {
    const checkStatus = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请拖动滑块完成验证"));
      } else {
        if (
          this.formData.account == "" ||
          this.formData.password == "" ||
          !this.formData.account ||
          !this.formData.password
        ) {
          setTimeout(() => {
            this.formData.isLock = false;
            this.$refs.loginForm.validateField("account");
            this.$refs.loginForm.validateField("password");
            return callback(new Error("验证未通过"));
          }, 10);
        }
        callback();
      }
    };

    return {
      formData: {},
      rules: {
        account: [
          { required: true, message: "请输入账号", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入输入密码", trigger: "blur" },
        ],
        isLock: [{ validator: checkStatus, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          alert("成功");
        } else {
          alert("失败");
        }
      });
    },
   
    handlerLock(data) {
      if (data) this.$refs.loginForm.validateField("isLock");
    },
  },
};
</script>
<style scoped>
.body {
  width: 100%;
  height: 100%;
  position: fixed;
  background-image: url(@/assets/bg.png);
  background-size: 100% 100%;
}
.box {
  width: 35rem;
  height: 30rem;
  border-radius: 1.5rem;
  background-color: rgba(255, 255, 255, 0.5);
  margin: 10% auto;
  /* 设置阴影 */
  box-shadow: 0 0 1rem 0.2rem rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  /* 设置容器内元素垂直分布 */
  flex-direction: column;
}

h4 {
  margin-top: 30px;
  font-size: 30px;
  text-align: center;
  margin-bottom: 50px;
}
.form {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
}
.el-form-item {
  width: 80%;
  margin-bottom: 30px;
}
.login-btn {
  width: 100%;
}
.bottom {
  width: 80%;
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
}

a {
  line-height: 2;
}
</style>