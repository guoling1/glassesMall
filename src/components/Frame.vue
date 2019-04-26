<template>
  <div class="home">
    <div class="fix-top">
      <div class="active">综合</div>
      <div>销量</div>
      <div>价格 <img src="../assets/horn.png" alt=""></div>
      <div class="select" @click="show9=true">筛选</div>
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
    <div v-transfer-dom>
      <popup v-model="show9" position="right">
        <div>
          <div class="select-content">
            <div class="title">品牌</div>
            <ul class="brank">
              <li class="active">木九十</li>
              <li>宝岛</li>
              <li>派丽蒙(PARIM)</li>
              <li>派丽蒙(PARIM)</li>
            </ul>
          </div>
          <div class="select-content">
            <div class="title">价格</div>
            <div class="price">
              <input type="number" placeholder="最低价"><span>一</span><input type="number" placeholder="最高价">
            </div>
          </div>
          <div class="select-content">
            <div class="title">款式</div>
            <ul class="brank">
              <li>男款</li>
              <li>女款</li>
            </ul>
          </div>
          <div class="select-content">
            <div class="title">框型</div>
            <ul class="brank">
              <li>木九十</li>
              <li>宝岛</li>
              <li>派丽蒙(PARIM)</li>
              <li>派丽蒙(PARIM)</li>
            </ul>
          </div>
          <div class="fix-bottom">
            <div class="cancel">重置</div>
            <div class="submit">确认</div>
          </div>
        </div>
      </popup>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Solution',
    data() {
      return {
        show9: false,
      }
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
      height: 0.6rem;line-height: 0.6rem;
      width: 25%;
      img{
        width: 0.14rem;
        height: 0.07rem;
        vertical-align: middle;
      }
      &.select{
        color: #000;
        border-left: 1px solid #f5f5f5;
      }
      &.active{
        color: #8ec31f;
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
  .select-content{
    padding: 0 0 0 0.3rem;
    border-bottom: 1px solid #f5f5f5;
    font-size: 0.24rem;
    color: #666;
    .title{
      padding: 0.38rem 0 0.26rem;
      font-size: 0.32rem;
      font-weight: bold;
      color: #000;
    }

    .price{
      font-size: 0;
      input{
        display: inline-block;
        margin: 0 0.2rem 0.2rem 0;
        padding: 0 0.12rem;
        width: 1.4rem;
        line-height: 0.53rem;
        border: 1px solid #f5f5f5;
        border-radius: 0.27rem;
        text-align: center;
        font-size: 0.24rem;
      }
      span{
        margin-right: 0.2rem;
        font-size: 0.24rem;
      }
    }
    .brank{
      li{
        display: inline-block;
        margin: 0 0.2rem 0.2rem 0;
        padding: 0 0.12rem;
        min-width: 1.22rem;
        line-height: 0.53rem;
        border: 1px solid #f5f5f5;
        border-radius: 0.27rem;
        text-align: center;
        &.active{
          background: #cbb796;
          border-color: #cbb796;
          color: #fff;
        }
      }
    }
  }
  .fix-bottom{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 0.98rem;
    line-height: 0.98rem;
    font-size: 0;
    text-align: left;
    border-top: 1px solid #f5f5f5;
    div{
      display: inline-block;
      width: 50%;
      font-size: 0.32rem;
      font-weight: bold;
      color: #666;
      text-align: center;
    }
    .submit{
      background: #cbb796;
      color: #fff;
    }
  }
</style>
<style>
  .vux-popup-dialog.vux-popup-right{
    width: 80% !important;
    background: #fff;
  }
</style>
