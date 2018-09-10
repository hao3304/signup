<template>
  <div class="page-register__step--1" >
    <div>
      <h5>请填写家庭基本信息</h5>

      <group>
        <selector ref="hk_type"  label-width="105px"  required  placeholder="请选择户口类型" title="户口类型" v-model="form.hk_type" :options="hk"></selector>

        <x-input ref="hk_address" label-width="105px" :max="50" required title="户口地址" placeholder="请输入户口地址" v-model="form.hk_address"></x-input>
        <x-input ref="jt_address" label-width="105px" :max="50" required title="家庭地址" placeholder="请输入户口地址" v-model="form.jt_address"></x-input>
      </group>
      <divider>家庭成员</divider>


      <group>
        <x-input  ref="callname" label-width="105px" :max="10"   required title="称谓" placeholder="请输入称谓（老婆）" v-model="form.callname"></x-input>
        <x-input  ref="name" label-width="105px" :max="10"   required title="姓名" placeholder="请输入姓名" v-model="form.name"></x-input>
        <x-input  ref="danwei" label-width="105px" :max="50"   required title="单位名称" placeholder="请输入单位名称" v-model="form.danwei"></x-input>
        <x-input  ref="phonenum" label-width="105px"   required title="联系电话" keyboard="number"  mask="999 9999 9999" placeholder="请输入联系号码" is-type="china-mobile"  v-model="form.phonenum"></x-input>
        <x-button action-type="submit" type="primary" @click.native="onSubmit">下一步</x-button>
      </group>
    </div>

  </div>
</template>

<script>
  import { XButton, Group, XInput, Selector, Datetime, Divider } from 'vux'
  import { mapState } from 'vuex'
  import Service from '@/services'

  const model = () => {
    return {
      hk_type: null,
      hk_address: '',
      jt_address: '',
      callname: '',
      danwei: '',
      name: '',
      phonenum: '',
      user_id: ''
    }
  }

  export default {
    name: "StepOne",
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
        hk: [
          {key:0, value:'非农户口'},
          {key:1, value:'农业户口'}
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
          Service.setuserfamilyinfo(this.form).then(rep => {
            this.$vux.loading.hide()
            this.$emit('submit')
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
