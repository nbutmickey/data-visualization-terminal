<template>
  <div>
  <p class="title">- {{title}} -</p>
  <v-chart  :width="width"  :height="height" :padding="padding"  :data="sourceData" >
    <v-tooltip />
    <v-axis data-key="key" :label="label" />
    <v-axis data-key="value" :label="label" :line="{strokeOpacity:1}" :tickLine="{strokeOpacity:1}" :grid="null"/>
    <v-line position="key*value" shape="hv" />
  </v-chart>
  </div>
</template>

<script>
  const data = [
    { key: 'Jan', value: 1351 },
    { key: 'Feb', value: 3121 },
    { key: 'Mar', value: 5343 },
    { key: 'Apr', value: 5542 },
    { key: 'May', value: 4263 },
    { key: 'June', value: 6658 },
    { key: 'July', value: 6455 },
    { key: 'Aug', value: 8577 },
    { key: 'Sep', value: 9459 },
    { key: 'Oct', value: 5306 },
    { key: 'Nov', value: 8458 },
    { key: 'Dec', value: 5556 },
  ];
    export default {
        name: "index",
        props:['height','width','title'],
        data(){
          return{
            sourceData:data,
            padding:[10,20,40,60],
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
.title {
  font-size: 14px;
  text-align: center;
  color: rgb(37, 243, 230);
  font-weight: 700;
}
</style>
