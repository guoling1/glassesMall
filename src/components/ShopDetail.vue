 <template>
  <div class="shopDetail">
    <swiper :list="bannerList" :show-desc-mask="false" :dots-position="'center'" :auto="true" :loop="true" :aspect-ratio="0.86"></swiper>
  </div>
</template>

<script>
export default {
  name: 'ShopDetail',
  data () {
    return {
      bannerList: [{
        img: require('../assets/shop.png'),
      }, {
        img: require('../assets/shop.png'),
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" type="text/less">
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
  li {
    display: inline-block;
    margin: 0 10px;
  }
}

a {
  color: #42b983;
}
</style>
