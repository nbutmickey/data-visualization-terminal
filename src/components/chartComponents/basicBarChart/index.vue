<template>
  <!--基础条形图(纵向)-->
  <div>
    <p class="title">- {{title}} -</p>
    <v-chart :width="width" :height="height" :data="sourceData" :padding="padding">
      <v-coord type="rect" direction="LB" />
      <v-tooltip />
      <v-axis dataKey="country" :label="label" />
      <v-axis dataKey="population" :label="label" :line="{strokeOpacity:1}" :tickLine="{strokeOpacity:1}" :grid="null"/>
      <v-bar position="country*population" />
    </v-chart>
  </div>
</template>

<script>
  const data = [
    { country: '中国', population: 1344 },
    { country: '印度', population: 1970 },
    { country: '美国', population: 2034 },
    { country: '印尼', population: 2489 },
    { country: '巴西', population: 1803 },
  ];
  const DataSet = require('@antv/data-set');
    export default {
        props:['width','height','title'],
        name: "index",
        data(){
          return {
            sourceData:[],
            data:data,
            padding:[10,'auto',30,'auto'],
            label:{
              offset:12,
              textStyle:{
                fill:'#fff',
              }
            },
          }
        },
        mounted(){
          this.sourceData=new DataSet.View().source(data).transform({
            type: 'sort',
            callback(a, b) {
              return a.count - b.count > 0;
            },
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
