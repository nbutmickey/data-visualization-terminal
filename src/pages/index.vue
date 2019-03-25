<template>
  <div style="position: relative">
    <preview-panel></preview-panel>
    <span v-if="!isOpenHistory" class="historyRecord-button"><i class="iconfont icon-lishijilu" @click="openHistoryPanel"></i></span>
    <span class="config-button"><i class="iconfont icon-config_s" @click="openConfig"></i></span>
    <config-panel v-model="isOpen"></config-panel>
    <history-panel v-model="isOpenHistory"></history-panel>
  </div>
</template>

<script>
  import configPanel from '@/components/configPanel'
  import previewPanel from '@/pages/previewPanel'
  import historyPanel from '@/components/historyPanel'
    export default {
        name: "index",
        components:{
          configPanel,
          previewPanel,
          historyPanel
        },
        data(){
          return {
            isOpen:false,
            isOpenHistory:false,
          }
        },
        methods:{
          openConfig(){
            this.isOpen=true;
          },
          openHistoryPanel(){
            this.isOpenHistory=true;
          }
        }
    }
</script>

<style scoped lang="less">
.historyRecord-button{
  position: absolute;
  left: 5px;
  top: 50px;
  width: 48px;
  height: 48px;
  display: inline-block;
  border: 2px solid #fffdef;
  border-radius: 10px;
  color: #fffdef;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  i{
    font-size: 40px;
  }
}
.config-button{
  position: absolute;
  right: 15px;
  bottom: 50%;
  width: 48px;
  height: 48px;
  display: inline-block;
  border-radius: 50%;
  border: 2px solid #fffdef;
  color: #fffdef;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  i{
    font-size: 40px;
  }
}
</style>
