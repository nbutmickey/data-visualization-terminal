<template>
  <div class="mask" v-show="showMask">
    <div class="history-panel" >
      <div class="header"><el-button type="text" @click="quitHistory" style="margin-left: 20px">返回</el-button><h4>大屏配置历史记录</h4></div>
      <div class="content">
        <div class="content-item" v-for="(item,index) in history" :key="index">
          <div class="brief-config">
            <img :src="item.src" width="80px" height="70px"/>
            <div>
              <h5>配置 {{index+1}}</h5>
              <h6>时间:{{item.date}}</h6>
            </div>
          </div>
          <div class="confirm-box">
            <el-button v-if="item.status==='release'"  type="warning" size="mini" style="margin-top: 28px" @click="release(item)">发 布</el-button>
            <el-button v-else-if="item.status==='preview'" type="primary" size="mini" style="margin-top: 28px" @click="preview(item)">预 览</el-button>
            <el-button v-else-if="item.status==='releaseSuccess'" type="success" size="mini" style="margin-top: 28px">已发布</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
    export default {
        name: "historyPanel",
        props: {
        //这里的value就是父组件的v-model值
          value: {}
        },
        data(){
          return {
            showMask:false,
            //showRelease:false
            history:[]
          }
        },
      computed:{
        ...mapGetters(['fetchHistoryList'])
      },
      mounted() {
        this.showMask = this.value;
      },
      watch: {
        //监听value值变化
        value(val) {
          this.showMask = val;
        },
        //监听showMask的值变化，同步父组件中的v-model值
        showMask(val) {
          this.$emit("input", val);
        },
        fetchHistoryList(val){
          if(val)
          this.getHistory();
        }
      },
      created(){
          this.getHistory();
      },
      methods:{
        async getHistory(){
          this.history=[];
          let result =await this.$store.dispatch('getHistoryConfig');
          result.forEach((item)=>{
            let config={}
            config.status='preview';
            config.id=item.id;
            config.src='../../static/bg-history/histogram.svg';
            config.date=this.parseDate(item.timestamp);
            config.config=item.desingConfig.newConfig;
            this.history.push(config);
          })
          this.$store.commit('SET_FETCHHISTORY_LIST',false);
          //console.log(this.history);
        },
        quitHistory(){
          this.showMask = false;
        },
        preview(item){
          console.log(item);
          this.$store.commit('SET_HEADER_TITLE',item.config.headerTitle);
          this.$store.commit('SET_STYLE_TYPE',parseInt(item.config.styleType));
          this.$store.commit('SET_TEMPLATETYPE',parseInt(item.config.templateType));
          this.$store.commit('SET_REALTIME_DATA',item.config.realTimeConfig);
          this.$store.commit('SET_TREND_LAYOUT',{width:item.config.trendConfig.trendWidth,height:item.config.trendConfig.trendHeight});
          this.$store.commit('SET_LINE_CHART_TYPE_ALL',item.config.trendConfig.lineChartType);
          this.$store.commit('SET_STATISTICAL_LAYOUT',{width:item.config.statisticalConfig.statisticalWidth,height:item.config.statisticalConfig.statisticalHeight});
          this.$store.commit('SET_STATISTICAL_TYPE_ALL',item.config.statisticalConfig.statisticalType);

          this.history.forEach((item)=>{
            item.status='preview';
          })
          this.showMask = false;
          item.status='release';
        },
        async release(item){
          let {status,message}=await this.$store.dispatch('submitReconfig',{id:item.id});
          if(status){
            this.$message({
              type:'success',
              message:'已发布！'
            })
            this.history.forEach((item)=>{
              item.status='preview';
            })

            item.status='releaseSuccess';
          }else{
            this.$message({
              type:'error',
              message:message
            })
          }
            this.showMask = false;
        },
        parseDate(time){
          let parseDate=new Date(time);
          let YY=parseDate.getFullYear();
          let MM=parseDate.getMonth()<10?'0'+parseDate.getMonth():parseDate.getMonth();
          let DD=parseDate.getDate()<10?'0'+parseDate.getDate():parseDate.getDate();

          let HH=parseDate.getHours()<10?'0'+parseDate.getHours():parseDate.getHours();
          let mm=parseDate.getMinutes()<10?'0'+parseDate.getMinutes():parseDate.getMinutes();
          let SS=parseDate.getSeconds()<10?'0'+parseDate.getSeconds():parseDate.getSeconds();
          return `${YY}-${MM}-${DD} ${HH}:${mm}:${SS}`;
        }
      }
    }
</script>

<style scoped lang="less">

.mask{
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1999;
  .history-panel{
    position: absolute;
    overflow-y:scroll;
    width: 350px;
    height: 770px;
    background: rgba(215,191,216,.2);
    color: #fff;
    //position: relative;
    animation: historyPanelShow ease 0.6s;
    z-index: 999;
    .header{
      width: 100%;
      height: 40px;
      margin-top: 10px;
      border-bottom: 2px solid #ddd;
      h4{
        width: 80%;
        display: inline-block;
        text-align: center;
      }
    }
    .content {
      width: 100%;
      height: 710px;
      padding: 5px 16px;
      .content-item{
        display: flex;
        //align-items: center;
        width: 100%;
        height: 100px;
        border-radius: 5px;
        margin-top: 10px;
        border: 2px solid #A9A9A9;
        padding: 5px;
        .brief-config{
          width: 78%;
          display: flex;
          align-items: center;
          justify-content: space-around;
          padding-right: 10px;
          height: 100%;
          h6{
            margin-top: 20px;
          }
        }
        .confirm-box{
          width: 22%;
          height: 100%;
        }
      }
    }
  }

  @keyframes historyPanelShow {
    0% {
      left: -50%;
      opacity: 0.3;
    }
    100% {
      left: 0;
      opacity: 1;
    }
  }
}
</style>
