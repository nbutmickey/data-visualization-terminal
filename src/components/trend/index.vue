<template>
  <div class="trend-box" :style="trendStyle">
    <div class="trend-layout" :class="templateType===1?'change-layout':''">
      <curve-line-chart v-if="lineChartType.some((item)=>item.graphStyle==='styleOne')"  :title="lineChartType.find((item)=>{if(item.graphStyle==='styleOne') return item}).showTitle" :width="trendWidth" :height="trendHeight"></curve-line-chart>
      <base-area-map v-if="lineChartType.some((item)=>item.graphStyle==='styleTwo')" :title="lineChartType.find((item)=>{if(item.graphStyle==='styleTwo') return item}).showTitle" :width="trendWidth"  :height="trendHeight"></base-area-map>
      <basic-line-chart v-if="lineChartType.some((item)=>item.graphStyle==='styleThree')" :title="lineChartType.find((item)=>{if(item.graphStyle==='styleThree') return item}).showTitle"  :width="trendWidth"  :height="trendHeight"></basic-line-chart>
      <step-line-chart v-if="lineChartType.some((item)=>item.graphStyle==='styleFour')"  :title="lineChartType.find((item)=>{if(item.graphStyle==='styleFour') return item}).showTitle" :width="trendWidth"  :height="trendHeight"></step-line-chart>
    </div>
  </div>
</template>

<script>
  import basicLineChart from '../chartComponents/basicLineChart'
  import baseAreaMap from '../chartComponents/baseAreaMap'
  import curveLineChart from '../chartComponents/curveLineChart'
  import stepLineChart from '../chartComponents/stepLineChart'
  import {mapGetters} from 'vuex'
    export default {
        name: "index",
        props:{
          trendStyle:Object
        },
        components:{
          basicLineChart,
          baseAreaMap,
          curveLineChart,
          stepLineChart
        },
        data(){
          return {

            }
        },
        computed:{
          ...mapGetters(['templateType','trendWidth','trendHeight','lineChartType'])
        },
        methods:{
          //根据state中的状态参数去服务端获取对应的数据
        }
    }
</script>

<style scoped lang="less">
  .trend-box{
    border: 1px solid #25f3e6;
    box-shadow: 0 0 10px #25f3e6;
    padding: 10px;
    color: #fff;
    .title{
      color:#61d2f7;
      font-weight: 700;
      font-size:16px;
      text-shadow: 0 0 1px #25f3e6;
    }
    .trend-layout{
      width: 100%;
      height:100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .change-layout{
      flex-direction: column;
      justify-content: space-around;
    }
  }
</style>
