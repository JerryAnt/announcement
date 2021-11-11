const endTime = new Date("April 1, 2022 13:05:00 GMT+00:00").getTime();
const timer = document.getElementById('timer');
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


// separate the digits of each days, hours. minutes and seconds
// transform the hours into a string then split 1st number and 2nd number
const hours1 = hours.toString().split("")[0];
const hours2 = hours.toString().split("")[1];
const minutes1 = minutes.toString().split("")[0];
const minutes2 = minutes.toString().split("")[1];
const seconds1 = seconds.toString().split("")[0];
const seconds2 = seconds.toString().split("")[1];

timer.innerHTML = days + " days, "  + hours1 + hours2 + " hours, " + minutes1 + minutes2 + " minutes and " + seconds1 + seconds2 + " seconds";
},1000);
