<template>
  <!--基础面积图组件-->
  <div>
    <p class="title">- {{title}} -</p>
    <v-chart :width="width" :height="height" :data="sourceData" :padding="padding">
      <v-tooltip />
      <v-axis data-key="tick" :label="label" />
      <v-axis data-key="count" :label="label"  :line="{strokeOpacity:1}" :tickLine="{strokeOpacity:1}" :grid="null"/>
      <v-line position="tick*count" :size="2" />
      <v-area position="tick*count" color="rgba(35, 72, 135, 0.4)"/>
    </v-chart>
  </div>
</template>

<script>
  const data = [
    { tick: '1991', count: 15468 },
    { tick: '1992', count: 16100 },
    { tick: '1993', count: 15900 },
    { tick: '1994', count: 17409 },
    { tick: '1995', count: 17000 },
    { tick: '1996', count: 31056 },
    { tick: '1997', count: 31982 },
    { tick: '1998', count: 32040 },
    { tick: '1999', count: 33233 },
  ];
  import {mapGetters} from 'vuex'
    export default {
        name: "index",
        props:['height','width','title'],
        data(){
          return {
              padding:[10,10,45,40],
              sourceData:data,
              label:{
                textStyle:{
                  fill:'#fff',
                }
            }
          }
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
