import Digit from "./Digit.js";

//import './DigitBar.css';
var link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'DigitGroup.css';
document.getElementsByTagName('HEAD')[0].appendChild(link);

export default class DigitGroup {
  constructor(value, nbDigits) {
    this.value = value;
    this.nbDigits = nbDigits;
    this.elem = document.createElement('div');
    this.elem.classList.add('digit-group');
    this.digits = [];
    let i = 0;
    for (i = 0; i < this.nbDigits; i++) {
        let digit  = new Digit();
        digit.render(this.elem);
        this.digits.push(digit);
    }
    this.setValue(value);
  }
}

DigitGroup.prototype.render = function (parentElement) {
    parentElement.appendChild(this.elem);
};

DigitGroup.prototype.setValue = function(value) {
    this.value = value;
    if (this.nbDigits === 2) {
        let aux = this.value % 10;
        this.value = value;
        this.digits[1].setValue(aux);
        this.digits[0].setValue((this.value - aux) / 10 % 10 );
    } else if (this.nbDigits === 3) {
        let aux = this.value % 10;
        let aux10 = this.value % 100;
        this.value = value;
        this.digits[2].setValue(aux);
        this.digits[1].setValue((this.value - aux) / 10 % 10 );
        this.digits[0].setValue((this.value - aux10) / 100 % 100 );
    }

}

