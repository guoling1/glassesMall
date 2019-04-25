<template>
  <div class="classify">
    <div class="head">
      <div class="left" @click="back"><img src="../assets/back.png" alt=""></div>
      <input type="text" placeholder="请输入您要搜索的物品">
    </div>
    <div class="content">
      <div class="hot item">
        <div class="title">热门搜索</div>
        <ul>
          <li>隐形</li>
          <li>彩色</li>
          <li>护肤用品</li>
          <li>护肤用品</li>
          <li>护肤用品</li>
          <li>护肤用品</li>
          <li>护肤用品</li>
          <li>护肤用品</li>
        </ul>
      </div>
      <div class="item">
        <div class="title">搜索历史 <span class="fr">清空</span></div>
        <ul>
          <li>隐形眼镜</li>
          <li>彩色眼镜</li>
          <li>护肤用品</li>
          <li>护肤用品</li>
          <li>护肤用品</li>
          <li>护肤用品</li>
          <li>护肤用品</li>
          <li>护肤用品</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
    }
  },
  methods:{
    back(){
      this.$router.go(-1)
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
    .left{
      position: absolute;
      left: 0.22rem;
      img{
        width: 0.22rem;
        height: 0.35rem;
        vertical-align: middle;
      }
    }
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
    text-align: left;
    .item{
      padding: 0.3rem 0 0 0.3rem;
      border-bottom: 1px solid #f5f5f5;
      .title{
        margin-bottom: 0.5rem;
        font-size: 0.32rem;
        span{
          padding-right: 0.3rem;
          font-size: 0.28rem;
          color: #999;
        }
      }
      ul{
        font-size: 0;
        li{
          display: inline-block;
          margin: 0 0.3rem 0.34rem 0;
          padding: 0 0.15rem;
          min-width: 0.85rem;
          height: 0.68rem;
          line-height: 0.68rem;
          color: #6e9d03;
          font-size: 0.28rem;
          border: 1px solid #6e9d03;
          border-radius: 0.1rem;
          text-align: center;
        }
      }
    }
  }
</style>
