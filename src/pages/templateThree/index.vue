<template>
    <div class="main-content">
      <Statistical :statisticalStyle="statisticalStyle"></Statistical>
      <div class="partial-layout">
        <RealTime :realTimeStyle="realTimeStyle"></RealTime>
        <Trend :trendStyle="trendStyle"></Trend>
      </div>
    </div>
  </template>
  <script>
    import RealTime from '@/components/realtime';
    import Statistical from '@/components/statistical';
    import  Trend from '@/components/trend';
    export default {
      name: 'index',
      data(){
        return {
          realTimeStyle:{width:'100%',height:'47%'},
          trendStyle:{width:'100%',height:'47%'},
          statisticalStyle:{width:'55%',height:'100%'}
        }},
      components:{
        RealTime,
        Statistical,
        Trend
      }
    }
  </script>
  <style scoped lang="less">
    .main-content{
      height: 100%;
      display: flex;
      justify-content: space-around;
      .partial-layout{
        width: 40%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }
  </style>

