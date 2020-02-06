<template>
  <div class="aritcle-wrap">
      <section class="wow  bounceInDown aritcle" v-for="(item,i) of aritcle" :key="i" data-wow-offset="150" @click="goContent(i)">
          <!-- 文章图片 -->
          <div class="img" style="width:140px;height:108px">
            <img :src="item.imgurl" :alt='item.title' height='100%' width='100%'>
          </div>
          <!-- 内容描述 -->
          <div class="aritcle-content">
              <p class="title">{{item.title}}</p>
              <!-- 时间、留言、点赞 -->
              <p class="title-fu">
                  <span class="time">
                  <i class="icon ">&#xe685;</i>{{item.createAt}}</span>
                   <span class="feedback">
                  <i class="icon ">&#xe61a;</i>15</span>
                  <span class="love">
                  <i class="icon ">&#xe74f;</i>10</span>
                   <span class="see">
                  <i class="icon ">&#xe76e;</i>50</span>
              </p>
              <span class="desc van-multi-ellipsis--l3">{{item.desc}}</span>
              
          </div>
      </section>
  <div class="more"><nuxt-link to="/article"> <a-button type="dashed" icon="search">查看全部</a-button></nuxt-link></div>
  </div>
</template>

<script>
 if (process.browser) { // 在这里根据环境引入wow.js
            var {WOW} = require('wowjs')
        }
export default {
    props:{
        aritcle:Array
    },
    data(){
        return{

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
  methods:{
      /**
       * 首页文章跳转到文章列表
       */
      goContent(id){
          this.$router.push({name:'article', params : {id:id}});
      }
  }
}
</script>

<style lang='less' scoped>
    .aritcle-wrap{
        width:100%;
        padding: 0 20px;
         .more{
             display: flex;
             justify-content: center;
             margin-top: 20px;
             margin-bottom: 10px;
         }
        .aritcle{
            width: 100%;
            height: 108px;
            position: relative;
            display: flex;
            flex-flow: row nowrap;
            margin-top: 20px;
            background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 50%);
            box-shadow: 6px 8px 10px 1px #ace0f982 ;
            border-radius: 10px 10px;
            cursor: pointer;
            transition: linear .3s;
            .img{
                img{
                    border-radius: 10px 5px 5px 10px;
                }
            }
            &:hover{
                margin-left: -10px;
                margin-right: 10px;
                .aritcle-content{
                    .title{
                        color:rgb(223, 91, 91);
                    }
                }
            }
            .aritcle-content{
                margin-left: 20px;
                flex:1;
                overflow: hidden;
                .title{
                    color:#555555;
                    font-size: 14px;
                    font-weight: bolder;
                    margin-top: 11px;
                    text-align: center;
                }
                .title-fu{
                    width: 100%;
                    display: flex;
                    justify-content: space-evenly;
                    font-size: 12px;
                   .feedback,.love{
                       display: none;
                   }
                }
                .desc{
                    width: 100%;
                    font-size: 12px;
                }
            }
        }
    }

    @media screen and(min-width:720px){
        .aritcle-wrap{
            padding:0;
            width: (450px / 700px) * 100%;
            .aritcle{
                height: 150px;
                .desc{
                    margin-top: 15px;
                    padding-right: 5px;
                }
                .img{
                    margin-top: 20px;
                    margin-left: 10px;
                    img{
                        border-radius: 0;
                    }
                }
                .aritcle-content{
                    
                    .title{
                        font-size: 18px;
                    }
                    .title-fu{
                    
                   .feedback,.love{
                       display: block;
                   }
                }
                }
            }
        }
    }
</style>