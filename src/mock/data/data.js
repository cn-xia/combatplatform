import Mock from 'mockjs'

const Random = Mock.Random;

/*-----目标信息-----*/
const targetData = function(){
    let data = [];
    let name = ['驱逐舰','巡洋舰','巡洋舰']
    let type = ['村雨级','阿蘇山级','阿蘇山级']
    for (let i = 0; i < 3; i++) {
        let obj = {
            id: i+1,
            name:name[i%3],
            type:type[i%3],
            speed:Random.integer(40,50),
            distance:Random.float(180,200,2,2),
            direction:Random.float(100,200,1,1),
            position:Random.float(120,121,4,4)+"E "+Random.float(38,42,4,4)+"N"
        }
        data.push(obj);
        
    }
    return data;
}


/*-----航保信息-----*/
const sailProData  = function(){
    let data = [];
    let name = ['护卫舰','补给舰']
    let type = ['053H3型','骆马湖号']
    for (let i = 0; i < 2; i++) {
        let obj = {
            id: i+1,
            name:name[i%2],
            type:type[i%2],
            speed:Random.integer(40,50),
            distance:Random.float(180,200,2,2),
            direction:Random.float(100,200,1,1),
            position:Random.float(120,121,4,4)+"E "+Random.float(38,42,4,4)+"N",
            leftfuel:Random.float(2500,4000,2,2)
        }
        data.push(obj);
        
    }
    return data;
}
export{targetData,sailProData}