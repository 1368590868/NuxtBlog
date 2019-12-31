<template>
  <div class="home">
    <!-- 手机端菜单按钮 -->
    <i class="icon menu-btn" @click="OpenMenu">&#xe65d;</i>
    <a-menu v-model="menu" :mode="menuType"  :inlineCollapsed='isOpen' v-if="menuOpen">
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
  </div>
</template>
<script>
  export default {
    data() {
      return {
        menu:['home'],
        // 菜单打开与否
        isOpen:false,
        menuOpen: false,
        // 菜单类型
        menuType:'inline',
        // 浏览器宽度
        screenWidth:''
      };
    },
    methods:{
      OpenMenu(){
        this.menuOpen = !this.menuOpen
      }
    },
    mounted(){
      // 监听浏览器宽度
      this.screenWidth = document.body.clientWidth;
       window.onresize = () => {
        return (() => {
          this.screenWidth = document.body.clientWidth;
          this.screenHeight = document.body.clientHeight;
        })();
      };
    }
  };
</script>

<style lang="less" scoped>
  .home{
    margin-top: 75px;
    .menu-btn{
      display: block;
      cursor: pointer;
      color: blue;
      position: relative;
      z-index: 99;
    }
  }
  @media screen and(min-width: 720px){
    .home{
    .menu-btn{
      display: none;
    }}
  }
</style>