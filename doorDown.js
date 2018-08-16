// create a status LED for the amount of time the door needs to go down

let Gpio = require('onoff').Gpio;
let LED = new Gpio(4, 'out');
let doorTravel = setInterval(blinkLED, 250);

function blinkLED() {
    if (LED.readySync() === 0) {
        LED.writeSync(1);
    } else {
        LED.writeSync(0);
    }

}

function endBlink() {
    clearInterval(doorTravel);
LED.writeSync(0);
LED.unexport();
}

setTimeout(endBlink, 5000);

console.log('shes alive!!');

