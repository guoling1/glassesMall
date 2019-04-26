 <template>
  <div class="select">
    <div class="content">
      <p class="name">海昌NEW MONTH优氧月抛隐形眼镜6片装（新老包装随机发）</p>
      <p class="title">选择验光单</p>
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
      <i></i>
      <p class="title">款式花色</p>
      <ul class="pattern">
        <li>
          <div class="img"><img src="../assets/eye.png" alt=""></div>
          <p>永恒之心</p>
        </li>
        <li class="active">
          <div class="img"><img src="../assets/eye.png" alt=""></div>
          <p>永恒之心</p>
        </li>
        <li>
          <div class="img"><img src="../assets/eye.png" alt=""></div>
          <p>永恒之心</p>
        </li>
        <li>
          <div class="img"><img src="../assets/eye.png" alt=""></div>
          <p>永恒之心</p>
        </li>
      </ul>
      <i></i>
      <p class="title">选择镜片数量</p>
      <div class="number">
        <div class="item">
          <span>右眼R</span>
          <x-number v-model="changeValue" :min="0" @on-change="change"></x-number>
        </div>
        <div class="item">
          <span>左眼L</span>
          <x-number v-model="changeValue" :min="0" @on-change="change"></x-number>
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
  data () {
    return {
      changeValue:0
    }
  },
  methods:{
    change (val) {
      console.log('change', val)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" type="text/less">
  .select{
    padding: 0.88rem 0 1.3rem;
    .content{
      padding: 0.3rem 0.3rem 0;
      font-size: 0.32rem;
      text-align: left;

      .name{
        margin-bottom: 0.5rem;
        line-height: 0.5rem;
      }
      .title{
        padding-top: 0.2rem;
        line-height: 0.5rem;
      }
      .optometry{
        padding: 0.35rem 0.2rem;
        border-radius: 0.2rem;
        background: #f9f9f9;
        .name{
          margin: 0;
          font-size: 0.32rem;
          font-weight: bold;
        }
        .item{
          margin-top: 0.2rem;
          font-size: 0.24rem;
          font-weight: bold;
          color: #666;
          text-align: left;
          span{
            display: inline-block;
            width: 26%;
            &:first-child{
              width: 16%;
            }
          }
        }
      }
      .pattern{
        font-size: 0;
        li{
          display: inline-block;
          margin: 0.2rem 0.15rem 0 0;
          width: 1.8rem;
          text-align: center;
          font-size: 0.24rem;
          color: #999;
          &.active .img{
            border-color: #6e9d03;
          }
          .img{
            margin-bottom: 0.16rem;
            width: 1.76rem;
            height: 1.38rem;
            border: 0.02rem solid #ebebeb;
          }
        }
      }
      .number{
        .item{
          margin-top: 0.48rem;
          span{
            display: inline-block;
            width: 1.9rem;
          }
        }
      }
      i{
        display: inline-block;
        width: 100%;
        height: 0;
        border-bottom: 1px dashed #a8a8a8;
      }
    }

    .fix-bottom{
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 0.98rem;
      line-height: 0.98rem;
      background: #000;
      color: #fff;
      font-size: 0;
      div{
        display: inline-block;
        width: 50%;
        font-size: 0.32rem;
        &.buy{
          background: #8ec31f;
        }
      }

    }
  }
</style>
 <style>
   .weui-cell{
     display: inline-block !important;
     padding: 0 !important;
     vertical-align: middle !important;
   }
   .weui-cell:before{
     content: none !important;
   }
   .vux-number-selector svg {
     fill: #6e9d03 !important;
   }
 </style>
