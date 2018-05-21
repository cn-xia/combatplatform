function changeTopStep(path){
    if(path.indexOf('/detect')>=0){
        document.getElementById('infoimg').src = "../../static/image/step2.png";
        document.getElementById('attackimg').src = "../../static/image/step3.png";
        document.getElementById('reportimg').src = "../../static/image/step4.png";
        document.getElementById('mapimg').src = "../../static/image/step11.png";
    }
    if(path.indexOf('/infofusion')>=0){
        document.getElementById('attackimg').src = "../../static/image/step3.png";
        document.getElementById('reportimg').src = "../../static/image/step4.png";
        document.getElementById('mapimg').src = "../../static/image/step11.png";
        document.getElementById('infoimg').src = "../../static/image/step22.png";
    }
    if(path.indexOf('/attackaid')>=0){
        document.getElementById('reportimg').src = "../../static/image/step4.png";
        document.getElementById('mapimg').src = "../../static/image/step11.png";
        document.getElementById('infoimg').src = "../../static/image/step22.png";
        document.getElementById('attackimg').src = "../../static/image/step33.png";
    }
    if(path.indexOf('/report')>=0){
        document.getElementById('mapimg').src = "../../static/image/step11.png";
        document.getElementById('infoimg').src = "../../static/image/step22.png";
        document.getElementById('attackimg').src = "../../static/image/step33.png";
        document.getElementById('reportimg').src = "../../static/image/step44.png";
    }
}

export{changeTopStep}