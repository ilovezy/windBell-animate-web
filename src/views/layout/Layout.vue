<template>
  <div class="app-wrapper">
    <!--<top-action-bar></top-action-bar>-->
    <navbar></navbar>
    <app-main></app-main>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import { TopActionBar, Navbar, AppMain, AppFooter } from './components'

  export default {
    name: 'layout',
    components: {
      TopActionBar, Navbar, AppMain, AppFooter
    },
    computed: {},
    created() {
    },
    methods: {}
  }
</script>

<style rel="stylesheet/scss"
       lang="scss"
       scoped>
  @import "src/styles/mixin.scss";

  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
  }
</style>
