<template>
  <div class="classify">
    <div class="head">
      <input type="text" placeholder="请输入您要搜索的物品">
    </div>
    <div class="content">
      <ul class="fix-left">
        <li>隐形眼镜</li>
        <li>彩色眼镜</li>
        <li class="active">护肤用品</li>
        <li>护肤用品</li>
        <li>护肤用品</li>
        <li>护肤用品</li>
        <li>护肤用品</li>
        <li>护肤用品</li>
      </ul>
      <div class="right">
        <div class="title">品牌</div>
        <ul>
          <li>
            <img src="../assets/ava.png" alt="">
            <p>爱尔康</p>
          </li>
          <li>
            <img src="../assets/ava.png" alt="">
            <p>爱尔康</p>
          </li>
          <li>
            <img src="../assets/ava.png" alt="">
            <p>爱尔康</p>
          </li>
          <li>
            <img src="../assets/ava.png" alt="">
            <p>爱尔康</p>
          </li>
          <li>
            <img src="../assets/ava.png" alt="">
            <p>爱尔康</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Classify',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" type="text/less">
  .head{
    position: fixed;
    width: 100%;
    height: 0.88rem;
    line-height: 0.88rem;
    background: #3d3e42;
    color: #fff;
    font-size: 0.32rem;
    font-weight: bold;
    input{
      width: 80%;
      line-height: 0.6rem;
      text-align: center;
      background: #fff;
      border-radius: 0.1rem;
    }
  }
  .content{
    padding: 0.88rem 0 1rem;
    .fix-left{
      position: fixed;
      left: 0;
      height: 100%;
      width: 2rem;
      background: #f7f8f5;
      li{
        height: 0.9rem;
        line-height: 0.9rem;
        border-bottom: 1px solid #e2e2e2;
        &.active{
          background: #fff;
          color: #6e9d03;
        }
      }
    }
    .right{
      margin-left: 2rem;
      text-align: left;
      .title{
        padding: 0.3rem;
      }
      ul{
        li{
          display: inline-block;
          margin: 0 0.24rem 0.37rem;
          width: 1.3rem;
          text-align: center;
          p{
            margin-top: 0.14rem;
            font-size: 0.2rem;
          }
        }
      }
    }
  }
</style>
