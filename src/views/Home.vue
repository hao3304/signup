<template>
  <div class="page-home">
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
  export default {
    name: "Home",
    methods: {
      goTo(name) {
        this.$router.push({name})
      }
    }
  }
</script>

<style lang="less" scoped>

  .page-home {
    overflow: hidden;
    height: 100%;
    background: url("~@/assets/home_bg.jpeg") no-repeat;
    background-size: 100% 892px;

    &__buttons {
      margin-top: 949px;
      text-align: center;
      a {
        display: inline-block;
        width: 200px;
        height: 200px;
        border-radius: 50%;
        text-align: center;
        box-sizing: border-box;
        font-size: 24px;
        color: #fff;
        padding-top: 42px;

        img {
          height: 75px;
          width: 72px;
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
