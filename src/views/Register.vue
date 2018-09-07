<template>
  <div class="page-register">
    <c-header :left="true" @left-click="onBack" title="自助报到"></c-header>
    <div class="page-register__content">
      <h5>身份证号码认证</h5>
      <p>
        请输入二代身份证号码，用于验证身份信息。
      </p>
      <input type="text" placeholder="请输入身份证号码">
      <x-button type="primary">完成</x-button>
    </div>
  </div>
</template>

<script>
  import CHeader from '@/components/CHeader.vue'
  import { XButton } from 'vux'
  export default {
    name: "Register",
    components: {
      CHeader,
      XButton
    },
    methods: {
      onBack() {
        this.$router.push({name: 'home'})
      }
    }
  }
</script>

<style lang="less">
  .page-register {
    &__content {
      padding: 0 25px;
      h5 {
        text-align: center;
        margin: 0;
        padding-top: 50px;
        padding-bottom: 35px;
        font-size: 38px;
        font-weight: 400;
      }

      p {
        text-align: center;
        margin: 0;
        padding-bottom: 0;
        font-size: 24px;
        color: #666;
      }

      input {
        width: 100%;
        height: 90px;
        background-color: #fcfcfc;
        border-radius: 10px;
        border: solid 2px #c8c8c8;
        font-size: 30px;
        text-align: center;
        margin-top: 130px;
      }

      .weui-btn {
        height: 90px;
        margin-top: 45px;
      }

    }
  }
</style>
