<template>
  <div class="bindBankCard-part">
    <div class='title'>
      绑定银行卡<span v-if='bindCardFlag'>成功</span>
      <p style='font-size: 14px; color: #ff4426;margin-top: 5px;'>注释：请您务必填写与户名一致的银行卡号，如果身份信息与出金银行账户名字不一致，可能会导致无法出金。</p>
    </div>

    <div v-loading="loading">
      <div v-if='!loading'>
        <div v-if='!realNameFlag'>
          <el-alert
            title="提示"
            description="请先开通实名认证"
            type="warning"
            :closable='false'
            show-icon>
          </el-alert>
        </div>

        <div v-else>
          <div v-if='showSuccess'
               class='success-wrap'>
            <div class='success-icon'>
              <div class='icon-wrap'>
                <span class='iconfont icon-cces-Red-Iconfont-copy'></span>
              </div>
            </div>
            <div class='title'>银行卡绑定成功！</div>
          </div>
          <div v-else>
            <el-form status-icon
                     style='margin-top: 30px;'
                     ref="ruleForm2"
                     label-width="100px"
                     class="demo-ruleForm">
              <div style='padding: 15px; padding-bottom: 0;background: #f8f8f8; margin-bottom: 15px;'>
                <el-form-item label="开户人"
                              prop="trueName"
                              style='margin-bottom: 0px;'>
                  {{trueName}}
                </el-form-item>
                <el-form-item label="身份证号码"
                              prop="identityNo">
                  {{identityNo}}
                  <br> <span style='color: red'>(认证已完成不可更改)</span>
                </el-form-item>
              </div>
              <el-form-item label="银行名称"
                            prop="bankName">
                <el-input placeholder="请输入银行名称"
                          v-model="bankName"
                          autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="开户支行"
                            prop="bankBranch">
                <el-input placeholder="请输入开户支行"
                          v-model="bankBranch"
                          autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="开户地址"
                            prop="trueName">
                <v-distpicker :province='provinceName'
                              :city='cityName'
                              :area='areaName'
                              @province='changeProvince'
                              @city='changeCity'
                              @area='changeArea'></v-distpicker>
              </el-form-item>

              <el-form-item label="开户银行卡号"
                            prop="trueName">
                <el-input type="number"
                          placeholder="请输入开户银行卡号"
                          maxlength="10"
                          v-model="cardNo"
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
  </div>
</template>

<script>
  import VDistpicker from 'v-distpicker'

  export default {
    components: { VDistpicker },

    name: 'leftNav',
    data() {
      return {
        cardNo: '',
        provinceCode: '',
        provinceName: '',
        cityCode: 0,
        cityName: '',
        areaCode: 0,
        areaName: '',
        bankName: '',
        bankBranch: '',

        loading: true,
        bindCardFlag: false,
        trueName: '',
        identityNo: '',
        realNameFlag: false,
        showSuccess: false
      }
    },
    created() {
      this.getToken()
    },
    computed: {
      address() {
        return this.provinceName + this.cityName + this.areaName
      }
    },
    methods: {
      changeProvince(data) {
        this.provinceCode = data.code
        this.provinceName = data.value
      },
      changeCity(data) {
        this.cityCode = data.code
        this.cityName = data.value
      },
      changeArea(data) {
        this.areaCode = data.code
        this.areaName = data.value
      },
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
          this.bindCardFlag = res.bindCardFlag
          this.realNameFlag = res.realNameFlag
          this.cardNo = res.cardNo
          this.trueName = res.trueName
          this.identityNo = res.identityNo
          this.bankName = res.cardBankName
          this.bankBranch = res.cardBankBranch
          this.provinceCode = res.cardProvinceCode
          this.provinceName = res.cardProvinceName
          this.cityCode = res.cardCityCode
          this.cityName = res.cardCityName
          this.areaCode = res.cardDictCode
          this.areaName = res.cardDictName
          this.loading = false
          this.$store.dispatch('UPDATE_USER_INFO', res)
        })
      },
      validForm() {
        if (!this.bankName) {
          this.$message.warning('请填写银行名称')
          return
        }
        if (!this.bankBranch) {
          this.$message.warning('请填写开户支行')
          return
        }
        if (!this.provinceCode) {
          this.$message.warning('请选择开户地址')
          return
        }
        if (!isValidCardNumber(this.cardNo)) {
          this.$message.warning('请输入正确的开户银行卡号')
          return
        }
        this.doRegister()
      },

      // 提交注册
      doRegister() {
        const self = this
        AXIOS.post('/api/member/bindCard', {
          cardNo: this.cardNo,
          provinceCode: this.provinceCode,
          provinceName: this.provinceName,
          cityCode: this.cityCode,
          cityName: this.cityName,
          dictCode: this.areaCode, // 后天区的字段为 dictCode
          dictName: this.areaName, // 后天区的字段为 dictCode
          address: this.address,
          bankName: this.bankName,
          bankBranch: this.bankBranch
        }).then(res => {
          self.registerSuccess(res)
        })
      },

      registerSuccess(res) {
        this.$message.success('绑卡成功！')
        setTimeout(() => {
          this.showSuccess = true
        }, 1000)
      }
    }
  }
</script>

<style rel="stylesheet/scss"
       lang="scss"
       scoped>
  .bindBankCard-part {
    .title {
      font-size: 30px;
    }
  }
</style>
