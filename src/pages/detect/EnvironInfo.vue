<template>
    <div class="enviro-table-area">
        <el-table 
        :data="sunMoonList" 
        v-loading="loading" 
        element-loading-background="rgba(0, 0, 0, 0.5)" 
        height="100">
            <el-table-column prop="sunrise" label="日出时间" width="135" align="center"></el-table-column>
            <el-table-column prop="sunset" label="日落时间" width="135" align="center"></el-table-column>
            <el-table-column prop="moonrise" label="月出时间" width="135" align="center"></el-table-column>
            <el-table-column prop="moonset" label="月落时间" align="center"></el-table-column>
        </el-table>
        <el-table :data="weatherList" height="150">
            <el-table-column prop="time" label="时间" width="130" align="center"></el-table-column>
            <el-table-column prop="airtemp" label="气温" width="100" align="center"></el-table-column>
            <el-table-column prop="winddirection" label="风向" width="105" align="center"></el-table-column>
            <el-table-column prop="windspeed" label="风速" width="105" align="center"></el-table-column>
            <el-table-column prop="visibility" label="能见度" align="center"></el-table-column>
        </el-table>
        <el-table :data="hydrologyList" height="150">
            <el-table-column prop="time" label="时间" width="130" align="center"></el-table-column>
            <el-table-column prop="waves" label="海浪等级" width="100" align="center"></el-table-column>
            <el-table-column prop="seaice" label="海冰等级" width="105" align="center"></el-table-column>
            <el-table-column prop="watertemp" label="水温" width="105" align="center"></el-table-column>
            <el-table-column prop="waterdepth" label="水深" align="center"></el-table-column>
        </el-table>
    </div>
</template>

<script>
import {
    getSunMoonInfo,
    getWeatherInfo,
    gethydrologyInfo
} from "../../api/api.js";

export default {
    data() {
        return {
            sunMoonList: [],
            weatherList: [],
            hydrologyList: [],
            loading: false
        }
    },
    methods: {
        setTableData() {
            this.loading = true;
            getSunMoonInfo().then(data => {
                this.sunMoonList = [];
                data.forEach(element => {
                    let obj = {};
                    obj.sunrise = element.sunrise;
                    obj.sunset = element.sunset;
                    obj.moonrise = element.moonrise;
                    obj.moonset = element.moonset;
                    this.sunMoonList.push(obj);
                });
            });
            getWeatherInfo().then(data => {
                this.weatherList = [];
                data.forEach(element => {
                    let obj = {};
                    obj.time = element.time;
                    obj.airtemp = element.airtemp;
                    obj.winddirection = element.winddirection;
                    obj.windspeed = element.windspeed;
                    obj.visibility = element.visibility;
                    this.weatherList.push(obj);
                });
            });
            gethydrologyInfo().then(data => {
                this.hydrologyList = [];
                data.forEach(element => {
                    let obj = {};
                    obj.time = element.time;
                    obj.waves = element.waves;
                    obj.seaice = element.seaice;
                    obj.watertemp = element.watertemp;
                    obj.waterdepth = element.waterdepth;
                    this.hydrologyList.push(obj);
                });
            });
            this.loading = false;
        }
    },
    mounted() {
        this.setTableData();
    }
};
</script>

<style>
</style>
