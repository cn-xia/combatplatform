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
                    <keep-alive>
                        <router-view></router-view>
                    </keep-alive>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="suminfo-panel">
                    <div class="suminfo-card" @click="routerPages(1)">
                        <div class="suminfo-card-title">
                            态势评估
                        </div>
                        <div class="suminfo-card-title-line"></div>
                        <div class="suminfo-card-text" :class="{'text-danger':situationText==='异常','text-safe':situationText==='正常'}">
                            {{situationText}}
                        </div>
                    </div>

                    <div class="suminfo-card" @click="routerPages(2)">
                        <div class="suminfo-card-title">
                            威胁判断
                        </div>
                        <div class="suminfo-card-title-line"></div>
                        <div class="suminfo-card-text" :class="{'text-danger':threadText==='异常','text-safe':threadText==='正常'}">
                            {{threadText}}
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import { RadarMap, UpdateMap } from "@/assets/js/radar.js";

var radarMap;
export default {
    data() {
        return {
            situationText: "异常",
            threadText: "异常"
        };
    },
    methods: {
        initRadar() {
            var canvas = document.querySelector("#scanThread");
            var ctx = canvas.getContext("2d");
            radarMap = new RadarMap(ctx);
            //console.log(ctx);
            // UpdateMap(radarMap);
            UpdateMap(radarMap);
            //window.setInterval(UpdateMap,1000/35,radarMap); //35帧
        },
        routerPages(val) {
            if (val == 1) {
                this.$router.push("/infofusion/situation");
            }
            if (val == 2) {
                this.$router.push("/infofusion/threat");
            }
        }
    },
    mounted() {
        radarMap = null;
        this.initRadar();
    }
};
</script>

<style>
</style>