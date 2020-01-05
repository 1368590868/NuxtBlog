<template>
  <div class="aritcle-wrap">
      <section class="aritcle" v-for="(item,i) of aritcle" :key="i">
          <!-- 文章图片 -->
          <div class="img" style="width:120px;height:79px">
          <img :src="item.imgurl" height='100%' width='100%'>
          </div>
      </section>
  </div>
</template>

<script>
export default {
    props:{
        aritcle:Array
    },
    data(){
        return{

        }
    }
}
</script>

<style>

</style>