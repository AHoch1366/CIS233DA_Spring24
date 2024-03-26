let gasLevel = 0;
let tracLevel = 1;
let battLevel = 0;
let parkLevel = 1;

showTime();

function getGas() {
    if (gasLevel == 0) {
        gasLevel = 1;
        document.getElementById('gas').src = './assets/images/gas1.png';
        document.getElementById('bttn_gas').src = './assets/images/bttn_gas_1.png';
    } else {
        gasLevel = 0;
        document.getElementById('gas').src = './assets/images/gas0.png';
        document.getElementById('bttn_gas').src = './assets/images/bttn_gas_0.png';
    }
}

function getTrac() {
    if (tracLevel == 1){
        tracLevel = 0;
        document.getElementById('trac').src = './assets/images/trac0.PNG';
        document.getElementById('bttn_trac').src = './assets/images/bttn_trac_1.PNG';
    } else {
        tracLevel = 1;
        document.getElementById('trac').src = './assets/images/trac1.PNG';
        document.getElementById('bttn_trac').src = './assets/images/bttn_trac_0.PNG';
    }
    }
function getBatt() {
    if (battLevel == 0) {
        battLevel = 1;
        document.getElementById('batt').src = './assets/images/batt1.png';
        document.getElementById('bttn_batt').src = './assets/images/bttn_batt_1.png';
    } else {
        battLevel = 0;
        document.getElementById('batt').src = './assets/images/batt0.png';
        document.getElementById('bttn_batt').src = './assets/images/bttn_batt_0.png';
    }
    }
function getPark(){
    if (parkLevel == 1) {
        parkLevel = 0;
        document.getElementById('brake').src = './assets/images/p1.PNG';
        document.getElementById('bttn_park').src = './assets/images/bttn_park_1.PNG';
    }
    else {
        parkLevel = 1;
        document.getElementById('brake').src = './assets/images/p0.PNG';
        document.getElementById('bttn_park').src = './assets/images/bttn_park_0.PNG'

    }
    }
