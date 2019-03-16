<template>
  <!--简单柱状图-->
  <div>
    <p class="title">- {{title}} -</p>
    <v-chart :width="width" :height="height" :data="sourceData" :padding="padding">
      <v-tooltip />
      <v-axis data-key="year" :label="label"/>
      <v-axis data-key="sales" :label="label" :grid="null"/>
      <v-bar position="year*sales" />
    </v-chart>
  </div>
</template>

<script>
  const data = [
    { year: '1951', sales: 38 },
    { year: '1952', sales: 52 },
    { year: '1956', sales: 61 },
    { year: '1957', sales: 145 },
    { year: '1958', sales: 48 },
    { year: '1959', sales: 38 },
    { year: '1960', sales: 38 },
    { year: '1962', sales: 38 },
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
