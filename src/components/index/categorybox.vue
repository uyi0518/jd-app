<template>
  <div class="categorybox">
        <a v-for="x in data" :key="x.name">
            <img :src="x.pic"/>
            <span>{{x.name}}</span>
        </a>
  </div>
</template>

<script>

export default {
  name: 'index',
  data () {
    return {
            data:[{pic:"https://m.360buyimg.com/mobilecms/jfs/t5668/159/160398199/14046/acfe1fa3/591d9424N068a7ad0.png",name:"京东超市"},
            {pic:"https://m.360buyimg.com/mobilecms/jfs/t11425/73/2288282326/13451/e11c7697/5a14d167Ne5414496.png",name:"全球购"},
            {pic:"https://m.360buyimg.com/mobilecms/jfs/t5656/351/153181074/12227/e35aa8d/591d9456Naa85e195.png",name:"京东服饰"},
            {pic:"https://m.360buyimg.com/mobilecms/jfs/t15685/205/1833598632/18107/34b360f5/5a606152N6b2b554e.png",name:"京东生鲜"},
            {pic:"https://m.360buyimg.com/mobilecms/jfs/t5773/256/159664156/17475/742fec7e/591d9475Na810c2eb.png",name:"京东到家"},
            {pic:"https://m.360buyimg.com/mobilecms/jfs/t5869/198/155278114/10024/631c8675/591d951cN3a6cffbe.png",name:"机场火车票"},
            {pic:"https://m.360buyimg.com/mobilecms/s126x126_jfs/t2758/175/4146829331/10078/d6a3aa98/57aacab9N98edf989.png",name:"领京豆"},
            {pic:"https://m.360buyimg.com/mobilecms/jfs/t5872/340/146804759/11154/f4ae1409/591d94c4N79a488cc.png",name:"领券"},
            {pic:"https://m.360buyimg.com/mobilecms/jfs/t5824/248/156712927/7215/1ad6be5f/591d94c6Nc4711ad2.png",name:"赚钱"},
            {pic:"https://m.360buyimg.com/mobilecms/jfs/t5842/205/151189300/13247/a6de2d/591d94edNc42fb94d.png",name:"物流查询"}]
    }
  },
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .categorybox {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding-top: 20px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        
        margin-top: -5px;
        background: #fff;
        position: relative;
        z-index: 9;
        a{
        width: 1.4333rem;
        height: 1.6rem;
        
        img {width: 1rem;height: 1rem;}
        span {display: block;}
        }
    }

</style>