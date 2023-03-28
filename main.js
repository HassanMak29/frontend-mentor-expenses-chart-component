import "./style.css";
import data from "./data.json";

data.forEach((bar) => {
  document.getElementById("chart").innerHTML += `
      <div class="bar-wrapper">
        <div class="tooltip">$${bar.amount}</div>
        <div class="bar"></div>
        <div class="day">${bar.day}</div>
      </div>
    `;
});

document.querySelectorAll(".bar").forEach((b) => {
  const day = b.parentNode.querySelector(".day").textContent;
  const today = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"][
    new Date().getDay()
  ];
  if (day === today) {
    b.classList.add("today");
  }
  b.style.height = `${
    data.filter((bar) => bar.day === day)[0].amount * 0.2
  }rem`;
});
