<template>
  <div class="main-content">
    <RealTime :realTimeStyle="realTimeStyle"></RealTime>
    <div class="partial-layout">
      <Statistical :statisticalStyle="statisticalStyle"></Statistical>
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
        realTimeStyle:{width:'20%',height:'100%'},
        trendStyle:{width:'100%',height:'48%'},
        statisticalStyle:{width:'100%',height:'48%'}
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
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 77%;
    }
  }
</style>

