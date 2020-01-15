<template>
<div class="aritcle-caro">
    <!-- 手机端轮播图 -->
    <van-swipe :autoplay="3000">
  <van-swipe-item v-for="(image, index) in imgList" :key="index">
    <van-image width="100%" height="400" fit="cover" :src="image" />
  </van-swipe-item>
</van-swipe>
</div>
  
</template>
<script>
  export default {
   data(){
     return{
       imgList: ['https://yezipi.net/api/static/upload/article_cover/origin_1575977988780.jpg',
                  'https://yezipi.net/api/static/upload/article_cover/origin_1569567334552.jpg',
                  'http://vue.iranlin.xyz/xmj1.jpg',
                  'http://vue.iranlin.xyz/xmj2.jpg'
       ]
     }
   }
  };
</script>
<style scoped>
      /* For demo */
  .ant-carousel >>> .slick-slide {
    height: 200px;
    overflow: hidden;
  }

  .ant-carousel >>> .slick-slide h3 {
    color: #fff;
  }
</style>
<style lang='less'  scoped>
    .aritcle-caro{
        width: 100%;
        position: relative;
        &::after{
        content:'';
        display: block;
        position: absolute;
        left:0;
        top:0;
        width: 100%;
        height: 30%;
        background:url('../assets/img/ice.png') repeat-x;
        z-index: 0;
    }
      
        .heade{
          position: absolute;
          right: 20px;
          top:0;
          width: 50px;
          height: 100px;
          background-color: blue;
       }
      
      
    }
    



  @media screen and(min-width: 720px){
         .aritcle-caro{
            width:100%;
    }
  }
</style>