// I want my page to show a counterclock with remaining number of days, hours, minutes, seconds

// call all the variables that are going to be used
const endTime = new Date("April 1, 2022 13:05:00 GMT+00:00").getTime();
const timer = document.getElementById('timer');
const th1 = document.getElementById('timer-hours1');
const th2 = document.getElementById('timer-hours2');
const tm1 = document.getElementById('timer-minutes1');
const tm2 = document.getElementById('timer-minutes2');
const ts1 = document.getElementById('timer-seconds1');
const ts2 = document.getElementById('timer-seconds2');

// countDownTimer is my variable to count down the time every seconds
const countDownTimer = setInterval(function (){
const currentTime = new Date().getTime();
const timeLeft = endTime - currentTime;
// count the days (biggest period of time) over timeLeft
const days = Math.floor(timeLeft / (1000*60*60*24));
// count the hours with the remainder after the days equation is converted
const hours = Math.floor((timeLeft % (1000*60*60*24))/(1000*60*60));
// count the minutes with the remainder after the days equation is converted
const minutes = Math.floor((timeLeft % (1000*60*60))/(1000*60));
// count the seconds with the remainder after the days equation is converted
const seconds = Math.floor((timeLeft % (1000*60))/1000);

// not to encounter an undefined message when the number is 1 digit
const noUndefined = (number, minIntegerDigits) => {
    return number.toLocaleString(undefined, { minimumIntegerDigits: minIntegerDigits });
  };

// separate the digits of each days, hours. minutes and seconds
// transform the hours into a string then split 1st number and 2nd number
const hours1 = noUndefined(hours, 2).toString().split("")[0];
const hours2 = noUndefined(hours, 2).toString().split("")[1];
const minutes1 = noUndefined(minutes, 2).toString().split("")[0];
const minutes2 = noUndefined(minutes, 2).toString().split("")[1];
const seconds1 = noUndefined(seconds, 2).toString().split("")[0];
const seconds2 = noUndefined(seconds, 2).toString().split("")[1];

timer.innerHTML = days + " days, "  + hours1 + hours2 + " hours, " + minutes1 + minutes2 + " minutes and " + seconds1 + seconds2 + " seconds";
th1.innerHTML = hours1;
th2.innerHTML = hours2;
tm1.innerHTML = minutes1;
tm2.innerHTML = minutes2;
ts1.innerHTML = seconds1;
ts2.innerHTML = seconds2;

},1000);
