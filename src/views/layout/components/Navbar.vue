<template>
  <div class='navbar '>
    <div class='navbar-wrap global-container'>
      <div class='logo' @click='goIndex'>
        <img src='./img/logo.png' class='layout-logo'
             alt=''>风铃动漫 <div class='sub-title'>大家一起来看动漫</div>
      </div>

      <div class='nav-list'>
        <el-input placeholder="搜索动漫" v-model="input5" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <!--<router-link class='nav-list-item'-->
                     <!--to="/myAccount">-->
          <!--个人中心-->
        <!--</router-link>-->
        <!--<router-link class='nav-list-item'-->
                     <!--to="/dealDetail">-->
          <!--日发金融合约明细-->
        <!--</router-link>      <router-link class='nav-list-item'-->
                     <!--to="/download">-->
          <!--软件下载-->
        <!--</router-link>-->
        <!--<router-link class='nav-list-item item-my-account'-->
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    components: {},
    computed: {
      ...mapGetters([
        'sidebar'
      ])
    },
    data() {
      return {
        input5: '',
        isTestEnv: window.CurrentEnv == 'development'
      }
    },
    methods: {
      goIndex(){
        this.$router.push('/')
      }
    }
  }
</script>

<style rel="stylesheet/scss"
       lang="scss"
       scoped>
  @import "src/styles/mixin.scss";

  .navbar {
    border-bottom: 1px solid #e2e2e2;
    height: 80px;
    line-height: 80px;

    .navbar-wrap {
      @include flex-between;
      overflow: hidden;
      height: 100%;

      .logo {
        font-size: 36px;
        height: 80px;
        color: #666;
        cursor: pointer;
        display: flex;

        .layout-logo {
          width: 50px;
          height: auto;
          padding-right: 10px;
        }

        .sub-title {
          font-size: 20px;
          color: #999;
          padding-left: 10px;
          font-style: italic;
          position: relative;
          top: 6px;
        }
      }

      .nav-list {
        height: 100%;
        .nav-list-item {
          display: inline-block;
          padding: 0 20px;
          box-sizing: border-box;
          height: 100%;
          color: #999;
          &.router-link-exact-active {
            border-bottom: 3px solid #ea494f;
          }

          &.item-my-account {
            margin-left: 80px;
            &.router-link-active {
              border-bottom: 3px solid #ea494f;
            }
          }
        }
      }
    }
  }
</style>
