<template>
  <div class="mavonEditor">
    <!-- 全屏loading -->
    <a-spin tip='加油，每天写一篇' :spinning="loading">
      <!-- title -->
      {{this.$route.query.token}}
      <a-input placeholder="文章标题" v-model="article.title"/>
      <a-input placeholder="文章描述" v-model="article.desc"/>
      <a-input placeholder="首页图片" v-model="article.imgurl"/>
      <!-- 文章类别 --> 
      <a-select defaultValue="life" style="width: 120px;margin-bottom:100px;" @change="contentType">
      <a-select-option value="life">生活文章</a-select-option>
      <a-select-option value="jishu">技术文章</a-select-option>
      </a-select>
      <!-- 文章内容 -->
    <client-only>
      <mavon-editor ref=md @imgAdd="$imgAdd"  codeStyle="tomorrow-night" @change="markChange" :toolbars="markdownOption" v-model="handbook"/>
    </client-only>
  <div v-html="article.body"></div>
  <!-- 发表文章 -->
  <a-button type="dashed" ghost @click="submit(article)">发表文章</a-button>
    </a-spin>
  </div>
</template>
<script>
import {Toast} from 'vant'
import axios from 'axios';
export default {
  layout(context){
    return 'admin'
  },
  data() {
    return {
      loading : false,
      // 富文本配置项
      markdownOption: {
        bold: true, // 粗体
        htmlcode: true,
        imagelink: true,
        help: true,
        alignleft: true, // 左对齐
      aligncenter: true, // 居中
      alignright: true, // 右对齐
      },
    //   文章配置
    article:{
        body:'',
        title:'',
        desc :'',
        Type: 'life',
        imgrul: ''
    },
      handbook: "#### how to use mavonEditor in nuxt.js"
    };
  },
  methods:{
      /**
       * 编辑区发生变化的回调事件
       * @param 
       */
      markChange(value,render){
          this.article.body = render
      },
        /**
         * 图片上传到云服务器
         */
      $imgAdd(pos,$file){
           var formdata = new FormData();
           formdata.append('file', $file);
           console.log($file);
           axios({
               url: 'http://irlin.cn:3001/api/upload',
               method: 'post',
               headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
               data: formdata,
           }).then((res) => {
               // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
               // $vm.$img2Url 详情见本页末尾
               let url = `http://cdn.irlin.cn/${res.data.data.key}`
               this.$refs.md.$img2Url(pos, url) ;
           }).catch(error => {console.log(error);})
      },
      /**
       * 发表文章
       * @param article.body
       */
      submit(article){
        this.loading = true
        const data = {title:article.title,
                      desc:article.desc,
                      content:article.body,
                      articleType:article.Type,
                      imgurl:article.imgurl
              }
        axios.post('/api/addArticle',data).then( res => {
          console.log(res.data);
          // console.log(article.body);
          if(res.data.result === 'success'){
            this.loading = false
            Toast({
              message: '发表成功',
               icon: 'passed'
            });
          }
        })
        .catch(error => {
          console.log(error);
          Toast({
          message: '发表失败，请重新发送',
          icon: 'close'
          });
          this.loading = false
        })
      },
      /**
       * 文章类别
       */
      contentType(value){
        this.article.Type = value
      }
  }
};
</script>

<style scoped>
.mavonEditor {
  width: 100%;
  height: 100%;
}