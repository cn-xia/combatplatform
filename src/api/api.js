import axios from 'axios';

const serverAddress = "http://locolhost:8090";

const getTargetData = ()=>{
    return axios.post(serverAddress+'/getTargetData').then(res=>res.data);
}

const getGuardInfo = ()=>{
    return axios.post(serverAddress+'/getGuardInfo').then(res=>res.data);
}


export {getTargetData,getGuardInfo}
