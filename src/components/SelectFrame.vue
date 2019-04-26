<template>
  <div class="select">
    <div class="tab">
      <div class="active">需要镜架+镜片</div>
      <div>仅需镜架</div>
    </div>
    <div class="content">
      <p class="name">海昌NEW MONTH优氧月抛隐形眼镜6片装（新老包装随机发）</p>
      <i></i>
      <div class="select-btn">选择验光单</div>
      <div class="opt">
        <p class="title">验光单</p>
        <div class="optometry">
          <div class="name">孙晓彤</div>
          <div class="item">
            <span>左眼</span>
            <span>光度：1.00</span>
            <span>散光：-1.00</span>
            <span>轴位：124</span>
          </div>
          <div class="item">
            <span>左眼</span>
            <span>光度：1.00</span>
            <span>散光：1.00</span>
            <span>轴位：124</span>
          </div>
        </div>
      </div>
      <i></i>
      <div class="select-btn">选择镜片</div>
      <div class="lens clear">
        <div class="left fl"><img src="../assets/shop2.png" alt=""></div>
        <div class="middle fl">
          <p class="shop-name">HAN BLUELESS 1.56全天候防蓝光非球面树脂镜片（1.553）</p>
          <div class="bottom">
            <span>1对</span>
            <span>￥0.00</span>
          </div>
        </div>
        <div class="right fr">更换</div>
      </div>
      <div class="only-frame">
        <p class="title">选择镜片数量</p>
        <div class="number">
          <div class="item">
            <span>数据</span>
            <x-number v-model="changeValue" :min="0" @on-change="change"></x-number>
          </div>
        </div>
      </div>
    </div>
    <div class="fix-bottom">
      <div class="add">加入购物车</div>
      <div class="buy">立即购买</div>
    </div>
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
  .select {
    padding: 1.68rem 0 0.98rem;

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

    .content {
      font-size: 0.32rem;
      text-align: left;

      .name {
        padding: 0.3rem;
        line-height: 0.5rem;
      }

      .select-btn {
        margin: 0.4rem auto;
        width: 5.16rem;
        height: 0.66rem;
        line-height: 0.66rem;
        text-align: center;
        border-radius: 0.1rem;
        border: 1px solid #333;
        font-size: 0.28rem;
        color: #333;
      }

      .title {
        padding-top: 0.2rem;
        line-height: 0.5rem;
      }

      .opt {
        padding: 0.3rem;

        .optometry {
          margin-top: 0.2rem;
          padding: 0.35rem 0.2rem;
          border-radius: 0.2rem;
          background: #f9f9f9;

          .name {
            margin: 0;
            padding: 0;
            font-size: 0.32rem;
            font-weight: bold;
          }

          .item {
            margin-top: 0.2rem;
            font-size: 0.24rem;
            font-weight: bold;
            color: #666;
            text-align: left;

            span {
              display: inline-block;
              width: 26%;

              &:first-child {
                width: 16%;
              }
            }
          }
        }
      }

      .lens {
        padding: 0.35rem 0.3rem;
        height: 1.49rem;
        font-size: 0.24rem;
        font-weight: bold;

        .left {
          width: 1.47rem;
          height: 1.47rem;
          border: 1px solid #ebebeb;
        }

        .middle {
          position: relative;
          margin-left: 0.3rem;
          width: 4rem;
          height: 100%;

          p {
            font-weight: bold;
            line-height: 0.4rem;
          }

          .bottom {
            position: absolute;
            bottom: 0;
            color: #e4373b;
            font-size: 0.32rem;
          }
        }

        .right {
          font-weight: bold;
          color: #8ec31f;
        }
      }

      .only-frame {
        padding: 0.3rem;

        .number {
          .item {
            margin-top: 0.48rem;

            span {
              display: inline-block;
              width: 1.9rem;
            }
          }
        }
      }

      i {
        display: inline-block;
        width: 100%;
        height: 0;
        border-bottom: 0.2rem solid #ebebeb;
      }

    }

    .fix-bottom {
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 0.98rem;
      line-height: 0.98rem;
      background: #000;
      color: #fff;
      font-size: 0;

      div {
        display: inline-block;
        width: 50%;
        font-size: 0.32rem;

        &.buy {
          background: #8ec31f;
        }
      }

    }
  }
</style>
<style>
  .weui-cell {
    display: inline-block !important;
    padding: 0 !important;
    vertical-align: middle !important;
  }

  .weui-cell:before {
    content: none !important;
  }

  .vux-number-selector svg {
    fill: #6e9d03 !important;
  }
</style>
