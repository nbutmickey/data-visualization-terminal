<template>
  <!--基础环形图组件-->
  <div :style="{width:width+'px'}" style="display: flex;flex-direction: column;justify-content: space-around">
    <p class="title">- {{title}} -</p>
    <div class="ringdigram-box">
      <div class="statisticalPanel">
        <div v-for="(item,index) in data" :key="index" class="panel-item"><span>{{item.item}}</span><span>{{item.count}}</span></div>
      </div>
      <div style="width: 70%">
        <v-chart :forceFit="true" :height="height" :data="sourceData" :scale="scale" :padding="padding">
          <v-tooltip :showTitle="false" dataKey="item*percent" />
          <v-legend dataKey="item" position="bottom" :textStyle="{fill:'#ffff',fontSize:10}"/>
          <v-pie position="percent" color="item" :label="labelConfig"/>
          <v-coord type="theta" :radius="0.90" :innerRadius="0.5" />
        </v-chart>
      </div>
    </div>
  </div>
</template>

<script>
  const DataSet = require('@antv/data-set');
  const data = [
    { item: 'TEST 1', count: 11140 },
    { item: 'TEST 2', count: 22221 },
    { item: 'TEST 3', count: 42417 },
    { item: 'TEST 4', count: 45313 },
  ];
    export default {
        name: "index",
        props:['width','height','title'],
        data(){
          return {
            padding:[40,'auto',60,'auto'],
            data,
            scale:[{
              dataKey: 'percent',
              min: 0,
              formatter: '.0%',
            }],
            sourceData:[],
            labelConfig: ['percent', {
              formatter: (val, item) => {
                return item.point.item + ': ' + val;
              },
              textStyle:{
                fill:'#fff'
              }
            }]
          }
        },
        mounted(){
          this.sourceData=new DataSet.View().source(data).transform({
            type: 'percent',
            field: 'count',
            dimension: 'item',
            as: 'percent'
          }).rows;
        }
    }
</script>

<style scoped lang="less">
  .ringdigram-box{
    display: flex;
    justify-content: space-around;
    align-items: center;
    .statisticalPanel{
      width:30%;
      height: 150px;
      background: rgba(35, 72, 135, 0.4);
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .panel-item{
        width: 100%;
        display: flex;
        justify-content: space-around;
        span:first-child  {
          font-size: 14px;
        }
        span:last-child {
          color: #ffff43;
          font-size: 18px;
          font-weight: 700
        }
      }
    }
  }
  .title{
    font-size: 14px;
    text-align: center;
    color: rgb(37, 243, 230);
    font-weight: 700;
  }
</style>
