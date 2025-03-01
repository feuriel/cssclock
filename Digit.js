import DigitBar from './DigitBar.js';

//import './Digit.css';
var link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'Digit.css';
document.getElementsByTagName('HEAD')[0].appendChild(link);

export default class Digit {
  constructor(value = 0) {
    this.bars = [];
    let i = 0;
    this.elem = document.createElement('div');
    this.elem.classList.add('digit');
    for (i = 0; i < 7; i++) {
      this.bars.push(new DigitBar(this.height));
    }
    for (i = 0; i < 7; i++) {
      this.bars[i].render(this.elem);
    }
    this.value = value;
    this.setValue(this.value);
  }
}

Digit.prototype.render = function (parentElement) {
  parentElement.appendChild(this.elem);
};

Digit.prototype.setValue = function (value) {
  this.value = value;
  switch (value) {
    case 0:
      this.bars[0].setOn(true);
      this.bars[1].setOn(true);
      this.bars[2].setOn(true);
      this.bars[3].setOn(true);
      this.bars[4].setOn(true);
      this.bars[5].setOn(true);
      this.bars[6].setOn(false);
      break;
    case 1:
      this.bars[0].setOn(false);
      this.bars[1].setOn(true);
      this.bars[2].setOn(true);
      this.bars[3].setOn(false);
      this.bars[4].setOn(false);
      this.bars[5].setOn(false);
      this.bars[6].setOn(false);
      break;
    case 2:
      this.bars[0].setOn(true);
      this.bars[1].setOn(true);
      this.bars[2].setOn(false);
      this.bars[3].setOn(true);
      this.bars[4].setOn(true);
      this.bars[5].setOn(false);
      this.bars[6].setOn(true);
      break;
    case 3:
      this.bars[0].setOn(true);
      this.bars[1].setOn(true);
      this.bars[2].setOn(true);
      this.bars[3].setOn(true);
      this.bars[4].setOn(false);
      this.bars[5].setOn(false);
      this.bars[6].setOn(true);
      break;
    case 4:
      this.bars[0].setOn(false);
      this.bars[1].setOn(true);
      this.bars[2].setOn(true);
      this.bars[3].setOn(false);
      this.bars[4].setOn(false);
      this.bars[5].setOn(true);
      this.bars[6].setOn(true);
      break;
    case 5:
      this.bars[0].setOn(true);
      this.bars[1].setOn(false);
      this.bars[2].setOn(true);
      this.bars[3].setOn(true);
      this.bars[4].setOn(false);
      this.bars[5].setOn(true);
      this.bars[6].setOn(true);
      break;
    case 6:
      this.bars[0].setOn(true);
      this.bars[1].setOn(false);
      this.bars[2].setOn(true);
      this.bars[3].setOn(true);
      this.bars[4].setOn(true);
      this.bars[5].setOn(true);
      this.bars[6].setOn(true);
      break;
    case 7:
      this.bars[0].setOn(true);
      this.bars[1].setOn(true);
      this.bars[2].setOn(true);
      this.bars[3].setOn(false);
      this.bars[4].setOn(false);
      this.bars[5].setOn(false);
      this.bars[6].setOn(false);
      break;
    case 8:
      this.bars[0].setOn(true);
      this.bars[1].setOn(true);
      this.bars[2].setOn(true);
      this.bars[3].setOn(true);
      this.bars[4].setOn(true);
      this.bars[5].setOn(true);
      this.bars[6].setOn(true);
      break;
    case 9:
      this.bars[0].setOn(true);
      this.bars[1].setOn(true);
      this.bars[2].setOn(true);
      this.bars[3].setOn(true);
      this.bars[4].setOn(false);
      this.bars[5].setOn(true);
      this.bars[6].setOn(true);
      break;
  }
};
