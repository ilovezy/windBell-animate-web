<template>
  <div class='recharge-part'>
    <div class='info-item'
         style='font-size: 30px;margin-bottom: 30px;'>我要入金
    </div>

    <div v-if='loading'
         v-loading='loading'
         style='padding: 30px;'>
    </div>
    <div v-else>
      <div v-if='!realNameFlag'>请先进行实名认证</div>

      <div v-else>
        <div v-if='showSuccess'
             class='success-wrap'>
          <div class='success-icon'>
            <div class='icon-wrap'>
              <span class='iconfont icon-cces-Red-Iconfont-copy'></span>
            </div>
          </div>
          <div class='title'>入金成功！</div>
          <div class='success-footer'>
            <el-button @click="showSuccess = false">继续入金
            </el-button>
            <el-button type="primary"
                       @click="goRecord">查看入金记录
            </el-button>
          </div>
        </div>
        <div v-else>
          <el-form ref="form"
                   label-width="120px">
            <el-form-item label="充值金额（￥）"
                          style='margin-bottom: 0;'>
              <el-input v-model.number="amount"
                        style='width: 200px'
                        type='number'
                        placeholder="输入充值金额"
                        maxlength="10"></el-input>
              <span style='margin-left: 15px;'>(USD) : {{usdAmount}}</span>
            </el-form-item>
            <el-form-item label="">
              <p style='margin-bottom: 0.4rem;'>
                汇率：<span style='color: orangered;'>7.75</span>
                <span style='color: #aaa; margin-left: 15px;'>（入金时间：周一至周五9:00-24:00）</span>
              </p>
            </el-form-item>
          </el-form>

          <div class='select-pay-way-wrap'>
            <div class='title-sm'>选择支付方式</div>

            <div class='pay-way-container'>
        <span class='alipay-item'
              @click='selectAli'
              :class='type == "alipay" && "active"'>
          <span class='iconfont icon-umidd317 ali-icon'></span> 支付宝
        </span>
              <span class='bank-item'
                    @click='selectBank'
                    :class='type == "bank_card" && "active"'>
          <img src='./img/bank.png'
               class='bank-icon'
               alt=''>银联
        </span>
            </div>

            <div class='info-container'>
              <div v-if='type == "alipay"'>
                <div class='qrcode'>
                  <img src='./img/qrcode.png'
                       alt=''>
                </div>
              </div>
              <div v-if='type == "bank_card"'>
                <div class='bank-wrap'>
                  <div class='item'>户名：王萃</div>
                  <div class='item'>开户银行：中国银行杭州文晖支行</div>
                  <div class='item'>开户银行卡号：6216696200004027992</div>
                </div>
                <div class='bank-wrap'>
                  <div class='item'>户名：王萃</div>
                  <div class='item'>开户银行：中国工商银行大关苑支行</div>
                  <div class='item'>开户银行卡号：6212261202048343587</div>
                </div>
                <div class='bank-wrap'>
                  <div class='item'>户名：王萃</div>
                  <div class='item'>开户银行：中国建设银行武林支行</div>
                  <div class='item'>开户银行卡号：6236681540002872542</div>
                </div>
              </div>
              <div style='color: red; margin-top: 15px;'>(转账备注交易账号+姓名)</div>
            </div>
          </div>

          <div class='notice-container '
               style='padding: 15px;background: rgb(248, 248, 248); margin-top: 15px; margin-bottom: 15px;'>
            <div style='margin-bottom: 10px;'>1.支付时请务必填写页面显示附言，若没有填写则会导致入金无法到账，请及时联系客服人员，支付过程中请附言上您的交易账号，以便我们查询</div>
            <div style='margin-bottom: 10px;'>2.转账后，发送转账明细截图至您的专属客户经理或本司客服</div>
            <div style='margin-bottom: 10px;'>3.为确保资金及时到账，请选择“实时转账”，我方收款后，15分钟内办理</div>
            <div style='margin-bottom: 10px;'>4.花呗、信用卡入金通道费用千8/笔</div>
          </div>

          <el-button type="primary"
                     @click="validForm">我已经确认支付，确认
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        amount: '',
        type: 'alipay',
        loading: true,
        bindCardFlag: false,
        openAccountFlag: false,
        realNameFlag: false,

        showSuccess: false
      }
    },
    created() {
      this.getToken()
    },
    computed: {
      usdAmount() {
        return Number(parseFloat(this.amount / 7.75).toFixed(3).slice(0, -1))
      }
    },
    methods: {
      goRecord() {
        this.$router.push('/myAccount/rechargeList')
      },
      selectAli() {
        this.type = 'alipay'
      },
      selectBank() {
        this.type = 'bank_card'
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
        if (this.amount) {
          this.doConfirm()
        } else {
          this.$message.warning('请输入入金金额')
        }
      },

      // 提交注册
      doConfirm() {
        const self = this
        AXIOS.post('/api/member/recharge', {
          amount: this.amount,
          type: this.type
        }).then(res => {
          self.registerSuccess(res)
        })
      },

      registerSuccess(res) {
        if (res) {
          this.$message.success('入金成功')
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

  .recharge-part {
    .form-body {
      margin-top: 0.5rem !important;
    }

    .select-pay-way-wrap {
      .title-sm {
        margin-bottom: 15px;
        font-size: 20px;
      }

      .pay-way-container {
        display: flex;
        padding-bottom: 15px;

        .alipay-item,
        .bank-item {
          cursor: pointer;
          border: 1px solid #eee;
          display: flex;
          align-items: center;
          width: 130px;
          height: 70px;
          margin-right: 20px;
          padding-left: 15px;
          transition: all 0.4s ease;

          &.active {
            border: 1px solid #1296db;
          }
        }

        .alipay-item {
          .ali-icon {
            color: #1296db;
            font-size: 40px;
            display: inline-block;
            margin-right: 10px;
          }
        }

        .bank-item {
          .bank-icon {
            display: inline-block;
            width: 50px;
            margin-right: 10px;
          }
        }
      }

    }

    .info-container {
      .qrcode {
        width: 150px;
        height: 150px;
      }

      .bank-wrap {
        display: inline-block;
        margin-right: 10px;
        margin-bottom: 10px;
        border: 1px solid #aaa;
        border-radius: 5px;
        padding: 10px;
        .item {
          margin-bottom: 0.3rem;
          font-size: 14px;
        }
      }
    }

    .btn-default {
      border: 1px solid #eaeaea;
      margin-top: 0.5rem;
      border-radius: 0;
    }
  }

</style>
