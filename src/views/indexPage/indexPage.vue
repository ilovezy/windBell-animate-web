<template>
  <div class="index-page">
    <el-carousel class='index-scroll-wrap'
                 style='height: 400px; margin-bottom: 20px;'>
      <el-carousel-item class='index-scroll-item'
                        style='height: 400px'>
        <img src='./img/banner1.jpg'
             alt=''>
      </el-carousel-item>
      <el-carousel-item class='index-scroll-item'
                        style='height: 400px'>
        <img src='./img/banner2.jpg'
             alt=''>
      </el-carousel-item>
    </el-carousel>

    <div class='global-container'>

      <div class='main-section'>
        <el-row>
          <el-col :span='12'>
            <h3 class='spe-title'>编辑力推</h3>
          </el-col>
        </el-row>
        <el-row :gutter='30'>
          <el-col :span="4">
            <el-card :body-style="{ padding: '0px' }">
              <img src="./img/img-sm/20160819_sy_225_15.jpg"
                   class="image">
              <div style="padding: 14px;">
                <div class='book-title'>全职高手</div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="4">
            <el-card :body-style="{ padding: '0px' }">
              <img src="./img/img-sm/20170509_sy_225_14.jpg"
                   class="image">
              <div style="padding: 14px;">
                <div class='book-title'>拳皇命运</div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="4">
            <el-card :body-style="{ padding: '0px' }">
              <img src="./img/img-sm/20161207_ljt_220_1.jpg"
                   class="image">
              <div style="padding: 14px;">
                <div class='book-title'>风夏</div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="4">
            <el-card :body-style="{ padding: '0px' }">
              <img src="./img/img-sm/20180427_ljt_220_4.jpg"
                   class="image">
              <div style="padding: 14px;">
                <div class='book-title'>全职高手2</div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="4">
            <el-card :body-style="{ padding: '0px' }">
              <img src="./img/img-sm/20180613_ljt_220_34.jpg"
                   class="image">
              <div style="padding: 14px;">
                <div class='book-title'>魔道祖师</div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="4">
            <el-card :body-style="{ padding: '0px' }">
              <img src="./img/img-sm/20170308_ljt_220_21.jpg"
                   class="image">
              <div style="padding: 14px;">
                <span>进击的巨人</span>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>

      <div class='main-section'>
        <el-row>
          <el-col :span='12'>
            <h3 class='spe-title2'>国产好漫画</h3>
          </el-col>
        </el-row>
        <el-row :gutter='30'>
          <el-col :span="4">
            <el-card :body-style="{ padding: '0px' }">
              <img src="./img/img-sm/20180727_ljt_220_1.jpg"
                   class="image">
              <div style="padding: 14px;">
                <div class='book-title'>苍之涛</div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="4">
            <el-card :body-style="{ padding: '0px' }">
              <img src="./img/img-sm/20180406_ljt_220_5.jpg"
                   class="image">
              <div style="padding: 14px;">
                <div class='book-title'>一人之下</div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="4">
            <el-card :body-style="{ padding: '0px' }">
              <img src="./img/img-sm/20180906_ljt_220_22.jpg"
                   class="image">
              <div style="padding: 14px;">
                <div class='book-title'>星辰变</div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="4">
            <el-card :body-style="{ padding: '0px' }">
              <img src="./img/img-sm/20180613_ljt_220_32.jpg"
                   class="image">
              <div style="padding: 14px;">
                <div class='book-title'>西行记</div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="4">
            <el-card :body-style="{ padding: '0px' }">
              <img src="./img/img-sm/20180613_ljt_220_34.jpg"
                   class="image">
              <div style="padding: 14px;">
                <div class='book-title'>魔道祖师</div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="4">
            <el-card :body-style="{ padding: '0px' }">
              <img src="./img/img-sm/20181212_ljt_220_34.jpg"
                   class="image">
              <div style="padding: 14px;">
                <span>武动乾坤</span>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data() {
      return {
        currentDate: new Date(),
        imgList: [{
          url: './img/banner1.jpg',
        }, {
          url: './img/banner2.jpg',
        },]
      }
    },

    mounted() {
    },

    methods: {}
  }
</script>

<style rel="stylesheet/scss"
       lang="scss">
  /*@import "indexPage";*/
  .index-scroll-wrap {
    height: 400px;
    .index-scroll-item {
      height: 400px;
      img{
        width: 1920px;
        height: 400px!important;
      }
    }
  }

  .spe-title {
    border-left: 4px solid #3A71A8;
    padding-left: 15px;
    font-size: 30px;
    color: #999;
  }
  .spe-title2 {
    border-left: 4px solid orangered;
    padding-left: 15px;
    font-size: 30px;
    color: #999;
  }
  .main-section {
    margin-bottom: 50px;
  }
</style>
