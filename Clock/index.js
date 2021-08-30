let hour, min, sec;

//Function to get Current Hour,Min,Sec
const getCurrentDate = () => {
  let date = new Date();
  hour = date.getHours();
  min = date.getMinutes();
  sec = date.getSeconds();
  return [hour, min, sec];
};

//Function to set Digital Clock
const showDigitalTime = () => {
  [hr, min, sec] = getCurrentDate();

  // The date object works on 24hr format so here we are converting it in 12 hours format
  let AM_PM = "AM";
  if (hr === 12) {
    AM_PM = "PM";
  }

  if (hr === 0) {
    hr = 12;
    AM_PM = "AM";
  }

  if (hr > 12) {
    hour -= 12;
    AM_PM = "PM";
  }
  hr = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);

  document.getElementById("digital-clock").innerHTML =
    hr + ":" + min + ":" + sec + " " + AM_PM;
};

//Function to concat "0" before hr/sec/min
const updateTime = (t) => {
  return t < 10 ? "0" + t : t;
};
setInterval(showDigitalTime, 1000); // calling setInterval every 1 sec so that our seconds keeps on changing

//Analog clock

const hr_hand = document.getElementById("hour");
const min_hand = document.getElementById("minutes");
const seconds_hand = document.getElementById("seconds");

//Function to set AnalogClock
const showAnalogTime = () => {
  [hr, min, sec] = getCurrentDate();

  let hr_rotation = (hr * 360) / 12 + (min * 360) / 60 / 12; // getting degree of hour-hand
  let min_rotation = (min * 360) / 60 + (sec * 360) / 60 / 60; // getting degree of min-hand
  let sec_rotation = (sec * 360) / 60; // getting degree of sec-hand

  hr_hand.style.transform = `rotate(${hr_rotation}deg)`;
  min_hand.style.transform = `rotate(${min_rotation}deg)`;
  seconds_hand.style.transform = `rotate(${sec_rotation}deg)`;
};
setInterval(showAnalogTime, 1000);
