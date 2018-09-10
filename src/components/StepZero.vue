<template>
  <div class="page-register__step--0" >

    <div v-show="form.areaid == null">
      <h5>选择报到区域</h5>
      <x-button @click.native="setArea(0)">南湖区</x-button>
      <x-button @click="setArea(1)">秀洲区</x-button>
      <x-button @click="setArea(2)">经开区</x-button>

    </div>

    <div v-show="form.areaid != null">
      <h5>请填写基本信息</h5>

      <group>

        <x-input ref="idcard" label-width="105px" :max="18" required title="身份证号码" placeholder="请输入身份证号码" v-model="form.idcard"></x-input>
        <x-input  ref="realname" label-width="105px" :max="18"   required title="姓名" placeholder="请输入姓名" v-model="form.realname"></x-input>
        <selector ref="sexid"  label-width="105px"  required  placeholder="请选择性别" title="性别" v-model="form.sexid" :options="sex"></selector>
        <!--<datetime ref="birthday" format="YYYY-MM-DD" required label-width="105px" placeholder="请选择出生日期" title="出生日期" v-model="form.birthday"></datetime>-->
        <selector ref="mz_id" label-width="105px" required  placeholder="请选择民族" title="民族" v-model="form.mz_id" :options="mz"></selector>
        <selector ref="political_id" label-width="105px"  required placeholder="请选择政治面貌" title="政治面貌" v-model="form.political_id" :options="political"></selector>
        <x-input ref="shenti"  label-width="105px" :max="18"  required title="身体状况" placeholder="请输入身体状况" v-model="form.shenti"></x-input>
        <selector ref="wenhua_id" label-width="105px" required placeholder="请选择文化程度" title="文化程度" v-model="form.wenhua_id" :options="wenhua"></selector>
        <x-input ref="address"  label-width="105px" :max="50"  required title="家庭地址" placeholder="请输入家庭地址" v-model="form.address"></x-input>
        <x-input ref="phonenum"  label-width="105px"   required title="联系号码" keyboard="number"  mask="999 9999 9999" is-type="china-mobile" placeholder="请输入联系号码" v-model="form.phonenum"></x-input>
      </group>
      <x-button action-type="submit" type="primary" @click.native="onSubmit">下一步</x-button>

    </div>

  </div>
</template>

<script>
  import { XButton, Group, XInput, Selector, Datetime } from 'vux'
  import { mapState } from 'vuex'
  import Service from '@/services'

  const model = () => {
    return {
      areaid: null,
      idcard: '',
      realname: '',
      sexid: null,
      mz_id: null,
      political_id: null,
      shenti: '',
      wenhua_id: null,
      address: '',
      phonenum: '',
      user_id: ''
    }
  }

  export default {
    name: "StepZero",
    computed: {
      ...mapState(['token'])
    },
    components: {
      XButton,
      Group,
      XInput,
      Selector,
      Datetime
    },
    data() {
      return {
        form: model(),
        sex: [
          {key:1, value:'男'},
          {key:0, value:'女'}
        ],
        political: [
          { key: 0, value: '群众' },
          { key: 1, value: '党员' },
          { key: 2, value: '其他' },
        ],
        wenhua: [
          { key: 0, value: '初中' },
          { key: 1, value: '高中' },
          { key: 2, value: '中专' },
          { key: 3, value: '大专' },
          { key: 4, value: '本科' },
          { key: 5, value: '本科以上' }
        ],
        mz: [
          { key: 0, value: '汉族'}
        ],
        shenti: [
          { key: 0, value: '良好'}
        ]
      }
    },
    methods: {
      setArea(area) {
        this.form.areaid = area
      },
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
          Service.setuserbaseinfo(this.form).then(rep => {
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
