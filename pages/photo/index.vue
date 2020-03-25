<template>
  <div class="photo">
    <v-title :initTitle="initTitle"></v-title>
    <section class="content">
      <van-image
      v-for="(item,index) of imgList"
        :key="index"
          width="23vw"
          fit="cover"
          height="23vw"
          @click="open(item.url,index)"
          :lazy-load="true"
          :src="item.url"
        >
          <template v-slot:loading>您网络状态为3G，为您玩命加载中</template>
        </van-image>
    </section>
    
  </div>
</template>

<script>
import { ImagePreview } from 'vant'
import VTitle from '../../components/vTitle'
export default {
  components: {
    VTitle
  },
    head(){
    return{
      title:'私密照片',
      meta: [{
        hid: "description",
        name: "description",
        content: "夏铭杰的私密照片"
      }]
    }
  },
  async asyncData({$axios,env}) {
    let imgList = await $axios.get(`${env.BASE_URL}/api/img`)
    return {imgList : imgList.data.data}
  },
  data () {
    return {
      initTitle: {
        mode: 'black', // 两种颜色  [red | black ]
        cnTitle: '私密照片', // 标题
        enTitle: 'Why Look Me Photo', // 英文标题
        icon: '&#xe625;' // iconfont
      },
      imgs:[]
    }
  },
  created(){
    for(let i = 0; i < this.imgList.length; i++){
      this.imgs.push(this.imgList[i].url)
    }
    
  },
  methods: {
    /**
     * 打开不同终端的图片预览
     */
    open (url,i) {
      if(window.innerWidth > 720){
        window.open(url)
        return
      }
     ImagePreview({
        images: [...this.imgs],
        startPosition: i,
        lazyLoad: true,
      });
     
    }
  }
}
</script>

<style lang='less' scoped>
.photo {
  position: relative;
  z-index: 99;
  padding-top: 75px;
  width: 100%;
  .content{
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    .van-image{
    width:18vw !important;
    height: 18vw !important;
    margin-left: 20px;
    margin-top: 20px;
    }
  }
  
}
@media screen and(max-width: 720px){
    .photo{
      .van-image{
        width:20vw !important;
        height: 20vw !important;
      }
    }
}
</style>