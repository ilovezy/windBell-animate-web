<template>
  <div class="index-page">
    <h1>帮助中心 </h1>

    <div class='global-container'>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio enim eum iusto magnam nostrum, quos recusandae sint tenetur. Adipisci assumenda corporis delectus dolore enim expedita illo ipsam libero magnam temporibus? Et illum natus placeat quae quaerat recusandae velit. Ab ad aliquam assumenda dicta dolor eligendi eos eum excepturi expedita fugit id illo ipsum laboriosam laudantium libero maiores maxime minima molestiae natus n
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
