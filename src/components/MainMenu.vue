<template lang="html">
  <div class="menu flex-box-column flexBox">
    <router-view></router-view>
    <div class="bottom">
      <router-link :to="{path:'/home',query: common}" class="btn"
                   :class="pathName=='home'?'active':''">
        <div class="icon icon-home"></div>
        <p>主页</p>
      </router-link>
      <router-link :to="{path:'/classify',query: common}" class="btn"
                   :class="pathName=='classify'?'active':''">
        <div class="icon icon-classify"></div>
        <p>分类</p>
      </router-link>
      <router-link :to="{path:'/shopCar',query: common}" class="btn"
                   :class="pathName=='shopCar'?'active':''">
        <div class="icon icon-shopCar"></div>
        <p>购物车</p>
      </router-link>
      <router-link :to="{path:'/my',query: common}" class="btn"
                   :class="pathName=='my'?'active':''">
        <div class="icon icon-my"></div>
        <p>我的</p>
      </router-link>
    </div>
  </div>
</template>

<script lang="babel">
  export default {
    name: 'mainMenu',
    data () {
      return {
        common: {
          appid: '',
          uid: ''
        },
        pathName: this.$route.name
      }
    },
    beforeRouteEnter (to, from, next) {
      next(function (vm) {
        vm.$data.common.appid = to.query.appid;
        vm.$data.common.uid = to.query.uid;
      });
    },
    watch: {
      $route: function (n, o) {
        this.$data.pathName = n.name;
        this.$data.common.appid = o.query.appid;
        this.$data.common.uid = o.query.uid;
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" type="text/less">
  .flexItem(@val,@width:0) {
    box-flex: @val;
    -webkit-box-flex: @val;
    -webkit-flex: @val;
    -ms-flex: @val;
    flex: @val;
    width: @width;
  }

  .menu {
    .flexItem(1, 100%);
  }

  .bottom {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 1rem;
    background-color: #FFF;
    box-shadow: 3px 0 10px #f6faeb;;

    .btn {
      float: left;
      width: 25%;
      height: 1rem;
      text-align: center;
      display: block;

      .icon {
        margin: 0.12rem auto 0;
        width: 0.5rem;
        height: 0.5rem;
        background-size: 0.5rem 0.5rem;

        &.icon-home {
          background-image: url("../assets/tab1.png");
        }

        &.icon-classify {
          background-image: url("../assets/tab2.png");
        }

        &.icon-shopCar {
          background-image: url("../assets/tab3.png");
        }

        &.icon-my {
          background-image: url("../assets/tab4.png");
        }
      }

      p {
        font-size: 0.24rem;
        color: #666;
        margin-top: 0.08rem;
      }

      &.active {
        .icon-home {
          background-image: url("../assets/tab11.png");
        }

        .icon-classify {
          background-image: url("../assets/tab21.png");
        }

        .icon-shopCar {
          background-image: url("../assets/tab31.png");
        }

        .icon-my {
          background-image: url("../assets/tab41.png");
        }

        p {
          color: #6e9d03;
        }
      }
    }
  }
</style>
