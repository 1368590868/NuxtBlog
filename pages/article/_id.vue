<template>
  <div class="content">
      <!-- 文章内容 -->
      <article>
          <!-- 文章标题 -->
        <div class="title">
            <h2>{{articleInfo[0].title}}</h2>
           <!-- 时间、留言、点赞 -->
              <p class="title-fu">
                  <span class="time">
                  <i class="icon ">&#xe685;&nbsp;</i>{{time}}</span>
                   <span class="see">
                  <i class="icon ">&#xe76e;&nbsp;</i>{{articleInfo[0].view}}</span>
              </p>
        </div>
        <client-only>
            <mavon-editor codeStyle="tomorrow-night" v-html="articleInfo[0].content"></mavon-editor>
        </client-only>
      </article>
  </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment'
export default {
    /**
     * 文章参数校验必须为数字
     */
    validate({params}){
        return /^\S{24}$/.test(params.id)
    },
    data(){
        time:''
    },
    async asyncData({$axios,params}) {
        let data = await $axios.get(`/api/article/${params.id}`)
        console.log(data.data.data);
        return {articleInfo : data.data.data}
    },
    created(){
        // 格式化UTC日期格式
        this.time = moment(this.articleInfo[0].createAt).format('YYYY-MM-DD, h:mm:ss')
    },
    mounted(){
        const id = this.$route.params.id
        const view = this.articleInfo[0].view
        axios({
            method: 'put',
            url: '/api/addView',
            data:{
                id : id,
                view: view
            }
        })
          .catch(e => {console.log(e);})
    }
}
</script>

<style lang='less' scoped>
    .content{
        margin-top: 75px;
        position: relative;
        z-index: 99;
        article{
            padding:0 10vw;
            .title{
                background: #fff;
                padding: 20px 0;
                .title-fu{
                    display: flex;
                    justify-content: space-around; 
                    font-size: 12px; 
                }
                h2{
                    text-align: center;
                    font-weight:bold;
                }
            }
        }
    }
    @media screen and(max-width: 720px){
        .content{
            background: #ffffff;
            article{
            padding:0 10px;
                .title{
                    font-size: 12px!important;
                }
            }
        }
    }
    @media screen and(min-width: 1200px){
        .content{
            article{
            padding:0 16vw;
                .title{
                    font-size: 14px!important;
                }
            }
        }
    }
</style>