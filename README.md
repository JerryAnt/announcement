README.md

to do
IF statement so if hours1 minutes1 seconds1  == 0 it does not say undefined but it just does not display it.
to do in the css



What i want to do with this page:
-work a new skill on JS vanilla
COUNTER CLOCK

-and responsiveness on CSS
with @media


extra (addeventlistener, play with sound)

Background image is an image of an event (One piece the movie happening on Netflix)
Bring to front a counter depending on the date at which the event is happening.

JS:
Work on a counter




CSS:
Responsiveness both on a mobile phone and on a computer desktop

Bonus:
Extract the logo of netflix through an API
When the logo shows or when the page opens add the sound of netflix TaDam
When hovering on the hiragana, trigger the sound of Luffy saying kaizoku oni ore wa naru



Components sources:
netflix logo:
https://brand.netflix.com/en/assets/


javascript:

sources: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates
reminder:
this is for the time in milliseconds:

const endTime = new Date("April 1, 2022 13:05:00 GMT+00:00").getTime();
const timer = document.getElementById('timer');
// countDownTimer is my variable to count down the time every seconds
const countDownTimer = setInterval(function (){
const currentTime = new Date().getTime();
const timeLeft = endTime - currentTime;
timer.innerHTML = timeLeft;
},1000);

