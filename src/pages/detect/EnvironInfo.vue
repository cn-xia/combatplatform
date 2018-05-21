<template>
  <div class="enviro-table-area">
      <el-table
          :data = "sunMoonList"
          v-loading = "loading"
          element-loading-background="rgba(0, 0, 0, 0.5)"
          height="100">
          <el-table-column prop="sunrise" label="日出时间" width="135" align="center"></el-table-column>
          <el-table-column prop="sunset" label="日落时间" width="135" align="center"></el-table-column>
          <el-table-column prop="moonrise" label="月出时间" width="135" align="center"></el-table-column>
          <el-table-column prop="moonset" label="月落时间" align="center"></el-table-column>
      </el-table>
      <el-table
          :data = "weatherList"
          height="150">
          <el-table-column prop="time" label="时间"  width="130" align="center"></el-table-column>
          <el-table-column prop="airtemp" label="气温" width="100" align="center"></el-table-column>
          <el-table-column prop="winddirection" label="风向" width="105" align="center"></el-table-column>
          <el-table-column prop="windspeed" label="风速" width="105" align="center"></el-table-column>
          <el-table-column prop="visibility" label="能见度" align="center"></el-table-column>
      </el-table>
      <el-table
          :data = "hydrologyList"
          height="150">
          <el-table-column prop="time" label="时间"  width="130" align="center"></el-table-column>
          <el-table-column prop="waves" label="海浪等级" width="100" align="center"></el-table-column>
          <el-table-column prop="seaice" label="海冰等级" width="105" align="center"></el-table-column>
          <el-table-column prop="watertemp" label="水温" width="105" align="center"></el-table-column>
          <el-table-column prop="waterdepth" label="水深" align="center"></el-table-column>
      </el-table>
  </div>
</template>

<script>
export default {
  data(){
    return{
      sunMoonList:[{sunrise:"-",sunset:"18:21",moonrise:"18:22",moonset:"-"}],
      weatherList:[{time:"-",airtemp:"-",winddirection:"-",windspeed:"-",visibility:"-"},
                    {time:"-",airtemp:"-",winddirection:"-",windspeed:"-",visibility:"-"}],
      hydrologyList:[{time:"-",waves:"-",seaice:"-",watertemp:"-",waterdepth:"-"},
                      {time:"-",waves:"-",seaice:"-",watertemp:"-",waterdepth:"-"}],
      loading:false,
  }
  }
}
</script>

<style>

</style>
