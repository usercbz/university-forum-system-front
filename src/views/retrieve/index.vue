<template>
  <div class="wrapper">
    <div class="body-wrapper">
      <h4>找回密码</h4>
      <el-form
        label-width="80px"
        class="form"
        :model="formData"
        :rules="rules"
        ref="retrieveForm"
      >
        <el-form-item label="账号" prop="account">
          <el-input
            v-model="formData.account"
            autocomplete="off"
            placeholder="账号"
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
      <div class="btn-wrapper">
        <el-button type="primary" @click="onRetrieveBtn()">找回密码</el-button>
        <el-button type="primary" @click="back()">返回</el-button>
      </div>
      <el-dialog title="重设密码" :visible.sync="dialogFormVisible" :modal-append-to-body="false">
        <el-form
          :model="dialogForm"
          label-width="100px"
          ref="retrieveDialogForm"
          :rules="dialogFormRules"
        >
          <el-form-item label="密码" prop="password">
            <el-input
              type="password"
              v-model="dialogForm.password"
              autocomplete="off"
              placeholder="密码"
            ></el-input>
          </el-form-item>

          <el-form-item label="确认密码" prop="rePass">
            <el-input
              type="password"
              v-model="dialogForm.rePass"
              autocomplete="off"
              placeholder="确认密码"
            ></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormSubmit">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const checkPass = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请确认密码"));
      } else if (this.dialogForm.password != value) {
        return callback(new Error("两次密码不一致"));
      } else {
        callback();
      }
    };
    return {
      formData: {},
      rules: {
        account: [{ required: true, message: "请输入账号", trigger: "blur" }],
        email: [{ required: true, message: "请输入邮箱", trigger: "blur" }],
        checkCode: [
          { required: true, message: "请输入验证码", trigger: "blur" },
        ],
      },
      isSend:false,
      checkCodeText: "发送验证码",

      dialogFormVisible: false,
      dialogForm: {},
      dialogFormRules: {
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        rePass: [{ validator: checkPass, trigger: "blur" }],
      },
    };
  },
  methods: {
    sendCode() {
      this.$refs.retrieveForm.validateField("email", (error) => {
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
    onRetrieveBtn() {
      //发送请求，返回验证结果
      //验证结果通过、打开对话框
      this.dialogFormVisible = true;
      //不通过
    },

    back() {
      this.$router.push("/login");
    },
    dialogFormSubmit() {
      //提交
      this.$refs.retrieveDialogForm.validator((valid) => {
        if (valid) {
          //校验成功
          this.dialogFormVisible = false;
        } else {
          //校验失败
        }
      });
    },
  },
};
</script>

<style scoped>
.wrapper {
  width: 100%;
  height: 100%;
  position: fixed;
  background-image: url(@/assets/bg.png);
  background-size: 100% 100%;
}

.body-wrapper {
  width: 35rem;
  height: 25rem;
  border-radius: 1.5rem;
  background-color: rgba(255, 255, 255, 0.5);
  margin: 50px auto;
  /* 设置阴影 */
  box-shadow: 0 0 1rem 0.2rem rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  /* 设置容器内元素垂直分布 */
  flex-direction: column;
}
.body-wrapper h4 {
  margin-top: 30px;
  font-size: 25px;
  text-align: center;
}
.form {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-top: 50px;
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
  width: 240px;
}
.send-code-btn {
  width: 111px;
}
.btn-wrapper {
  width: 80%;
  display: flex;
  justify-content: space-between;
}
</style>