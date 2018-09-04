<template>
  <div class="page-search">
    <c-header style="background-color: #f14f58" title="查询"></c-header>
    <tab>
      <tab-item selected @on-item-click="onItemClick">课程查询</tab-item>
      <tab-item @on-item-click="onItemClick">报名记录</tab-item>
    </tab>
    <div class="page-search__content">
      <group >
        <cell-box class="page-search__item" v-for="n in 15" :key="n">
          <div class="page-search__item-pic">
            <img src="~@/assets/news1.png" alt="">
          </div>
          <div class="page-search__item-content">
            <h5>建筑学理论</h5>
            <p>开课时间：07-24 08:00</p>
          </div>
        </cell-box>
      </group>
    </div>
  </div>
</template>

<script>
  import CHeader from '@/components/CHeader.vue'
  import { Tab, TabItem, Group, CellBox } from 'vux'
  export default {
    name: "Search",
    components: {
      CHeader,
      Tab,
      TabItem,
      Group,
      CellBox
    },
    methods: {
      onItemClick() {

      }
    }
  }
</script>

<style lang="less" >
  .page-search {
    position: relative;
    height: 100%;
    .vux-tab-container {
      height: 92px;
      .vux-tab {
        height: 92px;

        .vux-tab-item {
          line-height: 92px;
          font-size: 28px;
        }
      }
    }

    &__content {
      top: 192px;
      bottom: 0;
      left: 0;
      right: 0;
      position: absolute;
      overflow-y: auto;

      .weui-cells {
        margin-top: 0;
      }
    }

    &__item {
      display: flex;
      box-sizing: border-box;
      height: 163px;
      padding: 48px 50px !important;
      &-pic {
        width: 168px;
        font-size: 0;
        img {
          height: 96px;
          width: 100%;
        }
      }

      &-content {
        padding-left: 36px;
        h5 {
          font-size: 32px;
          padding-bottom: 20px;
          font-weight: normal;
        }

        p {
          font-size: 26px;
          color: #999;
        }
      }
    }
  }
</style>
