<template>
  <el-radio-group v-model="chooseTemplate">
    <el-radio :label="1">模板 1</el-radio>
    <el-radio :label="2">模板 2</el-radio>
    <el-radio :label="3">模板 3</el-radio>
    <el-radio :label="4">模板 4</el-radio>
    <el-radio :label="5">模板 5</el-radio>
  </el-radio-group>
</template>

<script>
    export default {
        name: "index",
        data(){
          return {
            chooseTemplate:1
          }
        },
        watch:{
          chooseTemplate(val){
            //console.log(typeof val);
            this.$store.commit('SET_TEMPLATETYPE',val)
          }
        }
    }
</script>

<style scoped>

</style>
