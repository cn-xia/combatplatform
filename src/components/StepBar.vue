<template>
  <div class="bottom-step-bar">
      <div class="bottom-step-box" @click="changeRoute(1)" style="margin-left:18%;"> 
        <img id="mapimg" class="bottom-step-img" src="static/image/step1.png">
        <span class="bottom-step-text">实时侦测</span>
      </div>
      <div class="bottom-step-line"></div>
      <div class="bottom-step-box" @click="changeRoute(2)">
        <img id="infoimg" class="bottom-step-img" src="static/image/step2.png">
        <span class="bottom-step-text">信息融合</span>
      </div>
      <div class="bottom-step-line"></div>
      <div class="bottom-step-box" @click="changeRoute(3)">
        <img id="attackimg" class="bottom-step-img" src="static/image/step3.png">
        <span class="bottom-step-text">实施攻击</span>
      </div>
      <div class="bottom-step-line"></div>
      <div class="bottom-step-box" @click="changeRoute(4)">
        <img id="reportimg" class="bottom-step-img" src="static/image/step4.png">
        <span class="bottom-step-text">作战报告</span>
      </div>
  </div>
</template>

<script>
import {changeTopStep} from '../assets/js/step-bar.js'

export default {
    name:'StepBar',
    watch:{
        "$route":"getPath"
    },
    methods:{
        changeRoute(val){
            if(val==1){
                this.$router.push("/detect/targetinfo");
            }
            if(val==2){
                this.$router.push("/infofusion/situation");
            }
            if(val==3){
                this.$router.push("/attackaid");
            }
            if(val==4){
                this.$router.push("/report")
            }
            
        },
        getPath(){ 
            let path = this.$route.path;
            changeTopStep(path);
        }
        
    },
    mounted(){
        this.getPath();
    }    
}
</script>

<style>

</style>

