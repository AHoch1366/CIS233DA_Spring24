let blnGas = 0;
let blnTrac = 1;
let blnBatt = 0;
let blnBrake = 1;
let intStatus = 0;
const modeInd = document.getElementById('mode');
const shifter = document.getElementById('bttn_shifter');

showTime();

function getGas() {
    if (blnGas == 0) {
        blnGas = 1;
        document.getElementById('gas').src = './assets/images/gas1.png';
        document.getElementById('bttn_gas').src = './assets/images/bttn_gas_1.png';
    } else {
        blnGas = 0;
        document.getElementById('gas').src = './assets/images/gas0.png';
        document.getElementById('bttn_gas').src = './assets/images/bttn_gas_0.png';
    }
}

function getTrac() {
    if (blnTrac == 1){
        blnTrac = 0;
        document.getElementById('trac').src = './assets/images/trac0.PNG';
        document.getElementById('bttn_trac').src = './assets/images/bttn_trac_1.PNG';
    } else {
        blnTrac = 1;
        document.getElementById('trac').src = './assets/images/trac1.PNG';
        document.getElementById('bttn_trac').src = './assets/images/bttn_trac_0.PNG';
    }
    }
function getBatt() {
    if (blnBatt == 0) {
        blnBatt = 1;
        document.getElementById('batt').src = './assets/images/batt1.png';
        document.getElementById('bttn_batt').src = './assets/images/bttn_batt_1.png';
    } else {
        blnBatt = 0;
        document.getElementById('batt').src = './assets/images/batt0.png';
        document.getElementById('bttn_batt').src = './assets/images/bttn_batt_0.png';
    }
    }
function setBrake(){
    if (blnBrake == 0) {
        blnBrake = 1;
        document.getElementById('brake').src = './assets/images/p1.PNG';
        document.getElementById('bttn_park').src = './assets/images/bttn_park_1.PNG';
    }
    else {
        blnBrake = 0;
        document.getElementById('brake').src = './assets/images/p0.PNG';
        document.getElementById('bttn_park').src = './assets/images/bttn_park_0.PNG'

    }
    }

    function setMode () {
        console.log ('entered setMode()')
        switch (intStatus) {
            case 0: 
                intStatus = 1;
                modeInd.innerText = 'ECO PRO';
                shifter.style.top = '720px';
                break;  
            case 1: 
                intStatus = 2;
                modeInd.innerText = 'COMFORT';
                shifter.style.top = '740px';
                break;  
            case 2: 
                intStatus = 3;
                modeInd.innerText = 'SPORT';
                shifter.style.top = '760px';
                break;  
            default: 
                intStatus = 0;
                modeInd.innerText = 'PARK';
                shifter.style.top = '700px';
            break;  

        }
    }
