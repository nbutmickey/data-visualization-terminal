<template>
    <div class="message-container" >
        <p class="title">- 实时访问记录 -</p>
        <div class="caption">
          <span>IP地址</span><span>目标页面</span><span>访问时间</span>
        </div>
        <vue-seamless-scroll :data="listData" class="seamless-warp" :style="{height:templateType===5||templateType===1?'320px':'100px'}" :class-option="{step:0.5,hoverStop: false}">
          <ul class="item">
            <li v-for="item in listData" class="itemClass" :style="{color:item.status===404?'red':'#2fc25b'}">
              <span v-text="item.ip"></span><span v-text="item.target"></span><span v-text="item.date"></span>
            </li>
          </ul>
        </vue-seamless-scroll>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'
    export default {
        name: "index",
        data(){
          return {
            activeIndex:0,
            listData:[
              {ip:'47.28.153.24',target:'/mickey/index.html',date:'2017-05-18 13:30',status:404},
              {ip:'47.28.153.24',target:'/mickey/blog/index.html',date:'2017-05-18 13:30',status:404},
              {ip:'47.28.153.24',target:'/mickey/blog/tags',date:'2017-05-18 13:30'},
              {ip:'47.28.153.24',target:'/mickey/blog/index.html',date:'2017-05-18 13:30'},
              {ip:'47.28.153.24',target:'/mickey/blog/index.html',date:'2017-05-18 13:30'},
              {ip:'47.28.153.24',target:'/mickey/blog/index.html',date:'2017-05-18 13:30'},
              {ip:'47.28.153.24',target:'/mickey/blog/index.html',date:'2017-05-18 13:30',status:404},
              {ip:'47.28.153.24',target:'/mickey/blog/index.html',date:'2017-05-18 13:30'},
              {ip:'47.28.153.24',target:'/mickey/blog/index.html',date:'2017-05-18 13:30'},
              {ip:'47.28.153.24',target:'/mickey/blog/index.html',date:'2017-05-18 13:30',status:404},
              {ip:'47.28.153.24',target:'/mickey/blog/index.html',date:'2017-05-18 13:30'},
              {ip:'47.28.153.24',target:'/mickey/blog/index.html',date:'2017-05-18 13:30'},
              {ip:'47.28.153.24',target:'/mickey/blog/index.html',date:'2017-05-18 13:30'},
              {ip:'47.28.153.24',target:'/mickey/blog/index.html',date:'2017-05-18 13:30',status:404},
              {ip:'47.28.153.24',target:'/mickey/blog/index.html',date:'2017-05-18 13:30'},
              {ip:'47.28.153.24',target:'/mickey/blog/tags',date:'2017-05-18 13:30'},
              {ip:'47.28.153.24',target:'/mickey/blog/index.html',date:'2017-05-18 13:30'},
              {ip:'47.28.153.24',target:'/mickey/blog/index.html',date:'2017-05-18 13:30'},
              {ip:'47.28.153.24',target:'/mickey/blog/index.html',date:'2017-05-18 13:30'},
              {ip:'47.28.153.24',target:'/mickey/blog/index.html',date:'2017-05-18 13:30',status:404},
              {ip:'47.28.153.24',target:'/mickey/blog/index.html',date:'2017-05-18 13:30'},
              {ip:'47.28.153.24',target:'/mickey/blog/index.html',date:'2017-05-18 13:30'},
              {ip:'47.28.153.24',target:'/mickey/blog/tags',date:'2017-05-18 13:30'},
              {ip:'47.28.153.24',target:'/mickey/blog/index.html',date:'2017-05-18 13:30'},
              {ip:'47.28.153.24',target:'/mickey/blog/index.html',date:'2017-05-18 13:30'},
              {ip:'47.28.153.24',target:'/mickey/blog/index.html',date:'2017-05-18 13:30'},
              {ip:'47.28.153.24',target:'/mickey/blog/index.html',date:'2017-05-18 13:30',status:404},
              {ip:'47.28.153.24',target:'/mickey/blog/index.html',date:'2017-05-18 13:30'},
              {ip:'47.28.153.24',target:'/mickey/blog/index.html',date:'2017-05-18 13:30'},
              {ip:'47.28.153.24',target:'/mickey/blog/index.html',date:'2017-05-18 13:30'},
              {ip:'47.28.153.24',target:'/mickey/blog/index.html',date:'2017-05-18 13:30'},
              {ip:'47.28.153.24',target:'/mickey/blog/index.html',date:'2017-05-18 13:30',status:404},
              {ip:'47.28.153.24',target:'/mickey/blog/index.html',date:'2017-05-18 13:30'},
              {ip:'47.28.153.24',target:'/mickey/blog/index.html',date:'2017-05-18 13:30'},
              {ip:'47.28.153.24',target:'/mickey/blog/index.html',date:'2017-05-18 13:30'},
              {ip:'47.28.153.24',target:'/mickey/blog/index.html',date:'2017-05-18 13:30'},
              {ip:'47.28.153.24',target:'/mickey/blog/index.html',date:'2017-05-18 13:30'},
              {ip:'47.28.153.24',target:'/mickey/blog/index.html',date:'2017-05-18 13:30',status:404},
              {ip:'47.28.153.24',target:'/mickey/blog/index.html',date:'2017-05-18 13:30'},
              {ip:'47.28.153.24',target:'/mickey/blog/index.html',date:'2017-05-18 13:30'},
              {ip:'47.28.153.24',target:'/mickey/blog/index.html',date:'2017-05-18 13:30'},
              {ip:'47.28.153.24',target:'/mickey/blog/index.html',date:'2017-05-18 13:30'},
              {ip:'47.28.153.24',target:'/mickey/blog/index.html',date:'2017-05-18 13:30'},
              ]
          }
        },
      computed:{
        ...mapGetters(['templateType'])
      }
    }

</script>

<style scoped lang="less">
  .message-container {
    padding: 0 6px;
    .caption{
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      margin: 4px 0;
      color: #fff;
      font-weight: 600;
      //padding: 0 15px;
      span:nth-child(2){
        text-align: center;
      }
    }
    .title {
      font-size: 14px;
      text-align: center;
      margin: 1px auto;
      color: rgb(37, 243, 230);
      font-weight: 700;
    }
    .seamless-warp {
      width: 100%;
      overflow: hidden;
      .item {
        font-size: 5px;
        .itemClass {
          margin-bottom: 2px;
          //font-size: 8px;
          display: flex;
          justify-content: space-between;
        }
      }
    }
  }
</style>
