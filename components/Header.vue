<template>
  <div class="header">
    <!-- 手机端菜单按钮 -->
    <i class="icon menu-btn" @click="OpenMenu">&#xe65d;</i>
    <!-- PC Menu -->
    <a-menu class="PC-menu" v-model="menu" mode="horizontal"   >
      <a-menu-item key="home"> <a-icon type="home" />首页 </a-menu-item>
      <a-sub-menu>
        <span slot="title" class="submenu-title-wrapper"
          ><a-icon type="read" />文章</span
        >
        <a-menu-item-group title="Vue">
          <a-menu-item key="1">关于vue</a-menu-item>
          <a-menu-item key="2">一篇好文章</a-menu-item>
          <a-menu-item key="3">更多Vue相关...</a-menu-item>
        </a-menu-item-group>
        <a-menu-item-group title="Nuxt">
          <a-menu-item key="4">Nuxt</a-menu-item>
          <a-menu-item key="5">简单的Nuxt </a-menu-item>
          <a-menu-item key="6">更多Nuxt相关...</a-menu-item>
        </a-menu-item-group>
      </a-sub-menu>
      <a-menu-item key="photo">
        <a-icon type="picture" />相册
      </a-menu-item>
      <a-menu-item key="feedback"><a-icon type="link" />留言 </a-menu-item>
      <a-menu-item key="outLink"><a-icon type="link" />友链 </a-menu-item>
    </a-menu>
    <!-- 手机菜单 -->
    <a-menu class="MB-menu" v-model="menu" mode="inline"  v-if="isOpen">
      <a-menu-item key="home"> <a-icon type="home" />首页 </a-menu-item>
      <a-sub-menu>
        <span slot="title" class="submenu-title-wrapper"
          ><a-icon type="read" />文章</span
        >
        <a-menu-item-group title="Vue">
          <a-menu-item key="1">关于vue</a-menu-item>
          <a-menu-item key="2">一篇好文章</a-menu-item>
          <a-menu-item key="3">更多Vue相关...</a-menu-item>
        </a-menu-item-group>
        <a-menu-item-group title="Nuxt">
          <a-menu-item key="4">Nuxt</a-menu-item>
          <a-menu-item key="5">简单的Nuxt </a-menu-item>
          <a-menu-item key="6">更多Nuxt相关...</a-menu-item>
        </a-menu-item-group>
      </a-sub-menu>
      <a-menu-item key="photo">
        <a-icon type="picture" />相册
      </a-menu-item>
      <a-menu-item key="feedback"><a-icon type="solution" /> 留言</a-menu-item>
      <a-menu-item key="outLink"><a-icon type="link" />友链 </a-menu-item>
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