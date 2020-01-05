<template>
<div class="aritcle-caro">
    <!-- 手机端轮播图 -->
<a-carousel  :autoplay='true'>
    <div><h3>1</h3></div>
    <div><h3>2</h3></div>
    <div><h3>3</h3></div>
    <div><h3>4</h3></div>
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
    text-align: center;
    height: 200px;
    line-height: 200px;
    background: #758bb3;
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
    }
    



  @media screen and(min-width: 720px){
         .aritcle-caro{
             width: 30%;
    }
  }
</style>