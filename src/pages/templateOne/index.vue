<template>
    <div class="main-content">
      <RealTime :realTimeStyle="realTimeStyle"></RealTime>
      <Statistical :statisticalStyle="statisticalStyle"></Statistical>
      <Trend :trendStyle="trendStyle"></Trend>
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
      trendStyle:{width:'30%',height:'100%'},
      statisticalStyle:{width:'45%',height:'100%'}
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
  }
</style>
