<template>
  <el-radio-group v-model="chooseImg" class="bgBox">
    <div class="bg-item" v-for="(item) in bgOption" :key="item.id">
      <div class="img"><img :src="item.bgurl"/></div>
      <el-radio :label="item.label">{{item.theme}}</el-radio>
    </div>
  </el-radio-group>
</template>

<script>
    export default {
        name: "index",
        data(){
          return{
            chooseImg:1,
            bgOption:[
              {id:1,label:1,theme:'无际黑暗',bgurl:'../../static/bg-thumb/bg-global1.png'},
              {id:2,label:2,theme:'星尘物语',bgurl:'../../static/bg-thumb/bg-global2.png'},
              {id:3,label:3,theme:'暗影踪迹',bgurl:'../../static/bg-thumb/bg-global3.png'},
              {id:4,label:4,theme:'浩瀚无边',bgurl:'../../static/bg-thumb/bg-global4.png'},
              {id:5,label:5,theme:'浩瀚无垠',bgurl:'../../static/bg-thumb/bg-global5.png'}
            ]
          }
        },
        watch:{
          chooseImg(val){
            this.$store.commit('SET_STYLE_TYPE',val)
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
