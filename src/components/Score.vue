 <template>
  <div class="scoreBox" id="memberLevel">
    <div class="top">
      <img src="../assets/membericon.png" alt="">
      <p class="level">黄金会员</p>
      <p class="score">我的积分：2000分</p>
      <div class="progress">
        <div class="line">
          <span></span>
        </div>

        <div class="square">
          <span class="active"></span>
          <label>白银会员</label>
        </div>
        <div class="square">
          <span></span>
          <label>黄金会员</label>
        </div>
        <div class="square">
          <span></span>
          <label>白金会员</label>
        </div>
        <div class="square">
          <span></span>
          <label>钻石会员</label>
        </div>
        <div class="square">
          <span class="active"></span>
          <label>青铜会员</label>
        </div>
      </div>
      <p class="tip">差300分到LV4，新特权即将开启</p>
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
  .scoreBox{
    padding: 0.86rem 0 0 0;
    .top{
      background: url("../assets/memberbg.png") no-repeat;
      background-size: 100% 100%;
      height: 4.4rem;
      text-align: center;
      img{
        margin-top: 0.38rem;
        width: 2.85rem;
        height: 2rem;
      }
      .level{
        font-size: 0.3rem;
        font-weight: bold;
        margin-top: -0.89rem;
        color: #fff;
      }
      .score{
        margin-top: 0.7rem;
        margin-bottom: 0.25rem;
        color: #fff;
        font-size: 0.26rem;
      }
      .progress{
        position: relative;
        height: 0.5rem;
        width: 5.6rem;
        margin: 0 auto;
        .line{
          text-align: left;
          width: 100%;
          height: 0.04rem;
          position: absolute;
          top: 6%;
          left: 0;
          background: #616c7f;
          span{
            position: absolute;
            display: inline-block;
            background: #e5c54c;
            height: 0.04rem;
            width: 33%;
          }
        }
        .square{
          position: absolute;
          top: 0;
          border-radius: 50%;
          text-align: center;
          width: 1.2rem;
          margin-left: -0.6rem;
          margin-top: -0.1rem;
          .active{
            background: #e5c54c;
          }
          span{
            width: 0.15rem;
            height: 0.15rem;
            border-radius: 50%;
            background: #616c7f;
            display: inline-block;
          }
          label{
            display: block;
            color: #fff;
            font-size: 0.2rem;
          }
        }
        .square:nth-child(2){
          left: 25%;
        }
        .square:nth-child(3){
          left: 50%;
        }
        .square:nth-child(4){
          left: 75%;
        }
        .square:nth-child(5){
          left: 100%;
        }
      }
      .tip{
        color: #999999;
        font-size: 0.2rem;
        line-height: 0.8rem;
      }
    }

  }
</style>
