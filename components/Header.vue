<template>
  <div class="header">
    <!-- 手机端菜单按钮 -->
    <i class="icon menu-btn" @click="OpenMenu">&#xe65d;</i>
    <!-- PC Menu -->
    <a-menu class="PC-menu" v-model="menu" mode="horizontal"   >
      <a-menu-item key="home" > 
        <nuxt-link to="/" tag="div">
        <a-icon type="home" />首页 
        </nuxt-link>
        </a-menu-item>
      <a-menu-item key="read" >
        <nuxt-link to="/article" tag="div">
          <a-icon type="read" />文章
          </nuxt-link>
      </a-menu-item>
      <a-menu-item key="photo">
        <nuxt-link to="/photo" tag="div">
        <a-icon type="picture" />相册
        </nuxt-link>
      </a-menu-item>
      <a-menu-item key="feedback"><nuxt-link to="/comment" tag="div"><a-icon type="link" />留言 </nuxt-link></a-menu-item>
      <a-menu-item key="outLink">
        <nuxt-link to="/ranlin" tag="div">
        <a-icon type="link" />友链 
        </nuxt-link>
        </a-menu-item>
    </a-menu>
    <!-- 手机菜单 -->
    <a-menu class="MB-menu" v-model="menu" mode="inline"  v-if="isOpen">
      <a-menu-item key="home" @click="go('home')"> <a-icon type="home" />首页 </a-menu-item>
      <a-menu-item key="read" @click="go('read')">
        <a-icon type="read"/>文章
      </a-menu-item>
      <a-menu-item key="photo" @click="go('photo')">
        <a-icon type="picture" />相册
      </a-menu-item>
      <a-menu-item key="feedback" @click="go('comment')"><a-icon type="solution" /> 留言</a-menu-item>
      <a-menu-item key="outLink" @click="go('link')"><a-icon type="link" />友链 </a-menu-item>
    </a-menu>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        menu:['home'],
        // 菜单打开与否
        isOpen:false,
        
      };
    },
    methods:{
      OpenMenu(){
        this.isOpen = !this.isOpen
      },
     /**
      * 手机菜单跳转路由
      */
      go(type){
        switch(type){
          case 'home' : this.$router.push('/'); this.isOpen = false; break;
          case 'read' : this.$router.push('/article'); this.isOpen = false; break;
          case 'photo' : this.$router.push('/photo') ;this.isOpen = false ; break;
          case 'comment' : this.$router.push('/comment'); this.isOpen = false ; break;
          case 'link' : this.$router.push('/ranlin');this.isOpen = false ; break;
        }
      }
      
    }
      
  };
</script>
<style>
.ant-menu-horizontal > .ant-menu-item:hover{
  background-image: url("../assets/img/nav.png");
  background-size: cover;
  color:#fff;
}
.ant-menu-horizontal > .ant-menu-submenu .ant-menu-submenu-title:hover{
  background-image: url("../assets/img/nav.png");
  background-size: cover;
  color:#fff;
}
.ant-menu-horizontal > .ant-menu-item-selected{
  background-image: url("../assets/img/nav.png");
  background-size: cover;
  color:#fff;
}
</style>
<style lang="less" scoped>
  .header{
    width: 100%;  
    position: absolute;
    top:27px;
    left: 40%;
    .menu-btn{
      display: none;
      cursor: pointer;
      color: rgb(61, 161, 179);
      cursor: pointer;
      position: relative;
      z-index: 99;
    }
    .PC-menu{
      display: block;
      background:none;
      max-width: 600px;
    }
    .MB-menu{
      display: none;
    }
  }
  @media screen and(max-width: 720px){
    .header{
     position: static;
    .menu-btn{
      display: block;
      position: absolute;
      left: 85%;
      font-size: 38px;
      top:-65px;
    }
    .PC-menu{
      display: none;
    }
    .MB-menu{
      display: block;
    }
    }
  }
</style>