<template>
  <div class="statistical-box" :style="statisticalStyle">
    <div :class="templateType===4||templateType===5?'layout':'change-layout'">
        <basic-ring-diagram v-if="statisticalType.some((item)=>item.graphStyle==='styleOne')" :title="statisticalType.find((item)=>{if(item.graphStyle==='styleOne') return item}).showTitle" :width="statisticalWidth" :height="statisticalHeight"></basic-ring-diagram>
        <basic-pie-chart v-if="statisticalType.some((item)=>item.graphStyle==='styleTwo')" :title="statisticalType.find((item)=>{if(item.graphStyle==='styleTwo') return item}).showTitle" :width="statisticalWidth" :height="statisticalHeight"></basic-pie-chart>
        <grouped-bar-chart v-if="statisticalType.some((item)=>item.graphStyle==='styleThree')":title="statisticalType.find((item)=>{if(item.graphStyle==='styleThree') return item}).showTitle" :width="statisticalWidth" :height="statisticalHeight"></grouped-bar-chart>
        <grouped-histo-gram v-if="statisticalType.some((item)=>item.graphStyle==='styleFour')" :title="statisticalType.find((item)=>{if(item.graphStyle==='styleFour') return item}).showTitle" :width="statisticalWidth" :height="statisticalHeight"></grouped-histo-gram>
        <simple-histo-gram v-if="statisticalType.some((item)=>item.graphStyle==='styleFive')" :title="statisticalType.find((item)=>{if(item.graphStyle==='styleFive') return item}).showTitle" :width="statisticalWidth" :height="statisticalHeight"></simple-histo-gram>
        <basic-bar-chart v-if="statisticalType.some((item)=>item.graphStyle==='styleSix')" :title="statisticalType.find((item)=>{if(item.graphStyle==='styleSix') return item}).showTitle" :width="statisticalWidth" :height="statisticalHeight"></basic-bar-chart>
    </div>
    <!--<distribution-map></distribution-map>-->
  </div>
</template>

<script>
  import basicRingDiagram from '@/components/chartComponents/basicRingDiagram'
  import basicBarChart from '@/components/chartComponents/basicBarChart'
  import basicPieChart from '@/components/chartComponents/basicPieChart'
  import groupedBarChart from '@/components/chartComponents/groupedBarChart'
  import groupedHistoGram from '@/components/chartComponents/groupedHistoGram'
  import distributionMap from '@/components/chartComponents/distributionMap'
  import simpleHistoGram from '@/components/chartComponents/simpleHistoGram'
  import { mapGetters } from 'vuex'
    export default {
        name: "index",
        props:{
          statisticalStyle:Object
        },
        data(){
          return {
          }
        },
        computed:{
          ...mapGetters(['templateType','statisticalType','statisticalHeight','statisticalWidth'])
        },
        components:{
          basicRingDiagram,
          basicBarChart,
          basicPieChart,
          groupedBarChart,
          groupedHistoGram,
          distributionMap,
          simpleHistoGram
        }
    }
</script>

<style scoped lang="less">
  .statistical-box{
    .layout{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .change-layout{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }
    border: 1px solid #25f3e6;
    box-shadow: 0 0 10px #25f3e6;
    padding: 10px;
    box-sizing: border-box;
    color: #fff;
    .title{
      color:#61d2f7;
      font-weight: 700;
      font-size:16px;
      text-shadow: 0 0 1px #25f3e6;
    }
  }
</style>
