<template>
  <!--曲线折线图-->
  <div>
    <p class="title">- {{title}} -</p>
    <v-chart :width="width" :height="height" :padding="padding" :data="sourceData">
      <v-tooltip/>
      <v-legend :position="'top-center'" :style="{fill:'#fff'}"/>
      <v-axis data-key="tick" :label="label"/>
      <v-axis data-key="value" :label="label" :line="{strokeOpacity:1}" :tickLine="{strokeOpacity:1}" :grid="null"/>
      <v-smooth-line position="tick*value" color="search" shape="smooth"/>
      <v-point position="tick*value" color="search" shape="square"/>
    </v-chart>
  </div>
</template>

<script>
  const DataSet = require('@antv/data-set');
    export default {
        name: "index",
        props:['height','width','title'],
        data(){
          return {
            sourceData:[],
            padding:[30,20,35,40],
            label:{
              textStyle:{
                fill:'#fff',
              }
            }
          }
        },
      mounted(){
        //页面挂载完毕，获取数据
        const data2=[
          { tick: 'Jan', google: 237,baidu: 323,yaho:321,bing:123},
          { tick: 'Feb', google: 127,baidu: 223,yaho:321,bing:313},
          { tick: 'Mar', google: 237,baidu: 423,yaho:121,bing:923},
          { tick: 'Apr', google: 537,baidu: 623,yaho:321,bing:943},
          { tick: 'May', google: 737,baidu: 213,yaho:621,bing:823},
          { tick: 'Jun', google: 137,baidu: 273,yaho:221,bing:423},
          { tick: 'Jul', google: 123,baidu: 32,yaho:721,bing:623},
          { tick: 'Aug', google: 342,baidu: 223,yaho:125,bing:853},
          { tick: 'Sep', google: 534,baidu: 223,yaho:121,bing:988},
          { tick: 'Oct', google: 323,baidu: 123,yaho:131,bing:733},
          { tick: 'Nov', google: 567,baidu: 223,yaho:121,bing:556},
          { tick: 'Dec', google: 145,baidu: 323,yaho:156,bing:226},
        ]
        const dv = new DataSet.View().source(data2);
        this.sourceData=dv.transform({
          type: 'fold',
          fields: ['google','baidu','yaho','bing'],
          key: 'search',
          value: 'value',
        }).rows;
      },
    }
</script>

<style scoped lang="less">
  .title{
    font-size: 14px;
    text-align: center;
    color: rgb(37, 243, 230);
    font-weight: 700;
  }
</style>
