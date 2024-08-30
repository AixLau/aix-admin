<template>
  <div class="login-container">
    <el-card class="login-card">
      <h1 class="login-title">登录</h1>
      <el-form :model="loginForm" :rules="rules" ref="loginFormRef" label-width="auto">
        <el-form-item label="账号" prop="username">
          <el-input v-model="loginForm.username" placeholder="请输入账号"/>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginForm.password" placeholder="请输入密码" show-password type="password"/>
        </el-form-item>
        <el-form-item>
          <el-button class="submit-button" @click="submitForm(loginFormRef)">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import type {FormInstance, FormRules} from "element-plus";
import type {LoginForm} from "@/api/user/type.ts";
// 定义表单数据和引用
const loginForm = reactive<LoginForm>({
  username: 'admin',
  password: 'admin'
});

// 定义表单引用
const loginFormRef = ref<FormInstance>();

// 表单验证规则
const rules = reactive<FormRules<LoginForm>>({
  username: [{required: true, message: '请输入用户名', trigger: 'blur'}],
  password: [{required: true, message: '请输入密码', trigger: 'blur'}],
});

let userStore = useUserStore();
let router = useRouter();
// 提交表单的处理函数
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      userStore.userLogin();
      router.push('/');
      console.log('submit!', loginForm);
      ElNotification({
        title: '登录成功',
        message: '欢迎回来',
        type: 'success'
      })
    } else {
      console.log('error submit!');
    }
  });
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('@/assets/image/background.JPG');
  background-size: cover;
}

.login-card {
  width: 100%;
  max-width: 400px;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  background-color: rgba(255, 255, 255, 0.5);
}

.login-title {
  font-size: 28px;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
  font-weight: bold;
}

.submit-button {
  width: 100%;
  border-radius: 8px;
  margin-top: 10px;
  padding: 12px;
  font-size: 16px;
  transition: all 0.3s ease;
  background-color: #409eff;
  border-color: #409eff;
  color: #fff;
}

.submit-button:hover {
  background-color: #66b1ff;
  border-color: #66b1ff;
}

@media (max-width: 768px) {
  .login-container {
    background-size: contain; /* 在小屏幕上保持完整显示 */
  }

  .login-title {
    font-size: 24px; /* 调整标题字体大小以适应小屏幕 */
  }

  .login-card {
    max-width: 90%; /* 在小屏幕上缩小卡片宽度 */
  }
}

</style>
