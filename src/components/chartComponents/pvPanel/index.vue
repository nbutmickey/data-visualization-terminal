<template>
  <!--访问总量(pv)展示面板-->
    <div class="pv-box" :style="{width:templateType===1||templateType===5?'100%':'45%'}">
        <div class="title">PV</div>
        <div class="number">{{pvNumber}}</div>
    </div>
</template>

<script>
  import {  mapGetters  } from 'vuex'
    export default {
        name: "index",
        data(){
          return {
            pvNumber:135343523
          }
        },
        computed:{
        ...mapGetters(['templateType'])
        },
        mounted(){
          setInterval(()=>{this.pvNumber++},1000);
        },
        methods:{

        }
    }
</script>

<style scoped lang="less">
  .pv-box{
    height: 110px;
    background:rgba(35,72,135,.4);
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-bottom: 10px;
    .title{
        width: 100%;
        height: 50%;
        font-size: 16px;
        padding-top: 10px;
        color: #fff;
      }
    .number{
        width: 100%;
        height: 50%;
        font-size: 30px;
        font-weight: 700;
        color: #fa8c16;
        overflow: hidden;
        whitespace:wrap;
        text-overflow: ellipsis;
      }

  }
</style>
