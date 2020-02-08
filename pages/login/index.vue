<template>
  <div class="admin-login">
    <div>
      <div>
        <h2>
          <i class="icon" style="font-size: 50px;color:#534e4e;">&#xe61e;</i>
          后台登陆
        </h2>
        <p style="font-size: 14px">这世上真话本就不多，一位女子的脸红胜过一大段对白。</p>
      </div>
      <div class="logo-div" @click="login">
        <div style="font-size: 16px;">点击登录</div>
        <i class="icon" style="font-size: 50px;margin-top: 10px;color:rgba(0, 0, 0, 0.65)">&#xe64a;</i>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import {Toast} from 'vant'
import Cookie from 'js-cookie'
export default {
  layout (context) {
    return 'admin'
  },
  methods: {
    login () {
  const client_id = '912f17eced062dcd5d85';
  const authorize_uri = 'https://github.com/login/oauth/authorize';

  location.href = `${authorize_uri}?client_id=${client_id}`
    },
    getToken(code){
            axios({
                method:'post',
                url:'https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token',
                data:{
                client_id:'912f17eced062dcd5d85',
                client_secret: 'c3a71d2489d0b4e9a02470cdbbd8722ac1e34374',
                code: code
                }
            }).then(res => {
                let token = null
                // 获取token拆分获取
          token = res.data.split('=')[1].split('&')[0]
          if (token === 'bad_verification_code') {
            Toast({
                    message: '登陆失败',
                    icon: 'error'
                });
            return
        }
        this.$router.push({path:'/admin',query:{token:token}})
        // 本地存储保存token
        Cookie.set('token', token)

        })
    }
    
  },
  mounted(){
    //   查询是否又token
    // if(process.client){
        if(Cookie.get('token') == null || Cookie.get('token') === ''){
        const code = this.$route.query.code

        if (code == null || code === '') {
        return
      }
        this.getToken(code)
    // }
  }
  }
}
</script>
<style scoped lang="less">
.admin-login {
  position: relative;
  z-index: 99;
  background-size: cover;
  padding-top: 15vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  .logo-div {
      padding-top: 10px;
    margin-top: 3vh;
    border: 1px solid #1890ff;
    cursor: pointer;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    align-items: center;
  }
}
</style>
