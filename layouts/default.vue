<template>
  <div id="app">
    <!-- 头部 -->
    <header  class="header-wrap">
      <div class="header-bg">
        <!-- 小熊猫的提示 -->
         <a-tooltip>
    <template slot="title">
      谢谢你来看我！
    </template>
    <img class="animated bounce" src="../assets/img/logo.png" alt="Logo">
  </a-tooltip>
        <!-- 头部菜单 -->
        <AllHeader class="animated bounceInRight"/>
      </div>
    </header>
    <!-- 全局背景图片粒子效果 -->
    <div class="bgc">
      <no-ssr>
        <vue-particles
          color="#dedede"
          :particleOpacity="0.7"
          :particlesNumber="80"
          shapeType="circle"
          :particleSize="4"
          linesColor="#dedede"
          :linesWidth="1"
          :lineLinked="true"
          :lineOpacity=".7"
          :linesDistance="50"
          :moveSpeed="3"
          :hoverEffect="true"
          hoverMode="grab"
          :clickEffect="true"
          clickMode="repulse"
        ></vue-particles>
      </no-ssr>
    </div>

    <nuxt />
  </div>
</template>
<script>
import AllHeader from '../components/Header'
export default {
  components:{
    AllHeader
  }
}
</script>

<style lang='less' scoped>

#app {
  
  .header-wrap{
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 999;
.header-bg{
    width: 100%;
    height: 75px;
    background-image: url('http://vue.iranlin.xyz/header.jpg') ;
    background-size: cover;
    background-repeat: no-repeat;
    img{
      max-width: 74px;
      margin-left: 50px;
      transition: rotate(-90edg)
    }
  }
  }
  
  .bgc {
    width: 100%;
   position: absolute;
   top:75px;
   left:0;
    #particles-js{
     
      height: 2000px;
    }
  }
}

</style>
