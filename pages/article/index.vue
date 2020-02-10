<template>
  <div class="article">
    <!-- 文章标题 -->
      <v-title class="title" :initTitle='initTitle'></v-title>
      <!-- 全部文章描述 -->
      <all-article :aritcle='aritcle' class="article-desc"></all-article>
      <!-- 文章跳转 -->
      <nuxt-link to="/life-article/9">99news</nuxt-link>
      <a href="/article/ranlin">99news</a>
  </div>
</template>

<script>
import VTitle from '../../components/vTitle'
import AllArticle from '../../components/aritcle'
export default {
  components:{
    VTitle,
    AllArticle
  },
  data(){
    return{
      initTitle: {
          mode: 'black', // 两种颜色  [red | black ]
          cnTitle: '全部文章', // 标题
          enTitle: 'this is all aritcle', // 英文标题
          icon: '&#xe63e;' // iconfont
    }
    }
  },
   /**
   * 获取文章的信息
   */
  async asyncData({$axios}){
    let {data} = await $axios({
      method:"get",
      url:'/api/article'
    })
    return {aritcle:data.data}
  },
  // seo
  head(){
    return{
      title:'全部文章-帅气的木木',
      meta: [{
        hid: "description",
        name: "description",
        content: "木木的生活小记与大前端相关记录"
      }],
      meta:[{
            'name':'keywords',
            'content': '全部文章、nuxt seo、vuecli3'
        }]
    }
  }
}
</script>

<style lang='less' scoped>
.article{
    position: relative;
    z-index: 99;
    width: 100%;
    .title{
      margin-top: 75px;
    }
   .article-desc{
     margin: 0 auto;
   }
}
@media screen and(max-width: 720px){
  .article{
    padding-left: 0;
  }
}

</style>