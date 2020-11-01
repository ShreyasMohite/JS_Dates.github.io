var date = new Date();
fulldate = () => document.getElementById("answer").innerHTML = date;

year = () => document.getElementById("answer").innerHTML = "The year is " + date.getFullYear();
month = () => document.getElementById("answer").innerHTML = "The month is " + date.getMonth();
dates = () => document.getElementById("answer").innerHTML = "The date is " + date.getDate();
day = () => document.getElementById("answer").innerHTML = "The week is " + date.getDay();
hours = () => document.getElementById("answer").innerHTML = "Hours " + date.getHours();
minutes = () => document.getElementById("answer").innerHTML = "Minutes " + date.getMinutes();
seconds = () => document.getElementById("answer").innerHTML = "Seconds " + date.getSeconds();
miliseconds = () => document.getElementById("answer").innerHTML = "MiliSeconds " + date.getMilliseconds();