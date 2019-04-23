import {
  getTargetData
} from '../../api/api.js'

function RadarMap(ctx) {
  this.config(ctx);
}
RadarMap.prototype = {
  // 初始化参数配置
  config: function (ctx) {
    var me = this;
    var margin = 10;
    var r = 250;


    me.options = {
      radius: r,
      x: r + margin,
      y: r + margin,
      t: 0,
      marginLeft: margin,
      marginTop: margin,
      ctx: ctx,
      points: [ /* {x:110,y:140,rank:1},{x:180,y:130,rank:3},{x:150,y:200,rank:4} */ ],
      palette: ['#00BFFF', '#FFF000', '#FFA500', '#EE0000'] //威胁级别 蓝黄橙红
    }
  },
  drawMap: function () {
    var me = this,
      x = me.options.x,
      y = me.options.y,
      t = me.options.t;
    var marginLeft = me.options.marginLeft,
      marginTop = me.options.marginTop,
      radius = me.options.radius;
    var ctx = me.options.ctx;
    //console.log(ctx);

    //雷达屏幕背景
    ctx.fillStyle = 'rgba(0,0,0)';
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    ctx.fill();


    // 雷达圈圈
    ctx.strokeStyle = '#9BCD9B';
    ctx.lineWidth = 1.5;


    //'十'字架
    //横线
    ctx.beginPath();
    ctx.moveTo(x, marginTop); // 起点
    ctx.lineTo(x, y * 2 - marginTop); //终点
    ctx.stroke(); // 描边
    //竖线
    ctx.beginPath();
    ctx.moveTo(marginLeft, y);
    ctx.lineTo(x * 2 - marginLeft, y);
    ctx.stroke();

    //4个圆圈
    for (var i = 1; i < 6; i++) {
      ctx.beginPath();
      ctx.arc(x, y, 50 * i, 0, Math.PI * 2, false);
      ctx.stroke();
    }

    ctx.fillStyle = 'rgba(0,200,0,1)';
    ctx.beginPath();
    ctx.arc(x, y, 8, 0, Math.PI * 2, false);
    ctx.fill();


  },
  scanThread: function () {
    var me = this,
      x = me.options.x,
      y = me.options.y,
      t = me.options.t,
      radius = me.options.radius;
    var ctx = me.options.ctx;
    if (t > 160)
      t = 0;
    //扫描动画

    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(t++ * (Math.PI / 80));
    ctx.beginPath();

    var grd = ctx.createRadialGradient(0, 0, 0, 0, 0, 250);
    grd.addColorStop(0, "rgba(0,200,200,0.6)");
    grd.addColorStop(1, "rgba(0,200,200,0.1)");
    ctx.fillStyle = grd; //'rgba(0,200,200,0.3)';

    //这里巨坑呀，由于translate移动了中心点,so坐标应按移动后的计算
    ctx.arc(0, 0, radius, 1.8 * Math.PI, 0, false);
    //没有这句只是个弧形，连接原点成为扇形
    ctx.lineTo(0, 0);
    ctx.fill();
    ctx.restore();

    me.options.t = t;
    //console.log(t);
  },
  drawPoint: function () {
    var me = this,
      points = me.options.points,
      ctx = me.options.ctx,
      palette = me.options.palette;
    var pr = 7;
    //console.log(points)
    var t = me.options.t;
    if (Math.floor(t / 20) % 2 == 0) {
      points.forEach(element => {
        var x = element.x + 10
        var y = element.y + 10;
        var rank = element.rank - 1;
        var grd = ctx.createRadialGradient(x, y, 0, x, y, pr);
        grd.addColorStop(0, "white");
        grd.addColorStop(1, palette[rank]);
        ctx.save()

        ctx.beginPath();
        ctx.shadowBlur = 20;
        ctx.shadowColor = "white";
        ctx.arc(x, y, pr, 0, 2 * Math.PI);
        ctx.fillStyle = grd; //palette[rank];
        ctx.fill();
        ctx.restore();
      });
    }


  }
}
RadarMap.prototype.initMap = function () {
  var me = this;
  me.drawMap();
}
RadarMap.prototype.UpdatePoints = function (data) {
  var me = this;
  var points = [];
  data.forEach(element => {
    let obj = {};
    obj.point = element.point;
    //console.log(obj.point);
    points.push(obj.point);
    //console.log(pts);

  });
  me.options.points = points;



}

function UpdateScan(radarMap) {
  //radarMap.scanThread();
  //radarMap.initMap();
 /*   */

}

function UpdateMap(radarMap) {


  getTargetData().then(data => {
    radarMap.UpdatePoints(data);
    radarMap.initMap();
    radarMap.scanThread();
    radarMap.drawPoint();
 
  });


}


export {
  RadarMap,
  UpdateMap,
  UpdateScan
}
