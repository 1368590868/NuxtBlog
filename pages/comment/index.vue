<template>
  <div class="comment">
    <a-list
      v-if="comments.length"
      :dataSource="comments"
      :header="`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`"
      itemLayout="horizontal"
    >
      <a-list-item slot="renderItem" slot-scope="item">
        <a-comment
          :author="item.author"
          :avatar="item.avatar"
          :content="item.content"
          :datetime="item.datetime"
        >
        </a-comment>
      </a-list-item>
    </a-list>
    <a-comment>
      <a-avatar
        slot="avatar"
        shape="square"
        alt="Han Solo"
        size="large"
        @click="changeValue" 
        :style="{backgroundColor: color, verticalAlign: 'middle'}"   
      >
        {{avatarValue}}
      </a-avatar>
      <div slot="content">
          <a-textarea :rows="4" @change="handleChange" :value="value"></a-textarea>
          <a-button htmlType="submit" :loading="submitting" @click="handleSubmit" type="primary">
            Add Comment
          </a-button>
      </div>
    </a-comment>
  </div>
</template>
<script>
  import moment from 'moment';
//   随机头像颜色文字
  const UserList = ['U', 'Lucy', 'Tom', 'Edward'];
  const colorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];
  export default {
    data() {
      return {
        comments: [],
        submitting: false,
        value: '',
        moment,
        // 随机头像
        avatarValue: UserList[0],
        color: colorList[0],
      };
    },
    methods: {
      handleSubmit() {
        if (!this.value) {
          return;
        }

        this.submitting = true;

        setTimeout(() => {
          this.submitting = false;
          this.comments = [
            {
              author: 'Han Solo',
              avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
              content: this.value,
              datetime: moment().fromNow(),
            },
            ...this.comments,
          ];
          this.value = '';
        }, 1000);
      },
      handleChange(e) {
        this.value = e.target.value;
      },
    /**
     * 点击改变随机头像
     */
       changeValue() {
        const index = UserList.indexOf(this.avatarValue);
        this.avatarValue = index < UserList.length - 1 ? UserList[index + 1] : UserList[0];
        this.color = index < colorList.length - 1 ? colorList[index + 1] : colorList[0];
      },
    },
  };
</script>

<style lang="less" scoped>
    .comment{
        position: relative;
        z-index: 5;
        padding-top: 75px;
        max-width: 1200px;
        margin: 0 auto;
        background-color: rgba(0,0,0,.3);
    }
    @media screen and(max-width:720px){
      .comment{
          width: 100%;
          padding-left: 20px;
          padding-right: 20px;
      }  
    }
</style>