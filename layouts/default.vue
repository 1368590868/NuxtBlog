<template>
  <div id="app">
     <!-- 全屏loading -->
    <a-spin tip='页面加载中' :spinning="loading">
    <!-- 头部 -->
    <header  class="header-wrap">
      <div class="header-bg">
        <!-- 返回按钮 -->
      <a-icon class="back" @click="goback" type="left" />
        <!-- 小熊猫的提示 -->
         <a-tooltip title="谢谢你来看我！" :getPopupContainer="getPopupContainer"> 
   
    <img class="wow zoomIn" src="../assets/img/logo.png" alt="Logo" data-wow-iteration='3'>
  </a-tooltip>
        <!-- 头部菜单 -->
        <AllHeader class="animated bounceInRight"/>
      </div>
    </header>
    <!-- 全局背景图片粒子效果 -->
    <div class="bgc">
      <client-only placeholder="背景图片加载中...">
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
      </client-only>
    </div>

    <nuxt />
    <footer>备案号:<a href="http://www.beian.miit.gov.cn" target='_blank'>渝ICP备19017809号</a></footer>
    <!-- 回到头部 -->
     <a-back-top style="z-index:999"/>
    </a-spin>
  </div>
</template>
<script>
import {Toast} from 'vant'
import AllHeader from '../components/Header'
export default {
  components:{
    AllHeader
  },
  data(){
    return{
      loading: true
    }
  },
  methods:{
    /**
     * 让熊猫提示信息被遮挡能自动出来
     */
     getPopupContainer(trigger) {
        return trigger.parentElement;
      },
      /**
       * 返回上级菜单
       */
      goback(){
        // 获取浏览器的长度判断是否到首页
        let str = location.href.length
        str > 9 ?
        this.$router.go(-1) : Toast({
  message: '已经再首页咯',
  icon: 'like-o'
});
      }
  },
  mounted(){
    this.loading = false
  
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
    background-image: url('../assets/img/header.jpg') ;
    background-size: cover;
    background-repeat: no-repeat;
    .back{
      display: none;
    }
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
     
      height: 100%;
    }
  }
  footer{
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    font-size: 16px;
    position: relative;
    z-index: 99;
  }
}
@media screen and(max-width:720px){
  #app{
    .header-wrap{
      .header-bg{
        .back{
          display: inline-block;
          font-size: 32px;
        }
        img{
          margin-left: 10px;
        }
      }
    }
  }
  
}
</style>
