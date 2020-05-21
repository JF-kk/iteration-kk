<template>
  <div class="container">
    <div class="login">
      <div class="header">欢迎</div>
      <div class="main">
        <div>
          <el-row :gutter="20">
            <el-col :span="8" :offset="5">
              <el-link :underline="false" :class="{active: loginWay.account}" @click="loginWayChange('account')">账号密码登录</el-link>
            </el-col>
            <el-col :span="8">
              <el-link :underline="false" :class="{active: loginWay.phone}" @click="loginWayChange('phone')">手机号码登录</el-link>
            </el-col>
          </el-row>
        </div>
        <div v-if="loginWay.account">
          <div class="login-account">
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
              <el-form-item prop="userName">
                <el-input type="text" v-model="ruleForm.userName" placeholder=" 账号 / test" autocomplete="off" prefix-icon="el-icon-user" ></el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input type="password" v-model="ruleForm.password" placeholder=" 密码 / 123456" autocomplete="off" prefix-icon="el-icon-star-off" :show-password="true"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
        <div v-if="loginWay.phone">
          <div class="login-account">
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
              <el-form-item prop="userName">
                <el-input type="text" v-model="ruleForm.userName" placeholder=" 手机号" autocomplete="off" prefix-icon="el-icon-user" ></el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input type="password" v-model="ruleForm.password" placeholder=" 验证码" autocomplete="off" prefix-icon="el-icon-star-off" :show-password="true"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
      <div class="footer">Copyright @ 2020 JF-kk</div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    const validateUserName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('账号不能为空'));
      }
      callback();
    };
    const validatePassWord = (rule, value, callback) => {
      if (value === '') {
        return callback(new Error('密码不能为空'));
      }
      callback();
    };
    return {
      loginWay:{
        account: true,
        phone: false
      },
      ruleForm: {
        userName: '',
        password: '',
      },
      rules: {
        userName: [
          { validator: validateUserName, trigger: 'blur' }
        ],
        password: [
          { validator: validatePassWord, trigger: 'blur' }
        ],
      }
    };
  },
  methods: {
    loginWayChange(param) {
      const that = this;
      if (param === 'account') {
        that.loginWay.account = true;
        that.loginWay.phone = false;
      }
      if (param === 'phone') {
        that.loginWay.account = false;
        that.loginWay.phone = true;
      }
    }
  },
}
</script>

<style lang="less" scoped>
.container{
  position: relative;
  width: 100%;
  height: 100%;
  background: url('https://file-1301022240.cos.ap-guangzhou.myqcloud.com/wallpaper.jpg') no-repeat 0 50%;
  background-size: 100% 100%;
  .login{
    position: absolute;
    width: 40%;
    top: 200px;
    padding-left: 30%;
    .header{
      text-align: center;
    }
    .main{
      width: 50%;
      padding-top: 80px;
      padding-left: 25%;
      .active{
        padding-bottom: 8px;
        border-bottom: 2px solid royalblue;
        color: royalblue;
      }
      .login-account{
        padding-top: 20px;
      }
      .login-phone{
        padding-top: 20px;
      }
    }
    .footer{
      text-align: center;
      padding-top: 360px;
    }
  }
}
</style>