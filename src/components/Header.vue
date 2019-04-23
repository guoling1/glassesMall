<template>
  <div class="header">
    <div class="left"><img src="../assets/back.png" alt=""></div>
    <div class="title">护理液</div>
    <div class="right"></div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" type="text/less">
  .header{
    position: relative;
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
    .title{

    }
  }
</style>
