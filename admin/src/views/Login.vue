<script setup>
import { reactive,ref } from 'vue';
import router from "@/router";

const loginForm = reactive({
  username: '',
  password: ''
});

const loginFormRef = ref();

const loginRules = reactive({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 8, message: '长度在 3 到 8 个字符',}
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 12, message: '长度在 6 到 12 个字符' },
  ]
});

const submitForm = () => {
  //1.校验表单
  loginFormRef.value.validate((valid) => {
    if (valid) {
      console.log(loginForm);
      handleLogin();
      router.push('/index');
    } else {
      return false;
    }
  });
  //2.拿到表单内容，发送后台

  //3.设置token
};

const handleLogin = () => {
 localStorage.setItem('token', '123456');
};
</script>

<template>
     <div class="formContainer">
       <h3>后台管理系统</h3>
       <el-form
           ref="loginFormRef"
           :model="loginForm"
           status-icon
           :rules="loginRules"
           label-width="80px"
           class="demo-ruleForm"
       >
         <el-form-item label="用户名" prop="username">
           <el-input v-model="loginForm.username"  autocomplete="off" />
         </el-form-item>
         <el-form-item label="密码" prop="password">
           <el-input v-model="loginForm.password" type="password" autocomplete="off" />
         </el-form-item>
         <el-form-item>
           <el-button type="primary" @click="submitForm()">登录</el-button>
         </el-form-item>
       </el-form>
     </div>
</template>

<style scoped lang="scss">
.formContainer {
  width: 500px;
  height: 300px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba($color: #000000, $alpha: 0.4);
  color: white;
  text-align: center;
  padding: 20px;

  h3 {
    font-size: 24px;
    margin-bottom: 20px;
  }
}
::v-deep .el-form-item__label {
  color: white;
}
</style>
