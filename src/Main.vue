<template>
  <router-view  v-transition></router-view>
</template>
<script>
  import { mapMutations } from 'vuex'
  export default {
    name: "Main",
    methods: {
      ...mapMutations(['setToken'])
    },
    created() {
      const token = this.$ls.get('token', null)
      this.setToken(token)
      if (token) {
        this.$router.push({name: 'home'})
      }else {
        this.$router.push({name: 'login'})
      }
    }
  }
</script>

<style lang="less" >

  @import "./style/index.less";
</style>
