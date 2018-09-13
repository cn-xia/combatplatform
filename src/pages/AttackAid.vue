<template>
  <div class="pages-content">
      <el-row>
        <el-col :span="12">
          <div class="map-area" id="Map">
          </div>
        </el-col>
        <el-col :span="8">
          <div class="decision-panel">
            <el-form ref="form" :model="form" label-width="90px">
              <el-form-item label="目标编号">
                <el-input v-model="form.target"></el-input>
              </el-form-item>
              <el-form-item label="攻击时刻">
                <el-input v-model="form.time"></el-input>
              </el-form-item>
              <el-form-item label="攻击线路">
                <el-row>
                  <el-col :span="10">
                    <el-input v-model="form.formerLong"></el-input>
                  </el-col>
                  <el-col :span="10" :offset="4">
                    <el-input v-model="form.formerLat"></el-input>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="2" :offset="4">
                    <div style="font-size:16px;color:white;">至</div>
                  </el-col>
                  <el-col :span="2" :offset="12">
                    <div style="font-size:16px;color:white;">至</div>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="10">
                    <el-input v-model="form.afterLong"></el-input>
                  </el-col>
                  <el-col :span="10" :offset="4">
                    <el-input v-model="form.afterLat"></el-input>
                  </el-col>
                </el-row>
              </el-form-item>
              <el-form-item label="武器分配" style="line-height:23px;">
                <div class="arms-list">
                  <el-table
                    height="180"
                    border
                    :data=form.armsList>
                    <el-table-column prop="name" label="名称" align="center" width="140"></el-table-column>
                    <el-table-column prop="number" label="数量" align="center" width="70"></el-table-column>
                    <el-table-column 
                      label="操作" 
                      align="center">
                      <template slot-scope="scope">
                        <el-button type="text" size="small" @click="changeArms(scope.$index, form.armsList)">修改</el-button>
                        <el-button type="text" size="small" @click.native.prevent="deleteArms(scope.$index, form.armsList)">移除</el-button>
                      </template>
                    </el-table-column>
                  </el-table>
                </div>
                <div style="float:right;margin-top:5px;">
                  <button type="button" class="add-btn" @click="addArms()">增加</button>
                </div>
              </el-form-item>
            </el-form>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="decision-list">
            <el-table
              height="440"
              @row-click="clickDecision"
              :data="decisionList">
              <el-table-column prop="decision" label="决策方案" align="center"></el-table-column>
            </el-table>
          </div>
          <div class="attack-panel">
            <button type="button" class="attack-btn">攻击</button>
          </div>
        </el-col>
      </el-row>
      <el-dialog :visible.sync="armsDialogVisible" width="30%" :title="armsDialogTitle">
        <el-form :model="armsForm" ref="armsForm"  label-width="70px" label-position="left">
          <el-form-item label="名称">
            <el-input v-model="armsForm.name"></el-input>
          </el-form-item>
          <el-form-item label="数量">
            <el-input v-model="armsForm.number"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <button type="button" class="dialog-cancel-btn" @click="armsDialogVisible = false">取消</button>
          <button type="button" class="dialog-define-btn" @click="handleArmsList">确定</button>
        </div>
      </el-dialog>
  </div>
</template>

<script>
var map;
import addMapStyle from '@/style/mapStyle.json'
export default {
  data(){
    return{
      form:{
        target:"",
        time:"",
        formerLong:"",
        formerLat:"",
        afterLong:"",
        afterLat:"",
        armsList:[]
      },
      armsForm:{
        name:"",
        number:""
      },
      armsDialogTitle:"",
      armsDialogVisible:false,
      selectArmsRows:"",
      decisionList:[{decision:"example1",target:1,time:"2018-7-23 20:05:32",formerLong:113.31132,formerLat:8.41623,afterLong:112.12332,afterLat:9.56832,armsList:[{name:"H/PJ-12型舰炮",number:"1"}]},
                    {decision:"example2",target:2,time:"2018-7-23 20:05:34",formerLong:110.31132,formerLat:10.41632,afterLong:111.12332,afterLat:11.56832,armsList:[{name:"H/PJ-12型舰炮",number:"2"}]}],
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
    },
    deleteArms(index, rows){
      rows.splice(index, 1);
    },
    clickDecision(row, event, column){
      //console.log(row);
      this.form.target = row.target;
      this.form.time = row.time;
      this.form.formerLong = row.formerLong;
      this.form.formerLat = row.formerLat;


      
      this.form.afterLong = row.afterLong;
      this.form.afterLat = row.afterLat;
      this.form.armsList = row.armsList;

      //设置地图移动曲线
      /* map.clearOverlays();
      var formerPoint = new BMap.Point(row.formerLong,row.formerLat);
      var afterPoint = new BMap.Point(row.afterLong,row.afterLat);
      var points = [formerPoint,afterPoint]



      var curve = new BMapLib.CurveLine(points, {strokeColor:"yellow", strokeWeight:3,strokeOpacity:0.5}); //创建弧线对象
      map.addOverlay(curve); */ //添加到地图中
    },
    addArms(){
      this.armsDialogTitle = "新增武器";
      this.armsForm.name = "";
      this.armsForm.number = "";
      this.armsDialogVisible = true;
    },
    changeArms(index, rows){
      this.armsDialogTitle = "修改武器";
      this.armsForm.name = rows[index].name;
      this.armsForm.number = rows[index].number;
      this.selectArmsRows = index;
      this.armsDialogVisible = true;
    },
    handleArmsList(){

      if(this.armsForm.name == "" || this.armsForm.number == ""){
        this.$message({
          message:"输入不能为空",
          type:'warning',
          showClose:true
        })
        return; 
      }

      if(this.armsDialogTitle == "新增武器"){
        var armsItem = {};
        armsItem.name = this.armsForm.name;
        armsItem.number = this.armsForm.number;
        this.form.armsList.push(armsItem)
      }
      if(this.armsDialogTitle == "修改武器"){
        this.form.armsList[this.selectArmsRows].name = this.armsForm.name;
        this.form.armsList[this.selectArmsRows].number = this.armsForm.number;
      }
      this.armsDialogVisible = false;
    }

  },
  mounted(){
    map=null;
    this.init();
  }
}
</script>

<style>
.decision-list > .el-table thead{
  color:white;
  font-style:unset;
  font-size: 16px;
  letter-spacing: 1px;
}

.decision-list > .el-table td{
  font-size: 17px;
}

.arms-list > .el-table th{
  background: #424e62;
  padding: 5px 0;
  font-size: 15px;
}

.arms-list > .el-table td{
  background: #424e62;
  padding: 5px 0;
  font-size: 16px;
}

.arms-list .el-table th >.cell{
  position: relative;
  word-wrap: normal;
  text-overflow: ellipsis;
  vertical-align: middle;
  width: 100%;
  box-sizing: border-box;
  background-color: #424e62;
}

.arms-list{
  line-height: 23px;
  border:1px solid #a09d9d;
  
}



</style>





