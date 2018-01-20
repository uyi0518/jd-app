<template>
    <div class="main" ref="main">
         <div class="back">
             返回
         </div>
         <div class="categroybox">

         </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            
        }
    },
    mounted () {
        const _height=window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
        this.$refs.main.style.height=_height+"px"
    }
}
</script>
<style scoped lang="scss">
    .main{
       
        display: flex;
        flex-wrap: wrap;
        flex-direction:column;
        .back{
            height: 30px;
            background: #fff;
            width: 100%;
        }
        .categroybox{
            width: 100%;
            flex: 1;
            background: blue;
        }
        }
</style>
