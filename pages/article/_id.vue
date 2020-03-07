<template>
  <div class="content">
    <!-- 文章内容 -->
    <article>
      <!-- 文章标题 -->
      <div class="title">
        <h2>{{articleInfo[0].title}}</h2>
        <!-- 时间、留言、点赞 -->
        <p class="title-fu">
          <span class="time">
            <i class="icon">&#xe685;&nbsp;</i>
            {{time}}
          </span>
          <span class="see">
            <i class="icon">&#xe76e;&nbsp;</i>
            {{articleInfo[0].view}}
          </span>
        </p>
      </div>
      <client-only>
        <mavon-editor :boxShadow="false" codeStyle="tomorrow-night" v-html="articleInfo[0].content"></mavon-editor>
      </client-only>
      <!-- 最新评论 -->
      <div class="comment">
        <a-list
          class="comment-list"
          :header="`${data.length} replies`"
          itemLayout="horizontal"
          :dataSource="data"
        >
          <a-list-item slot="renderItem" slot-scope="item">
            <a-comment :author="item.author" :avatar="item.avatar">
              <template slot="actions">
                <span v-for="(action,i) in item.actions" :key="i">{{action}}</span>
              </template>
              <p slot="content">{{item.content}}</p>
              <a-tooltip slot="datetime" :title="item.datetime.format('YYYY-MM-DD HH:mm:ss')">
                <span>{{item.datetime.fromNow()}}</span>
              </a-tooltip>
            </a-comment>
          </a-list-item>
        </a-list>
      </div>
      <!-- 留言区域 -->
      <v-title :init-title="initTtile"></v-title>
      <!-- 表单内容 -->
      <van-cell-group class="form">
        <van-field
          v-model="name"
          label="姓名"
          placeholder="用户名"
          label-class="name"
          required
          :error-message="error.name"
          @blur="checkPhone('name')"
        />
        <van-field
          v-model="email"
          required
          label="邮箱"
          placeholder="填写你的邮箱，订阅你的评论"
          :error-message="error.email"
          @blur="checkPhone('email')"
        />
        <van-field
          v-model="content"
          rows="5"
          autosize
          label="评论"
          type="textarea"
          maxlength="300"
          placeholder="看都看了，说点什么吧"
          show-word-limit
          required
          :error-message="error.content"
          @blur="checkPhone('content')"
        />
        <div class="submit">
          <a-button type="primary" ghost :loading="isloading" @click="submit">提交评论</a-button>
        </div>
      </van-cell-group>

    </article>
  </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment'
import VTitle from '../../components/vTitle'
export default {
  /**
   * 文章参数校验必须为数字
   */
  validate ({ params }) {
    return /^\S{24}$/.test(params.id)
  },
  components: {
    VTitle
  },
  data () {
    return {
      isloading: false,
      time: '',
      // 表单绑定值
      name: '',
      email: '',
      time: '',
      content: '',
      message: '',
      error: {
        email: '',
        name: '',
        content: ''
      },
      // 意见反馈
      initTtile: {
        cnTitle: '评论留言',
        enTitle: '欢迎来到祖安，打个招呼吧！',
        mode: 'black',
        icon: '&#xe61a;'
      },
      // new comment source
      data: [
        {
          actions: ['Reply to'],
          author: 'Han Solo',
          avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
          datetime: moment().subtract(1, 'days'),
        },
        {
          actions: ['Reply to'],
          author: 'Han Solo',
          avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
          datetime: moment().subtract(2, 'days'),
        },
      ],
    }

  },
  methods: {
    /**
     * 提交留言
     */
    submit () {
      this.isloading = true
      setTimeout(() => this.isloading = false, 1000)
    },

    /**
     * 验证表单数据
     */
    checkPhone (type) {
      const typeTable = {
        name: '姓名',
        email: '邮箱',
        content: '评论内容'
      }
      let reg;
      switch (type) {
        case 'email':
          reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
          break;
        case 'name':
          reg = /\S{2,15}/;
          break;
        case 'content':
          reg = /\S{2,300}/;
      }

      if (!reg.test(this[type])) {
        this.error = { ...this.error, [type]: typeTable[type] + '格式错误!' };
      } else {
        this.error = { ...this.error, [type]: '' };
      }
    },
  },
  /**
   * 获取当前文章内容
   */
  async asyncData ({ $axios, params, env }) {
    let data = await $axios({
      method: 'get',
      url: `${env.BASE_URL}/api/article/${params.id}`
    })
    console.log(data.data.data);
    return { articleInfo: data.data.data }
  },
  created () {
    // 格式化UTC日期格式
    this.time = moment(this.articleInfo[0].createAt).format('YYYY-MM-DD, h:mm:ss')
  },
  mounted () {
    const id = this.$route.params.id
    const view = this.articleInfo[0].view
    axios({
      method: 'put',
      url: '/api/addView',
      data: {
        id: id,
        view: view
      }
    })
      .catch(e => { console.log(e); })
  }
}
</script>

<style lang='less' scoped>
.content {
  margin-top: 75px;
  position: relative;
  z-index: 99;
  article {
    padding: 0 10vw;
    .title {
      background: #fff;
      padding: 20px 0;
      .title-fu {
        display: flex;
        justify-content: space-around;
        font-size: 12px;
      }
      h2 {
        text-align: center;
        font-weight: bold;
      }
    }
    .comment {
      background-color: #fff;
    }
    .form {
      padding-bottom: 20px;
      .submit {
        width: 300px;
        margin: 20px auto;
        button {
          width: 100%;
        }
      }
    }
  }
}
@media screen and(max-width: 720px) {
  .content {
    background: #ffffff;
    article {
      padding: 0 10px;
      .title {
        font-size: 12px !important;
      }
    }
  }
}
@media screen and(min-width: 1200px) {
  .content {
    article {
      padding: 0 16vw;
      .title {
        font-size: 14px !important;
      }
    }
  }
}
</style>