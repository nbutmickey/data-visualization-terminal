<template>
  <ul class="slide-box">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped lang="less">
  .slide-box{
    position: fixed;
    width: 100%;
    height: 100%;
    background: #0086B3;
    top: 0;
    left: 0;
    z-index: 0;
    li{
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      color: transparent;
      background-size: cover;
      background-position: 50% 50%;
      opacity: 0;
      z-index: 0;
      animation: imageAnimation 48s linear infinite 0s;
      -moz-animation: imageAnimation 48s linear infinite 0s;
      -o-animation: imageAnimation 48s linear infinite 0s;
      -ms-animation:imageAnimation 48s linear infinite 0s;
      -webkit-animation: imageAnimation 48s linear infinite 0s;


      &:nth-child(1){
        background-image: url("../../assets/indexBg/bg-1.jpg");
      }
      &:nth-child(2){
        background-image: url("../../assets/indexBg/bg-2.jpg");
        animation-delay: 12s;
        -moz-animation-delay: 12s;
        -o-animation-delay: 12s;
        -webkit-animation-delay: 12s;
        -ms-animation-delay:12s;
      }
      &:nth-child(3){
        background-image: url("../../assets/indexBg/bg-3.jpg");
        animation-delay: 12s;
        -moz-animation-delay: 12s;
        -o-animation-delay: 12s;
        -webkit-animation-delay: 12s;
        -ms-animation-delay:12s;
      }
      &:nth-child(4){
        background-image: url("../../assets/indexBg/bg-1.jpg");
        animation-delay: 36s;
        -moz-animation-delay: 36s;
        -o-animation-delay: 36s;
        -webkit-animation-delay: 36s;
        -ms-animation-delay:36s;
      }

    }
  }

  @keyframes imageAnimation {
      0%{
        opacity: 0;
        animation-timing-function: ease-in;
      }
      8%{
        opacity: 1;
        transform: scale(1.15);
        animation-timing-function: ease-out;
      }
      17%{
        opacity: 1;
        transform: scale(1.20);
      }
      25%{
        opacity: 0;
        transform: scale(1.40);
      }
      100%{
        opacity: 0;
      }
  }
</style>
