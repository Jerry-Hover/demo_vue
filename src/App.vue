<template>
  <div id="app">
    <router-view v-wechat-title="$route.meta.title"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
/*@import '~normalize.css/normalize.css'; // normalize.css 样式格式化*/
</style>
