<template>
  <el-checkbox-group v-model="RealTimeData" class="bgBox" size="mini">
    <div class="bg-item" v-for="(item) in realTimeOption" :key="item.id">
      <div class="img"><img :src="item.bgurl"/></div>
      <el-checkbox :label="item.label">{{item.text}}</el-checkbox>
    </div>
  </el-checkbox-group>
</template>

<script>

    export default {
        name: "index",
        data(){
          return {
            RealTimeData:['pv'],
            realTimeOption:[
              {id:1,label:'pv',text:'当日浏览量(pv)',bgurl:'../../static/bg-realTime/pv.JPG'},
              {id:2,label:'uv',text:'当日用户量(uv)',bgurl:'../../static/bg-realTime/uv.JPG'},
              {id:3,label:'record',text:'实时访问记录',bgurl:'../../static/bg-realTime/record.JPG'},
            ]
          }
        },
        watch:{
          RealTimeData(val){
            this.$store.commit('SET_REALTIME_DATA',val);
          }
        }
    }
</script>

<style scoped lang="less">
  .bgBox{
    width: 100%;
    height: 70%;
    padding-top: 20px;
    padding-left: 5px;
    display: flex;
    flex-wrap: wrap;
    .bg-item{
      .img{
        margin-bottom: 8px;
        img {
          width: 180px;
          height: 100px;
          border-radius: 5px;
          box-shadow: 1px 1px 2px 2px #A9A9A9;
        }
      }
      width: 200px;
      height: 120px;
      padding: 5px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
</style>
