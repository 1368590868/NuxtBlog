<template>
  <div class="content">
      <!-- 文章内容 -->
      <article>
          <!-- 文章标题 -->
        <div class="title">{{articleInfo[0].title}}</div>
        <client-only>
            <mavon-editor codeStyle="tomorrow-night" v-html="articleInfo[0].content"></mavon-editor>
        </client-only>
      </article>
  </div>
</template>

<script>
export default {
    /**
     * 文章参数校验必须为数字
     */
    // validate({params}){
    //     return /^\d+$/.test(params.id)
    // }
    async asyncData({$axios,params}) {
        let data = await $axios.get(`/api/article/${params.id}`)
        console.log(data.data.data);
        return {articleInfo : data.data.data}
    },
}
</script>

<style lang='less' scoped>
    .content{
        margin-top: 75px;
        position: relative;
        z-index: 99;
    }
</style>