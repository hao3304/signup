<template>
  <div class="page-login">
    <c-header title="登录"></c-header>
    <div class="page-login__content">
        <div class="page-login__logo">
        </div>
      <div class="page-login__form">
         <mu-text-field v-model="form.mobile" placeholder="请输入手机号" full-width></mu-text-field>
         <mu-text-field v-model="form.password"  placeholder="请输入密码" type="password" full-width></mu-text-field><br/>
         <div class="page-login__button">
           <mu-button full-width large  color="success">登录</mu-button>
         </div>

        <p class="page-login__bottom">
          <a href="javascript:;" style="color:#666;" @click="onSignUp">注册账号</a>
          |
          <a href="javascript:;">忘记密码？</a>
        </p>

      </div>
    </div>
  </div>
</template>
<script>
  import CHeader from '@/components/CHeader.vue'
  export default {
    name: "Login",
    data() {
      return {
        form: {
          mobile: '15068218888',
          password: '123456'
        }
      }
    },
    components: {
      CHeader
    },
    methods: {
      onClick() {
        this.$router.push({name: 'home'})
      },
      onSignUp() {
        this.$router.push({name: 'signup'})
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
