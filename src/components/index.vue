<template>
  <div class="main">
        <search></search>
       <swiperbox></swiperbox>
       <categorybox></categorybox>
       <img src="https://m.360buyimg.com/mobilecms/jfs/t13315/331/2082178954/103061/36f4cc40/5a4c3e44Ncb613ea0.png!q70.jpg" class="goodimg" />
       <goodslist></goodslist>
       <div class="padding"></div>
      <tabbar></tabbar>
  </div>
</template>

<script>
import search from './index/search'
import swiperbox from './index/swiperbox'
import categorybox from './index/categorybox'
import tabbar from './index/tabbar'
import goodslist from './index/goodslist'
export default {
  name: 'index',
  data () {
    return {
     
    }
  },
  components: {
    search,
    swiperbox,
    categorybox,
    tabbar,
    goodslist
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .goodimg{width: 100%;}
    .padding {height: 70px;}
</style>
