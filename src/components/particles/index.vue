<template>
  <vue-particles
    color="#dedede"
    :particleOpacity="0.7"
    :particlesNumber="80"
    shapeType="circle"
    :particleSize="4"
    linesColor="#dedede"
    :linesWidth="1"
    :lineLinked="true"
    :lineOpacity="0.4"
    :linesDistance="150"
    :moveSpeed="3"
    :hoverEffect="true"
    hoverMode="grab"
    :clickEffect="true"
    clickMode="push"

  ></vue-particles>
</template>

<script>
  import Vue from 'vue'
  import VueParticles from 'vue-particles'
  Vue.use(VueParticles)
  export default {
        name: "index",

    }
</script>

<style scoped lang="less">
  #particles-js {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1003;
    width: 100%;
    height: 100%;
  }
</style>
