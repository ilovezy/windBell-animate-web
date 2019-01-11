<template>
  <div class="index-page">
    <h1>安全保障</h1>

    <div class='global-container'>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio enim eum iusto magnam nostrum, quos recusandae sint tenetur. Adipisci assumenda corporis delectu
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data() {
      return {

      }
    },

    mounted() {
    },

    methods: {

    }
  }
</script>

<style rel="stylesheet/scss"
       lang="scss"
>
  .index-page {
    .el-carousel__item h3 {
      color: #475669;
      font-size: 18px;
      opacity: 0.75;
      line-height: 300px;
      margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
      background-color: #d3dce6;
    }
  }
</style>
