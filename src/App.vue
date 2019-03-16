<template>
  <div id="app">
    <transition name="slide-fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
  #app{
    width: 100%;
    height: 100%;
  }
  .slide-fade-enter-active {
    transition: all 1s ease;
  }
  .slide-fade-enter
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(20px);
    opacity: 0;
  }
  @import './style/index.less';
  @import './style/normalize.less';
</style>
