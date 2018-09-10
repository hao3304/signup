<template>
  <div class="page-register__step--1" >
    <div>
      <h5>请填写志愿资料</h5>
      <divider>第一志愿</divider>
      <group>

        <x-input ref="name1" label-width="105px" :max="30" required title="志愿名称" placeholder="请输入第一志愿名称" v-model="form.name1"></x-input>
        <x-input ref="jigou1" label-width="105px" :max="50" required title="学校和机构" placeholder="请输入承训学校和机构" v-model="form.jigou1"></x-input>
        <x-input ref="zhuanye1" label-width="105px" :max="50" required title="培训专业" placeholder="请输入自愿选择的培训专业" v-model="form.zhuanye1"></x-input>
      </group>
      <divider>第二志愿</divider>
      <group>
        <x-input ref="name2" label-width="105px" :max="30" required title="志愿名称" placeholder="请输入第二志愿名称" v-model="form.name2"></x-input>
        <x-input ref="jigou2" label-width="105px" :max="50" required title="学校和机构" placeholder="请输入承训学校和机构" v-model="form.jigou2"></x-input>
        <x-input ref="zhuanye2" label-width="105px" :max="50" required title="培训专业" placeholder="请输入自愿选择的培训专业" v-model="form.zhuanye2"></x-input>
      </group>

      <x-button style="margin-top: 100px;" action-type="submit" type="primary" @click.native="onSubmit">提交</x-button>

    </div>

  </div>
</template>

<script>
  import { XButton, Group, XInput, Selector, Datetime, Divider,XTextarea } from 'vux'
  import { mapState } from 'vuex'
  import Service from '@/services'

  const model = () => {
    return {
      name1: '',
      jigou1: '',
      zhuanye1: '',
      name2: '',
      jigou2: '',
      zhuanye2: ''
    }
  }

  export default {
    name: "StepFive",
    computed: {
      ...mapState(['token'])
    },
    components: {
      XButton,
      Group,
      XInput,
      Selector,
      Datetime,
      Divider
    },
    data() {
      return {
        form: model(),
        px: [
          {key:0, value:'参加过职业培训'},
          {key:1, value:'没有参加过'}
        ],
        armytype: [
          {key:0, value:'陆军'},
          {key:1, value:'海军'},
          {key:2, value:'空军'},
          {key:3, value:'武警'},
          {key:4, value:'其他'}
        ]
      }
    },
    methods: {
      isValid() {
        let valid = true
        const fields = model()
        Object.keys(fields).forEach(field => {
          if(this.$refs[field]) {
            console.log(this.$refs[field])
            if(this.$refs[field].valid == false) {
              valid = false
            }
          }
        })
        return valid
      },

      onSubmit() {
        if(this.isValid()) {
          this.$vux.loading.show()
          this.form.user_id = this.token
          Service.setuserzhiyuaninfo(this.form).then(rep => {
            this.$vux.loading.hide()
            this.$emit('complete')
          }).catch(()=> {
            this.$vux.loading.hide()
          })
        }else {
          this.$vux.toast.show({
            text: '请填写完整或者填写正确格式',
            width: '5rem',
            type: 'warn'
          })
        }
      }
    },
    mounted() {
    }
  }
</script>

<style scoped>

</style>
