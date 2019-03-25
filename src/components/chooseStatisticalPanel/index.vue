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
      <el-tabs v-model="activeName" @tab-click="handleClickTab">
        <el-tab-pane label="占比类" name="first">
          <el-radio-group v-model="chooseStatisticalData" @change="changeProportionData" size="mini">
            <el-radio v-for="(item,index) in proportionJson":key="index"  :label="item.label" border :disabled="item.disabled" border>{{item.text}}</el-radio>
          </el-radio-group>
        </el-tab-pane>
        <el-tab-pane label="数量类" name="second">
          <el-radio-group v-model="chooseStatisticalData" @change="changeNumberData" size="mini">
            <el-radio v-for="(item,index) in numberJson":key="index"  :label="item.label" border :disabled="item.disabled" border>{{item.text}}</el-radio>
          </el-radio-group>
        </el-tab-pane>
        <el-tab-pane label="面板类" name="third">
          <el-radio-group v-model="chooseStatisticalData" @change="changePanelData" size="mini">
            <el-radio v-for="(item,index) in normalPanelJson":key="index"  :label="item.label" border :disabled="item.disabled" border>{{item.text}}</el-radio>
          </el-radio-group>
        </el-tab-pane>
      </el-tabs>

    </div>
    <div class="graph-pick-box" v-if="showgraphPickBox">
      <h6 style="margin-bottom: 8px;color: #F56C6C;">选取展示图表</h6>
      <div style="padding:0 10px 0 10px">
        <el-radio-group v-model="currentGraphType"  @change="changeGraph" class="bgBox" size="mini">
          <div class="bg-item" v-for="(item) in graphType" :key="item.id">
            <div class="img"><img :src="item.bgurl"/></div>
            <el-radio :label="item.label">{{item.text}}</el-radio>
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
  import{ mapGetters } from 'vuex'
  import graphStyleJson from '@/assets/config/graphStyle.json'
  import normalPanelJson  from '@/assets/config/normalPanel.json'
  import numberJson from '@/assets/config/number.json'
  import proportionJson from '@/assets/config/proportion.json'
    export default {
        name: "index",
        data(){
          return {
            title:"",
            activeName:"first",
            chooseStatisticalData:"",
            currentGraphType:"",
            isContinue:true,
            showgraphPickBox:false,
            configSuccessPanel:false,

            normalPanelJson:[],
            proportionJson:[],
            numberJson:[],
            graphType:[]
          }
        },
        created(){
          this.normalPanelJson=normalPanelJson;
          this.proportionJson=proportionJson;
          this.numberJson=numberJson;
        },
        computed:{
          ...mapGetters(['templateType','statisticalType'])
        },
        methods: {
          handleClickTab(){
            if(this.activeName==='first'){
              this.graphType=graphStyleJson.proportion;
            }else if(this.activeName==='second'){
              this.graphType=graphStyleJson.number;
            }else{
              this.graphType=graphStyleJson.normalPanel
            }
          },
          changeProportionData(val) {
            this.graphType=graphStyleJson.proportion;
            this.proportionJson.forEach(item => {
              if (item.label === val) {
                this.title = item.text;
              }
            })
            this.showgraphPickBox = true;
          },
          changeNumberData(val) {
            this.numberJson.forEach(item => {
              if (item.label === val) {
                this.title = item.text;
              }
            })
            this.showgraphPickBox = true;
          },
          changePanelData(val) {
            this.normalPanelJson.forEach(item => {
              if (item.label === val) {
                this.title = item.text;
              }
            })
            this.showgraphPickBox = true;
          },

          changeGraph(val) {
            this.isContinue = false;
          },
          continueButton() {
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
                this.$store.commit("SET_STATISTICAL_LAYOUT", {width: 440, height: 200});
                if (this.statisticalType.length === 3) {
                  this.configSuccessPanel = true;
                }
                break;
              case 2:
                //最多3个
                this.$store.commit("SET_STATISTICAL_TYPE", config);
                this.$store.commit("SET_STATISTICAL_LAYOUT", {width: 530, height: 200});
                if (this.statisticalType.length === 3) {
                  this.configSuccessPanel = true;
                }
                break;
              case 3:
                //最多3个
                this.$store.commit("SET_STATISTICAL_TYPE", config);
                this.$store.commit("SET_STATISTICAL_LAYOUT", {width: 530, height: 200});
                if (this.statisticalType.length === 3) {
                  this.configSuccessPanel = true;
                }
                break;
              case 4:
                //最多1个
                this.$store.commit("SET_STATISTICAL_TYPE", config);
                this.$store.commit("SET_STATISTICAL_LAYOUT", {width: 490, height: 290});
                if (this.statisticalType.length === 2) {
                  this.configSuccessPanel = true;
                }
                break;
                break;
              case 5:
                //最多3个
                this.$store.commit("SET_STATISTICAL_TYPE", config);
                this.$store.commit("SET_STATISTICAL_LAYOUT", {width: 360, height: 290});
                if (this.statisticalType.length === 2) {
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
    .bgBox{
      width: 100%;
      height: 70%;
      padding-top: 5px;
      padding-left: 5px;
      display: flex;
      flex-wrap: wrap;
      .bg-item{
        .img{
          margin-bottom: 5px;
          img {
            width: 180px;
            height: 80px;
            border-radius: 5px;
            box-shadow: 1px 1px 2px 2px #A9A9A9;
          }
        }
        width: 205px;
        height: 100px;
        margin-bottom: 14px;
        padding: 5px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
    /*.el-radio {*/
      /*margin-bottom: 5px;*/
    /*}*/
    /*.el-radio.is-bordered+.el-radio.is-bordered {*/
      /*margin-left: 0 !important;*/
    /*}*/
  }
</style>
