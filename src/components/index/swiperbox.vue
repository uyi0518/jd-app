<template>
<div class="swiper-box">

    <yd-slider autoplay="3000">
        <yd-slider-item>
            <a href="#">
                <img src="https://img1.360buyimg.com/da/jfs/t14992/294/1854044006/177836/59f1c9c2/5a5d6261N5147e3d0.jpg">
            </a>
        </yd-slider-item>
        <yd-slider-item>
            <a href="#">
                <img src="https://m.360buyimg.com/mobilecms/s1125x549_jfs/t16033/147/1804137383/199007/e5b3cb85/5a6008e5N53100dfa.jpg!q70.jpg">
            </a>
        </yd-slider-item>
        <yd-slider-item>
            <a href="#">
                <img src="https://img1.360buyimg.com/da/jfs/t19168/18/131004698/241381/ebace7d/5a5ee296Nb3bab26a.jpg">
            </a>
        </yd-slider-item>
    </yd-slider>
</div>
</template>

<script type="text/babel">
    export default {
        name: 'swiperbox',
    }
</script>
<style lang="scss">
    .swiper-box img{height: 180px;}
</style>
