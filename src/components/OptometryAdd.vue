<template>
  <div class="optometryAdd">
    <div class="top">
      <p class="title">光度：</p>
      <div class="item">右眼 (R)</div>
      <div class="item">
          <span>左眼</span>
          <span>光度：1.00</span>
          <span>散光：-1.00</span>
          <span>轴位：124</span>
      </div>
      <div class="item">左眼 (L)</div>
      <div class="item">瞳距</div>
    </div>
    <ul class="form">
      <li>
        <div class="left">光度主人<span>*</span>：</div>
        <div class="right"><input type="text"></div>
      </li>
      <li>
        <div class="left">验光时间：</div>
        <div class="right"><input type="text"></div>
      </li>
      <li>
        <div class="left">验光单位：</div>
        <div class="right"><input type="text"></div>
      </li>
      <li>
        <div class="left">验&nbsp;光&nbsp;师：</div>
        <div class="right"><input type="text"></div>
      </li>
      <li>
        <div class="left">记录备忘：</div>
        <div class="right"><input type="text"></div>
      </li>
    </ul>
    <div class="fix_bottom">新增验光单</div>

    <div class="maskBox">
      <div class="mask">
        <div class="mask-top">
          <p class="active">近视SPH</p>
          <p>远视/老光SPH</p>
        </div>
        <ul>
          <li>0.00</li>
          <li>-0.50</li>
          <li>-0.75</li>
          <li>-1.00</li>
          <li>-1.25</li>
          <li>-1.50</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Address',
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
  .optometryAdd{
    padding-top: 0.88rem;
    text-align: left;
    .top{
      padding: 0.3rem;
      border-bottom: 0.2rem solid #f6f6f6;
      font-size: 0.28rem;
      .title{
        font-weight: 900;
      }
      .item{
        margin-top: 0.26rem;
        line-height: 0.64rem;
        color: #666;
        border: 1px solid #e9eaec;
        border-radius: 0.1rem;
        text-align: center;
        span{
          display: inline-block;
          width: 26%;
          &:first-child{
            width: 16%;
          }
        }
      }
    }
    .form{
      padding: 0.35rem 0.3rem;
      li{
        margin-bottom: 0.26rem;
        height: 0.7rem;
        line-height: 0.7rem;
        font-size: 0.28rem;
        .left{
          display: inline-block;
          width: 1.55rem;
          span{
            color: #ff0000;
          }
        }
        .right{
          display: inline-block;
        }
        input{
          padding: 0 0.2rem;
          width: 4.8rem;
          height: 0.66rem;
          line-height: 0.66rem;
          border: 1px solid #e9eaec;
          border-radius: 0.1rem;
        }
      }
    }
    .fix_bottom{
      display: block;
      position: fixed;
      bottom: 0;
      width: 100%;
      line-height: 0.98rem;
      font-size: 0.32rem;
      font-weight: bold;
      color: #fff;
      text-align: center;
      background: #6e9d03;
    }
    .maskBox{
      position: fixed;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.4);
      .mask{
        position: absolute;
        bottom: 0;
        width: 100%;
        background: #fff;
        .mask-top{
          padding: 0.3rem;
          color: #6e9d03;
          font-size: 0.28rem;
          font-weight: bold;
          border-bottom: 1px solid #ebebeb;
          p{
            display: inline-block;
            width: 2.37rem;
            line-height: 0.56rem;
            border: 1px solid #6e9d03;
            text-align: center;
            &.active{
              background: #6e9d03;
              color: #fff;
            }
          }
        }
        ul{
          padding: 0.2rem 0 0.2rem 0.3rem;
          font-size: 0;
          li{
            display: inline-block;
            margin-right: 0.27rem;
            margin-bottom: 0.24rem;
            width: 1.12rem;
            height: 0.5rem;
            line-height: 0.5rem;
            color: #666;
            font-size: 0.24rem;
            text-align: center;
            border: 0.02rem solid #ebebeb;
          }
        }
      }
    }
  }

</style>
