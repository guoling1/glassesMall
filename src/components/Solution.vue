<template>
  <div class="home">
    <div class="fix-top">
      <div>综合</div>
      <div>销量</div>
      <div>价格 <img src="../assets/horn.png" alt=""></div>
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
</template>

<script>
  export default {
    name: 'Solution',
    data() {
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" type="text/less">
  .home {
    padding-top: 1rem;
  }
  .fix-top{
    display: flex;
    justify-content: space-around;
    position: fixed;
    top: 0.88rem;
    padding: 0.1rem 0;
    width: 100%;
    height: 0.6rem;
    line-height: 0.6rem;
    background: #fff;
    box-shadow: 0 7px 15px #f7f7f7;
    font-size: 0.28rem;
    color: #666;
    div{
      img{
        width: 0.14rem;
        height: 0.07rem;
        vertical-align: middle;
      }
    }
  }
  .content {
    padding-top: 0.9rem;
    font-size: 0;
    li {
      display: inline-block;
      width: 3.73rem;
      height: 4.13rem;
      border: 0.01rem solid #f5f5f5;
      font-size: 0.24rem;

      .shop-img {
        width: 3.45rem;
        height: 2.9rem;
      }

      .name {
        margin-top: 0.05rem;
        padding: 0 0.06rem;
        color: #000;
        height: 0.5rem;
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;

        span {
          color: #ff0000;
        }
      }

      .bottom {
        margin-top: 0.15rem;
        text-align: left;
        color: #9999;

        .left {
          font-size: 0.36rem;
          color: #ff0000;

          s {
            color: #9999;
            font-size: 0.24rem;
          }
        }

        .right {
          margin: 0.05rem 0.06rem 0 0;
        }
      }
    }
  }
</style>
