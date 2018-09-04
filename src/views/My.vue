<template>
  <div class="page-my">
    <c-header style="background-color: #f14f58" title="我的"></c-header>
    <div class="page-my__content">
      <div class="page-my__content-info">
        <div class="page-my__content-pic">
          <i></i>
        </div>
        <div class="page-my__content-mobile">
          15068218600
        </div>
      </div>
      <group>
        <cell title="个人信息" is-link></cell>
        <cell title="投诉建议" is-link></cell>
      </group>

      <x-button @click.native="onLogout" class="logout-button">退出登录</x-button>
    </div>
  </div>
</template>

<script>
  import CHeader from '@/components/CHeader.vue'
  import { Group, Cell, XButton} from 'vux'
  export default {
    name: "My",
    components: {
      CHeader,
      Group,
      Cell,
      XButton
    },
    methods: {
      onLogout() {
        this.$router.push({name: 'login'})
      }
    }
  }
</script>

<style lang="less">

  .page-my {
    height: 100%;
    position: relative;

    .logout-button {
      background-color: #fff;
      margin-top: 30px;
      height: 100px;
    }


    &__content {
      position: absolute;
      top: 100px;
      left: 0;
      right: 0;
      bottom: 0;
      overflow-y: auto;
      background-color: #f2f2f2;
      box-sizing: border-box;
      padding: 20px 15px;

      .weui-cell {
        height: 100px;
        line-height: 100px;
        box-sizing: border-box;
        padding: 0 40px;
      }

      &-info {
        background-color: #fff;
        height: 380px;
        border-radius: 6px;
        overflow: hidden;
      }

      &-pic {
        text-align: center;
        margin-top: 50px;
        font-size: 0;
        i {
          display: inline-block;
          height: 154px;
          width: 154px;
          border-radius: 50%;
          background: url("~@/assets/news2.png") no-repeat;
          background-size: cover;
        }
      }

      &-mobile {
        text-align: center;
        font-size: 48px;
        margin-top: 44px;
      }
    }
  }

</style>
