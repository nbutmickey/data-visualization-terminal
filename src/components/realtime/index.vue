<template>
  <div class="realTime-box" :style="realTimeStyle">
    <div class="panel" v-if="chooseRealTimeData.some((item)=>{if(item==='pv'||item==='uv')return true;return false})">
      <p class="title">- 实时访问量 -</p>
      <div :class="templateType===1||templateType===5?'change-layout':'layout'">
        <pv-panel v-if="chooseRealTimeData.includes('pv')"></pv-panel>
        <uv-panel v-if="chooseRealTimeData.includes('uv')"></uv-panel>
      </div>
    </div>
    <scroll-list v-if="chooseRealTimeData.includes('record')"></scroll-list>
  </div>
</template>

<script>
  import pvPanel from '../../components/chartComponents/pvPanel'
  import uvPanel from '../../components/chartComponents/uvPanel'
  import scrollList from '../../components/chartComponents/realTimeScroll'
  import {mapGetters} from 'vuex'
    export default {
        name: "index",
        props:{
          realTimeStyle:Object
        },
        computed:{
          ...mapGetters(['templateType','chooseRealTimeData'])
        },
        components:{
          uvPanel,
          pvPanel,
          scrollList
        },
        data(){
          return {}
        }
    }
</script>

<style scoped lang="less">
  .realTime-box{
    border: 1px solid #25f3e6;
    box-shadow: 0 0 10px #25f3e6;
    color: #fff;
    padding: 10px;
    box-sizing: border-box;
    .panel{
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      margin-top: 10px;
      flex-wrap: wrap;
      .layout{
        display: flex;
        width: 100%;
        justify-content: space-around
      }
      .change-layout{
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: space-around
      }
      .title{
        font-size: 14px;
        text-align: center;
        margin: 5px auto;
        color: rgb(37, 243, 230);
        font-weight: 700;
      }
    }
  }

</style>
