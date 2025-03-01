//import './DigitBar.css';
var link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'HandClock.css';
document.getElementsByTagName('HEAD')[0].appendChild(link);

export default class HandClock {
  constructor(time) {
    this.on = false;
    this.elem = document.createElement('div');
    this.elem.classList.add('clock');
    this.secondHand = document.createElement('div');
    this.secondHand.classList.add('second-hand');
    this.secondHand.classList.add('clock-hand');
    this.minuteHand = document.createElement('div');
    this.minuteHand.classList.add('minute-hand');
    this.minuteHand.classList.add('clock-hand');
    this.hourHand = document.createElement('div');
    this.hourHand.classList.add('hour-hand');
    this.hourHand.classList.add('clock-hand');
    this.elem.appendChild(this.hourHand);
    this.elem.appendChild(this.minuteHand);
    this.elem.appendChild(this.secondHand);

    const now_hour = time.getHours();   // Returns the hour (0-23)
    const hr_angle = (now_hour % 12) / 12 * 360 - 90;
    const now_minute = time.getMinutes(); // Returns the minute (0-59)
    const min_angle = now_minute / 60 * 360 - 90;
    const now_second = time.getSeconds(); // Returns the second (0-59)
    const sec_angle = now_second / 60 * 360 - 90;
    this.secondHand.style.setProperty('--angle', `${sec_angle}deg`);
    this.minuteHand.style.setProperty('--angle', `${min_angle}deg`);
    this.hourHand.style.setProperty('--angle', `${hr_angle}deg`);
  }
}

HandClock.prototype.render = function (parentElement) {
  parentElement.appendChild(this.elem);
};
