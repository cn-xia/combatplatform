import axios from 'axios';

const serverAddress = "http://locolhost:8090";

const getTargetData = ()=>{
    return axios.post(serverAddress+'/getTargetData').then(res=>res.data);
}

const getGuardInfo = ()=>{
    return axios.post(serverAddress+'/getGuardInfo').then(res=>res.data);
}

const getSunMoonInfo = ()=>{
    return axios.post(serverAddress+'/getSunMoonInfo').then(res=>res.data);
}

const getWeatherInfo = ()=>{
    return axios.post(serverAddress+'/getWeatherInfo').then(res=>res.data);
}

const gethydrologyInfo = ()=>{
    return axios.post(serverAddress+'/gethydrologyInfo').then(res=>res.data);
}



export {getTargetData,getGuardInfo,getSunMoonInfo,getWeatherInfo,gethydrologyInfo}
