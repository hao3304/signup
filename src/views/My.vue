<template>
  <div class="page-my">
    <c-header style="background-color: #f14f58" title="我的"></c-header>
    <div class="page-my__content">
      <div class="page-my__content-info">
        <div class="page-my__content-pic">
          <img :src="user.nickimg | image" alt="">
        </div>
        <div class="page-my__content-mobile">
          {{user.nickname}}
        </div>
        <p class="page-my__content-card">{{user.phonenum}}</p>
      </div>
      <!--<group>-->
        <!--<cell title="个人信息" is-link></cell>-->
        <!--<cell title="投诉建议" is-link></cell>-->
      <!--</group>-->
      <x-button @click.native="onLogout" class="logout-button">退出登录</x-button>
    </div>
  </div>
</template>

<script>
  import CHeader from '@/components/CHeader.vue'
  import { Group, Cell, XButton} from 'vux'
  import { mapMutations, mapState } from 'vuex'
  import Service from '@/services'

  export default {
    name: "My",
    components: {
      CHeader,
      Group,
      Cell,
      XButton
    },
    data() {
      return {
        user: {
          realname: '',
          nickimg: '',
          phonenum: ''
        }
      }
    },
    computed: {
        ...mapState(['token'])
    },
    methods: {
      ...mapMutations(['logout']),
      onLogout() {

        this.$vux.confirm.show({
          title: '提示',
          content: '确定退出当前用户？',
          onCancel () {
          },
          onConfirm: () => {
            this.logout()
            this.$router.push({name: 'login'});
            this.$ls.set('token', '');
          }
        })
      },
      render() {
        this.$vux.loading.show()
        Service.getuserbaseinfo({user_id: this.token}).then(rep => {
            this.user = rep[0]
            this.$vux.loading.hide()
        })


      }
    },
    created() {
        this.render()
    }
  }
</script>

<style lang="less">

  .page-my {
    height: 100%;
    position: relative;

    .logout-button {
      background-color: #fff;
      margin-top: .4rem;
      height: 1.333333rem;
    }


    &__content {
      position: absolute;
      top: 1.333333rem;
      left: 0;
      right: 0;
      bottom: 0;
      overflow-y: auto;
      background-color: #f2f2f2;
      box-sizing: border-box;
      padding: .266667rem .2rem;

      .weui-cell {
        height: 1.333333rem;
        line-height: 1.333333rem;
        box-sizing: border-box;
        padding: 0 .533333rem;
      }

      &-info {
        background-color: #fff;
        height: 5.066667rem;
        border-radius: .08rem;
        overflow: hidden;
      }

      &-pic {
        text-align: center;
        margin-top: .666667rem;
        font-size: 0;
        img {
          display: inline-block;
          height: 2.053333rem;
          width: 2.053333rem;
          border-radius: 50%;
          background-repeat: no-repeat;
          background-size: cover;
        }
      }

      &-mobile {
        text-align: center;
        font-size: .64rem;
        margin-top: .453333rem;
      }

      &-card{
        text-align: center;
        font-size: .4rem;
        color: #666;
      }
    }
  }

</style>
