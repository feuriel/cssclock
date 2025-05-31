import DigitGroup from "./DigitGroup.js";
import HandClock from "./HandClock.js";

// Create a new Date object
const now = new Date();

// Get the current hour, minute, and second
const now_hour = now.getHours(); // Returns the hour (0-23)
const now_minute = now.getMinutes(); // Returns the minute (0-59)
const now_second = now.getSeconds(); // Returns the second (0-59)
let digitGroupHour = new DigitGroup(0, 2);
let digitGroupMinute = new DigitGroup(0, 2);
let digitGroupSecond = new DigitGroup(0, 2);

digitGroupHour.setValue(now_hour);
digitGroupHour.render(document.getElementById("content"));
const addDot = document.createElement("span");
addDot.innerText = ":";
addDot.style.paddingLeft = "10px";
addDot.style.paddingRight = "10px";
addDot.style.fontSize = "40px";
addDot.style.alignContent = "center";
const addDot2 = addDot.cloneNode(true);
document.getElementById("content").appendChild(addDot);
digitGroupMinute.setValue(now_minute);
digitGroupMinute.render(document.getElementById("content"));
document.getElementById("content").appendChild(addDot2);
digitGroupSecond.setValue(now_second);
digitGroupSecond.render(document.getElementById("content"));
let sec = now_second,
  min = now_minute,
  hour = now_hour;
setInterval(() => {
  if (sec >= 59) {
    sec = 0;
    digitGroupSecond.setValue(sec);
    min++;
    digitGroupMinute.setValue(min);
    return;
  }
  if (min > 59) {
    min = 0;
    digitGroupMinute.setValue(min);
    hour++;
    digitGroupHour.setValue(hour);
    return;
  }
  if (hour >= 24) {
    hour = 0;
    digitGroupHour.setValue(hour);
    return;
  }
  sec++;
  digitGroupSecond.setValue(sec);
}, 1000);

let handClock = new HandClock(now);
handClock.render(document.getElementById("content2"));

const footer = document.getElementsByTagName("footer")[0];
footer.innerText = `© ${now.getFullYear()} Gabriel S.`;

let copyright = `© ${new Date().getFullYear()} Gabriel Somogyi`;
console.log(`made with ❤️ by Gabriel S.
  https://gabriel-somogyi.vercel.app/
  ${copyright}`);
