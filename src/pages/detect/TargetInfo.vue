<template>
    <div class="target-table-area">
        <el-table
            :data = "targetList"
            v-loading = "loading"
            element-loading-background="rgba(0, 0, 0, 0.5)"
            height="520">
            <el-table-column prop="id" label="目标编号" width="80" align="center"></el-table-column>
            <el-table-column prop="name" label="种类" width="90" align="center"></el-table-column>
            <el-table-column prop="type" label="型号" width="90" align="center"></el-table-column>
            <el-table-column prop="speed" label="速度" width="70" align="center"></el-table-column>
            <el-table-column prop="longitude" label="经度" width="90" align="center"></el-table-column>
            <el-table-column prop="latitude" label="纬度" width="90" align="center"></el-table-column>
            <el-table-column prop="distance" label="距离" width="80" align="center"></el-table-column>
            <el-table-column prop="direction" label="航向" width="80" align="center"></el-table-column>
        </el-table>
    </div>
</template>

<script>
import {getTargetData} from '../../api/api.js'
export default {
    data(){
        return{
            targetList:[],
            loading:false,
        }
    },
    methods:{
        setTableData(){
            this.loading = true;
            getTargetData().then(data=>{
                //console.log(data);
                this.targetList=[];
                data.forEach(element => {
                    let obj = {};
                    obj.id = element.id;
                    obj.name = element.name;
                    obj.type = element.type;
                    obj.speed = element.speed;
                    obj.distance = element.distance;
                    obj.direction = element.direction;
                    let position = element.position.split(" ");
                    obj.longitude = position[0];
                    obj.latitude = position[1];
                    this.targetList.push(obj);
                });
                this.loading = false;
            });
        }
    },
    mounted(){
        this.setTableData();
    }
}
</script>

<style>

</style>
