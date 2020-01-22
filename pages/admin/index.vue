<template>
  <div class="mavonEditor">
    <client-only>
      <mavon-editor ref=md @imgAdd="$imgAdd"  codeStyle="tomorrow-night" @change="markChange" :toolbars="markdownOption" v-model="handbook"/>
    </client-only>
  <div v-html="article.body"></div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
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
        body:''
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
               console.log(res.data.data.key);
               this.$refs.md.$img2Url(pos, url) ;
           }).catch(error => {console.log(error);})

      }
  }
};
</script>

<style scoped>
.mavonEditor {
  width: 100%;
  height: 100%;
}