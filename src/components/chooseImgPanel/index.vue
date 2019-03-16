<template>
  <el-radio-group v-model="chooseImg">
    <el-radio :label="1">背景 1</el-radio>
    <el-radio :label="2">背景 2</el-radio>
    <el-radio :label="3">背景 3</el-radio>
    <el-radio :label="4">背景 4</el-radio>
    <el-radio :label="5">背景 5</el-radio>
  </el-radio-group>
</template>

<script>
    export default {
        name: "index",
        data(){
          return{
            chooseImg:1
          }
        },
        watch:{
          chooseImg(val){
            this.$store.commit('SET_STYLE_TYPE',val)
          }
        }
    }
</script>

<style scoped>

</style>
