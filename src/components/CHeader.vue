<template>
  <header class="header">
    <div class="header__left">
      <x-icon type="ios-arrow-back" v-show="left" size="30" @click="onClick"></x-icon>
    </div>
    <div class="header__title">
      {{title}}
    </div>
    <div class="header__right"></div>

  </header>
</template>

<script>
  export default {
    props: {
      title:'',
      left: {
        type: Boolean,
        default: false
      }
    },
    name: "CHeader",
    methods: {
      onClick() {
        this.$emit('left-click')
      }
    }
  }
</script>

<style lang="less" scoped>
  .header {
    height: 1.333333rem;
    line-height: 1.333333rem;

    background-color: #3b3b3b;
    display: flex;
    color: #fff;
    align-items: center;

    &__left,&__right {
      width: 1.333333rem;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;

      &:active {
        background-color: rgba(255,255,255,.1);
      }

      .vux-x-icon {
        fill: #fff;
      }
    }

    &__title {
      text-align: center;
      flex: 1;
      font-size: .48rem;
      height: 100%;

    }
  }
</style>
