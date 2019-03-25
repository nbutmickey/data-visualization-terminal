<template>
  <!--基础饼图组件-->
  <div>
    <p class="title">- {{title}} -</p>
    <div style="display: flex;justify-content: space-between;width: 100%">
    <div :style="{width:width/2+'px'}">
    <v-chart :forceFit="true" :height="height" :data="sourceData" :scale="scale" :padding="padding">
      <v-tooltip :showTitle="false" dataKey="item*percent" />
      <v-legend dataKey="item" :textStyle="{fill:'#ffff',fontSize:10}"/>
      <v-pie
        position="percent"
        color="item"
        :label="labelConfig"
      />
      <v-coord type="theta" />
    </v-chart>
    </div>
      <div :style="{width:width/2+'px'}">
      <v-chart :forceFit="true" :height="height" :data="sourceData2" :scale="scale" :padding="padding">
      <v-tooltip :showTitle="false" dataKey="item*percent" />
      <v-legend  dataKey="item" :textStyle="{fill:'#ffff',fontSize:10}"/>
      <v-pie
        position="percent"
        color="item"
        :label="labelConfig"
      />
      <v-coord type="theta" />
    </v-chart>
      </div>
    </div>
  </div>
</template>

<script>
  const DataSet = require('@antv/data-set');
    export default {
        props:['width','height','title'],
        name: "index",
        data(){
          return {
            sourceData:[],
            sourceData2:[],
            scale:[{
              dataKey: 'percent',
              min: 0,
              formatter: '.0%',
            }],
            padding:[20,'auto',60,'auto'],
            labelConfig: ['percent', {
              offset: -30,
              textStyle: {
                rotate: 0,
                textAlign: 'center',
                fill:'#fff',
                fontSize:12,
                fontWeight:500,
                shadowBlur: 2,
                shadowColor: 'rgba(0, 0, 0, .45)'
              }
            }],
          }
        },
        mounted(){
          const data = [
            { item: 'TEST 1', count: 64540 },
            { item: 'TEST 2', count: 64621 },
            { item: 'TEST 3', count: 6547 },
            { item: 'TEST 4', count: 4413 },
          ];
          const data2 = [
            { item: 'TEST 1', count: 7170 },
            { item: 'TEST 2', count: 3440 },
            { item: 'TEST 3', count: 7827 },
            { item: 'TEST 4', count: 3343 },
          ];
          this.sourceData=new DataSet.View().source(data).transform({
            type: 'percent',
            field: 'count',
            dimension: 'item',
            as: 'percent'
          }).rows;
          this.sourceData2=new DataSet.View().source(data2).transform({
            type: 'percent',
            field: 'count',
            dimension: 'item',
            as: 'percent'
          }).rows;
        },
    }
</script>

<style scoped>
.title{
  font-size: 14px;
  text-align: center;
  color: rgb(37, 243, 230);
  font-weight: 700;
}
</style>
