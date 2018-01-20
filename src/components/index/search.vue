<template>
  <div class="search" :style="{backgroundColor:activecolor}" >
        <yd-search v-model="value" :on-submit="submitHandler" fullpage :result="result"  placeholder="1.25超级品牌日，提前加购！"  @click.native="focushandle"></yd-search>
  </div>
</template>

<script>
import throttle from 'lodash/throttle'
export default {
  name: 'search',
  data () {
    return {
      value:"",
      result:["冰箱","空调","懒人减肥机","动漫城"],
      activecolor:"rgba(255, 26, 26,0)"
    }
  },
  methods: {
            submitHandler(value) {
                this.$dialog.toast({mes: `搜索：${value}`});
            },
            focushandle(){
              
            }
        },
  mounted () {
      const that=this
      this.f=throttle(function () {
        if(window.pageYOffset>130){
            that.activecolor="rgba(255, 26, 26,1)"
            return
        }
        const a= +window.pageYOffset/130
        that.activecolor=`rgba(255, 26, 26,${a})`
      },300)
      
      window.addEventListener("scroll",this.f)
  },
  destroyed () {
    window.removeEventListener("scroll",this.f)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss">
    .search{
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 9999;
      .yd-search-input:after {border-bottom: 0px;}
      .yd-search-input{background: transparent;}
      .yd-search-input>.search-input, .yd-search-input>.search-input .search-icon {border-radius: 20px;}
      // .yd-search-input>.cancel-text {margin-left: -48px;}
     .yd-search-fly {background: #f2f2f2;}
    }
    
</style>
