<template>
  <div class="app-page">
    <particles/>
    <indexbg/>
    <div class="text-container">
        <h1>NetLogDataV</h1>
        <p>一个用于网站日志分析的可视化数据定制平台。通过它，你可以更加直观的了解到网站的访问情况。</p>
        <div class="subscribe-form">
          <div class="form-section">
            <input class="form-control" type="text"  v-model="titleName" @keyup.enter="enterConfig" @focus="onfocus" placeholder="为你的大屏输入一个名称吧，然后点击进入配置...">
          </div>
          <div class="form-btn">
            <button  class="tm-btn-subscribe"  @click="enterConfig">配置</button>
          </div>
        </div>
        <div class="tip-box" v-if="namelg">
          <strong class="tips">请输入大屏标题,再点击配置。</strong>
        </div>
        </div>
    </div>
</template>

<script>
  import indexbg from '@/components/indexBg'
  import particles from '@/components/particles'
    export default {
        name: "index",
        data(){
          return {
            titleName:'',
            namelg:false
          }
        },
        components:{
          indexbg,
          particles
        },
        methods:{
          enterConfig(){
            if(this.titleName===''){
              this.namelg=true;
              return;
            }
            this.$store.commit('SET_HEADER_TITLE',this.titleName)
            this.$router.push('/configIndex')
          },
          onfocus(){
            this.namelg=false;
          }
        }
    }
</script>

<style scoped lang="less">
  .app-page{
    width: 100%;
    height: 100%;
    overflow: hidden;
    .text-container{
      position: absolute;
      z-index: 1004;
      width: 45%;
      height: 20%;
      right: 10%;
      top: 20%;
      padding: 10px;
      font-size:large;
      h1{
        margin-top: 0;
        color: #fff;
        font-size: 64px;
      }
      p{
        font-weight: 600;
        color: #fff;
        line-height: 30px;
        margin-bottom: 30px;
      }
      .subscribe-form{
            width: 100%;
            display: flex;
            justify-content: space-between;
          .form-section{
            background: transparent;
            color: #ffffff;
            width: 72%;
            .form-control{
              width: 100%;
              height: 50px;
              outline: none;
              border-radius: 8px;
              background-color: transparent;
              border: 1px solid #FFFFFF;
              padding: 12px 19px;
              color: #ffffff;
              text-overflow: ellipsis;
              &::-webkit-input-placeholder {
                color: #FFFFFF;
                font-size: 19px;
              }
            }
          }
          .form-btn{
            width: 25%;
            .tm-btn-subscribe{
              outline: none;
              margin: 0;
              padding: 0;
              width: 100%;
              height: 50px;
              color: #ffffff;
              background-color: #006699;
              border-radius: 8px;
              border:1px solid #006699;
              padding: 12px 25px;
              font-weight: 300;
              font-size: 22px;
              line-height: 22px;
              cursor: pointer;
            }
          }
      }
      .tip-box{
        width: 100%;
        padding: 16px 10px;
        .tips{
          padding: 10px 15px;
          font-size: 12px;
          color: #843534;
          background: #ffffff;
          border-radius: 8px;
          position: relative;
          &:before{
            content:'';
            width: 0;
            height: 0;
            position: absolute;
            top: -10px;
            border-bottom: 10px solid #ffffff;
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
          }
        }
      }

    }
  }
</style>
