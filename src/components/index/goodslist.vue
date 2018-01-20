<template>
        <div class="goodslist">
                <div class="heading">
                        <span>为您推荐</span>
                </div>
                <div class="goodsbox">
                        <a v-for="x in goods" :key="x.price">
                            <img v-lazy="x.pic">
                            <span>{{x.desc}}</span>
                            <p>¥ &nbsp;{{x.price}}</p>
                        </a>
                </div>
        </div>
       
  
</template>
<script>
export default {
  name:"goodslist",
  data () {
      return {
          goods:[{pic:"//m.360buyimg.com//mobilecms/s316x316_jfs/t12229/166/733692010/231246/f7c16db0/5a1235e0Ne250b221.jpg!q70.jpg",desc:"【移动专享版】一加手机5T（A5010）8GB+128GB 星辰黑 全网通 双卡双待 移动联通电信4G手机",price:"3499.00"},
          {pic:"//m.360buyimg.com//mobilecms/s276x276_jfs/t286/320/1388669338/94407/8dcdd002/5438f32cNfbec775a.jpg!q70.jpg",desc:"万字 纯酿造酱油 1.8L 浓口特级生抽调料调味品",price:"29.90"},
          {pic:"//m.360buyimg.com//mobilecms/s276x276_jfs/t7660/179/600413864/389532/f8ad57a5/59954ba8N95c8f231.jpg!q70.jpg",desc:"耶斯爱度运动鞋女鞋2017秋冬舒适透气跑步厚底增高休闲鞋 棕色 38尺码偏小，建议大一码选",price:"159.00"},
          {pic:"//m.360buyimg.com//mobilecms/s276x276_jfs/t3127/141/5082684848/239996/b37d5dd8/5860e2c8N0883857a.jpg!q70.jpg",desc:"卫龙 休闲零食 辣条 亲嘴烧1250g/袋（口味随机发货）",price:"29.99"},
          {pic:"//m.360buyimg.com//mobilecms/s316x316_jfs/t13825/240/2611183017/177502/e140297f/5a4498f7N02eb4372.jpg!q70.jpg",desc:"乔丹 运动鞋秋冬季新品男士皮面徒步鞋休闲透气跑步鞋时尚波鞋青少年慢跑鞋 黑白/白轻灰272 41码",price:"169.00"},
          {pic:"//m.360buyimg.com//mobilecms/s316x316_jfs/t3802/239/1870220827/163047/9c2e2664/5833db16Ne3dd9c87.jpg!q70.jpg",desc:"千禾 头道原香180天本酿酱油 特级生抽1000ml",price:"19.90"},
          {pic:"//m.360buyimg.com//mobilecms/s276x276_jfs/t5020/218/76844920/1095855/8c05790d/58da2d11Nf9670138.jpg!q70.jpg",desc:"三毛全集02：撒哈拉的故事",price:"24.50"},
          {pic:"//m.360buyimg.com//mobilecms/s276x276_jfs/t4438/33/3558503930/311608/fb746cc/58ff26c3Nbad96e13.jpg!q70.jpg",desc:"三只松鼠坚果炒货零食每日坚果开心果100g",price:"26.90"},
          {pic:"//m.360buyimg.com//mobilecms/s276x276_jfs/t5020/218/76844920/1095855/8c05790d/58da2d11Nf9670138.jpg!q70.jpg",desc:"三毛全集02：撒哈拉的故事",price:"24.60"},
          {pic:"//m.360buyimg.com//mobilecms/s276x276_jfs/t5020/218/76844920/1095855/8c05790d/58da2d11Nf9670138.jpg!q70.jpg",desc:"三毛全集02：撒哈拉的故事",price:"24.70"},
          {pic:"//m.360buyimg.com//mobilecms/s276x276_jfs/t5020/218/76844920/1095855/8c05790d/58da2d11Nf9670138.jpg!q70.jpg",desc:"三毛全集02：撒哈拉的故事",price:"24.80"},
          {pic:"//m.360buyimg.com//mobilecms/s276x276_jfs/t5020/218/76844920/1095855/8c05790d/58da2d11Nf9670138.jpg!q70.jpg",desc:"三毛全集02：撒哈拉的故事",price:"24.90"},
          ]
      }
  }
}
</script>
<style scoped lang="scss">
    .goodslist {
        position: relative;
        .heading{
            margin: 15px 15px;
            position: relative;
            &:after{
                content: "";
                height: 1PX;
                width: 90%;
                position: absolute;
                top: 50%;
                left: 5%;
                background-color: #cbcbcb;
            }
            span {
                z-index: 99;
                background-color:#f0f2f5;
                position: relative;
                display: inline-block;
                padding: 0 10px;

            }
        }
        .goodsbox{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            a {
                display: block;
                width: 3.65rem;
                background-color: #fff;
                text-align: left;
                padding-bottom: 10px;
                margin-bottom: 10px;
                img{
                    width:100%;
                    height: 4rem;
                }
                span{
                   
                    height: 33PX;
                    font-size: 13PX;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    word-break: break-word;
                    color: #232326;
                    margin-top: 5PX;
                    line-height: 17PX;
                    margin-bottom: 3PX;
                    padding: 0 4PX;
                }
                p{
                    color: red;
                    font-size: 18px;
                    text-indent:5px;
                
                }
            }
        }
    }
</style>