<template>
<div class="aritcle-caro">
    <!-- 手机端轮播图 -->
    <van-swipe :autoplay="3000">
  <van-swipe-item v-for="(image, index) in imgList" :key="index">
    <van-image width="100%" class="swipe-img" fit="cover" :src="image" />
  </van-swipe-item>
</van-swipe>
</div>
  
</template>
<script>
  export default {
   data(){
     return{
       imgList: ['http://cdn.irlin.cn/%E8%BD%AE%E6%92%AD%E5%9B%BE%E4%B8%80.jpg',
                  'http://cdn.irlin.cn/%E8%BD%AE%E6%92%AD%E5%9B%BE%E4%B8%89.jpg',
                  'http://cdn.irlin.cn/%E8%BD%AE%E6%92%AD%E5%9B%BE%E4%BA%8C.jpg',
                  'http://cdn.irlin.cn/%E8%BD%AE%E6%92%AD%E5%9B%BE%E4%BA%94.jpg',
                  'http://cdn.irlin.cn/%E8%BD%AE%E6%92%AD%E5%9B%BE%E5%9B%9B.jpg'
       ]
     }
   }
  };
</script>
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
      
      .swipe-img{
        height: 30vh;
      }
    }
    



  @media screen and(min-width: 720px){
         .aritcle-caro{
            width:100%;
            .swipe-img{
              height: 300px;
            }
    }
  }
</style>