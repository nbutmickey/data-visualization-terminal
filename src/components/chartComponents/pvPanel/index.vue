<template>
  <!--访问总量(pv)展示面板-->
    <div class="pv-box" :style="{width:width?'100%':'45%'}">
        <div class="title">日浏览量(PV)</div>
        <div class="number">{{pvNumber}}</div>
    </div>
</template>

<script>
  import {  mapGetters  } from 'vuex'
    export default {
        name: "index",
        data(){
          return {
            pvNumber:13523,
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
              //alert("choose")
              if(this.chooseRealTimeData.length===2&&this.chooseRealTimeData.includes('record')){
                //alert("success")
                return true;
              }else{
                return false;
              }
            }
          }
        },
        mounted(){
          setInterval(()=>{this.pvNumber++},1000);
        },
        methods:{

        }
    }
</script>

<style scoped lang="less">
  .pv-box{
    height: 110px;
    background:rgba(35,72,135,.4);
    display: flex;
    flex-direction: column;
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
        font-family: Digital;
        font-size: 40px;
        font-weight: 700;
        color: #fa8c16;
        overflow: hidden;
        whitespace:wrap;
        text-overflow: ellipsis;
      }

  }
</style>
