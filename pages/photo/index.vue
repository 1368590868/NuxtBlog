<template>
  <div class="photo">
      <br>
      <br>
      <br>
      <br>
      <br>
      <span @click="open">相册查看</span>
  </div>
</template>

<script>
import {ImagePreview} from 'vant'
export default {
    data(){
        return{
           
        }
    },
    methods:{
        open(){
            ImagePreview({
  images: [
      'https://yezipi.net/_nuxt/img/f2b8ac8.jpg',
      'https://yezipi.net/api/static/upload/article_cover/thumb_1569567334552.jpg'
  ],
  startPosition: 1,
  lazyLoad: true,
});
        }
    }
}
</script>

<style lang='less' scoped>
    .photo{
        position: relative;
        z-index: 99;
    }

</style>