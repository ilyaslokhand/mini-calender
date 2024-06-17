let date = document.getElementById("date");
let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");

let today = new Date();

let weekdays = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

date.innerHTML = today.getDate();
day.innerHTML = weekdays[today.getDay()];
month.innerHTML = months[today.getMonth()];
year.innerHTML = today.getFullYear();
