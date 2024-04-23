function tryLaunch() {
    var blnLaunch = 0;
    
    if (blnGas == 0) {
        blnLaunch = 0;
        strMessage = 'You are out of gas';
    }

    if (blnBrake == 0){
        blnLaunch = 0;
        strMessage = 'Release the brake';
    }

    if (blnBatt == 0){
        blnLaunch = 0;
        strMessage = 'Recharge the battery';
    }

    if (blnTrac == 1){
        blnLaunch = 0;
        strMessage = 'Release Traction Control';
    }

    if (intStatus = !3){
        blnLaunch = 0;
        strMessage = 'Engage Sport Mode'
    }

    
    if (blnLaunch == 0) {
        document.getElementById('msg').innerHTML = strMessage;
        new Audio('./assets/media/sputter.mp3').play();   
    } else {
        document.getElementById('launch').src = './assets/images/LCA.png';
        document.getElementById('msg').innerHTML = 'Go Fast - Dont die!';
        new Audio('./assets/media/launch.mp3').play();   
    }


    }
