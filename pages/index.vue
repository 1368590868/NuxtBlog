<template>
  <div class="home">
   <!-- 文章轮播图 -->
   <AritcleCarousel />
   <!-- title -->
   <v-title></v-title>
   <!-- 文章信息 -->
   <div class="index">
  <aritcle :aritcle='this.aritcle'></aritcle>
  <div class="more"><nuxt-link to="/article"> <a-button type="dashed" icon="search">查看全部</a-button></nuxt-link></div>
  <!-- 个人信息title -->
  <v-title :initTitle='initTitle'></v-title>
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
          cnTitle: '妹子加微信', // 标题
          enTitle: 'this is life aritcle', // 英文标题
          icon: '&#xe63e;' // iconfont
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
    let {data} = await $axios({
      method:"get",
      url:'/mock/index.json'
    })
    return {aritcle:data.aritcle}
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
    }
    .more{
      margin: 20px auto;
    }
  }
  @media screen and(max-width:720px){
    .home{
      width:100%;
    }
  }
</style>