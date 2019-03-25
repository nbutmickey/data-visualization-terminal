<template>
  <!--分组条形图-->
  <div>
    <p class="title">- {{title}} -</p>
    <v-chart :width="width" :height="height" :data="sourceData" :padding="padding">
      <v-coord type="rect" direction="LT" />
      <v-tooltip />
      <v-legend :position="position"/>
      <v-axis dataKey="value" :label="label" :line="{strokeOpacity:1}" :tickLine="{strokeOpacity:1}"  position="right" :grid="null"/>
      <v-axis dataKey="label" :label="label"  />
      <v-bar position="label*value" color="type" :adjust="adjust" />
    </v-chart>
  </div>
</template>

<script>
  const DataSet = require('@antv/data-set');
    export default {
        props:['width','height','title'],
        name: "index",
        data(){
          return {
            position:'top',
            padding:[20,'auto',40,'auto'],
            sourceData:[],
            label:{
              offset:12,
              textStyle:{
                fill:'#fff'
              }
            },
            adjust:[{ type: 'dodge', marginRatio: 1 / 32 }]
          }
        },
        mounted(){
          const data = [
            { label: 'Mon.', series1: 2800, series2: 2260 },
            { label: 'Tues.', series1: 1800, series2: 1300 },
            { label: 'Wed.', series1: 950, series2: 900 },
            { label: 'Thur.', series1: 500, series2: 390 },
            { label: 'Fri.', series1: 170, series2: 100 },
          ];
          const dv = new DataSet.View().source(data);
          this.sourceData=dv.transform({
            type: 'fold',
            fields: ['series1', 'series2'],
            key: 'type',
            value: 'value',
          }).rows;
        },
        methods:{
          async fetchData(){
            let {status,message,data}=await this.$store.dispatch('',params);
            if(status){

            }else{
              alert(message);
              console.log(message);
            }
          }
        }
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
