<template>
  <div>
    <preview-panel></preview-panel>
    <span class="config-button"><i class="iconfont icon-config_s" @click="openConfig"></i></span>
    <config-panel v-model="isOpen"></config-panel>
  </div>
</template>

<script>
  import configPanel from '@/components/configPanel'
  import previewPanel from '@/pages/previewPanel'
    export default {
        name: "index",
        components:{
          configPanel,
          previewPanel
        },
        data(){
          return {
            isOpen:false,
          }
        },
        methods:{
          openConfig(){
            this.isOpen=true;
          },
        }
    }
</script>

<style scoped lang="less">
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
