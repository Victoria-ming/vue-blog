<!--注册-->
<template>
  <div class="login-container">
    <div class="login-box">
      <div class="header-title">注册</div>
      <el-form ref="registerForm" :model="registerForm" :rules="registerRules" label-width="80px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model.trim="registerForm.username" placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item label="手机号码" prop="telephone">
          <el-input v-model.trim="registerForm.telephone" placeholder="请输入手机号码" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model.trim="registerForm.password" placeholder="请输入密码" />
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model.trim="registerForm.email" placeholder="请输入邮箱" />
        </el-form-item>
        <div class="foot-button">
          <el-button @click="resetForm">重 置</el-button>
          <el-button :loading="loading" type="primary" @click="handleRegister">注 册</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import { registerRules } from "@/utils/validate/index.js"
export default {
  name: "Register",
  data() {
    return {
      registerForm: {
        username: "",
        telephone: "",
        password: "",
        email: "",
      },
      registerRules,
      loading: false,
      passwordType: "password",
      redirect: undefined,
    }
  },
  methods: {
    resetForm() {
      this.$refs.registerForm.resetFields()
    },
    handleRegister() {
      this.$refs.registerForm.validate((valid) => {
        if (valid) {
          this.loading = true
          this.$store
            .dispatch("user/register", this.registerForm)
            .then((res) => {
              this.$router.push("/login")
              this.$message.success(res.msg)
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
  display: grid;
  place-content: center;
}

.login-box {
  width: 500px;
  padding: 40px;
  background-color: #fff;
  .header-title {
    text-align: center;
    margin-bottom: 20px;
    font-size: 24px;
  }
  .foot-button {
    width: 100%;
    margin-bottom: 30px;
    text-align: center;
  }
}
</style>
