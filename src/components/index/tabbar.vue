<template>

        <yd-tabbar fixed>
        <yd-tabbar-item title="首页" link="/" active>
            <yd-icon name="home" slot="icon" size="0.54rem" ></yd-icon>
        </yd-tabbar-item>
         <yd-tabbar-item title="分类" link="/category">
            <yd-icon name="type" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
         <yd-tabbar-item title="发现" link="#">
            <yd-icon name="shopcart-outline" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="购物车" link="#">
            <yd-icon name="shopcart-outline" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="我的" link="#" dot>
            <yd-icon name="ucenter-outline" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
        
    </yd-tabbar>
  
</template>
<script>
export default {
  name:"tabbar"
}
</script>
<style scoped lang="scss">
    
</style>