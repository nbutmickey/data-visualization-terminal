<template>
  <!--访问IP总量（UV）展示面板-->
  <div class="uv-box" :style="{width:width?'100%':'45%'}">
    <div class="title">日访客量(UV)</div>
    <div class="number">{{uvNumber}}</div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    name: "index",
    data(){
      return {
        uvNumber:2345,
      }
    },
    computed:{
      ...mapGetters(['templateType','chooseRealTimeData']),
      width(){
        if(this.templateType===1||this.templateType===5){
          if(this.chooseRealTimeData.length===2&&this.chooseRealTimeData.includes('record')){
            return true;
          }
          return true;
        }else{
          if(this.chooseRealTimeData.length===2&&this.chooseRealTimeData.includes('record')){
            return true;
          }else{
            return false;
          }
        }
      }
    },
    mounted(){
      //console.log('mounted');
      //console.log(this.chooseRealTimeData);
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
      font-size: 40px;
      font-family: Digital;
      font-weight: 700;
      color: rgb(255, 255, 67);
      text-overflow: ellipsis;
    }
  }
</style>
