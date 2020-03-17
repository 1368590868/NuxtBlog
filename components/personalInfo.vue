<template>
  <div class="per-wrap">
      <div class="per-content">
          <!-- 个人头像 -->
          <br>
         <img src="http://cdn.irlin.cn/header.png" height="80px">
         <p class="name">木木</p>
         <p class="desc">初级前端CV(复制粘贴)工程师</p>
         <p class="github">
             <i class="icon">&#xe64a;</i>&nbsp;<a href="https://github.com/1368590868" target="_blank">https://github.com/1368590868</a>
         </p>
         <p class="wechat">
             <i class="icon qq">&#xe82e;</i><span>1368590868</span>
             <i class="icon wechat">&#xe614;</i><span>&nbsp;ranlin_520</span>
         </p>
         <p class="wow bounce webzan" data-wow-offset="150" data-wow-iteration='99' >
             <i class="icon zan"  @click="aginZan">&#xe603;</i>
        </p>
        <p class="btn">
            <i class="icon ">&#xe61a;</i>
            <span>&nbsp;最新留言：5</span>
        </p>
      </div>
      <!-- 最新评论 -->
      <div class="comment">
           <a-list
      class="comment-list"
      header=" "
      itemLayout="horizontal"
      :dataSource="commentList"
    >
      <a-list-item slot="renderItem" slot-scope="comment">
        <a-comment
          :author="comment.username"
          :avatar="comment.header"
        >
          <p slot="content">{{comment.comment}}</p>
          <a-tooltip slot="datetime" :title="comment.createAt">
            <span>{{comment.fromNow}}</span>
          </a-tooltip>
        </a-comment>
      </a-list-item>
    </a-list>
      </div>
  </div>
</template>

<script>
import {Toast} from 'vant'
import moment from 'moment'
import axios from 'axios';
export default {
    data(){
        return{
      header: [require('../assets/img/header.jpg'),require('../assets/img/header2.jpg'),require('../assets/img/header3.jpg'),require('../assets/img/header4.jpg'),require('../assets/img/header5.jpg'),require('../assets/img/header6.jpg'),require('../assets/img/header7.jpg')],
          commentList:'',
        }
    },
    mounted(){
      this.getComment()
    },
    methods:{
        aginZan(){
            
                Toast({
                    message: '我就跳着玩，别点我',
                    icon: 'like-o'
                });
        },
        /**
     * 评论查询
     */
    getComment () {
      return axios.get(`${process.env.BASE_URL}/api/homeComment`).then(res => {
        this.commentList = res.data.data
        for (let item of this.commentList) {
          item.createAt = moment(item.createAt).format('YYYY-MM-DD , HH:mm:ss')
          item.fromNow = moment(item.createAt).startOf('hour').fromNow()
          item.header = this.header[Math.round(Math.random() * 6)]
        }
      }).catch(error => { console.log(error); })
    }
    }
}
</script>

<style lang='less' scoped>
    .per-wrap{
        width:(900 - 578.56) * 0.1%;
        height: 100%;
        margin-top: 20px;
        margin-left:3.5%;
        position: relative;
        background-color: rgba(0,0,0,.1);
        .comment{
         .ant-list-item::after{
           content:'';
           width: 26px;
           height: 14px;
           position: relative;
           top:-30px;
           right: 10px;
           background-image: url('../assets/img/new.gif');
         }
        }
        &::after{
            content:'';
            width: 100%;
            height: 30%;
            display: block;
            background:url('../assets/img/ice.png') repeat-x;
            position:absolute;
            top:0;
            
        }
         .per-content{
           width: 100%;
           display: flex;
           flex-flow: column nowrap;
           justify-content: center;
           align-items: center;
           .name{
               color:#4240d8;
               font-size: 16px;
               margin-top: 10px;
               margin-bottom: 10px;
           }
           .desc,.wechat,.github{
               color:black;
           }
           .wechat{
               margin-bottom: 20px;
           }
           .github{
              a{
                  color:black;
                  &:hover{
                      color: #84f19b;
                  }
              }
           }
           .btn{
               display: flex;
               justify-content: center;
               align-items: center;
           }
           .zan{
               font-size: 32px;
           }
       }
    }

    @media screen and(max-width:720px){
    .per-wrap{
       width:90%;
       margin: 0 auto;
       margin-top: 20px;
       
      
    }
    }
</style>