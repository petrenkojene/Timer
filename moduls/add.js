export function timer(descriptionDate, year, month, day, hour, minute, second) {
  // создание контейнера
  let div = document.createElement("div");
  div.classList.add("container");
  document.body.append(div);
  // стиль контейнера
  document.querySelector(".container").style.width = 400 + "px";
  document.querySelector(".container").style.display = "flex";
  document.querySelector(".container").style.position = "absolute";
  document.querySelector(".container").style.flexDirection = "column";
  document.querySelector(".container").style.textAlign = "center";
  // document.querySelector(".container").style.backgroundColor = "white";
  let img = document.createElement("img");
  div.append(img);
  let image = document.querySelector("img");
  image.src =
    "https://img0.liveinternet.ru/images/attach/c/0//52/925/52925965_000001.gif";

  let par = document.createElement("p");
  par.classList.add("timer");
  div.append(par);
  document.querySelector(".timer").innerHTML = descriptionDate;
  document.querySelector(".timer").style.fontSize = 24 + "px";
  document.body.style.backgroundColor = "yellow";
  let ul = document.createElement("ul");
  ul.classList.add("list");
  let li1 = document.createElement("li");
  li1.classList.add("li1");
  let li2 = document.createElement("li");
  li2.classList.add("li2");
  let li3 = document.createElement("li");
  li3.classList.add("li3");
  let li4 = document.createElement("li");
  li4.classList.add("li4");
  ul.append(li1, li2, li3, li4);
  div.append(ul);

  let listDate = document.querySelector(".list");
  listDate.style.listStyle = "none";
  listDate.style.display = "flex";
  listDate.style.width = 400 + "px";
  listDate.style.height = 80 + "px";
  listDate.style.padding = 0 + "px";

  listDate.style.justifyContent = "space-around";
  listDate.style.fontSize = 24 + "px";
  listDate.style.textAlign = "center";

  let dateBreakPoint = new Date(
    year,
    month - 1,
    day,
    hour,
    minute,
    second,
    0 + 1
  );
  function showDate() {
    let currentDate = new Date();
    let day = Math.floor((dateBreakPoint - currentDate) / 3600000 / 24),
      hours = Math.floor((dateBreakPoint - currentDate) / 3600000) % 24,
      minutes = Math.floor((dateBreakPoint - currentDate) / 1000 / 60) % 60,
      seconds = Math.floor((dateBreakPoint - currentDate) / 1000) % 60;
    if (day < 10) {
      day = "0" + day;
    }

    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    document.querySelector(".li1").innerHTML = `  ${day} <br>day  `;
    document.querySelector(".li1").style.textAlign = "center";
    document.querySelector(".li2").innerHTML = `   ${hours}  <br>hours `;
    document.querySelector(".li2").style.textAlign = "center";
    document.querySelector(".li3").innerHTML = `   ${minutes}  <br>min `;
    document.querySelector(".li3").style.textAlign = "center";
    document.querySelector(".li4").innerHTML = `   ${seconds}  <br>seconds`;
    document.querySelector(".li4").style.textAlign = "center";
  }

  setInterval(showDate, 1000);
}
