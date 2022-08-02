<!--登录-->
<template>
  <div class="login-container">
    <div class="login-box">
      <div class="manage_tip">admin management</div>
      <div class="avatar_box">
        <img src="../../assets/auhor.jpg" alt />
      </div>
      <el-form
        ref="loginForm"
        class="form-box"
        :model="loginForm"
        :rules="loginRules"
        auto-complete="on"
        label-position="left"
      >
        <el-form-item prop="telephone">
          <div class="form-box-item">
            <span class="svg-container">
              <svg-icon icon-class="user" />
            </span>
            <el-input
              ref="telephone"
              v-model.trim="loginForm.telephone"
              placeholder="请输入用户名/手机号码"
              name="telephone"
              type="text"
              tabindex="1"
              auto-complete="on"
            />
          </div>
        </el-form-item>
        <el-form-item prop="password">
          <div class="form-box-item">
            <span class="svg-container">
              <svg-icon icon-class="password" />
            </span>
            <el-input
              :key="passwordType"
              ref="password"
              v-model.trim="loginForm.password"
              :type="passwordType"
              placeholder="请输入密码"
              name="password"
              tabindex="2"
              auto-complete="on"
              @keyup.enter.native="handleLogin"
            />
            <span class="show-pwd" @click="showPwd">
              <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
            </span>
          </div>
        </el-form-item>
        <div class="foot-button">
          <el-button @click.native.prevent="resetForm">重 置</el-button>
          <el-button :loading="loading" type="primary" @click.native.prevent="handleLogin">登 录</el-button>
        </div>
        <div class="register">
          <el-button type="text" @click="register">注 册</el-button>
          <el-button type="text" @click="resetpassword">忘记密码</el-button>
        </div>
      </el-form>
    </div>
    <background />
  </div>
</template>

<script>
import { loginRules } from "@/utils/validate/index.js"
import background from "./background.vue"
export default {
  name: "Login",
  components: { background },
  data() {
    return {
      loginForm: {
        telephone: "18888888888",
        password: "111111",
      },
      loginRules,
      loading: false,
      passwordType: "password",
      redirect: undefined,
    }
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true,
    },
  },
  methods: {
    showPwd() {
      if (this.passwordType === "password") {
        this.passwordType = ""
      } else {
        this.passwordType = "password"
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    resetForm() {
      this.$refs.loginForm.resetFields()
    },
    handleLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.loading = true
          this.$store
            .dispatch("user/login", this.loginForm)
            .then(() => {
              this.$router.push({ path: this.redirect || "/" })
            })
            .catch(() => {})
            .finally(() => {
              this.loading = false
            })
        } else {
          return false
        }
      })
    },
    register() {
      this.$router.push("/register")
    },
    resetpassword() {
      this.$message.warning("待开发！")
    },
  },
}
</script>

<style lang="scss" scoped>
$bg-f: #fff;
$dark_gray: #889aa4;
$light_gray: #ddd;

.login-container {
  background-color: #409eff;
  height: 100%;
}

.login-box {
  width: 450px;
  height: 300px;
  background-color: $bg-f;
  position: absolute;
  z-index: 1;
  left: 50%;
  top: 50%;
  border-radius: 5px;
  transform: translate(-50%, -50%);
  .manage_tip {
    position: absolute;
    width: 100%;
    text-align: center;
    top: -150px;
    font-size: 34px;
    color: $bg-f;
  }
  .avatar_box {
    height: 130px;
    width: 130px;
    border: 1px solid $light_gray;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px $light_gray;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  ::v-deep .el-form-item__error {
    // 表单提示信息的位置
    margin-left: 30px;
  }

  .form-box {
    position: absolute;
    bottom: 0;
    padding: 0 30px;
    width: 100%;
    box-sizing: border-box;
    &-item {
      display: flex;
      .svg-container {
        color: $dark_gray;
        vertical-align: middle;
        width: 30px;
        display: inline-block;
      }
      .show-pwd {
        position: absolute;
        right: 10px;
        font-size: 16px;
        color: $dark_gray;
        cursor: pointer;
        user-select: none;
      }
    }
    .foot-button {
      width: 100%;
      margin-bottom: 30px;
      text-align: center;
    }
    .register {
      text-align: right;
    }
  }
}
</style>
