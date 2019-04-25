<template>
  <div class="home">
    <div class="banner">
      <swiper :list="bannerList" :show-desc-mask="false" :dots-position="'center'" :auto="true" :loop="true" :aspect-ratio="0.69"></swiper>
      <div class="search">
        <input type="text" placeholder="搜索你想要的物品">
      </div>
    </div>
    <ul class="nav">
      <li>
        <router-link to="">
          <img src="../assets/nav1.png" alt="">
          <p>邀新领20</p>
        </router-link>
      </li>
      <li>
        <img src="../assets/nav2.png" alt="">
        <p>日韩彩瞳</p>
      </li>
      <li>
        <img src="../assets/nav3.png" alt="">
        <p>爱尔康专场</p>
      </li>
      <li>
        <img src="../assets/nav4.png" alt="">
        <p>强生境外版</p>
      </li>
      <li>
        <img src="../assets/nav5.png" alt="">
        <p>舒适隐形</p>
      </li>
      <li>
        <img src="../assets/nav6.png" alt="">
        <p>万款花色</p>
      </li>
      <li>
        <router-link to="/solution">
          <img src="../assets/nav7.png" alt="">
          <p>护理液</p>
        </router-link>
      </li>
      <li>
        <router-link to="/frame">
          <img src="../assets/nav8.png" alt="">
          <p>框架眼镜</p>
        </router-link>
      </li>
    </ul>
    <div class="push clear">
      <img src="../assets/hot.png" alt="">
      <swiper auto height="35px" direction="vertical" :interval=2000 class="text-scroll" :show-dots="false">
        <swiper-item><p>义务爱了 完成传奇世界H5-王者归来任务 获得20金币</p></swiper-item>
        <swiper-item><p>基本世神 兑换《传奇世界H5》畅玩级礼包 消耗30金币</p></swiper-item>
        <swiper-item><p>零哥章魚 完成传奇世界H5-王者归来任务 获得30金币</p></swiper-item>
        <swiper-item><p>做迎而為 兑换【饿了么】畅享美食红包 消耗20金币</p></swiper-item>
        <swiper-item><p>只知道不知道 兑换【饿了么】畅享美食红包 消耗20金币</p></swiper-item>
        <swiper-item><p>基本世神 兑换《传奇世界H5》畅玩级礼包 消耗30金币</p></swiper-item>
      </swiper>
    </div>
    <div class="hot">
      <div class="session-title">
        <p class="title">热销TOP榜</p>
        <p class="more fr">更多 <img src="../assets/more.png" alt=""></p>
      </div>
      <div class="content clear">
        <div class="left fl">
          <img src="../assets/sale.png" alt="" class="left-title">
          <p class="sale">每满200减30</p>
          <!--<p class="name">安视优新美瞳日抛30片</p>-->
          <div class="price">超值价：￥<span>189</span></div>
          <div class="btn">立即抢购</div>
        </div>
        <div class="right">
          <p class="right-title">日代力荐</p>
          <p class="name">安视优新美瞳日抛30片优新美瞳日抛30片</p>
          <div class="price">超值价：￥<span>68</span></div>
          <div class="btn">立即抢购</div>
        </div>
        <div class="right">
          <p class="right-title">日代力荐</p>
          <p class="name">安视优新美瞳日抛30片优新美瞳日抛30片</p>
          <div class="price">超值价：￥<span>68</span></div>
          <div class="btn">立即抢购</div>
        </div>
      </div>
    </div>
    <div class="cheap">
      <div class="session-title">
        <p class="title">超值购</p>
      </div>
      <div class="content">
        <div class="right fr"><img src="../assets/add2.png" alt=""></div>
        <div class="left"><img src="../assets/add1.png" alt=""></div>
        <div class="left"><img src="../assets/add1.png" alt=""></div>
      </div>
    </div>
    <div class="recommend">
      <div class="session-title">
        <p class="title">推荐好物</p>
      </div>
      <ul class="content">
        <li>
          <img src="../assets/shop.png" alt="" class="shop-img">
          <p class="name"><span>[硅水凝胶工艺，高透氧水润]</span>强生安视优恒</p>
          <div class="bottom clear">
            <div class="left fl">￥218 <s>￥218</s></div>
            <div class="right fr">82评论</div>
          </div>
        </li>
        <li>
          <img src="../assets/shop.png" alt="" class="shop-img">
          <p class="name"><span>[硅水凝胶工艺，高透氧水润]</span>强生安视优恒</p>
          <div class="bottom clear">
            <div class="left fl">￥218 <s>￥218</s></div>
            <div class="right fr">82评论</div>
          </div>
        </li>
        <li>
          <img src="../assets/shop.png" alt="" class="shop-img">
          <p class="name"><span>[硅水凝胶工艺，高透氧水润]</span>强生安视优恒</p>
          <div class="bottom clear">
            <div class="left fl">￥218 <s>￥218</s></div>
            <div class="right fr">82评论</div>
          </div>
        </li>
        <li>
          <img src="../assets/shop.png" alt="" class="shop-img">
          <p class="name"><span>[硅水凝胶工艺，高透氧水润]</span>强生安视优恒</p>
          <div class="bottom clear">
            <div class="left fl">￥218 <s>￥218</s></div>
            <div class="right fr">82评论</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      bannerList: [{
        img: require('../assets/bannerIndex.png'),
      }, {
        img: require('../assets/bannerIndex.png'),
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" type="text/less">
  .home{
    padding-bottom: 1rem;
  }
  .banner{
    position: relative;
    .search{
      position: absolute;
      left: 0.61rem;
      top: 0.35rem;
      width: 6.28rem;
      height: 0.8rem;
      background: #fff;
      border-radius: 0.1rem;
      font-size: 0.32rem;
      font-weight: bold;
      input{
        width: 100%;
        height: 100%;
        text-align: center;
      }
    }
  }
  .nav{
    padding-bottom: 0.3rem;
    font-size: 0;
    li{
      display: inline-block;
      margin-top: 0.34rem;
      width: 25%;
      img{
        width: 1.2rem;
        height: 1.2rem;
      }
      p{
        margin-top: 0.2rem;
        font-size: 0.28rem;
        font-weight: bold;
        color: #000;
      }
    }
  }
  .push{
    border-top: 0.2rem solid #f5f5f5;
    border-bottom: 0.2rem solid #f5f5f5;
    padding: 0.16rem .3rem 0.11rem;
    /*height: 35px;*/
    line-height: 35px;
    img{
      float: left;
      margin-right: 0.2rem;
      height: 35px;
      width: auto;
    }
    p{
      height: 100%;
      line-height: 35px;
      font-size: 0.32rem;
      font-weight: bold;
      text-wrap: none;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
    }
  }
  .session-title {
    padding: 0.15rem 0;
    border-bottom: 1px solid #f5f5f5;
    text-align: left;
    .title{
      display: inline-block;
      padding-left: 0.12rem;
      line-height: 0.38rem;
      font-size: 0.32rem;
      font-weight: bold;
      color: #ff0000;
      border-left: 0.06rem solid #ff0000;
    }
    .more{
      font-size: 0.28rem;
      color: #666;
      line-height: 0.38rem;
      img{
        width: 0.18rem;
        height: 0.22rem;
      }
    }
  }
  .hot{
    padding: 0 0.3rem;
    .content{
      height: 4.56rem;
      .left{
        width: 3.45rem;
        height: 100%;
        border-right: 1px solid #f5f5f5;
        background: url("../assets/shop1.png") no-repeat bottom;
        background-size: 80%;
        .left-title{
          margin: 0.31rem 0 0.22rem;
          width: 1.59rem;
          height: 0.3rem;
        }
        .sale{
          display: inline-block;
          padding: 0 0.14rem;
          border: 1px solid #6e9d03;
          border-radius: 0.06rem;
          line-height: 0.42rem;
          font-size: 0.26rem;
          color: #6e9d03;
        }
        .price{
          margin: 0.4rem 0 0.15rem;
          font-size: 0.22rem;
          span{
            font-size: 0.5rem;
          }
        }
        .btn{
          margin: 0 auto;
          width: 1.64rem;
          height: 0.34rem;
          line-height: 0.34rem;
          background: #6e9d03;
          color: #fff;
          font-size: 0.22rem;
        }
      }
      .right{
        margin-left: 3.45rem;
        padding-left: 0.2rem;
        height: 2.27rem;
        text-align: left;
        border-bottom: 1px solid #f5f5f5;
        background: url("../assets/shop2.png") no-repeat bottom right;
        background-size: 40%;
        &:last-child{
          border: none;
        }
        .right-title{
          padding: 0.3rem 0 0.18rem;
          font-size: 0.26rem;
          color: #6e9d03;
        }
        .name{
          font-size: 0.2rem;
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
        }
        .price{
          margin: 0.15rem 0 0;
          font-size: 0.22rem;
          span{
            font-size: 0.5rem;
          }
        }
        .btn{
          margin-left: 0.1rem;
          width: 1.64rem;
          height: 0.34rem;
          line-height: 0.34rem;
          background: #6e9d03;
          color: #fff;
          font-size: 0.22rem;
          text-align: center;
        }
      }
    }
  }
  .cheap{
    border-top: 0.2rem solid #f5f5f5;
    border-bottom: 0.2rem solid #f5f5f5;
    font-size: 0;
    .session-title{
      padding-left: 0.3rem;
    }
    .content{
      height: 3.86rem;
      .left{
        width: 3.75rem;
        height: 1.95rem;
      }
      .right{
        width: 3.75rem;
      }
    }

  }
  .recommend{
    .session-title{
      padding-left: 0.3rem;
    }
    .content{
      font-size: 0;
      li{
        display: inline-block;
        width: 3.73rem;
        height: 4.13rem;
        border: 0.01rem solid #f5f5f5;
        font-size: 0.24rem;
        .shop-img{
          width: 3.45rem;
          height: 2.9rem;
        }
        .name{
          margin-top: 0.05rem;
          padding: 0 0.06rem;
          color: #000;
          height: 0.5rem;
          text-align: left;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp:2;
          -webkit-box-orient: vertical;
          span{
            color: #ff0000;
          }
        }
        .bottom{
          margin-top: 0.15rem;
          text-align: left;
          color: #9999;
          .left{
            font-size: 0.36rem;
            color: #ff0000;
            s{
              color: #9999;
              font-size: 0.24rem;
            }
          }
          .right{
            margin: 0.05rem 0.06rem 0 0;
          }
        }
      }
    }
  }
</style>
