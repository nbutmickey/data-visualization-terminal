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
    { tick: '00:00', count: 15468 },
    { tick: '02:00', count: 16100 },
    { tick: '04:00', count: 15900 },
    { tick: '06:00', count: 17409 },
    { tick: '08:00', count: 97000 },
    { tick: '09:00', count: 61056 },
    { tick: '10:00', count: 81982 },
    { tick: '12:00', count: 12040 },
    { tick: '14:00', count: 23233 },
    { tick: '16:00', count: 57000 },
    { tick: '18:00', count: 61056 },
    { tick: '20:00', count: 71982 },
    { tick: '22:00', count: 22040 },
    { tick: '24:00', count: 19233 },
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
