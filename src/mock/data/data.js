import Mock from 'mockjs'

const Random = Mock.Random;

/*-----目标信息-----*/
const targetData = function () {
  let data = [];
  let name = ['驱逐舰', '巡洋舰', '巡洋舰']
  let type = ['村雨级', '阿蘇山级', '阿蘇山级']
  for (let i = 0; i < 3; i++) {
    let obj = {
      id: i + 1,
      name: name[i % 3],
      type: type[i % 3],
      //update
      point: {
        x: Random.integer(110, 180),
        y: Random.integer(130, 200),
        rank: Random.integer(1, 4)
      },
      //point:{x:110,y:120,rank:4},
      speed: Random.integer(40, 50),
      distance: Random.float(180, 200, 2, 2),
      direction: Random.float(100, 200, 1, 1),
      position: Random.float(120, 121, 4, 4) + "E " + Random.float(38, 42, 4, 4) + "N"
    }
    data.push(obj);

  }
  return data;
}


/*-----航保信息-----*/
const sailProData = function () {
  let data = [];
  let name = ['护卫舰', '补给舰']
  let type = ['053H3型', '骆马湖号']
  for (let i = 0; i < 2; i++) {
    let obj = {
      id: i + 1,
      name: name[i % 2],
      type: type[i % 2],
      speed: Random.integer(40, 50),
      distance: Random.float(180, 200, 2, 2),
      direction: Random.float(100, 200, 1, 1),
      position: Random.float(120, 121, 4, 4) + "E " + Random.float(38, 42, 4, 4) + "N",
      leftfuel: Random.float(2500, 4000, 2, 2)
    }
    data.push(obj);

  }
  return data;
}

/*-----日出日落----- */
const sunMoonData = function () {
  let data = [];
  let obj = {
    sunrise: "7:30",
    sunset: "18:21",
    moonrise: "18:22",
    moonset: "1:57"
  }
  data.push(obj);
  return data;
}

/*-----气象信息----- */
const weatherData = function () {
  let data = [];
  let time = ['12:00', '12:30']
  let airtemp = ['23℃', '26℃']
  for (let i = 0; i < 2; i++) {
    let obj = {
      time: time[i % 2],
      airtemp: airtemp[i % 2],
      winddirection: '西北',
      windspeed: '13m/s',
      visibility: '10m',
    }
    data.push(obj);

  }
  return data;
}

/*-----海水信息----- */
const seaWaterData = function () {
  let data = [];
  let time = ['12:00', '12:15'];
  let waves = [5, 8];
  let seaice = [1, 1];
  let watertemp = ['18℃', '17.6℃'];
  let waterdepth = ['856m', '845m'];
  for (let i = 0; i < 2; i++) {
    let obj = {
      time: time[i % 2],
      waves: waves[i % 2],
      seaice: seaice[i % 2],
      watertemp: watertemp[i % 2],
      waterdepth: waterdepth[i % 2],
    }
    data.push(obj);
  }
  return data;
}


export {
  targetData,
  sailProData,
  sunMoonData,
  weatherData,
  seaWaterData
}
