// получаем все элементы
let videoEl = document.getElementsByTagName("video")[0],
  playBtn = document.getElementById("playBtn"),
  vidControls = document.getElementById("controls"),
  volumeControl = document.getElementById("volume"),
  volumeImg = document.querySelector(".volume-block img"),
  timePicker = document.getElementById("timer"),
  timeInput = document.querySelector(".timeline input"),
  nextArrow = document.querySelector(".arrow.next"),
  prevArrow = document.querySelector(".arrow.prev"),
  speedEl = document.querySelector("#speed");

timeInput.addEventListener("input", (e) => {
  videoEl.currentTime = Math.floor(+timeInput.value);
  console.log(videoEl.currentTime, +timeInput.value);
});

videoEl.addEventListener(
  "loadeddata",
  function () {
    timeInput.min = 0;
    timeInput.max = Math.floor(videoEl.duration);
    videoEl.volume = volumeControl.value;
  },
  false
);

playBtn.addEventListener(
  "click",
  function () {
    if (videoEl.paused) {
      videoEl.play();
    } else {
      videoEl.pause();
    }
  },
  false
);

videoEl.addEventListener(
  "play",
  function () {
    playBtn.src = "images/pause.png";
  },
  false
);

videoEl.addEventListener(
  "pause",
  function () {
    playBtn.src = "images/play.png";
  },
  false
);

volumeControl.addEventListener(
  "input",
  function () {
    videoEl.volume = volumeControl.value;
  },
  false
);

volumeImg.addEventListener("click", () => {
  if (videoEl.muted) {
    videoEl.muted = false;
    volumeImg.src = "images/volume.png";
  } else {
    videoEl.muted = true;
    volumeImg.src = "images/noVolume.png";
  }
});

videoEl.addEventListener("timeupdate", () => {
  timePicker.innerHTML = secondsToTime(videoEl.currentTime);
  timeInput.value = videoEl.currentTime;
});

nextArrow.addEventListener("click", () => {
  videoEl.currentTime += 10;
});

prevArrow.addEventListener("click", () => {
  videoEl.currentTime -= 10;
});

speedEl.addEventListener("change", () => {
  videoEl.playbackRate = speedEl.value;
});

// рассчет отображаемого времени
function secondsToTime(time) {
  var h = Math.floor(time / (60 * 60)),
    dm = time % (60 * 60),
    m = Math.floor(dm / 60),
    ds = dm % 60,
    s = Math.ceil(ds);
  if (s === 60) {
    s = 0;
    m = m + 1;
  }
  if (s < 10) {
    s = "0" + s;
  }
  if (m === 60) {
    m = 0;
    h = h + 1;
  }
  if (m < 10) {
    m = "0" + m;
  }
  if (h === 0) {
    fulltime = m + ":" + s;
  } else {
    fulltime = h + ":" + m + ":" + s;
  }
  return fulltime;
}

const subtitles = [
  { time: 7, text: "Смотрят сосны сверху строго", delay: 2 },
  { time: 10, text: "Под ногами даль и ширь", delay: 3 },
  { time: 13, text: "А у нас лежит дорога", delay: 3 },
  { time: 16, text: "Прямиком в Сибирь", delay: 2 },
  { time: 18, text: "Эх! Если ноги не сотрутся", delay: 2 },
  { time: 21, text: "И не заржавеет мост", delay: 2 },
  { time: 25, text: "Мы дойдем", delay: 2 },
  { time: 28, text: "Доплывем доползем", delay: 2 },
  { time: 30, text: "До тебя город Омск,", delay: 2 },
  { time: 33, text: "город Омск, город Омск", delay: 2 },
  { time: 40, text: "Кто-то пьет компот из рога", delay: 2 },
  { time: 43, text: " Кто-то в чай кладет имбирь", delay: 2 },
  { time: 46, text: "Но а нас влекла дорога", delay: 2 },
  { time: 49, text: "Прямиком в Сибирь", delay: 2 },
  { time: 52, text: "Если ноги не сотрутся", delay: 3 },
  { time: 55, text: "И не заржавеет мост", delay: 3 },
  { time: 58, text: "Мы дойдем", delay: 2 },
  { time: 59, text: "Доплывем доползем", delay: 2 },
  { time: 63, text: "До тебя город Омск,", delay: 2 },
  { time: 65, text: "город Омск, город Омск", delay: 2 },
  { time: 70, text: "До тебя город Омск,", delay: 2 },
  { time: 71, text: "город Омск, город Омск", delay: 2 },
  { time: 74, text: "До тебя город Омск,", delay: 2 },
  { time: 78, text: "город Омск, город Омск", delay: 2 },
  { time: 80, text: "Омск", delay: 6 },
  { time: 111, text: "Пусть осталось сил не много,", delay: 3 },
  { time: 115, text: "Это, братцы, не беда", delay: 2 },
  { time: 118, text: "Лишь бы вывела дорога", delay: 2 },
  { time: 120, text: "Сами знаете куда", delay: 2 },
  { time: 123, text: "Если ноги не сотрутся", delay: 2 },
  { time: 125, text: "И не заржавеет мост", delay: 2 },
  { time: 128, text: "Мы дойдем", delay: 2 },
  { time: 131, text: "Доплывем доползем", delay: 2 },
  { time: 135, text: "До тебя город Омск,", delay: 2 },
  { time: 137, text: "город Омск, город Омск", delay: 2 },
  { time: 145, text: "Если ноги не сотрутся", delay: 2 },
  { time: 147, text: "И не заржавеет мост", delay: 2 },
  { time: 149, text: "Мы дойдем", delay: 2 },
  { time: 151, text: "Доплывем доползем", delay: 2 },
  { time: 148, text: "До тебя город Омск,", delay: 2 },
  { time: 150, text: "город Омск, город Омск", delay: 2 },
  { time: 156, text: "До тебя город Омск,", delay: 2 },
  { time: 158, text: "город Омск, город Омск", delay: 2 },
  { time: 162, text: "До тебя город Омск,", delay: 2 },
  { time: 164, text: "город Омск, город Омск", delay: 2 },
  { time: 166, text: "До тебя город Омск,", delay: 2 },
  { time: 168, text: "город Омск, город Омск", delay: 2 },
  { time: 170, text: "Омск", delay: 6 },
];

videoEl.addEventListener("timeupdate", () => {
  const currentTime = Math.floor(videoEl.currentTime);
  const subtitle = subtitles.find(
    (sub) => sub.time <= currentTime && sub.time + sub.delay > currentTime
  );
  if (subtitle) {
    document.getElementById("subtitles").textContent = subtitle.text;
  } else {
    document.getElementById("subtitles").textContent = "";
  }
});
