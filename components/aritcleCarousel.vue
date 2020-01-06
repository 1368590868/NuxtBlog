<template>
<div class="aritcle-caro">
    <!-- 手机端轮播图 -->
    <a-carousel  :autoplay='true'>
      <img src="https://yezipi.net/api/static/upload/article_cover/origin_1575977988780.jpg" >
     <img src="https://yezipi.net/api/static/upload/article_cover/origin_1569567334552.jpg" >
  </a-carousel>
</div>
  
</template>
<script>
  export default {
    methods: {
      
    },
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
        .ant-carousel::after{
        content:'';
        display: block;
        position: absolute;
        left:0;
        top:0;
        width: 100%;
        height: 30%;
        background:url('../assets/img/ice.png') repeat-x;
        background-size: 100% 100%;
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