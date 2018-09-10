<template>
  <div class="page-register">
    <c-header :left="true" @left-click="onBack" title="退役士兵报到"></c-header>
    <div class="page-register__content">
      <step-zero @submit="onNext" v-if="step == 0"></step-zero>
      <step-one @submit="onNext" v-if="step == 1"></step-one>
      <step-two @complete="onComplete" v-if="step == 2"></step-two>
    </div>
  </div>
</template>

<script>
  import CHeader from '@/components/CHeader.vue'
  import { XButton } from 'vux'
  import { mapState } from 'vuex'
  import Service from '@/services'
  import StepZero from '@/components/StepZero.vue'
  import StepOne from '@/components/StepOne.vue'
  import StepTwo from '@/components/StepTwo.vue'

  export default {
    name: "Register",
    components: {
      CHeader,
      XButton,
      StepZero,
      StepOne,
      StepTwo
    },
    data() {
      return {
        step: null
      }
    },
    computed: {
      ...mapState(['token'])
    },
    methods: {
      onBack() {
        this.$router.push({name: 'home'})
      },
      getStep() {
        this.$vux.loading.show()
        Service.getStep({user_id: this.token}).then(rep => {
          this.$vux.loading.hide()
          this.step = rep
        })
      },
      onNext() {
        this.getStep()
      },
      onComplete() {

        this.$vux.alert.show({
          title: '提示',
          content: '报到信息提交成功，请勿重复提交！',
          onHide: () => {
            this.onBack()
          }
        })

      }
    },
    mounted() {
      this.getStep()
    }
  }
</script>

<style lang="less">
</style>
