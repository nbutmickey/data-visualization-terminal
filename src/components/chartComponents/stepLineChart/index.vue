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
    { key: 'test1', value: 1351 },
    { key: 'test2', value: 3121 },
    { key: 'test3', value: 5343 },
    { key: 'test4', value: 5542 },
    { key: 'test5', value: 4263 },
    { key: 'test6', value: 6658 },
    { key: 'test7', value: 6455 },
    { key: 'test8', value: 8577 },
    { key: 'test9', value: 9459 },
    { key: 'test10', value: 5306 },
    { key: 'test11', value: 8458 },
    { key: 'test12', value: 5556 },
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
