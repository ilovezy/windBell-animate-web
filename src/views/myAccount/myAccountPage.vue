<template>
  <div class="my-account-page">
    <div v-if='loading' style='padding: 100px;' v-loading='loading'>

    </div>
    <div class='my-account-page-wrap global-container' v-else>
      <left-nav></left-nav>

      <div class='my-account-container'>
        <router-view :key="key"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import LeftNav from './component/LeftNav'

  export default {
    components: {
      LeftNav
    },
    computed: {
      key() {
        return this.$route.fullPath
      }
    },
    name: 'myAccount',
    created() {
      this.setLogin()
    },
    data() {
      return {
        loading: true
      }
    },

    methods: {
      setLogin() {
        if (USER.isLogin()) {
          this.loading = false
        } else {
          this.$router.push('/login')
        }
      }
    }

  }
</script>

<style rel="stylesheet/scss"
       lang="scss">
  .my-account-page {
    height: 100%;
    .my-account-page-wrap {
      height: 100%;
      display: flex;
      justify-content: space-between;
      .left-nav {
        width: 220px;
        display: inline-block;
        border-right: 1px solid #e2e2e2;
        box-sizing: border-box;
      }

      .my-account-container {
        display: inline-block;
        flex: 1;

        >div {
          animation: slide 0.5s ease;
          padding: 40px;
        }
      }
    }

    @keyframes slide {
      0% {
        transform: translateY(20px);
        opacity: 0;
      }

      100% {
        transform: translateY(0px);
        opacity: 1;
      }
    }


  }
</style>
