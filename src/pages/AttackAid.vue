<template>
  <div class="pages-content">
      <el-row>
        <el-col :span="12">
          <div class="map-area" id="Map">
          </div>
        </el-col>
        <el-col :span="8">
          <div class="decision-panel">
            <!-- <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="目标编号">
                <el-input v-model="form.no"></el-input>
              </el-form-item>
            </el-form> -->
          </div>
        </el-col>
        <el-col :span="4">
          <h1>area3</h1>
        </el-col>
      </el-row>
  </div>
</template>

<script>
var map;
import addMapStyle from '@/style/mapStyle.json'
export default {
  data(){
    return{
      form:{
        no:''
      }
    }
  },
  methods:{
    init(){
      map = new BMap.Map("Map");
      var point = new BMap.Point(113.311,8.416);
      map.setMapStyle({
        styleJson:addMapStyle
      });
      map.centerAndZoom(point, 8);  
      map.enableScrollWheelZoom(true);
    }
  },
  mounted(){
    map=null;
    this.init();
  }
}
</script>

<style>

</style>





