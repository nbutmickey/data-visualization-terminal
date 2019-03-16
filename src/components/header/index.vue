<template>
<div class="header">
  <div class="header-bg" :style="{backgroundImage: 'url(' + titleBgUrl + ')',backgroundSize:'100% 100%'}">
    <h1 class="title">{{headerTitle}}</h1>
    <p class="time">{{formatTime(date)}}</p>
  </div>
</div>
</template>

<script>
  import {mapGetters} from 'vuex'
    export default {
        name: "index",
        props:{
          titleType:{
            type:Number,
            dafault:1
          }
        },
        data(){
          return {
            date:new Date(),
            titleBgUrl:require(`../../assets/bg/title${this.titleType}.png`),
          }
        },
        computed:{
          ...mapGetters(['headerTitle'])
        },
        watch:{
          titleType:{
            handler(val){
              console.log(val);
              this.titleBgUrl=require(`../../assets/bg/title${val}.png`)
            },
            immediate:true
          }
        },
        mounted(){
          let _this=this;
          this.timer=setInterval(()=>{
            _this.date=new Date();
          },1000)
        },
        methods:{
          formatTime(date){
            let Year=date.getFullYear();
            let Month=(date.getMonth()+1)<10?'0'+(date.getMonth()+1):(date.getMonth()+1);
            let Day=date.getDate()<10?'0'+date.getDate():date.getDate();
            let Hour=date.getHours()<10?'0'+date.getHours():date.getHours();
            let Minutes=date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes();
            let Seconds=date.getSeconds()<10?'0'+date.getSeconds():date.getSeconds();
            return `${Year}-${Month}-${Day}  ${Hour}:${Minutes}:${Seconds}`
          }
        }
    }
</script>

<style scoped lang="less">
.header{
  width: 100%;
  height: 80px;
  .header-bg{
    box-sizing: border-box;
    width: 100%;
    height: 80px;
    padding:0 50px;
    .title{
      text-align: center;
      color: #fff;
      margin: 0;
      line-height: 50px;
      font-size: 30px;
    }
    .time{
      margin-top: -20px;
      margin-bottom: 0;
      color: #25f3e6;
      text-align: right;
    }
  }
}

</style>
