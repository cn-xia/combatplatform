<template>
  <div class="pages-content">
    <el-row>
      <el-col :span="11">
        <div id="radar-canv">
          <canvas id="scanThread" height="520" width="520"></canvas>
        </div>
      </el-col>
      <el-col :span="9">
        <div class="detect-panel">
          <keep-alive><router-view></router-view></keep-alive>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="suminfo-panel">
          <div class="suminfo-card"  @click="routerPages(1)">
            <div class="suminfo-card-title">
              目标信息
            </div>
            <div class="suminfo-card-title-line"></div>
            <div class="suminfo-card-text" :class="{'text-danger':targetText==='异常','text-safe':targetText==='正常'}">
              {{targetText}}
            </div>
          </div>

          
          
          <div class="suminfo-card"  @click="routerPages(2)">
            <div class="suminfo-card-title">
              航保信息
            </div>
            <div class="suminfo-card-title-line"></div>
            <div class="suminfo-card-text" :class="{'text-danger':airproText==='异常','text-safe':airproText==='正常'}">
              {{airproText}}
            </div>
          </div>

          <div class="suminfo-card"  @click="routerPages(3)">
            <div class="suminfo-card-title"> 
              环境信息
            </div>
            <div class="suminfo-card-title-line"></div>
            <div class="suminfo-card-text" :class="{'text-danger':enviroText==='异常','text-safe':enviroText==='正常'}">
              {{enviroText}}
            </div>
          </div>

        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>

import {RadarMap,UpdateMap} from '../assets/js/radar.js'

var radarMap;


var remainTime = function(millisecond){
  var timeInfo = {};
  timeInfo.day = Math.floor((millisecond /1000/ 3600) / 24);
  timeInfo.hour = Math.floor((millisecond /1000/ 3600) % 24); 
  timeInfo.minute = Math.floor((millisecond /1000/ 60) % 60);
  timeInfo.second = Math.floor(millisecond/1000 % 60);  
  timeInfo.haomiao = Math.floor(millisecond%1000); 
  return timeInfo;
}

var counter = function(millisecond,callbackFunction){
  var endTime = new Date().getTime()+millisecond
  var sysSecond = endTime - new Date().getTime();
}


export default {
  data(){
    return{
      targetText:"异常",
      airproText:"正常",
      enviroText:"正常"

    }
  },
  methods:{
    initRadar(){
      var canvas = document.querySelector("#scanThread")
      var ctx = canvas.getContext("2d");
      radarMap  = new RadarMap(ctx);
      //console.log(ctx);
     // UpdateMap(radarMap);
      UpdateMap(radarMap);
      //window.setInterval(UpdateMap,1000/35,radarMap); //35帧
      
    },
    routerPages(val){
      if(val==1){
        this.$router.push('/detect/targetinfo');
      }
      if(val==2){
        this.$router.push('/detect/airproInfo');
      }
      if(val==3){
        this.$router.push('/detect/environInfo')
      }

    }
    
    



  },
  mounted(){
    radarMap = null;
    this.initRadar();
  }
}
</script>

<style>

</style>