<template>
  <div class="addressAdd">
    <ul>
      <li>
        <p class="title">收&nbsp;货&nbsp;人</p>
        <input type="text" placeholder="请输入收货人姓名">
      </li>
      <li>
        <p class="title">手&nbsp;机&nbsp;号</p>
        <input type="text" placeholder="请输入手机号码">
      </li>
      <li>
        <p class="title">所在地区</p>
        <input type="text" placeholder="请输入所在地区">
      </li>
      <li>
        <p class="title">详细地址</p>
        <input type="text" placeholder="请输入详细地址">
      </li>
    </ul>
    <div class="set">
      <span class="title">设为默认地址</span>
      <span class="fr select"></span>
    </div>
    <div class="button">保存收货地址</div>
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
  .addressAdd{
    text-align: left;
    body{
      background: #f9f9f9;
    }
    ul{
      background: #fff;
    }
    ul{
      margin-bottom: 0.3rem;
    }
    ul li{
      margin: 0 auto;
      padding: 0.32rem 0 0;
      width: 6.9rem;
      height: 0.7rem;
      line-height: 0.7rem;
      border-bottom: 1px solid #f2f2f2;
      font-size: 0.28rem;
    }
    ul li .title{
      display: inline-block;
      width: 1.2rem;
      font-weight: bold;
    }
    ul li input[type="text"],ul li select{
      margin-left: 0.6rem;
      height: 0.7rem;
      width: 4.7rem;
      line-height: 0.7rem;
      font-size: 0.28rem;
    }
    input[type="file"] {
      position: absolute;
      top: 0;
      font-size: 14px;
      background-color: #fff;
      height: 100%;
      opacity: 0;
      width: 100%;
    }
    /*label {*/
    /*margin: 0.3rem;*/
    /*position: relative;*/
    /*cursor: pointer;*/
    /*padding-left: 17px;*/
    /*}*/
    .set{
      padding: 0 0.3rem;
      background: #fff;
      font-weight: bold;
    }
    .set .fr{
      display: inline-block;
      width: 12px;
      height: 12px;
      /*margin: auto;*/
      border-radius: 50%;
      border: 1px solid #666;
    }
    .set .fr.select{
      width: 14px;
      height: 14px;
      /*margin: auto;*/
      border-radius: 50%;
      border: none;
      background: url("../assets/select.png") no-repeat;
      background-size: 100% 100%;
    }
    .button{
      margin: 0.8rem auto 0;
      width: 6.48rem;
      height: 0.82rem;
      line-height: 0.82rem;
      color: #fff;
      font-size: 0.32rem;
      font-weight: bold;
      background: #6e9d03;
      border-radius: 0.07rem;
      text-align: center;
    }
  }
</style>
