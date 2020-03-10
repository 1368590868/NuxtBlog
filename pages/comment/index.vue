<template>
  <!-- 最新评论 -->
  <div class="comment">
    <a-list
      class="comment-list"
      :header="`共${commentList.length} 条评论`"
      itemLayout="horizontal"
      :dataSource="commentList"
    >
      <a-list-item slot="renderItem" slot-scope="comment">
        <a-comment
          :author="comment.username"
          :avatar="comment.header"
        >
          <p slot="content">{{comment.comment}}</p>
          <a-tooltip slot="datetime" :title="comment.createAt">
            <span>{{comment.fromNow}}</span>
          </a-tooltip>
        </a-comment>
      </a-list-item>
    </a-list>
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
        placeholder="填写邮箱及时获取评论通知"
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
        placeholder="看都看了，写点什么吧"
        show-word-limit
        required
        :error-message="error.content"
        @blur="checkPhone('content')"
      />
      <div class="submit">
        <a-button type="primary" ghost :loading="isloading" @click="submit">提交评论</a-button>
      </div>
    </van-cell-group>
  </div>
</template>
<script>
import axios from 'axios';
import moment from 'moment'
import { Toast } from 'vant'
import VTitle from '../../components/vTitle'
export default {
  head () {
    return {
      title: '公共留言版',
      meta: [{
        hid: 'description2',
        name: 'description',
        content: '这里是木木博客的公共留言板块，欢迎大家留言评论！'
      }]
    }
  },
  components: {
    VTitle
  },
  data () {
    return {
      isloading: false,
      // 表单绑定值
      header: [require('../../assets/img/header1.jpg'),require('../../assets/img/header2.jpg'),require('../../assets/img/header3.jpg'),require('../../assets/img/header4.jpg'),require('../../assets/img/header5.jpg'),require('../../assets/img/header6.jpg'),require('../../assets/img/header7.jpg')],
      name: '',
      email: '',
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
      commentList: [],
    }

  },
  methods: {
    /**
     * 提交留言
     */
    submit () {
      this.isloading = true
      if (this.name == '') {
        this.isloading = false
        return Toast({
          message: '用户名不能为空',
          icon: 'cross'
        });
      }
      if (this.email == '') {
        this.isloading = false
        return Toast({
          message: '邮箱不能为空',
          icon: 'cross'
        });
      }
      if (this.content == '') {
        this.isloading = false
        return Toast({
          message: '评论内容不能为空',
          icon: 'cross'
        });
      }
      axios({
        method: 'post',
        url: `${process.env.BASE_URL}/api/addComment`,
        data: {
          username: this.name,
          email: this.email,
          comment: this.content,
          article: this.$route.name
        }
      }).then(res => {      this.isloading = false
        // 假数据让用户提交后显示内容||因为提交评论后需要再mounted挂载才显示
        this.commentList = [{          username: this.name,
          comment: this.content,
          createAt: moment().format('YYYY-MM-DD , hh:mm:ss'),
          fromNow: moment().startOf('hour').fromNow(),
          header: require('../../assets/img/header1.jpg')
        }, ...this.commentList
        ]
        this.name = ''
        this.email = ''
        this.content = ''

        Toast({
          icon: 'success',
          message: '评论成功'
        })

      })
        .catch(() => this.isloading = false)
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
    /**
     * 评论查询
     */
    getComment () {
      return axios.get(`${process.env.BASE_URL}/api/allComment`).then(res => {
        this.commentList = res.data.data
        for (let item of this.commentList) {
          item.createAt = moment(item.createAt).format('YYYY-MM-DD , HH:mm:ss')
          item.fromNow = moment(item.createAt).startOf('hour').fromNow()
          item.header = this.header[Math.round(Math.random() * 6)]
        }
      }).catch(error => { console.log(error); })
    }
  },
  mounted () {
    this.getComment()

  }
}
</script>

<style lang="less" scoped>
.comment {
  position: relative;
  z-index: 5;
  padding-top: 75px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #fff;
  .form {
    width: 100%;
    .submit {
      width: 300px;
      margin: 0 auto;
      button {
        margin: 20px auto;
        width: 100%;
      }
    }
  }
}
@media screen and(max-width:720px) {
  .comment {
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    .form {
      .submit {
        width: 70vw;
      }
    }
  }
}
</style>