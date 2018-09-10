<template>
  <div class="page-signup">
    <mu-appbar style="width: 100%;" color="primary">
      <mu-button icon @click='onBack' slot="left">
        <mu-icon value="keyboard_arrow_left"></mu-icon>
      </mu-button>
      忘记密码
    </mu-appbar>
    <div class="page-signup__content">
      <mu-text-field v-model="form.username" name="username" v-validate="{required: true, max: 20}" placeholder="请输入手机号" :error-text="errors.first('username')" full-width>
        <mu-button :disabled="time > 0" @click='getAuthCode' small color='error'>{{btnName}}</mu-button>
      </mu-text-field>
      <mu-text-field v-model="form.authcode" name="code" v-validate="{required: true, max: 20}"  :error-text="errors.first('code')" placeholder="请输入验证码" full-width>
      </mu-text-field>
      <mu-text-field v-model="form.password" name="password" v-validate="{required: true, min: 6, max: 20}" placeholder="请输入密码（至少6位）" :error-text="errors.first('password')"  type="password" full-width>
      </mu-text-field>
      <mu-text-field v-model="password2" name="password" placeholder="请再次输入密码"  type="password" full-width>
      </mu-text-field>
      <mu-button full-width large color='success' @click="onSubmit" >重置并登录</mu-button>
    </div>
  </div>
</template>
<script>
  import Service from '@/services'

  export default {
    data() {
      return {
        form: {
          username: '',
          password: '',
          authcode: ''
        },
        password2: '',
        time: 0
      }
    },
    computed: {
      btnName() {
        if(this.time > 0) {
          return this.time + '秒重置'
        }else {
          return '获取验证码'
        }
      }
    },
    methods: {
      onBack() {
        this.$router.push({ name: "login" });
      },
      getAuthCode() {
        if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.form.username))){
          return this.$vux.toast.show({
            text: '请填写正确手机号码！',
            width: '10em',
            type: 'text',
            position: 'top'
          })
        }
        this.time = 60

        this.timer = setInterval(() => {
          this.time--
          if(this.time == 0) {
            clearInterval(this.timer)
          }
        }, 1000)

        Service.getAuthCode({
          phonenum: this.form.username,
          method: 'register'
        }).then(rep => {
          this.form.authcode = rep
        })
      },
      onSubmit() {
        this.$validator.validate().then(valid => {
          if(valid) {

            if(this.form.password != this.password2) {
              return this.$vux.toast.show({
                text: '两次输入密码不一致！',
                width: '10em',
                type: 'text',
                position: 'top'
              })
            }

            this.$vux.loading.show({text: '提交中'})
            Service.resetpsd(this.form).then(rep => {
              this.$vux.loading.hide()
              this.$vux.alert.show({
                title: '提示',
                content: rep,
                onHide: () => {
                  this.onBack()
                }
              })
            }).catch(()=> {
              this.$vux.loading.hide()
            })
          }

        })
      }
    }
  };
</script>
<style lang='less'>
  .page-signup {
    height: 100%;
    background-color: #fff;

    &__content {
      padding: 0.533333rem;

      p {
        text-align: center;
        margin-top: .533333rem;
        font-size: .4rem;
      }
    }
  }
</style>
