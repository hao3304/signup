<template>
  <div class="page-home">
    <img class="page-home__bg" style="height: calc(100% - 4rem)" src="~@/assets/home_bg.jpeg" alt="">
    <div class="page-home__buttons">
      <a href="javascript:;" @click="goTo('register')">
        <div>
          <img src="~@/assets/bm1.png" alt="">
        </div>
        自助报到
      </a>
      <a href="javascript:;" @click="goTo('sign')">
        <div>
          <img src="~@/assets/bm2.png" alt="">
        </div>
        自助报名</a>
    </div>
  </div>
</template>

<script>
  import Service from '@/services'
  import { mapState } from 'vuex'

  export default {
    name: "Home",
    data() {
      return {
      }
    },
    computed: {
      ...mapState(['token'])
    },
    methods: {
      goTo(name) {
          this.$vux.loading.show()
          Service.getStep({user_id: this.token}).then(rep => {
            this.$vux.loading.hide()
            if(rep >= 3 && name == 'register') {
              return this.$vux.alert.show({
                title: '提示',
                content: '您已经报到过，无法再进行报到操作。'
              })
            }

            if(rep< 3 && name == 'sign') {
              return this.$vux.alert.show({
                title: '提示',
                content: '请先提交报到信息。'
              })
            }

            if(rep == 5) {
              return this.$vux.alert.show({
                title: '提示',
                content: '您已经申请过报名，无法再进行报到操作。'
              })
            }

            this.$router.push({name})
          })


      }
    }
  }
</script>

<style lang="less" scoped>

  .page-home {
    overflow: hidden;
    height: 100%;

    &__bg {
      width: 100%;
    }
    // background: url("~@/assets/home_bg.jpeg") no-repeat;
    // background-size: 100% 60%;

    &__buttons {
      text-align: center;
      margin-top: .266667rem;
      a {
        display: inline-block;
        width: 2.666667rem;
        height: 2.666667rem;
        border-radius: 50%;
        text-align: center;
        box-sizing: border-box;
        font-size: .32rem;
        color: #fff;
        padding-top: .56rem;

        img {
          height: 1rem;
          width: .96rem;
        }
        &:first-child {
          background-image: linear-gradient(0deg,
          #4979f3 0%,
          #4dcef9 100%);
          margin-right: 33px;
        }
        &:last-child {
          background-image: linear-gradient(0deg,
          #ff1919 0%,
          #f3676f 100%);
          margin-left: 33px;
        }
      }
    }
  }

</style>
