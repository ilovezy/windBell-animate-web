<template>
  <div class='top-action-bar'>
    <div class='top-action-bar-wrap global-container'>
      <div class='left'>
        <!--客服热线：400-150-8080 （工作日时间：8:00-20:00）-->
      </div>
      <div class='right' v-if='userInfo.name'>
        <span>欢迎您: {{userInfo.name}}</span>
        <span @click='doLogout' style='margin-left: 30px;cursor: pointer;'>安全退出</span>
      </div>
      <div class='right' v-else>
        <router-link to='/login' class='item'>登录</router-link>
        <router-link to='/register' class='item'>注册</router-link>
        <!--<router-link to='/inviteFriend' class='item'>邀请好友</router-link>-->
        <!--<router-link to='/helpCenter' class='item'>帮助中心</router-link>-->
        <!--<span class='item'>关注我们</span>-->
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      count() {
        return this.$store.state.user.count
      },

      userInfo() {
        return this.$store.state.user.userInfo
      }
    },
    data() {
      return {
        logined: false
      }
    },
    created() {
      this.getIsLogin()
    },
    methods: {
      getIsLogin() {
        this.logined = USER.isLogin()
      },

      doLogout() {
        USER.logout()
        this.$message.success('安全退出成功,请重新登录')
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
  @import "src/styles/mixin.scss";

  .top-action-bar {
    height: 50px;
    line-height: 50px;
    background: #f5f8ff;

    .top-action-bar-wrap {
      @include flex-between();

      .item {
        display: inline-block;
        margin-left: 20px;
      }
    }
  }
</style>
