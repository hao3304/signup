<template>
  <div class="page-signup">
    <mu-appbar style="width: 100%;" color="primary">
      <mu-button icon @click='onBack' slot="left">
        <mu-icon value="keyboard_arrow_left"></mu-icon>
      </mu-button>
      注册
    </mu-appbar>
    <div class="page-signup__content">
      <mu-text-field v-model="form.username" name="username" v-validate="{required: true, max: 20}" placeholder="请输入手机号" :error-text="errors.first('username')" full-width>
        <mu-button :disabled="time > 0" @click='getAuthCode' small color='error'>
          {{btnName}}
        </mu-button>
      </mu-text-field>
      <mu-text-field v-model="code" name="code" v-validate="{required: true, max: 20}"  :error-text="errors.first('code')" placeholder="请输入验证码" full-width>
      </mu-text-field>
      <mu-text-field v-model="form.nickname" placeholder="请输入昵称" name="nickname" v-validate="{required: true, max: 20}" :error-text="errors.first('nickname')" full-width>
      </mu-text-field>
      <mu-text-field v-model="form.password" name="password" v-validate="{required: true, min: 6, max: 20}" placeholder="请输入密码（至少6位）" :error-text="errors.first('password')"  type="password" full-width>
      </mu-text-field>
      <mu-button full-width large color='success' @click="onSubmit" >注册</mu-button>
      <p>已有账号，请<a @click='onBack' href="javascript:;">登录</a></p>
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
          nickname: '',
          password: ''
        },
        code: null,
        code2: '',
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
    mounted() {
    },
    methods: {
      onBack() {
        this.$router.push({ name: "login" });
      },
      getAuthCode() {
        if(!(/^1[0-9][1-9]\d{4,8}$/.test(this.form.username))){
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
          this.code2 = rep
        })
      },
      onSubmit() {

        if(this.code != this.code2) {
          return  this.$vux.alert.show({
            title: '提示',
            content: '验证码错误，请重新输入。',
            onHide: () => {

            }
          })

        }

        this.$validator.validate().then(valid => {
          if(!valid) return;
          this.$vux.loading.show({text: '提交中'})
          Service.register(this.form).then(rep => {
            this.$vux.loading.hide()
            this.$vux.alert.show({
              title: '提示',
              content: rep,
              onHide: () => {
                this.onBack()
              }
            })

          }).catch(() => {
            this.$vux.loading.hide()
          })
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
