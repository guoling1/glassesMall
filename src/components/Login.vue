<template>
  <div class="login">
    <div class="header">
      <div class="left" @click="back"><img src="../assets/backBlack.png" alt=""></div>
      <div class="title">登录</div>
      <div class="right"></div>
    </div>
    <div class="name">快速登录/注册</div>
    <ul>
      <li class="phone">
        <input type="number" placeholder="手机号">
      </li>
      <li class="code">
        <input type="text" placeholder="验证码">
        <p class="fr">获取验证码</p>
      </li>
    </ul>
    <div class="btn">登录</div>
    <p>点击登录表示已同意《用户协议》</p>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
    }
  },
  created() {
  },
  methods: {
    back(){
      this.$router.go(-1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" type="text/less">
  .login{
    height: 100%;
    background: url("../assets/loginBg.png") no-repeat left bottom;
    background-size: 100% auto;
    .header{
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 0.88rem;
      line-height: 0.88rem;
      background: #fff;
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
      .title{

      }
    }
    .name{
      display: inline-block;
      padding-top: 2.9rem;
      line-height: 0.6rem;
      font-size: 0.36rem;
      font-weight: bold;
      border-bottom: 0.04rem solid #000;
    }
    ul{
      padding-top: 0.7rem;
      margin: 0 auto;
      width: 5.96rem;
      li{
        margin-top: 0.4rem;
        height: 0.6rem;
        border-bottom: 1px solid #ebebeb;
        input{
          width: 100%;
          line-height: 0.6rem;
        }

        &.code{
          input{
            width: 4.4rem;
          }
          p{
            line-height: 0.6rem;
          }
        }
      }
    }
    .btn{
      margin: 0.95rem auto 0.26rem;
      width: 5.95rem;
      height: 0.88rem;
      line-height: 0.88rem;
      border-radius: 0.08rem;
      background: #808080;
      font-size: 0.28rem;
      color: #fff;
    }
    p{
      color: #666;
    }
  }
</style>
