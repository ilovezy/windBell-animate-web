<template>
  <div class="withdraw-part">
    <div class='info-item'
         style='font-size: 30px;margin-bottom: 30px;'>我要出金
    </div>

    <div v-if='loading'
         v-loading='loading'
         style='padding: 30px;'>
    </div>
    <div v-else>
      <div v-if='!realNameFlag'>请先进行实名认证</div>
      <div v-else-if='!bindCardFlag'>请先绑定银行卡</div>

      <div v-else>
        <div v-if='showSuccess'
             class='success-wrap'>
          <div class='success-icon'>
            <div class='icon-wrap'>
              <span class='iconfont icon-cces-Red-Iconfont-copy'></span>
            </div>
          </div>
          <div class='title'>出金申请成功！</div>
          <div class='success-footer'>
            <el-button @click="showSuccess = false">继续出金
            </el-button>
            <el-button type="primary"
                       @click="goRecord">查看出金记录
            </el-button>
          </div>
        </div>
        <div v-else>
          <el-form status-icon
                   style='margin-top: 30px;'
                   ref="ruleForm2"
                   label-width="140px"
                   class="demo-ruleForm">
            <!--<el-form-item label="可用资金(USD)"-->
                          <!--prop="amount">-->
              <!--${{availableBalance}}-->
            <!--</el-form-item>-->
            <el-form-item label="出金金额"
                          prop="amount">
              <el-input type="number"
                        style='width: 200px'
                        placeholder="输入出金金额"
                        maxlength="10"
                        v-model.number="amount"></el-input>
              <span style='margin-left: 15px;'>￥{{rmbAmount}}</span>
            </el-form-item>
            <el-form-item label="">
              <p style='margin-bottom: 0.4rem;'>
                汇率：<span style='color: orangered;'>7.75</span>
              </p>
            </el-form-item>

            <div class='notice-container '
                 style='padding: 15px;background: rgb(248, 248, 248); margin-bottom: 15px;'>
              <div style='margin-bottom: 10px;'>1.出金申请提交时间为交易日9:00-16:30，超过时段提交无效</div>
              <div style='margin-bottom: 10px;'>2.出金办理时间为1个交易日内，一般2个小时内办理，以银行处理为准</div>
            </div>
            <el-button type="primary"
                       style='width: 100px'
                       @click="validForm">确定
            </el-button>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import AXIOS from '../../../../global/Fetch'

export default {
    data() {
      return {
        amount: '',
        availableBalance: '',
        bindCardFlag: false,
        openAccountFlag: false,
        realNameFlag: false,
        loading: true,
        showSuccess: false
      }
    },
    created() {
      this.getToken()
    },
    computed: {
      rmbAmount() {
        return Number(parseFloat(this.amount * 7.75).toFixed(3).slice(0, -1))
      }
    },
    methods: {
      goRecord() {
        this.$router.push('/myAccount/withdrawList')
      },
      getToken() {
        if (USER.isLogin()) {
          this.getAccount()
        } else {
          USER.logout()
          this.$message.warning('请重新登录')
          setTimeout(() => {
            this.$router.push('/login')
          }, 1000)
        }
      },
      getAccount() {
        AXIOS.post('/api/member/center').then(res => {
          this.loading = false
          this.availableBalance = res.availableBalance
          this.balance = res.balance
          this.bindCardFlag = res.bindCardFlag
          this.name = res.name
          this.openAccountFlag = res.openAccountFlag
          this.realNameFlag = res.realNameFlag
          this.account = res.account
          this.$store.dispatch('UPDATE_USER_INFO', res)
        })
      },

      validForm() {
        if (!this.amount) {
          this.$message.warning('请输入出金金额')
          return
        }
        // if (this.amount > this.availableBalance) {
        //   this.$message.warning('可用资金不足');
        //   return
        // }
        this.doConfirm()
      },

      // 提交注册
      doConfirm() {
        const self = this
        AXIOS.post('/api/member/withdraw', {
          amount: this.amount
        }).then(res => {
          self.registerSuccess(res)
        })
      },

      registerSuccess(res) {
        if (res) {
          this.$message.success('出金申请成功')
          this.showSuccess = true
          this.amount = ''
        }
      }
    }
  }
</script>

<style rel="stylesheet/scss"
       lang="scss"
       scoped>
  .withdraw-part {

  }
</style>
