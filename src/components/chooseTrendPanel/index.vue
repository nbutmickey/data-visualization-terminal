<template>
  <div>
    <div v-if="configSuccessPanel" style="padding-top: 200px;">
      <h3>
        <i class="el-icon-success" style="color: #67C23A"></i>
        趋势模块图表放不下啦！请点击下一步继续吧。。。
      </h3>
    </div>
    <div v-if="!configSuccessPanel">
      <div class="data-pick-box">
        <h6 style="margin-bottom: 8px;color: #F56C6C">选取展示数据</h6>
        <el-radio-group
          v-model="chooseTrendData"
          @change="changeTrendData"
          size="mini"
        >
          <el-radio v-for="(item,index) in trendDataOption":key="index"  :label="item.label" border :disabled="item.disabled" border>{{item.text}}</el-radio>
        </el-radio-group>
      </div>

      <div class="date-pick-box" v-if="showdatePickBox">
        <h6 style="margin-bottom: 8px;color: #F56C6C">选取时间区间</h6>
        <div class="date-pick-content">
          <div class="date-type">
            <el-radio-group v-model="dateType">
              <el-radio :label="1">按年</el-radio>
              <el-radio :label="2">按月</el-radio>
              <el-radio :label="3">按日</el-radio>
            </el-radio-group>
          </div>
          <div class="chooseOption">
            <el-select
              v-model="page"
              @change="changePageType"
              placeholder="请选择需要分析的页面"
              size="mini"
              v-if="showAnalyzePage"
            >
              <el-option
                v-for="(item, index) in pageOptions"
                :key="index"
                :label="item"
                :value="item"
              >
              </el-option>
            </el-select>
            <el-date-picker
              :style="{ width: showAnalyzePage ? '180px' : '' }"
              size="mini"
              @change="changeDateType"
              v-if="dateType === 1"
              v-model="date"
              type="year"
              placeholder="选择年"
            >
            </el-date-picker>
            <el-date-picker
              :style="{ width: showAnalyzePage ? '180px' : '' }"
              size="mini"
              @change="changeDateType"
              v-if="dateType === 2"
              v-model="date"
              type="month"
              placeholder="选择月"
            >
            </el-date-picker>
            <el-date-picker
              :style="{ width: showAnalyzePage ? '180px' : '' }"
              size="mini"
              @change="changeDateType"
              v-if="dateType === 3"
              type="date"
              v-model="date"
              placeholder="选择一个日期"
            >
            </el-date-picker>
          </div>
        </div>
      </div>
      <div class="graph-pick-box" v-if="showgraphPickBox">
        <h6 style="margin-bottom: 8px;color: #F56C6C;">选取展示图表</h6>
        <div style="padding: 10px">
          <el-radio-group v-model="currentGraphType" @change="changeGraph" class="bgBox" size="mini">
            <div class="bg-item" v-for="(item) in graphType" :key="item.id">
              <div class="img"><img :src="item.bgurl"/></div>
              <el-radio :label="item.label" :disabled="item.disabled">{{item.text}}</el-radio>
            </div>
          </el-radio-group>

        </div>
      </div>
      <div class="confirm-pick-box">
        <el-button
          type="primary"
          style="width:100%"
          @click="continueButton"
          :disabled="isContinue"
          >继续选择数据</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "index",
  data() {
    return {
      chooseTrendData: "",
      dateType: "",
      currentGraphType: "",
      date: "",
      page: "",
      showdatePickBox: false,
      showgraphPickBox: false,
      showAnalyzePage: false,
      configSuccessPanel: false,
      isContinue: true,
      title: "",
      type:'',
      detailDate:'',

      pageOptions: [
        "/thread-28537-1-1.html",
        "/login/index.html",
        "/welcome/dispaly.php",
        "/forum.php"
      ],
      trendDataOption:[
        {label:"trendDataOne",disabled:false,text:"总PV"},
        {label:"trendDataTwo",disabled:false,text:"页面PV"},
        {label:"trendDataThree",disabled:false,text:"客户端访问失败PV"},
        {label:"trendDataFour",disabled:false,text:"服务端访问失败PV"},
        {label:"trendDataFive",disabled:false,text:"搜索引擎抓取页面数"},
      ],
      graphType:[
        {label:"styleOne",disabled:false,text:"曲线折线图",bgurl:'../../static/bg-trend/curveChart.JPG'},
        {label:"styleTwo",disabled:false,text:"基础面积图",bgurl:'../../static/bg-trend/areaChart.JPG'},
        {label:"styleThree",disabled:false,text:"基础折线图",bgurl:'../../static/bg-trend/basicLineChart.JPG'},
        {label:"styleFour",disabled:false,text:"基础阶梯图",bgurl:'../../static/bg-trend/stepLineChart.JPG'},
      ]
    };
  },
  computed: {
    ...mapGetters(["lineChartType", "templateType"])
  },
  methods: {
    //选取的展现数据改变的触发函数
    changeTrendData(val) {
      if (val === "trendDataOne") {
        this.title = `PV`;
      } else if (val === "trendDataTwo") {
        this.title = `页面PV`;
      } else if (val === "trendDataThree") {
        this.title = `页面访问失败PV`;
      } else if (val === "trendDataFour") {
        this.title = `服务端访问失败PV`;
      } else if (val === "trendDataFive") {
        this.title = `搜索引擎抓取页面数`;
      }

      if (val === "trendDataTwo") {
        this.showAnalyzePage = true;
      } else {
        this.showAnalyzePage = false;
      }
      this.showdatePickBox = true;
    },
    //选取日期格式改变触发
    changeDateType(val) {
      let date = new Date(val);
      let YY = date.getFullYear();
      let MM = date.getMonth();
      let DD = date.getDate();
      if (this.dateType === 1) {
        this.title = YY + "年各月" + this.title;
        this.type='month';
        this.detailDate=`${YY}`;
      } else if (this.dateType === 2) {
        this.title = YY + "年" + (MM+1) + "月份" + this.title;
        this.type='day';
        this.detailDate=`${YY}-${MM+1}`
      } else if (this.dateType === 3) {
        this.title = YY + "年" + (MM+1) + "月" + DD + "日" + this.title;
        this.type='hour';
        this.detailDate=`${YY}-${MM+1}-${DD}`
      }
      this.showgraphPickBox = true;
    },
    //选择展示图表触发
    changeGraph() {
      this.isContinue = false;
    },
    //页面选取之后
    changePageType(){
      this.title=this.page+this.title;
    },
    //继续选择展现数据按钮触发
    continueButton() {
      //构建图表展示的基础配置（包含图表标题、需要获取数据的类型，展示图表类型，页面url）
      let config = {
        showTitle: this.title,
        fetchDataType: this.chooseTrendData,
        graphStyle: this.currentGraphType,
        type:this.type,
        detailDate:this.detailDate,
        page: this.page
      };
      //当用户继续选择的时候，要disabled掉展现数据已选中的项，防止误选和多选。
      this.trendDataOption.forEach((item=>{
        if(item.label===this.chooseTrendData){
          item.disabled=true;
        }
      }))

      //当用户继续选择的时候，要disabled掉展现图表已选中的项，防止误选和多选。
      this.graphType.forEach((item)=>{
        if(item.label===this.currentGraphType){
          item.disabled=true;
        }
      })

      //针对每一种模板类型，设定预设好的图表长宽来呈现，并控制展示数量。
      switch (this.templateType) {
        case 1:
          //最多3个
          this.$store.commit("SET_LINE_CHART_TYPE", config);
          this.$store.commit("SET_TREND_LAYOUT", { width: 290, height: 180 });
          if (this.lineChartType.length ===3) {
            this.configSuccessPanel = true;
          }
          break;
        case 2:
          //最多1个
          this.$store.commit("SET_LINE_CHART_TYPE", config);
          this.$store.commit("SET_TREND_LAYOUT", { width: 380, height: 280 });
          this.configSuccessPanel = true;
          break;
        case 3:
          //最多1个
          this.$store.commit("SET_LINE_CHART_TYPE", config);
          this.$store.commit("SET_TREND_LAYOUT", { width: 380, height: 280 });
          this.configSuccessPanel = true;
          break;
        case 4:
          //最多1个
          this.$store.commit("SET_LINE_CHART_TYPE", config);
          this.$store.commit("SET_TREND_LAYOUT", { width: 480, height: 280 });
          this.configSuccessPanel = true;
          break;
        case 5:
          //最多2个
          this.$store.commit("SET_LINE_CHART_TYPE", config);
          this.$store.commit("SET_TREND_LAYOUT", { width: 380, height: 280 });
          if (this.lineChartType.length ===2) {
            this.configSuccessPanel = true;
          }
          break;
      }
      this.showdatePickBox = false;
      this.showgraphPickBox = false;
      this.chooseTrendData = '';
      this.page='';
    }
  }
};
</script>

<style scoped lang="less">
.data-pick-box {
  margin-bottom: 15px;
  .el-radio {
    margin-right: 0 !important;
  }
}
.date-pick-box {
  margin-bottom: 15px;
  .date-pick-content {
    display: flex;
    justify-content: space-around;
    padding: 5px 0;
  }
}
.page-pick-box {
  margin-bottom: 15px;
}
.graph-pick-box {
  //height: 320px;
  .bgBox{
    width: 100%;
    height: 70%;
    /*padding-top: 20px;*/
    padding-left: 5px;
    display: flex;
    flex-wrap: wrap;
    .bg-item{
      .img{
        margin-bottom: 10px;
        img {
          width: 180px;
          height: 80px;
          border-radius: 5px;
          box-shadow: 1px 1px 2px 2px #A9A9A9;
        }
      }
      margin-bottom: 12px;
      width: 200px;
      height: 100px;
      padding: 5px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
}
.confirm-pick-box {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
</style>
