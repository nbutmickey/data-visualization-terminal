<template>
  <el-checkbox-group v-model="RealTimeData" size="small">
    <el-checkbox label="pv" border>实时PV访问量</el-checkbox>
    <el-checkbox label="uv" border>实时UV访问量</el-checkbox>
    <el-checkbox label="record" border>实时UV记录</el-checkbox>
  </el-checkbox-group>
</template>

<script>

    export default {
        name: "index",
        data(){
          return {
            RealTimeData:['pv']
          }
        },
        watch:{
          RealTimeData(val){
            this.$store.commit('SET_REALTIME_DATA',val);
          }
        }
    }
</script>

<style scoped>

</style>
