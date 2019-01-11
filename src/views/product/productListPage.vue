<template>
  <div class="product-list-page">
    <h1>product list </h1>
    <el-carousel>
      <el-carousel-item v-for="item in 4"
                        :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>

    <div class='product-list-wrap global-container'>
      <p class='temp'
         v-for="item,index in list">
        Line:
        <span v-text="item"
              :key='index'></span>
      </p>
      <infinite-loading @infinite="infiniteHandler"
                        spinner="spiral">
        <div slot='no-result'>没有结果</div>
        <div slot='no-more'>没有更多了</div>
      </infinite-loading>
    </div>

    <el-tooltip placement="top"
                content="返回顶部">
      <back-to-top transitionName="fade"
                   :customStyle="myBackToTopStyle"
                   :visibilityHeight="300"
                   :backPosition="50"></back-to-top>
    </el-tooltip>
  </div>
</template>

<script>
  import InfiniteLoading from 'vue-infinite-loading'
  import BackToTop from '@/components/BackToTop'

  export default {
    name: 'index',
    components: {
      InfiniteLoading, BackToTop
    },
    data() {
      return {
        list: [1, 2, 3, 4, 5, 6],
        myBackToTopStyle: {
          right: '50px',
          bottom: '50px',
          width: '40px',
          height: '40px',
          'border-radius': '4px',
          'line-height': '45px', // 请保持与高度一致以垂直居中 Please keep consistent with height to center vertically
          background: '#e7eaf1'// 按钮的背景颜色 The background color of the button
        }
      }
    },

    mounted() {
    },

    methods: {
      infiniteHandler($state) {
        setTimeout(() => {
          if (this.list.length > 30) {
            $state.complete()
          } else {
            const temp = []
            for (let i = this.list.length + 1; i <= this.list.length + 10; i++) {
              temp.push(i)
            }
            this.list = this.list.concat(temp)
            $state.loaded()
          }
        }, 1000)
      }
    }
  }
</script>

<style rel="stylesheet/scss"
       lang="scss"
       scoped>

  .product-list-wrap {
    padding-bottom: 100px;
  }

  .temp {
    height: 100px;
    padding: 15px;
    border: 1px solid red;
    box-sizing: border-box;
    font-size: 30px;
    animation: fadeItemIn 1s ease;
  }

  @keyframes fadeItemIn {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
