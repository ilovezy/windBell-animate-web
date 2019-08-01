<template>
  <div class='footer'>
    <div class='footer-wrap global-container'>
      <div class='part-footer'>
        <div>
          <a href='http://www.miitbeian.gov.cn/'
             target='_blank'>浙ICP备19001732号
          </a>
        </div>
        <div>浙网文 [2019] 0653-054号</div>
      </div>
      <div class='part-footer'>
        <div>Copyright © 杭州久和星途网络科技有限公司</div>
        <div>联系方式：13308053460</div>
        <div>公司地址：浙江省杭州市下城区康宁街80号1幢B座217室</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    computed: {},
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style rel="stylesheet/scss"
       lang="scss"
       scoped>
  @import "src/styles/mixin.scss";

  .footer {
    background: #7d7d7f;
    color: #fff;
    padding: 30px 0;

  }

  .footer-wrap {
    display: flex;

    .part-footer {
      margin-right: 100px;
      > div {
        margin-bottom: 15px;
      }
    }
  }
</style>
