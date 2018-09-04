<template>
  <div class="page-news">
    <c-header title="资讯"></c-header>
    <div class="page-news__content">

      <div class="page-news__section">
        【招生简章】
      </div>
      <div class="page-news__section">
        【培训要闻】
      </div>
      <div class="page-news__section">
        【收费相关】
      </div>
    </div>
  </div>
</template>

<script>
  import CHeader from '@/components/CHeader.vue'
  export default {
    name: "News",
    components: {
      CHeader
    }
  }
</script>

<style lang="less" scoped>
  .page-news {
    height: 100%;
    position: relative;

    &__content {
      position: absolute;
      top: 100px;
      bottom: 0;
      left: 0;
      right: 0;
      overflow-y: auto;
      overflow-x: hidden;
    }

    &__section {
      height: 300px;
      line-height: 300px;
      text-align: center;
      width: 100%;
      text-shadow: 0px 9px 17px 4px
      rgba(0, 0, 0, 0.35);
      color: #fff;
      font-size: 36px;
      margin-top: 13px;

      &:nth-child(1) {
        background: url("~@/assets/news1.png") no-repeat;
        background-size: 100% 100%;
      }

      &:nth-child(2) {
        background: url("~@/assets/news2.png") no-repeat;
        background-size: 100% 100%;

      }

      &:nth-child(3) {
        background: url("~@/assets/news3.png") no-repeat;
        background-size: 100% 100%;

      }
    }

  }
</style>
