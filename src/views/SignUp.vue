<template>
    <div class="page-signup">
        <mu-appbar style="width: 100%;" color="primary">
            <mu-button icon @click='onBack' slot="left">
                <mu-icon value="keyboard_arrow_left"></mu-icon>
            </mu-button>
            注册
        </mu-appbar>

        <div class="page-signup__content">
            <mu-text-field placeholder="请输入手机号"  full-width>
                <mu-button @click='onGetClick' small color='error'>获取验证码</mu-button>
            </mu-text-field>
            <mu-text-field placeholder="请输入验证码" full-width>
            </mu-text-field>
            <mu-text-field placeholder="请输入昵称" full-width>
            </mu-text-field>
            <mu-text-field placeholder="请输入密码（至少6位）"  full-width>
            </mu-text-field>

            <mu-button full-width large color='success'>注册</mu-button>

            <p>已有账号，请<a @click='onBack' href="javascript:;">登录</a></p>
        </div>

    </div>
</template>
<script>
export default {
  methods: {
    onBack() {
      this.$router.push({ name: "login" });
    },
    onGetClick() {
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
