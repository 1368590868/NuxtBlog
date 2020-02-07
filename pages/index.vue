<template>
  <div class="home">
   <!-- 文章轮播图 -->
   <AritcleCarousel />
   <!-- title -->
   <v-title></v-title>
   <!-- 文章信息 -->
   <div class="index">
  <aritcle :aritcle='aritcle'></aritcle>
  <!-- 个人信息title -->
  <v-title class="per-info-title" :initTitle='initTitle'></v-title>
   <!-- 个人信息 -->
   <personal-info></personal-info>
   </div>
   
  </div>
</template>

<script>
import AritcleCarousel from '../components/aritcleCarousel';
import aritcle from '../components/aritcle';
import PersonalInfo from '../components/personalInfo'
import VTitle from '../components/vTitle';
 if (process.browser) { // 在这里根据环境引入wow.js
            var {WOW} = require('wowjs')
        }
export default {
  name:'index',
  components:{
    AritcleCarousel,
    aritcle,
    PersonalInfo,
    VTitle
  },
  data(){
    return{ 
      initTitle:{
      mode: 'black', // 两种颜色  [red | black ]
          cnTitle: '一个人', // 标题
          enTitle: 'this is My Blog', // 英文标题
          icon: '&#xe634;' // iconfont
    }
    }
   
  },
  mounted(){
     if (process.browser) {  // 在页面mounted生命周期里面 根据环境实例化WOW
                    new WOW({
                        live: true, 
                        offset: 0,
                        mobile: true,
                    }).init()
                }
  },
  /**
   * 获取文章的信息
   */
  async asyncData({$axios}){
    let {data} = await $axios.get('/api/homeArticle')
    return {aritcle:data.data}
  }

}
</script>

<style lang='less' scoped>
  .home{  
    padding-top: 75px;
    width: 90%;
    margin:0 auto;
    position: relative;
    z-index: 99;
    .index{
      display: flex;
      flex-flow: row wrap;
      .per-info-title{
        display: none;
      }
    }
   
  }
  @media screen and(max-width:720px){
    .home{
      width:100%;
      .index{
        .per-info-title{
          display: block;
        }
      }
    }
  }
</style>