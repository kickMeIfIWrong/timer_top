const btn3 = document.querySelector("#button_reset"),
  clock = document.querySelector(".clock"),
  minutes = document.querySelector("#minutes");

const startPauseBtn = document.querySelector("#test_btn"),
  testBtnMin = document.getElementById("test_btn_min"),
  testBtnPlus = document.getElementById("test_btn_plus");
//message = document.querySelector("#message"),
let completedTimer = true;
let valueMin = 20,
  valueSec = 0;
let timer;

const timerOut = () => {
  let tempSec, tempMin;

  tempSec = valueSec < 10 ? "0" + valueSec : valueSec;
  tempMin = valueMin < 10 ? "0" + valueMin : valueMin;
  clock.innerHTML =
    valueMin === 0 && valueSec === 0 ? `Конец` : `${tempMin}:${tempSec}`;
};

timerOut();

startPauseBtn.onclick = () => startPause();
// message.onclick = () => alertprompt();
btn3.onclick = () => resetInterval();

minutes.innerHTML = `${valueMin} min`;

testBtnMin.onclick = () => {
  if (valueMin > 0) {
    valueMin--;
    timerOut();
    minutes.innerHTML = `${valueMin} min`;
  }
};

testBtnPlus.onclick = () => {
  valueMin++;
  timerOut();
  minutes.innerHTML = `${valueMin} min`;
};

const start = () => {
  if (valueMin > 0 && valueSec >= 0) {
    timer = setInterval(startInterval, 10);
  }
};

const startInterval = () => {
  valueSec--;
  if (valueMin === 0 && valueSec === 0) {
    clearInterval(timer);
  }
  if (valueSec <= 0 && valueMin > 0) {
    valueSec = 59;
    valueMin--;
  }
  timerOut();
};

const stopInterval = () => {
  clearInterval(timer);
};

const resetInterval = () => {
  valueMin = 20;
  valueSec = 0;
  clearInterval(timer);
  timerOut();
};

const alertprompt = () => {
  valueMin = +prompt("Задайте количество минут:", `${valueMin}`);
  timerOut();
};

const startPause = () => {
  if (completedTimer) {
    completedTimer = false;
    startPauseBtn.innerHTML = `<span class="icon-stop"></span> pause`;
    start();
  } else {
    completedTimer = true;
    stopInterval();
    startPauseBtn.innerHTML = `<span class="icon-play"></span> start`;
  }
};
