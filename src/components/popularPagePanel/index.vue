<template>
  <div :style="{width: width+'px',height:height+'px'}">
    <p class="title">- {{title}} -</p>
    <ul class="top-list">
      <li v-for="item in topOriginCity" :key="item.id"><span class="topItem">NO. {{item.id}}</span><span class="url">{{item.page}}</span></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "index",
    props:['width','height','title'],
    data(){
      return {
        topOriginCity:[
          {id:1,page:'music/index.html'},
          {id:2,page:'gallery/photo.heml'},
          {id:3,page:'index/index.jsp'}
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
  .top-list{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction:column;
    justify-content: center;
    list-style: none;
    li{
      border-bottom: 10px solid #7f5ed9;
      border-radius: 5px;
      //padding-bottom: 10px;
      padding: 5px 10px 5px 20px;
      margin: 5px 0;
      display: flex;
      justify-content: space-between;
      span:nth-child(1){
        color: #fff;
        font-family: Acens;
      }
      span:nth-child(2){
        color: #d9d93e;
      }
    }
  }

</style>
