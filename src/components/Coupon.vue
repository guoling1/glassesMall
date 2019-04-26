<template>
  <div class="coupon">
    <div class="tab">
      <div class="active">全部</div>
      <div>已失效</div>
    </div>
      <ul class="coupons">
        <li>
          <div class="left">￥<span>30</span></div>
          <div class="middle"></div>
          <div class="right">
            <p class="title">满99可用现金券</p>
            <p class="date">2019-03-02至2019-04-02使用</p>
            <p class="explain">解释权归所有</p>
          </div>
          <div class="rr"></div>
        </li>
        <li>
          <div class="left">￥<span>30</span></div>
          <div class="middle"></div>
          <div class="right">
            <p class="title">满99可用现金券</p>
            <p class="date">2019-03-02至2019-04-02使用</p>
            <p class="explain">解释权归所有</p>
          </div>
          <div class="rr"></div>
        </li>
        <li class="lose">
          <div class="left">￥<span>30</span></div>
          <div class="middle"></div>
          <div class="right">
            <p class="title">满99可用现金券</p>
            <p class="date">2019-03-02至2019-04-02使用</p>
            <p class="explain">解释权归所有</p>
            <img src="../assets/seal.png" alt="">
          </div>
          <div class="rr"></div>
        </li>
      </ul>
  </div>
</template>

<script>
  export default {
    name: 'Select',
    data() {
      return {
        changeValue: 0
      }
    },
    methods: {
      change(val) {
        console.log('change', val)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" type="text/less">
  #app{
    background: #f4f4f4 !important;
  }
  #coupon ul{
    padding: 0 0.3rem;
  }
  #coupon ul li{
    margin-top: 0.3rem;
    background: url("../assets/coupon_no.png") no-repeat;
    background-size: 100% 100%;
    padding: 0.27rem 0;
  }
  #coupon ul li.over{
    background: url("../assets/coupon_no.png");
    background-size: 100% 100%;
    color: #999;
  }
  #coupon ul li.over .left{
    color: #999;
  }

  #coupon ul li .left{
    float: left;
    display: inline-block;
    width: 28%;
    text-align: center;
    color: #00c47e;
    font-size: 0.28rem;
    font-weight: bold;
    border-right: 1px dashed #999;
    margin-right: 0.1rem;
    margin-left: 0.2rem;
  }
  #coupon ul li .left .type{
    margin: 0.2rem 0;
  }
  #coupon ul li .left .price{
    font-size: 0.36rem;
  }
  #coupon ul li .right{
    display: inline-block;
    font-size: 0.2rem;
  }

  .coupon {
    padding: 1.68rem 0 0;
    height: ~"calc(100% - 1.68rem)";
    background: #f4f4f4;
    .tab {
      display: flex;
      justify-content: space-around;
      position: fixed;
      top: 0.88rem;
      width: 100%;
      height: 0.8rem;
      line-height: 0.8rem;
      background: #fff;
      box-shadow: 0 2px 20px #ebebeb;
      font-size: 0.28rem;
      color: #666;

      div {
        width: 45%;
      }

      .active {
        color: #8ec31f;
        font-weight: bold;
      }
    }
    .coupons{
      padding: 0.3rem;
      font-size: 0;

      li{
        margin-top: 0.3rem;
        height: 2.2rem;
        .left{
          display: inline-block;
          width: 2.25rem;
          background: #6e9d03;
          font-size: 0.42rem;
          font-weight: 900;
          height: 100%;
          vertical-align: text-bottom;
          color: #fff;
          line-height: 2.2rem;
          border-top-left-radius: 0.16rem;
          border-bottom-left-radius: 0.16rem;
          span{
            font-size: 0.7rem;
          }
        }
        .middle{
          display: inline-block;
          width: 0.32rem;
          height: 100%;
          background: url("../assets/coupon.png") no-repeat;
          background-size: 100% 100%;
        }
        .right{
          position: relative;
          display: inline-block;
          width: 4.15rem;
          height: 100%;
          background: #fff;
          font-size: 0.24rem;
          vertical-align: text-bottom;
          text-align: left;
          .title{
            margin: 0.42rem 0 0.3rem;
            font-size: 0.42rem;
            font-weight: bold;
            color: #333;
          }
          .explain{
            margin-top: 0.3rem;
            color: #999;
          }
          img{
            position: absolute;
            right: 0.1rem;
            top: 0.28rem;
            width: 1.65rem;
            height: 1.65rem;
          }
        }
        .rr{
          display: inline-block;
          width: 0.15rem;
          height: 100%;
          background: url("../assets/couponR.png") no-repeat;
          background-size: 100% 100%;
        }
        &.lose{
          .left{
            background: #dad8d9;
          }
          .middle{
            background: url("../assets/couponNo.png") no-repeat;
            background-size: 100% 100%;
          }
          .right p{
            color: #999;
          }
        }
      }
    }
  }
</style>
