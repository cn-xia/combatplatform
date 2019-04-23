<template>
    <div class="target-table-area">
        <div class="suminfo-panel">
            
            <el-form ref="position" :model="positionR" label-width="110px" class="detectInput">

                <el-form-item prop="longitude" label="地区经度">
                    <el-input type="text" v-model="positionR.longitude"></el-input>
                </el-form-item>

                <el-form-item prop="latitude" label="地区纬度">
                    <el-input type="text" v-model="positionR.latitude"></el-input>
                </el-form-item>

                <el-form-item prop="elevation" label="地区海拔">
                    <el-input type="text" v-model="positionR.elevation"></el-input>
                </el-form-item>
                
                <el-form-item prop="range" label="侦测距离">
                   <el-row>
                  <el-col :span="8" :offset="1">
                    <el-input v-model="positionR.rangL"></el-input>
                  </el-col>
                  <el-col :span="3" :offset="2">
                    <div style="font-size:16px;color:white;">至</div>
                  </el-col>
                  <el-col :span="8" :offset="1">
                    <el-input v-model="positionR.range"></el-input>
                  </el-col>
                </el-row>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" class='detect-btn' @click="routerPages()">侦测</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import { getTargetData } from "../../api/api.js";
export default {
    data() {
        return {
            logining: false,
            positionR: {
                longitude: "",
                latitude: "",
                elevation: "",
                rangL:0,
                range:"",
            }
        };
    },
    methods: {
        routerPages() {
            this.$router.push({
                path:"/detect/targetinfo",
                query:{
                    positionR:this.positionR
                }
            
            });
        }
    },
    mounted() {
    }
};
</script>

<style>
</style>
