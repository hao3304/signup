<template>
  <div class="page-sign">
    <c-header :left="true" @left-click="onBack" title="自助报名"></c-header>
    <div class="page-sign__content">
      <h5>个人基本信息填写</h5>
      <p>保证填写内容真实有效</p>
      <group>
        <x-input label-width="100px" title="身份证号码" v-model="form.idCard"></x-input>
        <x-input  label-width="100px" title="姓名" v-model="form.name"></x-input>
        <selector direction="rtl" label-width="100px" title="性别" v-model="form.sex" :options="sex"></selector>
        <datetime  format="YYYY-MM-DD"  label-width="100px" title="出生日期" v-model="form.birthday"></datetime>
        <x-input  label-width="100px" title="籍贯" v-model="form.country"></x-input>
        <x-input  label-width="100px" title="民族" v-model="form.mz"></x-input>
        <x-input  label-width="100px" title="个人照片" v-model="form.pic"></x-input>
        <x-input  label-width="100px" title="文化程度" v-model="form.wenhua"></x-input>
      </group>
      <x-button type="primary">提交</x-button>
    </div>
  </div>
</template>

<script>
  import CHeader from '@/components/CHeader.vue'
  import { XButton, Group, XInput, Selector, Datetime } from 'vux'
  export default {
    name: "Sign",
    components: {
      CHeader,
      XButton,
      Group,
      XInput,
      Selector,
      Datetime
    },
    data() {
      return {
        sex: [
          {key:1, value:'男'},
          {key:0, value:'女'}
        ],
        form: {
          idCard: '',
          name: '',
          sex: 0,
          birthday: '',
          country: '',
          mz: '',
          pic: '',
          wenhua: ''
        }
      }
    },
    methods: {
      onBack() {
        this.$router.push({name: 'home'})
      }
    }
  }
</script>

<style lang="less">
  .page-sign {
    &__content {
      padding: 0 25px;
      position: absolute;
      overflow-y: auto;
      top: 100px;
      bottom: 0;
      left: 0;
      right: 0;
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
      .weui-cell{
        height: 100px;
        font-size: 30px;
        p {
          color: #000;
          font-size: 30px;
        }
      }
      .weui-btn {
        height: 90px;
        margin-top: 45px;
        font-size: 34px;
        margin-bottom: 100px;
      }

      a {
        text-decoration: none;
      }

    }
  }
</style>
