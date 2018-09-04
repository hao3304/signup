<template>
  <div class="page-login">
    <c-header title="登录"></c-header>
    <div class="page-login__content">
        <div class="page-login__logo">
        </div>

      <div class="page-login__form">
        <div class="page-login__input">
          <input type="text" v-model="form.mobile" placeholder="请输入手机号">
        </div>
        <div class="page-login__input">
          <input type="text" v-model="form.card"  placeholder="请输入身份证号码">
        </div>

        <x-button @click.native="onClick" class="page-login__button" type="primary">
          登录
        </x-button>
      </div>
    </div>
  </div>
</template>
<script>
  import CHeader from '@/components/CHeader.vue'
  import { XButton } from 'vux'
  export default {
    name: "Login",
    data() {
      return {
        form: {
          mobile: '15068218888',
          card: '330482168972445214'
        }
      }
    },
    components: {
      CHeader,
      XButton
    },
    methods: {
      onClick() {
        this.$router.push({name: 'home'})
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

    &__logo {
      height: 400px;
      background: url("~@/assets/logo.png") no-repeat center center;
      background-size: 250px;
    }

    &__form {
      padding: 0 68px;
    }

    &__button {
      height: 90px;
      margin-top: 60px;
    }

    &__input {
      text-align: center;
      border-bottom: 2px solid #ddd;
      margin-bottom: 20px;
      margin-top: 20px;
      input {
        font-size: 32px;
        width: 100%;
        border: none;
        height: 64px;
      }
    }
  }
</style>
