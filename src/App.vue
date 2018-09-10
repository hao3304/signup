<template>
  <div id="app">
    <div class="app__content">
      <router-view> </router-view>
    </div>
    <div class="app__bottom-tab">
      <tabbar v-model="active" @on-index-change="onChange">
        <tabbar-item v-for="m in menu" :key="m.path">
          <i slot="icon" :class="m.icon"></i>
          <span slot="label">{{m.name}}</span>
        </tabbar-item>
      </tabbar>
    </div>
  </div>
</template>

<script>
  import { Tabbar, TabbarItem } from 'vux'

  export default {
    name: 'app',
    data() {
      return {
        menu: [
          {
            name: '首页',
            icon: 'iconfont icon-shouye',
            path: 'home'
          },
          // {
          //   name: '资讯',
          //   icon: 'iconfont icon-jinrongzixun',
          //   path: 'news'
          // },
          // {
          //   name: '查询',
          //   icon: 'iconfont icon-chaxun',
          //   path: 'search'
          // },
          {
            name: '我的',
            icon: 'iconfont icon-wode',
            path: 'my'
          }
        ],
        active: 0
      }
    },
    components: {Tabbar, TabbarItem},
    methods: {
      onChange(index) {
        this.$router.push({name: this.menu[index].path})
      }
    },
    created() {
        this.active = this.menu.findIndex(m => m.path == this.$route.name)
    }
  }
</script>

<style lang="less">
  @import "./style/index.less";

  #app {

    .app__content {
      position: absolute;
      top:0;
      bottom: 1.386667rem;
      left: 0;
      right: 0;
    }

    .app__bottom-tab {

      .weui-tabbar {
        height: 1.386667rem;
        &__item {
          padding: 0;
        }
        &__icon {
          width: .666667rem;
          height: .666667rem;
        }

        &__label {
          margin-top: .066667rem;
          font-size: .266667rem;
        }
      }

      .iconfont {
        font-size: .666667rem;
      }
    }
  }

</style>
