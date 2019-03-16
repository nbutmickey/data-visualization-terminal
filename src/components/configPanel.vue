<template>
  <div class="mask" v-show="showMask">
    <div class="dialog">
      <div class="steps">
        <el-steps simple  :active="active" finish-status="success">
          <el-step title="选择背景"></el-step>
          <el-step title="选择模板"></el-step>
          <el-step title="实时模块"></el-step>
          <el-step title="统计模块"></el-step>
          <el-step title="趋势模块"></el-step>
          <el-step title="保存发布"></el-step>
        </el-steps>
      </div>
      <div class="config-panel">
        <div class="choose-panel">
          <div v-if="showSavePanel" style="padding-top: 200px"><h3><i class="el-icon-success" style="color: #67C23A"></i> 数据已保存并发布...</h3></div>
          <choose-img-panel v-if="curStep.title==='选择背景'"></choose-img-panel>
          <choose-template-panel v-if="curStep.title==='选择模板'"></choose-template-panel>
          <choose-real-time-panel v-if="curStep.title==='实时模块'"></choose-real-time-panel>
          <choose-statistical-panel v-if="curStep.title==='统计模块'"></choose-statistical-panel>
          <choose-trend-panel v-if="curStep.title==='趋势模块'&&!showSavePanel"></choose-trend-panel>
        </div>
        <div class="button-panel">
          <el-button type="primary" @click="preview">实时预览</el-button>
          <!--<el-button type="warning" @click="prevStep">上一步</el-button>-->
          <el-button type="warning" @click="nextStep" :disabled="disabledNext">下一步</el-button>
          <el-button type="danger" @click="release" v-if="showSave" :disabled="disabledSave">保存并发布</el-button>
          <el-button type="success" @click="updateConfig" v-else>重新配置</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";
  import chooseImgPanel from '@/components/chooseImgPanel'
  import chooseTemplatePanel from '@/components/chooseTemplatePanel'
  import chooseRealTimePanel from '@/components/chooseRealTimePanel'
  import chooseStatisticalPanel from '@/components/chooseStatisticalPanel'
  import chooseTrendPanel from  '@/components/chooseTrendPanel'
export default {
  name: "configPanel",
  props: {
    //这里的value就是父组件的v-model值
    value: {}
  },
  components:{
    chooseImgPanel,
    chooseTemplatePanel,
    chooseRealTimePanel,
    chooseStatisticalPanel,
    chooseTrendPanel
  },
  computed: {
    ...mapGetters(["curStep","templateType","styleType","chooseRealTimeData","lineChartType","statisticalType"])
  },
  data() {
    return {
      active:0,
      disabledNext:false,
      disabledSave:true,
      showSavePanel:false,
      chooseImg:1,
      showMask:false,
      showSave:true,
      steps: [
        {title:'选择背景',status:'process'},
        {title:'选择模板',status:'process'},
        {title:'实时模块',status:'process'},
        {title:'统计模块',status:'process'},
        {title:'趋势模块',status:'process'},
      ]
    };
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
  },
  methods: {
    //预览
    preview() {
      this.showMask = false;
    },
    // //上一步
    // prevStep() {
    //   this.disabledNext=false;
    //   this.active--;
    //   if(this.active!==6)  this.disabledSave=true;
    //   if(this.active<0) this.active=0;
    //   if(this.active===5){
    //     this.showSavePanel=false;
    //     this.disabledNext=true;
    //     this.disabledSave=false;
    //     this.$store.commit('SET_CUR_STEP',this.steps[4]);
    //   }else{
    //     this.$store.commit('SET_CUR_STEP',this.steps[this.active]);
    //   }
    //
    // },
    //下一步
    nextStep() {
      if(this.curStep.title==='实时模块'&&this.chooseRealTimeData.length===0){
        this.$message.error('实时模块尚未配置，不能进入下一步哦~');
      }else if(this.curStep.title==='统计模块'&&this.statisticalType.length===0){
        this.$message.error('统计模块尚未配置，不能进入下一步哦~');
      }
      else if(this.curStep.title==='趋势模块'&&this.lineChartType.length===0){
        this.$message.error('趋势模块尚未配置，不能进入下一步哦~');
      }else{
        this.active++;
        if(this.active===5) {
          this.disabledNext=true;
          this.disabledSave=false;
        }else{
          this.$store.commit('SET_CUR_STEP',this.steps[this.active]);
        }
      }
    },
    //发布
    release() {
      this.active=6;
      //提交相关配置
      this.$store.dispatch('SubmitConfig').then(res=>{
        if(res.status){
          this.showSavePanel=true;
          this.showSave=false;
          this.$message({
            message:res.message,
            type:'success'
          })
        }else{
          this.$message({
            message:res.message,
            type:'error'
          })
        }
      });
    },
    //重新配置
    updateConfig(){
      this.$store.dispatch('UpdatConfig').then(res=>{
        if(res.status){
          //重定向到首页进行配置
          this.$router.push('/')
        }else{
          this.$message({
            type:'error',
            message:res.message
          })
        }
      })
    }
  }
};
</script>

<style scoped lang="less">
.mask {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1999;
  .dialog {
    width: 85%;
    height: 80%;
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 8px;
    transform: translate(-50%, -50%);
    animation: dialogSlipToUp ease 0.6s;
    background: #e8e8e8;
    padding: 10px;
    .steps {
      height: 10%;
    }
    .config-panel {
      display: flex;
      justify-content: space-between;
      height: 90%;
      /*padding-top: 15px;*/
      .choose-panel {
        display: flex;
        justify-content: center;
        width: 79%;
        height: 100%;
        background: #f5f7fa;
        border-radius: 4px;
        border: 1px solid #d9d9d9;
        padding: 10px;
      }
      .button-panel {
        width: 20%;
        height: 100%;
        padding: 0 20px;
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        background: #f5f7fa;
        border: 1px solid #d9d9d9;
      }
    }
  }

  @keyframes dialogSlipToUp {
    0% {
      left: 100%;
      opacity: 0.3;
    }
    100% {
      left: 50%;
      opacity: 1;
    }
  }
}
</style>
