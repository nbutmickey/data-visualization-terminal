<template>
  <!--基础折线图-->
    <div>
      <p class="title">- {{title}} -</p>
      <v-chart :width="width" :height="height" :padding="padding" :data="sourceData">
        <v-tooltip />
        <v-axis data-key="key" :label="label"/>
        <v-axis data-key="value" :label="label" :line="{strokeOpacity:1}" :tickLine="{strokeOpacity:1}" :grid="null"/>
        <v-line position="key*value" />
        <v-point position="key*value" shape="circle" />
      </v-chart>
    </div>
</template>

<script>
  const data = [
    { key: '00:00', value: 123 },
    { key: '02:00', value: 433 },
    { key: '04:00', value: 233 },
    { key: '06:00', value: 3223 },
    { key: '08:00', value: 3342 },
    { key: '10:00', value: 3432 },
    { key: '12:00', value: 3452 },
    { key: '14:00', value: 4562 },
    { key: '16:00', value: 5342 },
    { key: '18:00', value: 5632 },
    { key: '20:00', value: 567 },
    { key: '22:00', value: 324 },
  ];
    export default {
        name: "index",
        props:['height','width','title'],
        data(){
          return {
            sourceData:data,
            padding:[10,10,40,40],
            label:{
              textStyle:{
                fill:'#fff',
              }
            }
          }
        }
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
