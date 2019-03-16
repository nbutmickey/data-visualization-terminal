<template>
  <div>
  <div v-if="configSuccessPanel" style="padding-top: 200px;">
    <h3>
      <i class="el-icon-success" style="color: #67C23A"></i>
      统计模块图表放不下啦！请点击下一步继续吧。。。
    </h3>
  </div>
  <div v-if="!configSuccessPanel">
    <div class="data-pick-box">
      <h6 style="margin-bottom: 8px;color: #F56C6C">选取展示数据</h6>
      <el-radio-group
        v-model="chooseStatisticalData"
        @change="changeStatisticalData"
        size="mini"
      >
        <el-radio v-for="(item,index) in statisticalDataOption":key="index"  :label="item.label" border :disabled="item.disabled" border>{{item.text}}</el-radio>
      </el-radio-group>
    </div>
    <div class="graph-pick-box" v-if="showgraphPickBox">
      <h6 style="margin-bottom: 8px;color: #F56C6C;">选取展示图表</h6>
      <div style="padding: 20px 10px">
        <el-radio-group v-model="currentGraphType" @change="changeGraph">
          <el-radio v-for="(item,index) in graphType" :key="index" :label="item.label" border :disabled="item.disabled">{{item.text}}</el-radio>
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
  import{ mapGetters } from 'vuex'
    export default {
        name: "index",
        data(){
          return {
            title:"",
            chooseStatisticalData:"",
            currentGraphType:"",
            isContinue:true,
            showgraphPickBox:false,
            configSuccessPanel:false,

            statisticalDataOption:[
              {label:'statisticalDataOne',disabled:false,text:'请求方式数量占比'},
              {label:'statisticalDataOneTwo',disabled:false,text:'客户端浏览器、操作系统占比'},
              {label:'statisticalDataOneThree',disabled:false,text:'IP地址省份和数量占比'},
              {label:'statisticalDataOneFour',disabled:false,text:'HTTP状态码数量占比'},
              {label:'statisticalDataOneFive',disabled:false,text:'访问失败最多的页面(TOP 5)'},
              {label:'statisticalDataOneSix',disabled:false,text:'访问频次最多的页面(TOP 5)'},
            ],
            graphType:[
              {label:'styleOne',disabled:false,text:'基础环形图'},
              {label:'styleTwo',disabled:false,text:'基础饼图'},
              {label:'styleThree',disabled:false,text:'分组条形图'},
              {label:'styleFour',disabled:false,text:'分组柱状图'},
              {label:'styleFive',disabled:false,text:'简单柱状图'},
              {label:'styleSix',disabled:false,text:'基础柱状图(纵向)'},
            ]
          }
        },
        computed:{
          ...mapGetters(['templateType','statisticalType'])
        },
        methods:{
          changeStatisticalData(val){
            //暂时不做根据选择的展示数据之后限制住对应的图表
            this.statisticalDataOption.forEach((item)=>{

              if(item.label===val){
                this.title=item.text;
              }
            })
            this.showgraphPickBox=true;
          },
          changeGraph(val){
            this.isContinue=false;
          },
          continueButton(){
              let config = {
                showTitle: this.title,
                fetchDataType: this.chooseStatisticalData,
                graphStyle: this.currentGraphType,
              };

            //针对每一种模板类型，设定预设好的图表长宽来呈现，并控制展示数量。
            switch (this.templateType) {
              case 1:
                //最多3个
                this.$store.commit("SET_STATISTICAL_TYPE", config);
                this.$store.commit("SET_STATISTICAL_LAYOUT", { width: 440, height: 200 });
                if (this.statisticalType.length ===3) {
                  this.configSuccessPanel = true;
                }
                break;
              case 2:
                //最多3个
                this.$store.commit("SET_STATISTICAL_TYPE", config);
                this.$store.commit("SET_STATISTICAL_LAYOUT", { width: 530, height: 200 });
                if (this.statisticalType.length ===3) {
                  this.configSuccessPanel = true;
                }
                break;
              case 3:
                //最多3个
                this.$store.commit("SET_STATISTICAL_TYPE", config);
                this.$store.commit("SET_STATISTICAL_LAYOUT", { width: 530, height: 200 });
                if (this.statisticalType.length ===3) {
                  this.configSuccessPanel = true;
                }
                break;
              case 4:
                //最多1个
                this.$store.commit("SET_STATISTICAL_TYPE", config);
                this.$store.commit("SET_STATISTICAL_LAYOUT", { width: 490, height: 290 });
                if (this.statisticalType.length ===2) {
                  this.configSuccessPanel = true;
                }
                break;
                break;
              case 5:
                //最多3个
                this.$store.commit("SET_STATISTICAL_TYPE", config);
                this.$store.commit("SET_STATISTICAL_LAYOUT", { width: 360, height: 290 });
                if (this.statisticalType.length ===2) {
                  this.configSuccessPanel = true;
                }
                break;
            }
            this.showgraphPickBox = false;
            this.chooseStatisticalData = '';
           // this.configSuccessPanel=true;
          }
        }
    }
</script>

<style scoped lang="less">
  .data-pick-box {
     margin-bottom: 15px;
     .el-radio {
       margin-bottom: 5px;
     }
     .el-radio.is-bordered+.el-radio.is-bordered {
       margin-left: 0 !important;
     }
   }
  .graph-pick-box {
    margin-bottom: 15px;
    .el-radio {
      margin-bottom: 5px;
    }
    .el-radio.is-bordered+.el-radio.is-bordered {
      margin-left: 0 !important;
    }
  }
</style>
