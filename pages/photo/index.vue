<template>
  <div class="photo">
    <v-title :initTitle="initTitle"></v-title>
    <ul class="content">
      <li>
        <van-image
          width="100%"
          fit="cover"
          height="100%"
          @click="open(2)"
          :lazy-load="true"
          src="http://cdn.irlin.cn/header.PNG"
        >
          <template v-slot:loading>您网络状态为3G，为您玩命加载中</template>
        </van-image>
      </li>
      <li>
        <van-image
          width="100%"
          fit="cover"
          height="100%"
          @click="open(2)"
          :lazy-load="true"
          src="http://cdn.irlin.cn/xmj1.jpg"
        >
          <template v-slot:loading>您网络状态为3G，为您玩命加载中</template>
        </van-image>
      </li>
      <li>
        <van-image
          width="100%"
          fit="scale-down"
          height="100%"
          @click="open(2)"
          :lazy-load="true"
          src="http://img3.imgtn.bdimg.com/it/u=1023281353,3173368292&fm=26&gp=0.jpg"
        >
          <template v-slot:loading>您网络状态为3G，为您玩命加载中</template>
        </van-image>
      </li>
      <li>
        <van-image
          width="100%"
          fit="scale-down"
          height="100%"
          @click="open(2)"
          :lazy-load="true"
          src="http://cdn.irlin.cn/xmj2.jpg"
        >
          <template v-slot:loading>您网络状态为3G，为您玩命加载中</template>
        </van-image>
      </li>
      <li>
        <van-image
          width="100%"
          fit="scale-down"
          height="100%"
          @click="open(2)"
          :lazy-load="true"
          src="http://cdn.irlin.cn/xmj2.jpg"
        >
          <template v-slot:loading>您网络状态为3G，为您玩命加载中</template>
        </van-image>
      </li>
      <li>
        <van-image
          width="100%"
          fit="scale-down"
          height="100%"
          @click="open(2)"
          :lazy-load="true"
          src="http://cdn.irlin.cn/xmj2.jpg"
        >
          <template v-slot:loading>您网络状态为3G，为您玩命加载中</template>
        </van-image>
      </li>
      <li>
        <van-image
          width="100%"
          fit="cover"
          height="100%"
          @click="open(2)"
          :lazy-load="true"
          src="http://cdn.irlin.cn/xmj2.jpg"
        >
          <template v-slot:loading>您网络状态为3G，为您玩命加载中</template>
        </van-image>
      </li>
    </ul>
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
  data () {
    return {
      initTitle: {
        mode: 'black', // 两种颜色  [red | black ]
        cnTitle: '私密照片', // 标题
        enTitle: 'Why Look Me Photo', // 英文标题
        icon: '&#xe625;' // iconfont
      }
    }
  },
  methods: {
    open (i) {
      ImagePreview({
        images: [
          'https://yezipi.net/_nuxt/img/f2b8ac8.jpg',
          'http://cdn.irlin.cn/header.PNG',
          'https://yezipi.net/api/static/upload/article_cover/thumb_1569567334552.jpg',
          'http://img3.imgtn.bdimg.com/it/u=1023281353,3173368292&fm=26&gp=0.jpg',
          'http://cdn.irlin.cn/xmj1.jpg',
          'http://cdn.irlin.cn/xmj2.jpg',
          'http://m.qpic.cn/psb?/V108pDzz1skqBn/xda4wMSbrhKIYcSq6r2v*5cbNaN6EZINPBwYitkUBfg!/b/dDcBAAAAAAAA&bo=AAXQAgAAAAARF*c!&rf=viewer_4'
        ],
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
      width: 100%;
      padding-left: 20px;
      li{
          width: 20%;
          max-height: 280px;
          margin: 10px 10px;
          &:hover{
              transform: scale(1.2);
              box-shadow: 0px 0px 15px 9px rgba(0, 0, 0, 0.43);
          }
      }
  }
}
@media screen and(max-width: 720px){
    .photo{
        .content{
            li{
              max-height: 100px;
              width: 30%;
              margin: 5px;
            }
        }
    }
}
</style>