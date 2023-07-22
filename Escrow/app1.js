const months = [
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
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const item = document.querySelectorAll(".deadline-format h4");
console.log(giveaway);
// console.log(giveaway, item);
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// let futureDate = new Date(2022, 1, 05, 2, 00, 0);
console.log("hello", tempDay+1)
const futureDate = new Date(tempYear, tempMonth, tempDay , 11 , 00, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
// console.log(months[month])
month = months[month];
const date = futureDate.getDate();

const weekDay = weekdays[futureDate.getDay()];
console.log(weekDay);

giveaway.textContent = `Event Start on ${weekDay} ${date} ${month} ${year}   `;

// future time in ms
const futureTime = futureDate.getTime();
console.log(futureTime);

const getRemainingTime = () => {
  const today = new Date().getTime();
  // console.log(today)
  const t = futureTime - today;
  // console.log(t)
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  let days = t / oneDay;
  days = Math.ceil(days);
  // console.log(days);
  let hours = Math.ceil((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);
  console.log(hours);

  const values = [days, hours, minutes, seconds];

  const format = (it) => {
    if (it < 10) {
      return (it = `0${it}`);
    }
    return it;
  };

  item.forEach((itm, index) => {
    itm.innerHTML = format(values[index]);
  });
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">Event has Started Join FAST!!!!!</h4>`;
  }
};
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();
