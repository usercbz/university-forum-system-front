<template>
  <div class="body">
    <div class="box">
      <h4>注册用户</h4>
      <el-form
        class="form"
        :model="formData"
        :rules="rules"
        ref="registerForm"
        label-width="80px"
      >
        <el-form-item label="昵称" prop="nickname">
          <el-input
            v-model="formData.nickname"
            autocomplete="off"
            placeholder="昵称"
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

        <el-form-item label="确认密码" prop="rePass">
          <el-input
            type="password"
            v-model="formData.rePass"
            autocomplete="off"
            placeholder="确认密码"
          ></el-input>
        </el-form-item>

        <el-form-item label="邮箱" prop="email">
          <el-input
            v-model="formData.email"
            autocomplete="off"
            placeholder="邮箱"
          ></el-input>
        </el-form-item>

        <el-form-item label="验证码" prop="checkCode">
          <div class="check-wrapper">
            <el-input
              v-model="formData.checkCode"
              autocomplete="off"
              placeholder="请输入验证码"
              class="check-input"
            ></el-input>
            <el-button
              class="send-code-btn"
              @click="sendCode"
              :disabled="isSend"
              >{{ checkCodeText }}</el-button
            >
          </div>
        </el-form-item>
      </el-form>

      <div class="bottom">
        <el-button type="primary" @click="submitForm()" class="submit-button"
          >注册</el-button
        >
        <router-link to="/login">已有账号,去登录</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const checkPass = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请确认密码"));
      } else if (this.formData.password != value) {
        return callback(new Error("两次密码不一致"));
      } else {
        callback();
      }
    };
    return {
      formData: {},
      rules: {
        nickname: [
          { required: true, message: "请输入昵称", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        rePass: [{ validator: checkPass, trigger: "blur" }],
        email: [{ required: true, message: "请输入邮箱", trigger: "blur" }],
        checkCode: [
          { required: true, message: "请输入验证码", trigger: "blur" },
        ],
      },
      checkCode: "",
      checkCodeText: "发送验证码",
      isSend: false,
    };
  },
  methods: {
    submitForm() {
      // TODO 发送请求
    },
    sendCode() {
      this.$refs.registerForm.validateField("email", (error) => {
        if (!error) {
          this.isSend = true;
          var timeout = 59;
          var timer = setInterval(() => {
            if (timeout <= 0) {
              clearInterval(timer);
              this.isSend = false;
              this.checkCodeText = "发送验证码";
            } else {
              this.checkCodeText = `${timeout}s`;
              timeout--;
            }
          }, 1000);
        }
      });
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
  width: 40rem;
  height: 35rem;
  border-radius: 1.5rem;
  background-color: rgba(255, 255, 255, 0.5);
  margin: 6% auto;
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
  margin-bottom: 40px;
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
.check-wrapper {
  display: flex;
  justify-content: space-between;
}
.check-input {
  width: 300px;
}
.send-code-btn {
  width: 111px;
}
.bottom {
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin-top: 20px;
}
.submit-button {
  width: 100px;
}
a {
  line-height: 40px;
}
</style>