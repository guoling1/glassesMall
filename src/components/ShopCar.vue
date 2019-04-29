<template>
  <div class="shopCar">
    <ul>
      <!--<img v-if="shopList.length==0" src="../../image/empty.png" alt="" style="display:block;margin:2rem auto 0;">-->
      <li >
          <label><input type="checkbox" @change="selectShop()" id="private" checked="checked" class="pp"><span></span>fk</label>
          <img src="../assets/shop.png" >
          <div class="right">
            <p class="name">海俪恩：隐形眼镜润滑液 美瞳润眼液 水滋润10ml10片状 400</p>
            <div class="rbottom">
              <span class="price">￥120 <s>28.00</s></span>
              <div class="btngroup">
                <span id="minus" class="minus" @click="minus(index)">-</span>
                <input type="number" id="coursenum" class="coursenum" onblur="inpBlur()">
                <span id="add" class="add" @click="plus(index)">+</span>
              </div>
            </div>
          </div>
      </li>
      <li >
        <label><input type="checkbox" @change="selectShop()" id="private" checked="checked" class="pp"><span></span>fk</label>
        <img src="../assets/shop.png" >
        <div class="right">
          <p class="name">海俪恩：隐形眼镜润滑液 美瞳润眼液 水滋润10ml10片状 400</p>
          <div class="rbottom">
            <span class="price">￥120 <s>28.00</s></span>
            <div class="btngroup">
              <span id="minus" class="minus" @click="minus(index)">-</span>
              <input type="number" id="coursenum" class="coursenum" onblur="inpBlur()">
              <span id="add" class="add" @click="plus(index)">+</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div class="bottom">
      <label><input type="checkbox" name="all" id="private" class="pp" v-model="isSelectAll"   @change="selectAll()"><span></span>全选</label>

      <div class="button" id="buy" tapmode onclick="buy()">去结算(10)</div>
      <div class="total" id="total">合计：<span>￥120}</span></div>
      <div class="button" id="del" tapmode onclick="detelSelect()">删除</div>
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
  .shopCar{
    ul{
      padding-bottom: 2rem;
    }
    li {
      margin-bottom: 0.2rem;
      text-align: left;
      box-shadow: 0 2px 15px #f7f7f7;
      padding: 0.3rem 0 0.6rem;
      width: 100%;
      height: 2rem;
    }

    li img {
      display: inline-block;
      vertical-align: middle;
      width: 2.1rem;
      height: 2.1rem;
      margin: 0 0.1rem;
    }

    li .right {
      position: relative;
      display: inline-block;
      height: 2rem;
      width: 4.3rem;
      vertical-align: top;
    }

    li .right .rbottom {
      width: 100%;
      position: absolute;
      bottom: 0;
    }

    li .right .name {
      margin-top: 0.2rem;
      font-size: 0.28rem;
      font-weight: bold;
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    li .right .price {
      color: #e4373b;
      font-size: 0.36rem;
      font-weight: bold;
    }
    li .right .price s{
      font-size: 0.24rem;
      font-weight: initial;
      color: #333;
    }

    label {
      margin: 0 0.14rem;
      position: relative;
      cursor: pointer;
      color: #fff
    }

    label input {
      display: none;
    }

    label span {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 0.3rem;
      height: 0.3rem;
      margin: auto;
      border: 0.02rem solid #ccc;
      border-radius: 100%;
    }

    label span:after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      width: 0.26rem;
      height: 0.26rem;
      margin: auto;
      border-radius: 100%;
      background: #ff4400;
      transform: scale(0);
      transition: all.3s;
    }

    label input:checked+span {
      border-color: #ff4400;
      background: #fff;
    }

    label input:checked+span:after {
      content: '';
      transform: scale(1);
    }

    .btngroup {
      float: right;
      width: 1.51rem;
      height: .43rem;
      line-height: .43rem;
      display: inline-block;
      vertical-align: top;
    }

    .btngroup .minus {
      width: .44rem;
      height: .43rem;
      line-height: 0.43rem;
      float: left;
      background-color: #f3f3f3;
      border: none;
      color: #646464;
      text-align: center;
      font-size: 0.36rem;
    }

    .btngroup .coursenum {
      width: .63rem;
      height: .43rem;
      float: left;
      border: none;
      line-height: .43rem;
      text-align: center;
      font-size: 0.32rem;
      background: #f9f9f9;
      padding: 0;
    }

    .btngroup .add {
      width: .44rem;
      height: .43rem;
      line-height: 0.43rem;
      float: left;
      background-color: #f3f3f3;
      border: none;
      color: #646464;
      text-align: center;
      font-size: 0.36rem;
    }

    .bottom {
      position: fixed;
      bottom: 1rem;
      width: 100%;
      height: 1rem;
      line-height: 1rem;
      background: #fff;
      text-align: left;
      box-shadow: 0px 0px 10px #efefef;
    }

    .bottom div {
      display: inline-block;
    }

    .bottom .button {
      float: right;
      width: 3rem;
      background: #e4373b;
      color: #fff;
      text-align: center;
      font-size: 0.32rem;
      font-weight: 900;
    }

    .bottom .total {
      font-size: 0.28rem;
      font-weight: 900;
    }

    .bottom label {
      margin-left: 0.8rem;
      color: #333;
    }

    .bottom label span {
      left: -0.6rem;
    }
  }
</style>
