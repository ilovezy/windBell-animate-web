<template>
  <div class="forget-container">

    <el-form class="login-form"
             autoComplete="on"
             :model="loginForm"
             ref="loginForm"
             label-position="left">

      <div class="title-container">
        <h3 class="title">忘记密码</h3>
      </div>

      <el-form-item prop="name"
                    label='用户名'>
        <el-input name="name"
                  v-model="loginForm.name"
                  autoComplete="on"
                  placeholder="请输入用户名"/>
      </el-form-item>
      <el-form-item prop="mobile"
                    label='手机号'>
        <el-input name="mobile"
                  v-model="loginForm.mobile"
                  autoComplete="on"
                  placeholder="请输入手机号"/>
      </el-form-item>
      <el-form-item prop="trueName"
                    label='真实姓名'>
        <el-input name="trueName"
                  v-model="loginForm.trueName"
                  autoComplete="on"
                  placeholder="请输入真实姓名"/>
      </el-form-item>
      <el-form-item prop="identityNo"
                    label='身份证号码'>
        <el-input name="identityNo "
                  v-model="loginForm.identityNo"
                  autoComplete="on"
                  placeholder="请输入身份证号码"/>
      </el-form-item>

      <el-form-item prop="account"
                    label='交易账号'>
        <el-input name="account"
                  v-model="loginForm.account"
                  autoComplete="on"
                  placeholder="请输入交易账号"/>
      </el-form-item>

      <el-button type="primary"
                 style="width:100%;margin-bottom:30px;"
                 :loading="loading"
                 @click.native.prevent="validForm">提交申请
      </el-button>
    </el-form>
  </div>
</template>

<script>
  import AXIOS from '../../global/Fetch'

  export default {
    name: 'login',
    data() {
      return {
        loginForm: {
          name: '',
          mobile: '',
          trueName: '',
          identityNo: '',
          account: ''
        },
        passwordType: 'password',
        loading: false
      }
    },

    methods: {
      validForm() {
        const loginForm = this.loginForm || {}
        if (!isValidUserName(loginForm.name)) {
          this.$message.warning('用户名不正确，长度为2-18位')
          return
        }
        if (!isValidPhone(loginForm.mobile)) {
          this.$message.warning('手机号码格式不正确')
          return
        }
        if (!loginForm.trueName) {
          this.$message.warning('请输入真实名称')
          return
        }
        if (!isValidIdentityNum(loginForm.identityNo)) {
          this.$message.warning('身份证号码格式不正确')
          return
        }
        if (!loginForm.account) {
          this.$message.warning('请输入交易账号')
          return
        }

        this.handleLogin()
      },

      handleLogin() {
        const self = this
        self.loading = true
        AXIOS.post('/security/api/member/forget/password', self.loginForm).then(res => {
          self.$message({
            type: 'success',
            message: '提交申请成功,等待受理'
          })
          self.loading = false
          setTimeout(() => {
            self.$router.push('/login')
          }, 1000)
        }).catch(() => {
          self.loading = false
        })
      }
    }
  }
</script>

<style rel="stylesheet/scss"
       lang="scss">
  /* 修复input 背景不协调 和光标变色 */
  /* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

  $bg: #eaeaea;
  $light_gray: #eee;
  $cursor: #fff;

  /* reset element-ui css */
  .forget-container {
    .el-input {
      display: inline-block;
      height: 47px;
      width: 50%!important;
      input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: #333;
        height: 47px;
        -webkit-box-shadow: 0 0 0px 1000px white inset !important;
      }
    }

    .el-form-item__label {
      position: relative;
      top: 3px;
      width: 100px;
    }

    .el-form-item__error {
      font-size: 16px;
      margin-top: 3px;
    }

    .el-form-item {
      border-bottom: 1px solid #333;
      /*background: rgba(0, 0, 0, 0.1);*/
      /*border-radius: 5px;*/
      color: #454545;
      margin-bottom: 40px;
    }
  }
</style>

<style rel="stylesheet/scss"
       lang="scss"
       scoped>
  $bg: #fff;
  $dark_gray: #889aa4;
  $light_gray: #eee;

  .forget-container {
    background-color: $bg;
    .login-form {
      width: 520px;
      padding: 35px;
      margin: 120px auto;
      /*background: #eaeaea;*/
      /*box-shadow: 0px 0 3px #000;*/
      border: 1px solid #eaeaea;
      /*border-radius: 10px;*/
    }
    .tips {
      font-size: 14px;
      color: #fff;
      margin-bottom: 10px;
      span {
        &:first-of-type {
          margin-right: 16px;
        }
      }
    }
    .svg-container {
      padding: 6px 5px 6px 15px;
      color: $dark_gray;
      vertical-align: middle;
      width: 30px;
      display: inline-block;
      font-size: 20px;
      &_login {
        font-size: 25px;
      }
    }
    .title-container {
      position: relative;
      .title {
        font-size: 32px;
        color: #333;
        margin: 0px auto 40px auto;
        text-align: center;
        font-weight: bold;
      }
      .set-language {
        color: #fff;
        position: absolute;
        top: 5px;
        right: 0px;
      }
    }
    .show-pwd {
      position: absolute;
      right: 10px;
      top: 7px;
      font-size: 16px;
      color: $dark_gray;
      cursor: pointer;
      user-select: none;
    }
    .thirdparty-button {
      position: absolute;
      right: 35px;
      bottom: 28px;
    }
  }
</style>
