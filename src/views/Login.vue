<template>
  <div class="page-login">
    <c-header title="登录"></c-header>
    <div class="page-login__content">
        <div class="page-login__logo">
        </div>
      <div class="page-login__form">
         <mu-text-field v-model="form.username" placeholder="请输入手机号" full-width></mu-text-field>
         <mu-text-field v-model="form.password"  placeholder="请输入密码" type="password" full-width></mu-text-field><br/>
         <div class="page-login__button">
           <mu-button full-width large @click="onLogin"  color="success">登录</mu-button>
         </div>

        <p class="page-login__bottom">
          <a href="javascript:;" style="color:#666;" @click="onSignUp">注册账号</a>
          |
          <a href="javascript:;" @click="onRepair">忘记密码？</a>
        </p>

      </div>
    </div>
  </div>
</template>
<script>
  import CHeader from '@/components/CHeader.vue'
  import Service from '@/services'
  import { mapMutations } from 'vuex'

  export default {
    name: "Login",
    data() {
      return {
        form: {
          username: '',
          password: ''
        }
      }
    },
    components: {
      CHeader
    },
    methods: {
      ...mapMutations(['setToken']),
      onClick() {
        this.$router.push({name: 'home'})
      },
      onSignUp() {
        this.$router.push({name: 'signup'})
      },
      onRepair() {
        this.$router.push({name: 'repair'})
      },
      onLogin() {
        this.$vux.loading.show({
          text: '登录中'
        })
        Service.login(this.form).then(rep => {
          this.$vux.loading.hide()
          this.setToken(rep[0].user_id)
          this.$ls.set('token', rep[0].user_id, 3600 * 1000)
          this.$router.push({name: 'home'})
        }).catch(() => {
          this.$vux.loading.hide()
        })

      }
    }
  }
</script>

<style lang="less" >
    body {
      margin: 0;
    }
  .page-login {
    background-color: #fff;
    height: 100%;
    overflow: hidden;

    &__logo {
      height: 5.333333rem;
      background: url("~@/assets/logo.png") no-repeat center center;
      background-size: 3.333333rem;
    }

    &__form {
      padding: 0 .906667rem;
    }

    &__button {
      margin-top: .266667rem;
    }

    &__bottom {
      text-align: center;
      margin-top: .533333rem;
      font-size: .4rem;

      a {
        margin: 0 .133333rem;
      }


    }

  }
</style>
