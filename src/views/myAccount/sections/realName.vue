<template>
  <div class="realName-part"
       v-loading="loading">

    <div v-if='!loading'>
      <div class='info-wrap'
           v-if='realNameFlag'>
        <div class='info-item'
             style='font-size: 30px;margin-bottom: 30px;'>实名认证<span v-if='realNameFlag'>成功</span>
        </div>
        <div class='info-item'>
          <span class='label'>真实姓名:</span> {{trueName}}
        </div>
        <div class='info-item'>
          <span class='label'>身份证号码:</span> {{identityNo}}
        </div>
      </div>

      <div v-else>
        <div v-if='showSuccess'
             class='success-wrap'>
          <div class='success-icon'>
            <div class='icon-wrap'>
              <span class='iconfont icon-cces-Red-Iconfont-copy'></span>
            </div>
          </div>
          <div class='title'>实名认证成功！</div>
        </div>
        <div v-else>
          <el-form status-icon
                   ref="ruleForm2"
                   label-width="100px"
                   class="demo-ruleForm">
            <el-form-item label="真实姓名"
                          prop="trueName">
              <el-input type="text"
                        v-model="trueName"
                        autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="身份证号码"
                          prop="identityNo">
              <el-input type="text"
                        v-model="identityNo"
                        autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary"
                         @click="validForm">确定
              </el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        trueName: '',
        identityNo: '',
        loading: true,
        realNameFlag: false, showSuccess: false

      }
    },

    created() {
      this.getToken()
    },
    mounted() {
    },

    methods: {
      getToken() {
        if (USER.isLogin()) {
          this.getAccount()
        } else {
          USER.logout()
          this.$message.warning('请重新登录')
          setTimeout(() => {
            this.$router.push('/login')
          }, 2000)
        }
      },

      getAccount() {
        AXIOS.post('/api/member/center').then(res => {
          this.realNameFlag = res.realNameFlag
          this.trueName = res.trueName
          this.identityNo = res.identityNo
          this.loading = false
          this.$store.dispatch('UPDATE_USER_INFO', res)
        })
      },

      validForm() {
        if (!isValidUserName(this.trueName)) {
          this.$message.warning('真实姓名不正确，2-18位之间')
          return
        }
        if (!isValidIdentityNum(this.identityNo)) {
          this.$message.warning('身份证号码格式不正确')
          return
        }
        this.doConfirm()
      },

      // 提交注册
      doConfirm() {
        const self = this
        AXIOS.post('/api/member/realName', {
          trueName: this.trueName,
          identityNo: this.identityNo
        }).then(res => {
          self.registerSuccess(res)
        })
      },

      registerSuccess(res) {
        if (res) {
          this.$message.success('实名认证成功')
          this.showSuccess = true
          setTimeout(() => {
            // this.getToken()
            this.getAccount()
          }, 1000)
        }
      }
    }
  }
</script>

<style rel="stylesheet/scss"
       lang="scss"
       scoped>
  .info-wrap {
    .info-item {
      font-size: 20px;
      margin-bottom: 15px;
    }
  }
</style>
