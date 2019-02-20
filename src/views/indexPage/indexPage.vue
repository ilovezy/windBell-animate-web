<template>
  <div class="index-page">
    <el-carousel class='index-scroll-wrap'
                 type='card'
                 style='height: 400px; margin-bottom: 20px;'>
      <el-carousel-item class='index-scroll-item'
                        style='height: 400px'>
        <img src='./img/banner7.jpg'
             alt=''>
      </el-carousel-item>
      <el-carousel-item class='index-scroll-item'
                        style='height: 400px'>
        <img src='./img/banner3.jpg'
             alt=''>
      </el-carousel-item>
      <el-carousel-item class='index-scroll-item'
                        style='height: 400px'>
        <img src='./img/banner4.jpg'
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
                  <div class='img-wrap'>
                    <img src="./img/img-haha/d.jpg"
                         class="image">
                  </div>
                  <div style="padding: 14px;">
                    <div class='book-title'>他的她</div>
                  </div>
                </el-card>
              </el-col>
              <el-col :span="6">
                <el-card :body-style="{ padding: '0px' }">
                  <div class='img-wrap'>
                    <img src="./img/img-haha/a.jpg"
                         class="image">
                  </div>
                  <div style="padding: 14px;">
                    <div class='book-title'>后来的我们</div>
                  </div>
                </el-card>
              </el-col>
              <el-col :span="6">
                <el-card :body-style="{ padding: '0px' }">
                  <div class='img-wrap'>
                    <img src="./img/img-haha/b.jpg"
                         class="image">
                  </div>
                  <div style="padding: 14px;">
                    <div class='book-title'>飞鸟集</div>
                  </div>
                </el-card>
              </el-col>
              <el-col :span="6">
                <el-card :body-style="{ padding: '0px' }">
                  <div class='img-wrap'>
                    <img src="./img/img-haha/c.jpg"
                         class="image">
                  </div>
                  <div style="padding: 14px;">
                    <div class='book-title'>那天的海岸</div>
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
            <h3 class='spe-title2'>美图鉴赏</h3>
          </el-col>
        </el-row>
        <el-row :gutter='30'>
          <el-col :span='8'>
            <div class='img-main-wrap'>
              <img src='./img/banner5.jpg'
                   alt=''>
            </div>
          </el-col>
          <el-col :span='8'>
            <div class='img-sub-wrap'>
              <img src='./img/img-fuck/66.jpg'
                   style='width: 100%;height: auto'
                   alt=''>
            </div>
            <div class='img-sub-wrap'>
              <img src='./img/img-fuck/4.jpg'
                   style='width: 100%;height: auto'
                   alt=''>
            </div>
          </el-col>
          <el-col :span='8'>
            <div class='img-sub-wrap'>
              <img src='./img/img-fuck/3.jpg'
                   alt=''>
            </div>
            <div class='img-sub-wrap'>
              <img src='./img/img-fuck/5.jpg'
                   alt=''>
            </div>
          </el-col>
        </el-row>
      </div>

      <div class='main-section'>
        <el-row>
          <el-col :span='12'>
            <h3 class='spe-title2'>发现</h3>
          </el-col>
        </el-row>
        <el-row :gutter='30'>
          <div class='news-item'>
            <div class='news-avatar'>
              <img src='./img/img-mdfuck2/timg4.jpg'
                   alt=''>
            </div>
            <div class='news-main'>
              <div class='news-title'>你的五官其实画错了你知道吗？这就是小白和大触的差别</div>
              <div class='news-sub'>五官新手常见的脸部五官错误画法及其正确演示~</div>
              <div class='news-date'>
                <div>
                  <el-tag type="success">草原</el-tag>
                  <!--<el-tag type="info">大神NB</el-tag>-->
                </div>
                <!--<div style='text-align: right;'>-->
                <!--<span>2019-01-02</span> <span style='padding-left: 30px;'>阅读 12233</span></div>-->
              </div>
            </div>
          </div>

          <div class='news-item'>
            <div class='news-avatar'>
              <img src='./img/img-mdfuck2/timg6.jpg'
                   alt=''>
            </div>
            <div class='news-main'>
              <div class='news-title'>【衣服褶皱类型及画法详解】想要画好人物服饰？不会画褶皱</div>
              <div class='news-sub'>很多人会觉得临摹服装的时候超简单，到自己画的时候就分分钟大脑宕机，主要原因还是不会画褶皱。</div>
              <div class='news-date'>
                <div>
                  <el-tag type="danger">山河</el-tag>
                </div>

                <!--<div style='text-align: right;'>-->
                <!--<span>2019-01-01</span> <span style='padding-left: 30px;'>阅读 2213</span>-->
                <!--</div>-->
              </div>
            </div>
          </div>

          <div class='news-item'>
            <div class='news-avatar'>
              <img src='./img/img-mdfuck2/timg5.jpg'
                   alt=''>
            </div>
            <div class='news-main'>
              <div class='news-title'>这就是小白和大触的差别！</div>
              <div class='news-sub'>很多童鞋私信肥皂君说五官画不好，肥皂君给大家整理了一篇五官专题的绘画教程，有五官新手常见的脸部五官错误画法及其正确演示~</div>
              <div class='news-date'>
                <div>
                  <el-tag type="warning">星空</el-tag>
                </div>
                <!--<div style='text-align: right;'>-->
                <!--<span>2018-12-02</span> <span style='padding-left: 30px;'>阅读 9983</span>-->
                <!--</div>-->
              </div>
            </div>
          </div>

          <div class='news-item'>
            <div class='news-avatar'>
              <img src='./img/img-mdfuck2/timg7.jpg'
                   alt=''>
            </div>
            <div class='news-main'>
              <div class='news-title'>让最前端的超级大牛来教你怎么话MM吧</div>
              <div class='news-sub'>其实很多人想花好很好看的MM，但是眼睛实际上才是重点，呵呵，这期小编来教大家怎么画好MM的眼睛~</div>
              <div class='news-date'>
                <div>
                  <el-tag type="danger">飞鸟</el-tag>
                  <!--<el-tag type="success">火热推荐</el-tag>-->
                  <!--<el-tag type="info">太好看啦啊</el-tag>-->
                </div>
                <!--<div style='text-align: right;'>-->
                <!--<span>2019-01-02</span> <span style='padding-left: 30px;'>阅读 233</span>-->
                <!--</div>-->
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
          title: '使者之我是僵尸',
          percent: 103324
        }, {
          title: '乞丐总裁',
          percent: 96324
        }, {
          title: '花海神医',
          percent: 93324
        }, {
          title: '大智若愚',
          percent: 92324
        }, {
          title: '传说',
          percent: 88324
        }, {
          title: '奇葩小人物',
          percent: 83324
        }, {
          title: '芥末总裁',
          percent: 64224
        }, {
          title: '爆笑虾米2',
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
  .img-wrap {
    overflow: hidden;
    width: 220px;
    height: 280px;

    img {
      width: 100%;
      height: auto;
    }
  }

  .img-main-wrap {
    height: 430px;
    overflow: hidden;

    &:hover {
      img {
        transform: scale(1.1);
      }
    }

    img {
      height: 430px;
      width: auto;
      transition: all 0.5s ease;
    }
  }

  .img-sub-wrap {
    height: 200px;
    overflow: hidden;
    margin-bottom: 30px;
    font-size: 0;

    &:hover {
      img {
        transform: scale(1.1);
      }
    }

    img {
      height: 200px;
      width: auto;
      transition: all 0.5s ease;
    }
  }

  .index-scroll-wrap {
    height: 400px;

    .index-scroll-item {
      height: 400px;

      img {
        width: 100%;
        /*height: 400px !important;*/
        height: auto;
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
