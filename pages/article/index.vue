<template>
  <div class="article">
      <v-title class="title" :initTitle='initTitle'></v-title>
      <h1>article</h1>
      <nuxt-link to="/life-article/9">99news</nuxt-link>
      <a href="/article/ranlin">99news</a>
  </div>
</template>

<script>
import VTitle from '../../components/vTitle'
export default {
  components:{
    VTitle
  },
  data(){
    return{
      initTitle: {
          mode: 'black', // 两种颜色  [red | black ]
          cnTitle: '文章列表', // 标题
          enTitle: 'this is all aritcle', // 英文标题
          icon: '&#xe63e;' // iconfont
    }
    }
  },
  // seo
  head(){
    return{
      title:'文章首页'
    }
  }
}
</script>

<style lang='less' scoped>
.article{
    position: relative;
    z-index: 99;
    .title{
      margin-top: 75px;
    }
}

</style>