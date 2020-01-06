<template>
  <div class="per-wrap">
      <div class="per-content">
          <!-- 个人头像 -->
          <br>
         <img src="http://vue.iranlin.xyz/header.PNG" height="80px">
         <p class="name">帅哥林</p>
         <p class="desc">高级前端CV(复制粘贴)工程师</p>
         <p class="animated bounce webzan">
             <i class="icon zan" v-if="isZan" @click="webZan">&#xe6de;</i>
             <i class="icon zan" v-else @click="aginZan">&#xe603;</i>
        </p>
        <p class="btn">
             <span class="feedback">
                  <i class="icon ">&#xe61a;</i>留言数：45
             </span>
        </p>
      </div>
  </div>
</template>

<script>
import {Toast} from 'vant'
export default {
    data(){
        return{
            isZan: ''
        }
    },
    mounted(){
        this.isZan = window.localStorage.isZan
    },
    methods:{
        /**
         * 点赞
         */
        webZan(){
            this.isZan = window.localStorage.webzan
            window.localStorage.setItem("isZan",true)
                Toast({
                    message: '谢谢你喜欢我!',
                    icon: 'like-o'
                });
        },
        /**
         * 再次点赞
         */
        aginZan(){
            if(window.localStorage.isZan){
                Toast({
                    message: '我已经知道你喜欢我了',
                    icon: 'like-o'
                });
        
            }
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
           }
           .desc{
               color:black;
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