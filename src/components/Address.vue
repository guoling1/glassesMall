<template>
  <div class="address">
    <ul>
      <li>
        <div class="top">
          <div class="people">
            <span>康师傅</span>
            <span>13718808484</span>
          </div>
          <p class="address">河北省邯郸市邯山区旺角广场B座1008室</p>
        </div>
        <div class="bottom clear">
          <!--<div class="fl">-->
          <!--<span class="select active"></span>-->
          <!--设为默认地址-->
          <!--</div>-->
          <label><input name="address" type="radio" checked="checked"><span></span>设为默认地址</label>
          <div class="fr">
            <img src="../assets/edit.png" alt="">
            <span>编辑</span>
          </div>
          <div class="fr">
            <img src="../assets/del.png" alt="">
            <span>删除</span>
          </div>
        </div>
      </li>
      <li>
        <div class="top">
          <div class="people">
            <span>康师傅</span>
            <span>13718808484</span>
          </div>
          <p class="address">河北省邯郸市邯山区旺角广场B座1008室</p>
        </div>
        <div class="bottom clear">
          <!--<div class="fl">
              <span class="select"></span>
              设为默认地址
          </div>-->
          <label><input name="address" type="radio" checked="checked"><span></span>设为默认地址</label>
          <div class="fr">
            <img src="../assets/edit.png" alt="">
            <span>编辑</span>
          </div>
          <div class="fr">
            <img src="../assets/del.png" alt="">
            <span>删除</span>
          </div>
        </div>
      </li>
    </ul>
    <a href="address_add.html" class="fix_bottom">新建地址</a>
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
  .address{
    text-align: left;
  }
  ul{
    margin-top: 0.4rem;
    padding-bottom: 1rem;
  }
  ul li{
    margin: 0 auto 0.4rem;
    padding: 0 0.5rem;
    background: #fff;
  }
  ul li .top{
    padding: 0.44rem 0 0.3rem;
    border-bottom: 1px solid #f2f2f2;
  }
  ul li .top .people{
    font-size: 0.32rem;
    font-weight: 900;
  }
  ul li .top p{
    display: inline-block;
    font-size: 0.24rem;
    font-weight: bold;
  }
  ul li .bottom{
    color: #666;
    line-height: 0.6rem;
  }
  ul li .bottom .fr{
    margin-left: 0.6rem;
  }
  ul li .bottom img{
    display: inline-block;
    height: 0.24rem;
    width: auto;
    vertical-align: baseline;
  }
  ul li .bottom .select{
    display: inline-block;
    width: 12px;
    height: 12px;
    border: 1px solid #666;
    border-radius: 50%;
    vertical-align: middle;
  }
  ul li .bottom .select.active{
    background: url("../assets/select.png") no-repeat;
    background-size: 100% 100%;
    border: none;
    width: 14px;
    height: 14px;
  }
  label {
    position: relative;
    cursor: pointer;
    padding-left: 17px;
  }

  label input {
    display: none;
  }

  label span {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 12px;
    height: 12px;
    margin: auto;
    border-radius: 50%;
    border: 1px solid #666;

  }

  label input:checked+span {
    background: url("../assets/select.png") no-repeat;
    background-size: 100% 100%;
    border: none;
    width: 14px;
    height: 14px;
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
</style>
