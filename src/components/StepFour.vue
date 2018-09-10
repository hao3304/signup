<template>
  <div class="page-register__step--1" >
    <div>
      <h5>请填写补充资料</h5>

      <group>

        <datetime ref="joinpdate" format="YYYY-MM-DD" required label-width="105px" placeholder="请选择入党时间" title="入党时间" v-model="form.joinpdate"></datetime>
        <datetime ref="joinadate" format="YYYY-MM-DD" required label-width="105px" placeholder="请选择入伍时间" title="入伍时间" v-model="form.joinadate"></datetime>
        <x-input ref="armylong" label-width="105px" type="number" :max="2" required title="军龄" placeholder="请输入军龄" v-model="form.armylong"></x-input>
        <x-input ref="shengao" label-width="105px" type="number" :max="3" required title="身高" placeholder="请输入身高（厘米）" v-model="form.shengao"></x-input>
        <x-input ref="area" label-width="105px" :max="20" required title="服役地区" placeholder="请输入服役地区" v-model="form.area"></x-input>
        <x-input ref="armyname" label-width="105px" :max="20" required title="部队名称" placeholder="请输入部队名称（番号）" v-model="form.armyname"></x-input>
        <selector ref="armytypeid"  label-width="105px"  required  placeholder="请选择部队类型" title="部队类别" v-model="form.armytypeid" :options="armytype"></selector>
        <x-input ref="zhiwu" label-width="105px" :max="20" required title="职务" placeholder="请输入职务" v-model="form.zhiwu"></x-input>
        <x-input ref="zhuanye" label-width="105px" :max="20" required title="专业" placeholder="请输入专业" v-model="form.zhuanye"></x-input>
        <x-input ref="tuiyicode" label-width="105px" :max="50" required title="退役证件号" placeholder="请输入退役证件号" v-model="form.tuiyicode"></x-input>
        <x-input ref="ligong" label-width="105px" :max="200" required title="立功情况" placeholder="请输入立功情况" v-model="form.ligong"></x-input>
        <selector ref="joinpx"  label-width="105px"  required  placeholder="是否参加过职业培训" title="职业培训" v-model="form.joinpx" :options="px"></selector>


        <!--<selector ref="hk_type"  label-width="105px"  required  placeholder="请选择户口类型" title="户口类型" v-model="form.hk_type" :options="hk"></selector>-->
        <!--<x-input ref="hk_address" label-width="105px" :max="50" required title="户口地址" placeholder="请输入户口地址" v-model="form.hk_address"></x-input>-->
        <!--<x-input ref="jt_address" label-width="105px" :max="50" required title="家庭地址" placeholder="请输入户口地址" v-model="form.jt_address"></x-input>-->
        <!--<x-input  ref="callname" label-width="105px" :max="10"   required title="称谓" placeholder="请输入称谓（老婆）" v-model="form.callname"></x-input>-->
        <!--<x-input  ref="name" label-width="105px" :max="10"   required title="姓名" placeholder="请输入姓名" v-model="form.name"></x-input>-->
        <!--<x-input  ref="danwei" label-width="105px" :max="50"   required title="单位名称" placeholder="请输入单位名称" v-model="form.danwei"></x-input>-->
        <!--<x-input  ref="phonenum" label-width="105px"   required title="联系电话" keyboard="number"  mask="999 9999 9999" placeholder="请输入联系号码" is-type="china-mobile"  v-model="form.phonenum"></x-input>-->

      </group>
      <x-textarea  placeholder="请输入备注信息" :max="400" v-model="form.ex"></x-textarea>

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
      joinpdate: '',
      joinadate: '',
      armylong: '',
      shengao: '',
      area: '',
      armyname: '',
      armytypeid: null,
      zhiwu: '',
      zhuanye: '',
      tuiyicode: '',
      ligong: '',
      joinpx: null,
      ex: ''
    }
  }

  export default {
    name: "StepTwo",
    computed: {
      ...mapState(['token'])
    },
    components: {
      XButton,
      Group,
      XInput,
      Selector,
      Datetime,
      Divider,
      XTextarea
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
          Service.setuserarmyinfo(this.form).then(rep => {
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
