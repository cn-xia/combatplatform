import Mock from 'mockjs'
import {targetData,sailProData} from './data/data.js'

const serverAddress = "http://locolhost:8090";

Mock.mock(serverAddress+'/getTargetData',function(){
    let data = targetData();
    //console.log(data);
    return data;
});

Mock.mock(serverAddress+'/getGuardInfo',function(){
    let data = sailProData();
    return data;
})
