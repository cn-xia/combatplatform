<template>
  <div class="pages-content">
      <el-row>
        <el-col :span="4">
          <div class="map-info-panel">
            <el-row>
              <div class="title-heading">
                <span>环境分析</span>
              </div>
            </el-row>
            <el-row>
              <div class="map-weather-info">
              </div>
            </el-row>
            <el-row>
              <div class="title-heading" style="margin-top:6px;">
                <span>目标分析</span>
              </div>
            </el-row>
            <el-row>
              <div class="map-target-info">
              </div>
            </el-row>
          </div>
        </el-col>
        <el-col :span="20">
          <div class="real-time-map" id="RealTimeMap">
          </div>
        </el-col>
        <!-- <el-col :span="2">
          <div class="map-control-panel">
            <el-row>
              <div class="map-control-panel-title">
                身份识别
              </div>
            </el-row>
            <el-row class="map-control-panel-row">
              <el-checkbox border v-model="identityUs" size="mini">我方</el-checkbox>
            </el-row>
            <el-row class="map-control-panel-row">
              <el-checkbox border v-model="identityOther" size="mini">外来</el-checkbox>
            </el-row>
            <el-row>
              <div class="map-control-panel-title">
                类型识别
              </div>
            </el-row>
            <el-row>
              <el-table
                ref = "shipList"
                :data="shipListData"
                style="width:90%;margin-left:3%;margin-bottom:10px;"
                height="210px"
                show-overflow-tooltip
                size="small"
                @row-click = "ChoseTypeByClickRow"
                >
                <el-table-column
                  type="selection"
                  width="30">
                </el-table-column>
                <el-table-column
                  prop="typeName"
                  min-width="70"
                  label="全选">
                </el-table-column>
              </el-table>
            </el-row>
            <el-row>
              <div class="map-control-panel-title">
                威胁判别
              </div>
            </el-row>
          </div>
        </el-col> -->
      </el-row>
  </div>
</template>

<script>
var map;
import addMapStyle from '../style/mapStyle.json'
export default {
  data(){
    return{
      identityUs:true,
      identityOther:true,
      shipListData:[{
        typeName:"巡洋艇"
      },{
        typeName:"驱逐舰"
      },{
        typeName:"护卫舰"
      },{
        typeName:"鱼雷艇"
      },{
        typeName:"炮艇"
      },{
        typeName:"导弹艇"
      }]
    }
  },
  methods:{
    init(){
      
      map = new BMap.Map("RealTimeMap",{minZoom:7});  //mapType:BMAP_HYBRID_MAP,
      var point = new BMap.Point(113.311, 8.416);
      map.setMapStyle({
        styleJson:addMapStyle
      });

      
      
      map.centerAndZoom(point, 8);  
      map.enableScrollWheelZoom(true); 
    },
    ChoseTypeByClickRow(row){
      console.log(row);
      this.$refs.shipList.toggleRowSelection(row);
    }
  },
  mounted(){
    map = null;
    this.init();
  }
}
</script>

<style>

</style>
