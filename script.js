const audio = document.getElementById("audio");

const playBtn = document.getElementById("play");

const prevBtn = document.getElementById("prev");

const nextBtn = document.getElementById("next");

const progress = document.getElementById("progress");

const progressContainer = document.getElementById("progress-container");

const volume = document.getElementById("volume");

const currentTime = document.getElementById("current-time");

const duration = document.getElementById("duration");

let isPlaying = false;

// Play Music

playBtn.addEventListener("click", () => {

  if(isPlaying){

    audio.pause();

    playBtn.innerHTML =
      '<i class="fa-solid fa-play"></i>';

    isPlaying = false;

  }

  else{

    audio.play();

    playBtn.innerHTML =
      '<i class="fa-solid fa-pause"></i>';

    isPlaying = true;

  }

});

// Update Progress Bar

audio.addEventListener("timeupdate", () => {

  const progressPercent =
    (audio.currentTime / audio.duration) * 100;

  progress.style.width = `${progressPercent}%`;

  // Current Time

  let currentMinutes =
    Math.floor(audio.currentTime / 60);

  let currentSeconds =
    Math.floor(audio.currentTime % 60);

  if(currentSeconds < 10){
    currentSeconds = `0${currentSeconds}`;
  }

  currentTime.textContent =
    `${currentMinutes}:${currentSeconds}`;

  // Duration

  let durationMinutes =
    Math.floor(audio.duration / 60);

  let durationSeconds =
    Math.floor(audio.duration % 60);

  if(durationSeconds < 10){
    durationSeconds = `0${durationSeconds}`;
  }

  duration.textContent =
    `${durationMinutes}:${durationSeconds}`;

});

// Click Progress Bar

progressContainer.addEventListener("click", (e) => {

  const width = progressContainer.clientWidth;

  const clickX = e.offsetX;

  const duration = audio.duration;

  audio.currentTime =
    (clickX / width) * duration;

});

// Volume Control

volume.addEventListener("input", () => {

  audio.volume = volume.value;

});

// Dummy Next & Previous

nextBtn.addEventListener("click", () => {

  alert("Next Song");

});

prevBtn.addEventListener("click", () => {

  alert("Previous Song");

});

// Autoplay

audio.addEventListener("ended", () => {

  audio.play();

});