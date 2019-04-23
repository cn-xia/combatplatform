<template>
    <div class="weapon-area">
        <el-table :data="weaponList" v-loading="loading" element-loading-background="rgba(0, 0, 0, 0.5)" height="543">
            <el-table-column prop="shipId" label="军舰编号" width="100" align="center"></el-table-column>
            <el-table-column prop="id" label="武器编号" width="100" align="center"></el-table-column>
            <el-table-column prop="type" label="武器类型" width="110" align="center"></el-table-column>
            <el-table-column prop="prepareTime" label="准备时间" width="110" align="center"></el-table-column>
            <el-table-column prop="isReady" label="是否就绪" width="80" align="center"></el-table-column>
            <el-table-column prop="isFunctional" label="是否有用" width="80" align="center"></el-table-column>
        </el-table>
    </div>
</template>

<script>
import { getWeapons } from "@/api/api.js";
export default {
    data() {
        return {
            weaponList: [],
            loading: false
        };
    },
    methods: {
        setTableData() {
            this.loading = true; 
            getWeapons().then(data => {
                this.weaponList = [];
                data.forEach(element => {
                    let obj = {};
                    obj.shipId = element.shipId;
                    obj.id = element.id;
                    switch(element.type){
                        case 0:{
                            obj.type = "舰炮";
                            break;
                        }
                        case 1:{
                            obj.type = "机炮";
                            break;
                        }
                        case 2:{
                            obj.type = "近程导弹";
                            break;
                        }
                        case 3:{
                            obj.type = "中程导弹";
                            break;
                        }
                        case 4:{
                            obj.type = "远程导弹";
                            break;
                        }
                    }
                    obj.prepareTime = element.prepareTime;
                    if(element.isReady){
                        obj.isReady = "Y";
                    }else{
                        obj.isReady = "N"
                    }
                    if(element.isFunctional){
                        obj.isFunctional = "Y"
                    }else{
                        obj.isFunctional = "N"
                    }
                    
                    this.weaponList.push(obj);
                });
                this.loading = false;
            });
        }
    },
    mounted() {
        this.setTableData();
    }
};
</script>

<style>
</style>
