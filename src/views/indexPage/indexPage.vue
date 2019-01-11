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
        <el-row :gutter='50'>
          <el-col :span='18'>
            <h3 class='spe-title'>编辑力推</h3>
            <el-row :gutter='15'>
              <el-col :span="6">
                <el-card :body-style="{ padding: '0px' }">
                  <img src="./img/img-sm/20160819_sy_225_15.jpg"
                       class="image">
                  <div style="padding: 14px;">
                    <div class='book-title'>全职高手</div>
                  </div>
                </el-card>
              </el-col>
              <el-col :span="6">
                <el-card :body-style="{ padding: '0px' }">
                  <img src="./img/img-sm/20170509_sy_225_14.jpg"
                       class="image">
                  <div style="padding: 14px;">
                    <div class='book-title'>拳皇命运</div>
                  </div>
                </el-card>
              </el-col>
              <el-col :span="6">
                <el-card :body-style="{ padding: '0px' }">
                  <img src="./img/img-sm/20161207_ljt_220_1.jpg"
                       class="image">
                  <div style="padding: 14px;">
                    <div class='book-title'>风夏</div>
                  </div>
                </el-card>
              </el-col>
              <el-col :span="6">
                <el-card :body-style="{ padding: '0px' }">
                  <img src="./img/img-sm/20180427_ljt_220_4.jpg"
                       class="image">
                  <div style="padding: 14px;">
                    <div class='book-title'>全职高手2</div>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </el-col>

          <el-col :span='6'>
            <h3 class='spe-title'>漫画排行榜</h3>

            <div class='list-wrap'>
              <div class='list-item'
                   v-for='(item, index) in list1'
                   :key='index'>
                <div class='list-left-part'>
                  <span class='list-icon'>{{index + 1}}</span>
                  <span class='list-content'>{{item.title}}</span>
                </div>

                <div class='list-right-part'>
                  <span class='list-content'>人气 {{item.percent}}</span>
                </div>
              </div>
            </div>
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

      <div class='main-section'>
        <el-row>
          <el-col :span='12'>
            <h3 class='spe-title2'>精彩资讯</h3>
          </el-col>
        </el-row>
        <el-row :gutter='30'>
          <div class='news-item'>
            <div class='news-avatar'>
              <img src='./img/img-md/20181101_ljt_220_2.jpg'
                   alt=''>
            </div>
            <div class='news-main'>
              <div class='news-title'>你的五官其实画错了你知道吗？这就是小白和大触的差别</div>
              <div class='news-sub'>五官新手常见的脸部五官错误画法及其正确演示~</div>
              <div class='news-date'>
                <div>
                  <el-tag type="success">好看</el-tag>
                  <el-tag type="info">大神NB</el-tag>
                </div>
                <div style='text-align: right;'>
                  <span>2019-01-02</span> <span style='padding-left: 30px;'>阅读 12233</span></div>
              </div>
            </div>
          </div>

          <div class='news-item'>
            <div class='news-avatar'>
              <img src='./img/img-md/20181103_ljt_220_8.jpg'
                   alt=''>
            </div>
            <div class='news-main'>
              <div class='news-title'>【衣服褶皱类型及画法详解】想要画好人物服饰？不会画褶皱</div>
              <div class='news-sub'>很多人会觉得临摹服装的时候超简单，到自己画的时候就分分钟大脑宕机，主要原因还是不会画褶皱。</div>
              <div class='news-date'>
                <div>
                  <el-tag type="danger">热门</el-tag>
                </div>

                <div style='text-align: right;'>
                  <span>2019-01-01</span> <span style='padding-left: 30px;'>阅读 2213</span>
                </div>
              </div>
            </div>
          </div>

          <div class='news-item'>
            <div class='news-avatar'>
              <img src='./img/img-md/20181111_ljt_220_5.jpg'
                   alt=''>
            </div>
            <div class='news-main'>
              <div class='news-title'>你的五官其实画错了你知道吗？这就是小白和大触的差别！</div>
              <div class='news-sub'>很多童鞋私信肥皂君说五官画不好，肥皂君给大家整理了一篇五官专题的绘画教程，有五官新手常见的脸部五官错误画法及其正确演示~</div>
              <div class='news-date'>
                <div>
                  <el-tag type="warning">赞赞赞</el-tag>
                </div>
                <div style='text-align: right;'>
                  <span>2018-12-02</span> <span style='padding-left: 30px;'>阅读 9983</span>
                </div>
              </div>
            </div>
          </div>

          <div class='news-item'>
            <div class='news-avatar'>
              <img src='./img/img-md/20181223_ljt_220_8.jpg'
                   alt=''>
            </div>
            <div class='news-main'>
              <div class='news-title'>让最前端的超级大牛来教你怎么话MM吧</div>
              <div class='news-sub'>其实很多人想花好很好看的MM，但是眼睛实际上才是重点，呵呵，这期小编来教大家怎么画好MM的眼睛~</div>
              <div class='news-date'>
                <div>
                  <el-tag type="danger">小编很给力啊</el-tag>
                  <el-tag type="success">火热推荐</el-tag>
                  <el-tag type="info">太好看啦啊</el-tag>
                </div>
                <div style='text-align: right;'>
                  <span>2019-01-02</span> <span style='padding-left: 30px;'>阅读 233</span>
                </div>
              </div>
            </div>
          </div>
        </el-row>
      </div>

      <div style='height: 100px;'></div>
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
          url: './img/banner1.jpg'
        }, {
          url: './img/banner2.jpg'
        }],

        list1: [{
          title: '桃花宝典',
          percent: 103324
        }, {
          title: '很纯很暧昧',
          percent: 101324
        }, {
          title: '斗破苍穹',
          percent: 93324
        }, {
          title: '武动乾坤',
          percent: 92324
        }, {
          title: '仙侠世界',
          percent: 88324
        }, {
          title: '奇葩小人物',
          percent: 83324
        }, {
          title: '我的野蛮女友',
          percent: 64224
        }, {
          title: '爆笑宝典',
          percent: 57323
        }]
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

      img {
        width: 1920px;
        height: 400px !important;
      }
    }
  }

  .list-wrap {
    .list-item {
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;

      &:active, &:hover {
        background: #f8f8f8;
      }

      .list-left-part {

        .list-icon {
          display: inline-block;
          width: 30px;
          height: 30px;
          border-radius: 30px;
          text-align: center;
          line-height: 30px;
          background: orangered;
          color: #fff;
        }

        .list-content {
          padding-left: 10px;
          font-size: 16px;
          color: #666;
        }
      }

      .list-right-part {
        color: #999;
      }

    }
  }

  .news-item {
    display: flex;
    padding: 15px;
    cursor: pointer;
    border-radius: 10px;

    &:active, &:hover {
      background: #f8f8f8;

    }

    .news-avatar {
      width: 240px;
      height: 160px;
      overflow: hidden;
      border-radius: 10px;

      img {
        width: 160%;
        height: auto;
      }
    }

    .news-main {
      height: 160px;
      padding: 10px;
      padding-left: 30px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex: 1;

      .news-title {
        font-size: 18px;
        color: #666;
      }

      .news-sub {
        font-size: 16px;
        color: #999;
      }

      .news-date {
        font-size: 14px;
        color: #999;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
  }

  .el-card {
    border-radius: 10px;
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
