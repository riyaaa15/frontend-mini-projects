const date  = document.querySelector("#date");
const day   = document.querySelector("#day");
const month = document.querySelector("#month");
const year  = document.querySelector("#year");

const today = new Date();

date.innerText  = today.getDate();
day.innerText   = today.toLocaleDateString("en-US", { weekday: "long" });
month.innerText = today.toLocaleDateString("en-US", { month: "long" });
year.innerText  = today.getFullYear();
