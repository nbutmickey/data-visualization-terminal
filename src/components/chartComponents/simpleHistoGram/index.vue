<template>
  <!--简单柱状图-->
  <div>
    <p class="title">- {{title}} -</p>
    <v-chart :width="width" :height="height" :data="sourceData" :padding="padding">
      <v-tooltip />
      <v-axis data-key="year" :label="label"/>
      <v-axis data-key="sales" :label="label" :line="{strokeOpacity:1}" :tickLine="{strokeOpacity:1}" :grid="null"/>
      <v-bar position="year*sales" />
    </v-chart>
  </div>
</template>

<script>
  const data = [
    { year: 'test1', sales: 534 },
    { year: 'test2', sales: 352 },
    { year: 'test3', sales: 361 },
    { year: 'test4', sales: 145 },
    { year: 'test5', sales: 438 },
    { year: 'test6', sales: 367 },
    { year: 'test7', sales: 323 },
    { year: 'test8', sales: 333 },
    { year: 'test9', sales: 445 },
    { year: 'test10', sales: 167 },
    { year: 'test11', sales: 212 },
    { year: 'test12', sales: 438 },
  ];
    export default {
        name: "index",
        props:['width','height','title'],
        data(){
          return {
            sourceData:data,
            padding:[10,'auto',40,'auto'],
            label:{
              textStyle:{
                fill:'#fff'
              }
            }
          }
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
