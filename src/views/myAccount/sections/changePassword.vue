<template>
  <div class="changePassword-part">
    <el-form status-icon
             ref="ruleForm2"
             label-width="100px"
             class="demo-ruleForm">
      <el-form-item label="老密码"
                    prop="oldPassword">
        <el-input type="text"
                  v-model="oldPassword"
                  autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="新密码"
                    prop="newPassword">
        <el-input type="text"
                  v-model="newPassword"
                  autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"
                   @click="validForm">确定
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        oldPassword: '',
        newPassword: ''
      }
    },
    created() {
      this.getToken()
    },
    methods: {
      getToken() {
        if (!USER.isLogin()) {
          USER.logout()
          this.$message.warning('请重新登录')
          setTimeout(() => {
            this.$router.push('/login')
          }, 2000)
        }
      },

      validForm() {
        if (!isValidPassword(this.oldPassword)) {
          this.$message.warning('老密码格式不正确，长度为6-16位')
          return
        }
        if (!isValidPassword(this.newPassword)) {
          this.$message.warning('新密码格式不正确，长度为6-16位')
          return
        }
        if (this.oldPassword == this.newPassword) {
          this.$message.warning('新,老密码不能一样')
          return
        }
        this.doConfirm()
      },

      // 提交注册
      doConfirm() {
        const self = this
        AXIOS.post('/api/member/password/change', {
          oldPassword: this.oldPassword,
          newPassword: this.newPassword
        }).then(res => {
          self.registerSuccess(res)
        })
      },

      registerSuccess(res) {
        if (res) {
          this.$message.success('修改成功, 请重新登录')
          const self = this
          setTimeout(() => {
            self.doLogout()
          }, 1000)
        }
      },

      doLogout() {
        USER.logout()
        setTimeout(() => {
          this.$router.push('/login')
          this.$store.dispatch('UPDATE_USER_INFO', {})
        }, 1000)
      }
    }
  }
</script>

<style rel="stylesheet/scss"
       lang="scss"
       scoped>
  .changePassword-part {

  }
</style>
