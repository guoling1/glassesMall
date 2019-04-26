<template>
  <div class="my">
    <div class="top">
      <div class="avatar"><img src="../assets/avatar.png" alt=""></div>
      <div class="name">孙晓彤</div>
      <div class="number">15032083351SGB</div>
      <div class="type">普通会员</div>
      <div class="bottom">
        <div>
          <router-link to="/coupon">
            <p class="title">优惠券</p>
            <p>10</p>
          </router-link>
        </div>
        <i></i>
        <div>
          <p class="title">积分</p>
          <p>10</p>
        </div>
      </div>
    </div>
    <div class="session">
      <div class="title">我的订单</div>
      <ul class="order">
        <li>
          <img src="../assets/my-nav1.png" alt="">
          <p>待付款</p>
        </li>
        <li>
          <img src="../assets/my-nav2.png" alt="">
          <p>待发货</p>
        </li>
        <li>
          <img src="../assets/my-nav3.png" alt="">
          <p>待评价</p>
        </li>
        <li>
          <img src="../assets/my-nav4.png" alt="">
          <p>退换货</p>
        </li>
      </ul>
    </div>
    <s></s>
    <div class="session">
      <div class="title">我的服务</div>
      <ul class="order">
        <li>
          <img src="../assets/my-nav5.png" alt="">
          <p>待付款</p>
        </li>
        <li>
          <img src="../assets/my-nav6.png" alt="">
          <p>待发货</p>
        </li>
        <li>
          <img src="../assets/my-nav7.png" alt="">
          <p>待评价</p>
        </li>
        <li>
          <img src="../assets/my-nav8.png" alt="">
          <p>退换货</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'My',
    data() {
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" type="text/less">
  .my {
    .top {
      padding-top: 0.54rem;
      background: url("../assets/loginBg.png") no-repeat bottom;
      background-size: 100% auto;

      .avatar {
        margin: 0 auto;
        width: 1.72rem;
        height: 1.72rem;
      }

      .name {
        font-size: 0.32rem;
        font-weight: bold;
      }

      .number {
        margin: 0.15rem 0;
        font-weight: bold;
        color: #666;
      }

      .type {
        display: inline-block;
        padding: 0 0.24rem;
        height: 0.32rem;
        line-height: 0.32rem;
        background: #f6aa01;
        color: #fff;
        font-size: 0.2rem;
        border-radius: 0.16rem;
      }

      .bottom {
        display: flex;
        justify-content: space-around;
        height: 1.04rem;
        background: rgba(181, 180, 180, 0.2);

        i {
          margin-top: 0.25rem;
          height: 0.54rem;
          width: 1px;
          background: #fff;
        }

        div {
          width: 48%;
          margin-top: 0.18rem;
          p {
            font-size: 0.36rem;
            font-weight: 900;
            color: #e4373b;

            &.title {
              margin-bottom: 0.12rem;
              font-size: 0.24rem;
              font-weight: bold;
              color: #000;
            }
          }
        }
      }
    }
    .session{
      .title{
        padding: 0.3rem 0 0.2rem 0.3rem;
        font-size: 0.32rem;
        font-weight: bold;
        text-align: left;
      }
      ul{
        font-size: 0;
        margin-bottom: 0.34rem;
        li{
          display: inline-block;
          width: 25%;
          img{
            margin-bottom: 0.14rem;
            width: 1.2rem;
            height: 1.2rem;
          }
          p{
            font-size: 0.24rem;
            font-weight: bold;
          }

        }
      }
    }
    s{
      display: inline-block;
      height: 0.2rem;
      width: 100%;
      background: #f4f4f4;
    }
  }
</style>
