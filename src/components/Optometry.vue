<template>
  <div class="optometry">
    <div class="fix-top">
      <div class="active">框架眼镜</div>
      <div>隐形眼镜</div>
    </div>
    <ul>
      <li>
        <div class="top">
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
          <div class="item">
            <span>瞳距：62</span>
          </div>
        </div>
        <div class="bottom clear">
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
          <div class="item">
            <span>瞳距：62</span>
          </div>
        </div>
        <div class="bottom clear">
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
    <div class="fix_bottom">新增验光单</div>
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
  .optometry{
    padding-top: 0.88rem;
    text-align: left;
    .fix-top{
      position: fixed;
      top: 0.88rem;
      width: 100%;
      height: 0.8rem;
      box-shadow: 0 0 20px #f1f1f1;
      font-size: 0;
      text-align: center;
      div{
        display: inline-block;
        margin-top: 0.08rem;
        width: 50%;
        line-height: 0.7rem;
        border-bottom: 0.04rem solid #fff;
        font-size: 0.28rem;
        font-weight: bold;
        &.active{
          border-color: #8ec31f;
          color: #8ec31f;
        }
      }
    }
    ul{
      margin-top: 1.2rem;
      padding-bottom: 1rem;
    }
    ul li{
      margin: 0 auto 0.4rem;
      padding: 0 0.5rem;
      background: #fff;
    }
    ul li .top{
      padding: 0.4rem 0 0.35rem 0;
      border-bottom: 1px solid #f2f2f2;
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
  }

</style>
