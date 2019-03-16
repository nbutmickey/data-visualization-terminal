<template>
  <div class="main-content">
    <Statistical :statisticalStyle="statisticalStyle" style="align-self: center"></Statistical>
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
        realTimeStyle:{width:'49%',height:'100%'},
        trendStyle:{width:'49%',height:'100%'},
        statisticalStyle:{width:'99%',height:'47%'}
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
    flex-direction: column;
    justify-content: space-around;
    .partial-layout{
      display: flex;
      justify-content: space-around;
      width: 100%;
      height: 47%
    }
  }
</style>

