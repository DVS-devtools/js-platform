import { JsPlatform } from '../src/index.js';

const iPhone6 = 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1';
const GalaxyS5 = 'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Mobile Safari/537.36';
const Desktop = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36'

let platformInstance = new JsPlatform();


const printUa = () => {
    console.log('UA Changed in ' + platformInstance.OS);
    document.getElementById('jsPlatform-example-ua').innerText = platformInstance.OS.toUpperCase();
}

window.switchIos = () => {
    platformInstance = new JsPlatform(iPhone6)
    printUa();
}

window.switchAndroid = () => {
    platformInstance = new JsPlatform(GalaxyS5)
    printUa();
}

window.switchDesktop = () => {
    platformInstance = new JsPlatform(Desktop);
    printUa();
}

window.currentUserAgent = () => {
    platformInstance = new JsPlatform();
    printUa();
}

printUa();