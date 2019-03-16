<template>
      <div class="index-page" :style="{backgroundImage: 'url(' +backgroundUrl + ')'}">
        <Header :titleType="styleType"></Header>
        <div class="main-layout">
          <TemplateOne v-if="templateType===1"></TemplateOne>
          <TemplateTwo v-if="templateType===2"></TemplateTwo>
          <TemplateThree v-if="templateType===3"></TemplateThree>
          <TemplateFour v-if="templateType===4"></TemplateFour>
          <TemplateFive v-if="templateType===5"></TemplateFive>
        </div>
      </div>
</template>

<script>
  import { mapGetters } from "vuex";
  import TemplateOne from '@/pages/templateOne/index';
  import TemplateTwo from '@/pages/templateTwo/index';
  import TemplateThree from '@/pages/templateThree/index';
  import TemplateFour from '@/pages/templateFour/index';
  import TemplateFive from '@/pages/templateFive/index';
  import Header from '@/components/header/index';
    export default {
        name: "previewPanel",
        data(){
          return {
            backgroundUrl:require('../assets/bg/bg-global1.png'),
          }
        },
        watch:{
          styleType:{
            handler(val){
              this.backgroundUrl=require(`../assets/bg/bg-global${val}.png`);
            },
            immediate:true
          },
        },
        computed:{
          ...mapGetters(["styleType","templateType"])
        },
        created(){},
        components:{
          TemplateOne,
          TemplateTwo,
          TemplateThree,
          TemplateFour,
          TemplateFive,
          Header
        }
    }
</script>

<style scoped lang="less">
  .index-page{
    height: 100%;
    left: 0;
    top:0;
    right: 0;
    bottom: 0;
    backgroundRepeat:repeat-x;
    .main-layout{
      padding:5px 10px;
      height: 688px;
    }
  }
</style>
