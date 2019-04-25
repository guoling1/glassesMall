 <template>
  <div class="shopDetail">
    <swiper :list="bannerList" :show-desc-mask="false" :dots-position="'center'" :auto="true" :loop="true" :aspect-ratio="0.86"></swiper>
    <div class="tab">
      <div class="active">商品简介</div>
      <div>商品详情</div>
      <div>商品评价</div>
    </div>
    <div class="intro">
      <div class="base">
        <div class="left">
          <p class="name">强生安视优恒氧水凝胶隐形眼镜日抛</p>
          <p class="source">台湾原装进口</p>
          <s class="old-price">￥60.00</s>
          <p class="price">￥28.00 <span class="special">新人专享</span></p>
        </div>
        <div class="right">
          <img src="../assets/star.png" alt="" class="star">
          <img src="../assets/share.png" alt="">
        </div>
      </div>
      <div class="serve">
        <div class="left">服务</div>
        <div class="right">
          <p>正品保证·极速退款·七天退换</p>
          <p>商家包邮</p>
          <p>预计3-10个工作日送达</p>
        </div>
      </div>
      <div class="comment">
        <div class="title">
          商品评价 (222)
          <span class="fr">查看全部评论</span>
        </div>
        <ul>
          <li>
            <div class="top">
              <img src="../assets/avatar.png" alt="">
              <span class="name">小**4</span>
              <span class="date fr">2019-03-01 17:57:22</span>
            </div>
            <div class="score"></div>
            <div class="detail">收到，目前还没有试戴</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopDetail',
  data () {
    return {
      bannerList: [{
        img: require('../assets/shop.png'),
      }, {
        img: require('../assets/shop.png'),
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" type="text/less">
  .shopDetail{
    padding-top: 0.88rem;
    .tab{
      padding-top: 0.22rem;
      display: flex;
      justify-content: space-around;
      border-bottom: 1px solid #f5f5f5;
      font-size: 0.28rem;
      div{
        padding: 0 0.14rem;
        border-bottom: 0.04rem solid #fff;
        line-height: 0.42rem;
        &.active{
          font-weight: bold;
          color: #6e9d03;
          border-bottom: 0.04rem solid #6e9d03;
        }
      }
    }
    .intro{
      text-align: left;
      .base{
        padding: 0.38rem 0.3rem 0.36rem;
        border-bottom: 0.2rem solid #f4f4f4;
        font-size: 0;
        .left{
          display: inline-block;
          height: 1.86rem;
          width: 5.6rem;
          .name{
            font-size: 0.32rem;
            font-weight: bold;
          }
          .source{
            margin: 0.14rem 0 0.16rem;
            font-size: 0.32rem;
            font-weight: bold;
            color: #ff0500;
          }
          .old-price{
            color: #666666;
            font-size: 0.28rem;
          }
          .price{
            margin-top: 0.24rem;
            font-size: 0.36rem;
            font-weight: bold;
            span{
              padding: 0 0.16rem;
              line-height: 0.36rem;
              background: #ff7c7c;
              color: #fff;
              border-radius: 0.18rem;
              font-size: 0.24rem;
              font-weight: normal;
              vertical-align: top;
            }
          }
        }
        .right{
          display: inline-block;
          width: 1.28rem;
          height: 1.86rem;
          border-left: 0.01rem solid #f5f5f5;
          img{
            display: block;
            margin: 0 auto;
            width: 0.45rem;
            height: auto;
            &.star{
              margin: 0.1rem auto 0.7rem auto;
            }
          }
        }
      }
      .serve{
        padding: 0.3rem 0.3rem 0.1rem;
        border-bottom: 0.2rem solid #f4f4f4;
        font-size: 0.28rem;
        .left{
          float: left;
          color: #666;
          line-height: 0.28rem;
        }
        .right{
          margin-left: 0.8rem;
          p{
            margin-bottom: 0.2rem;
          }
        }
      }
      .comment{
        padding: 0.3rem;
        .title{
          font-size: 0.32rem;
          span{
            margin-top: 0.08rem;
            font-size: 0.24rem;
            color: #ff6162;
          }
        }
        ul{
          li{
            padding: 0.26rem 0;
            border-bottom: 1px solid #f5f5f5;
            .top{
              line-height: 0.9rem;
              img{
                margin-right: 0.4rem;
                width: 0.9rem;
                height: 0.9rem;
                vertical-align: middle;
              }
              .name{
                font-size: 0.32rem;
              }
              .date{
                color: #666;
              }
            }
            .detail{
              font-size: 0.28rem;
            }
          }
        }
      }
    }
  }
</style>
