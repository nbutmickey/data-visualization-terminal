<template>
  <el-radio-group v-model="chooseTemplate" class="tpBox">
    <div class="tp-item" v-for="(item) in tpOption" :key="item.id">
      <div class="img"><img :src="item.bgurl"/></div>
      <el-radio :label="item.label">{{item.theme}}</el-radio>
    </div>
  </el-radio-group>
</template>

<script>
    export default {
        name: "index",
        data(){
          return {
            chooseTemplate:1,
            tpOption:[
              {id:1,label:1,theme:'模板一',bgurl:'../../static/template-thumb/t1.svg'},
              {id:2,label:2,theme:'模板二',bgurl:'../../static/template-thumb/t2.svg'},
              {id:3,label:3,theme:'模板三',bgurl:'../../static/template-thumb/t3.svg'},
              {id:4,label:4,theme:'模板四',bgurl:'../../static/template-thumb/t4.svg'},
              {id:5,label:5,theme:'模板五',bgurl:'../../static/template-thumb/t5.svg'}
            ]
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

<style scoped lang="less">
  .tpBox{
    width: 100%;
    height: 80%;
    padding-top: 20px;
    padding-left: 5px;
    display: flex;
    flex-wrap: wrap;
    .tp-item{
      margin-right: 10px;
      .img{
        margin-bottom: 8px;
        img {
          border-radius: 5px;
          width: 100%;
          height: 100%;
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
