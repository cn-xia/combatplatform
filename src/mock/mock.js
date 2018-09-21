import Mock from 'mockjs'
import {targetData,sailProData,sunMoonData,weatherData,seaWaterData} from './data/data.js'

const serverAddress = "http://locolhost:8090";

Mock.mock(serverAddress+'/getTargetData',function(){
    let data = targetData();
    //console.log(data);
    return data;
});

Mock.mock(serverAddress+'/getGuardInfo',function(){
    let data = sailProData();
    return data;
});

Mock.mock(serverAddress+'/getSunMoonInfo',function(){
    let data = sunMoonData();
    return data;
});

Mock.mock(serverAddress+'/getWeatherInfo',function(){
    let data = weatherData();
    return data;
});

Mock.mock(serverAddress+'/gethydrologyInfo',function(){
    let data =seaWaterData();
    return data;
});
