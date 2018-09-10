<template>
  <div class="page-register">
    <c-header :left="true" @left-click="onBack" title="自助报名"></c-header>
    <div class="page-register__content">
      <step-four @submit="onNext" v-show="step == 3"></step-four>
      <step-five @complete="onComplete" v-show="step == 4"></step-five>
    </div>
  </div>
</template>

<script>
  import CHeader from '@/components/CHeader.vue'
  import StepFour from '@/components/StepFour.vue'
  import StepFive from '@/components/StepFive.vue'
  import Service from '@/services'
  import { mapState } from 'vuex'
  export default {
    name: "Sign",
    components: {
      StepFour,
      StepFive,
      CHeader
    },
    computed: {
      ...mapState(['token'])
    },
    data() {
      return {
        step: null
      }
    },
    methods: {
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
      onBack() {
        this.$router.push({name: 'home'})
      },
      onComplete() {
        this.$vux.alert.show({
          title: '提示',
          content: '报名信息提交成功，请勿重复提交！',
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
