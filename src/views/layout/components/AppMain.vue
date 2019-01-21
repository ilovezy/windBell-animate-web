<template>
  <section class="app-main">
    <transition :name="transitionName"
                mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view :key="key"></router-view>
      </keep-alive>
    </transition>
  </section>
</template>

<script>
  export default {
    name: 'AppMain',
    computed: {
      cachedViews() {
        // return this.$store.state.tagsView.cachedViews
      },
      key() {
        return this.$route.fullPath
      }
    },

    data() {
      return {
        transitionName: 'fade-transform'
      }
    },

    watch: {
      $route(to, from) {
        const toFullPath = to.fullPath
        const fromFullPath = from.fullPath
        if (this.isMyAccountRoute(toFullPath, fromFullPath)) {
          this.transitionName = ''
        } else {
          this.transitionName = 'fade-transform'
        }
      }
    },

    methods: {
      isMyAccountRoute(toFullPath, fromFullPath) {
        return toFullPath.indexOf('/myAccount') > -1 && fromFullPath.indexOf('/myAccount') > -1
      }
    }
  }
</script>

<style rel="stylesheet/scss"
       lang="scss"
       scoped>
  @import "src/styles/mixin.scss";

  .app-main {
    /*84 = navbar + tags-view = 50 +34 TODO top-action-bar + navbar + appFooter */
    /*min-height: calc(100vh - 130px);*/
    /*height: calc(100vh - 130px);*/
    position: relative;
    overflow: hidden;
    overflow-y: auto;
    /*top: 84px;*/
  }
</style>

