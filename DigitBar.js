//import './DigitBar.css';
var link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'DigitBar.css';
document.getElementsByTagName('HEAD')[0].appendChild(link);

export default class DigitBar {
  constructor() {
    this.on = false;
    this.elem = document.createElement('div');
    this.elem.classList.add('digit-bar');
    this.elem.classList.add('digit-bar-off');
  }
}

DigitBar.prototype.render = function (parentElement) {
  parentElement.appendChild(this.elem);
};

DigitBar.prototype.setOn = function (on) {
  this.on = on;
  this.elem.classList.remove('digit-bar-on');
  this.elem.classList.remove('digit-bar-off');
  if (on) {
    this.elem.classList.add('digit-bar-on');
  } else {
    this.elem.classList.add('digit-bar-off');
  }
};
