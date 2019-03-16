import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const config={
  actions:{
    //更新配置
    UpdatConfig({commit,state}){
      return new Promise((resolve,reject)=>{
        axios.get('/api/updateConfig').then(res=>{
          //状态重置
          state.headerTitle='';
          state.curStep={title:'选择背景',status:'process'};
          state.templateType=1;
          state.styleType=1;
          state.chooseRealTimeData=[];

          state.chooseTrendData.trendWidth='';
          state.chooseTrendData.trendHeight='';
          state.chooseTrendData.lineChartType=[];

          state.chooseStatisticalData.statisticalWidth='';
          state.chooseStatisticalData.statisticalHeight='';
          state.chooseStatisticalData.statisticalType=[];

          if(res.data.status){
            //console.log(res.data.message);
            resolve(res.data);
          }else{
            reject(res.data);
          }
        })
      })
    },
    //处理大屏名称
    //处理大屏模板
    //处理背景
    //处理实时模块
    //处理趋势模块
    //处理统计模块
    SubmitConfig({commit,state}){
      return new Promise((resolve,reject)=>{
        let config={
          headerTitle:state.headerTitle,
          templateType:state.templateType,
          styleType:state.styleType,
          realTimeConfig:state.chooseRealTimeData,
          trendConfig:state.chooseTrendData,
          statisticalConfig:state.chooseStatisticalData
        }
        //消除浅拷贝
        let newConfig = JSON.parse(JSON.stringify(config));

        switch (state.templateType){
          case 1:
            newConfig.trendConfig.trendWidth='490';
            newConfig.trendConfig.trendHeight='250';
            newConfig.statisticalConfig.statisticalWidth='740';
            newConfig.statisticalConfig.statisticalHeight='260';
            break;
          case 2:
            newConfig.trendConfig.trendWidth='670';
            newConfig.trendConfig.trendHeight='300';
            newConfig.statisticalConfig.statisticalWidth='880';
            newConfig.statisticalConfig.statisticalHeight='260';
            break;
          case 3:
            newConfig.trendConfig.trendWidth='670';
            newConfig.trendConfig.trendHeight='300';
            newConfig.statisticalConfig.statisticalWidth='880';
            newConfig.statisticalConfig.statisticalHeight='270';
            break;
          case 4:
            newConfig.trendConfig.trendWidth='820';
            newConfig.trendConfig.trendHeight='300';
            newConfig.statisticalConfig.statisticalWidth='820';
            newConfig.statisticalConfig.statisticalHeight='350';
            break;
          case 5:
            newConfig.trendConfig.trendWidth='650';
            newConfig.trendConfig.trendHeight='300';
            newConfig.statisticalConfig.statisticalWidth='650';
            newConfig.statisticalConfig.statisticalHeight='350';
            break;
        }
        //console.log(newConfig);
        axios.post('/api/submitConfig',{newConfig:newConfig}).then(res=>{
          //console.log(res.data);
          if(res.data.status){
            //console.log(res.data.message);
            resolve(res.data);
          }else{
            reject(res.data);
          }
        })
      })
    }

  },
  state:{
    curStep:{title:'选择背景',status:'process'},
    headerTitle:'',
    templateType:1,
    styleType:1,
    chooseRealTimeData:[],
    chooseTrendData:{
      trendWidth:'',
      trendHeight:'',
      lineChartType:[]
    },
    chooseStatisticalData:{
      statisticalWidth:'',
      statisticalHeight:'',
      statisticalType:[]
    }
    },
  mutations:{
    SET_HEADER_TITLE(state,title){
      console.log(title);
      state.headerTitle=title;
    },
    SET_CUR_STEP(state,nextStep){
      state.curStep.title=nextStep.title;
      state.curStep.status=nextStep.status;
    },
    SET_STYLE_TYPE(state,styleType){
      state.styleType=styleType
    },
    SET_TEMPLATETYPE(state,templateType){
      state.templateType=templateType
    },
    SET_REALTIME_DATA(state,realTimeData){
      //console.log(realTimeData);
      state.chooseRealTimeData=realTimeData;
    },
    SET_TREND_LAYOUT(state,layout){
      state.chooseTrendData.trendWidth=layout.width;
      state.chooseTrendData.trendHeight=layout.height;
    },
    SET_LINE_CHART_TYPE(state,chartType){
      //console.log(state.chooseTrendData);
      state.chooseTrendData.lineChartType.push(chartType);
    },
    SET_STATISTICAL_LAYOUT(state,layout){
      state.chooseStatisticalData.statisticalWidth=layout.width;
      state.chooseStatisticalData.statisticalHeight=layout.height;
    },
    SET_STATISTICAL_TYPE(state,statisticalType){
      state.chooseStatisticalData.statisticalType.push(statisticalType);
    }
  },
  getters:{
    headerTitle:state=>state.headerTitle,
    curStep:state=>state.curStep,
    templateType:state=>state.templateType,
    styleType:state=>state.styleType,
    chooseRealTimeData:state=>state.chooseRealTimeData,
    lineChartType:state=>state.chooseTrendData.lineChartType,
    trendWidth:state=>state.chooseTrendData.trendWidth,
    trendHeight:state=>state.chooseTrendData.trendHeight,
    statisticalWidth:state=>state.chooseStatisticalData.statisticalWidth,
    statisticalHeight:state=>state.chooseStatisticalData.statisticalHeight,
    statisticalType:state=>state.chooseStatisticalData.statisticalType
  }
}

let vuex=new Vuex.Store(config)
export default vuex;
