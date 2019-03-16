<template>
  <!--访问IP总量（UV）展示面板-->
  <div class="uv-box" :style="{width:templateType===1||templateType===5?'100%':'45%'}">
    <div class="title">UV</div>
    <div class="number">{{uvNumber}}</div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    name: "index",
    data(){
      return {
        uvNumber:234345
      }
    },
    computed:{
      ...mapGetters(['templateType'])
    },
    mounted(){
      setInterval(()=>{this.uvNumber++},1000);
    },
    methods:{

    }
  }
</script>

<style scoped lang="less">
  .uv-box{
    height: 110px;
    background:rgba(35,72,135,.4);
    text-align: center;
    margin-bottom: 10px;
    .title{
      width: 100%;
      height: 50%;
      font-size: 16px;
      padding-top: 10px;
      color: #fff;
    }
    .number{
      width: 100%;
      height: 50%;
      font-size: 30px;
      font-weight: 700;
      color: rgb(255, 255, 67);
      text-overflow: ellipsis;
    }
  }
</style>
