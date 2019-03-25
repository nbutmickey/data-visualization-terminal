<template>
  <div :style="{width: width+'px',height:height+'px'}">
    <p class="title">- {{title}} -</p>
    <div class="detail-data">
      <div class="data-item" v-for="item in spiderVisitData" :key="item.id">
        <div class="name">{{item.name}}</div>
        <div class="count">{{item.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    props:['width','height','title'],
    data(){
      return {
        spiderVisitData:[
          {
            id:1,count:432,name:'谷歌',
          },
          {
            id:2,count:892,name:'百度'
          },
          {
            id:3,count:234,name:'雅虎',
          },
          {
            id:4,count:5,name:'必应'
          }
        ]
      }
    }
  }
</script>

<style scoped lang="less">
  .title{
    font-size: 14px;
    text-align: center;
    color: rgb(37, 243, 230);
    font-weight: 700;
  }
  .detail-data{
    width: 100%;
    height: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-around;
    .data-item{
      width: 20%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .count{
        margin-top: 10px;
        //height: 50%;
        color: #38d937;
        font-size: 35px;
        font-family: Acens;
      }
      .name{
        font-size: 14px;
        color: #fff;
        /*font-family: Acens;*/
      }
    }
  }
</style>
