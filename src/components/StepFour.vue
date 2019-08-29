<template>
  <div class="page-register__step--1" >
    <div>
      <h5>请填写补充资料</h5>
      <group>
        <x-input ref="job_old" label-width="105px"  :max="20" required title="原部职别" placeholder="请输入原部职别" v-model="form.job_old"></x-input>
        <x-input ref="out_address" label-width="105px"  :max="20" required title="入伍地" placeholder="请输入入伍地" v-model="form.out_address"></x-input>
        <datetime ref="finishdate" format="YYYY-MM-DD" required label-width="105px" placeholder="请选择退伍时间" title="退伍时间" v-model="form.finishdate"></datetime>
        <selector ref="finishtype"  label-width="105px"  required  placeholder="请选择" title="退役方式" v-model="form.finishtype" :options="finishtype"></selector>
        <x-input ref="job_good" label-width="105px"  :max="40" required title="专业特长" placeholder="请输入专业特长" v-model="form.job_good"></x-input>
        <selector ref="ydwd"  label-width="105px"  required  placeholder="请选择" title="有地无地" v-model="form.ydwd" :options="ydwd"></selector>
        <selector ref="peixuntype"  label-width="105px"  required  placeholder="请选择" title="培训类型" v-model="form.peixuntype" :options="peixuntype"></selector>
        <selector ref="allow"  label-width="105px"  required  placeholder="请选择" title="服从调整" v-model="form.allow" :options="allow"></selector>
      </group>

      <x-button action-type="submit" type="primary" @click.native="onSubmit">提交</x-button>

    </div>

  </div>
</template>

<script>
  import { XButton, Group, XInput, Selector, Datetime, Divider,XTextarea } from 'vux'
  import { mapState } from 'vuex'
  import Service from '@/services'

  const model = () => {
    return {
      job_old: '',
      out_address: '',
      finishdate: '',
      job_good: '',
      ydwd: null,
      finishtype: null,
      peixuntype: null,
      allow: null
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
        ydwd: [
          {key:1, value:'有'},
          {key:2, value:'无'},
          {key:0, value:'其他'},
        ],
        allow: [
          {key:0, value:'是'},
          {key:1, value:'否'},
        ],
        peixuntype: [
          {key:1, value:'劳动技能'},
          {key:2, value:'中职学历'},
          {key:0, value:'其他'},
        ],
        finishtype: [
          {key:1, value:'退役义务兵'},
          {key:2, value:'复员士官'},
          {key:3, value:'专业士官'},
          {key:0, value:'其他'}
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
              valid = false;
              this.error = this.$refs[field].title;
            }
          }
        })
        return valid
      },

      onSubmit() {
        if(this.isValid()) {
          this.$vux.loading.show()
          this.form.user_id = this.token
          Service.setuserenterinfo(this.form).then(rep => {
            this.$vux.loading.hide()
            this.$emit('submit')
          }).catch(()=> {
            this.$vux.loading.hide()
          })
        }else {
          this.$vux.toast.show({
            text: `${this.error}不能为空！`,
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
