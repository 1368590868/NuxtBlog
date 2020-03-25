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
       imgList: ['http://img1.imgtn.bdimg.com/it/u=3062374190,3164523231&fm=11&gp=0.jpg',
                  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585163963088&di=7b162d70f8f0981bf8c3398a4a178392&imgtype=0&src=http%3A%2F%2Fdik.img.kttpdq.com%2Fpic%2F28%2F19439%2F4f03e27728caa5be.jpg',
                  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585164042057&di=c41d1d286c0f68a8fba65c045e6ce31c&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201407%2F05%2F20140705171243_tuVKa.jpeg',
                  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585164080010&di=b9b9c4d78e6efea2a08586b7c9b70e3e&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2Fb%2F54631d4959556.jpg'
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