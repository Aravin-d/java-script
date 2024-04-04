const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let isRunning = false;
let elapsedTime = 0;

function start() {
  if (!isRunning) {
    startTime = Date.now();
    timer = setInterval(update, 10);
    isRunning = true;
  }
}

function stop() {
  stoptime = Date.now() - startTime;
  if(isRunning){
    clearInterval(timer);
    elapsedTime = Date.now() - startTime;
    isRunning = false;
  }
}

function reset() {
  clearInterval(timer);
  startTime = 0;
  isRunning = false;
  elapsedTime = 0;
  display.textContent = "00:00:00:00";
}


function update() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;

  let hours = Math.floor( elapsedTime / (1000 *60 * 60));
  let mins = Math.floor( elapsedTime / (1000 * 60) % 60);
  let secs = Math.floor( elapsedTime / 1000 % 60);
  let mili = Math.floor( elapsedTime % 1000 / 10);

  hours = String(hours).padStart(2, "0");
  mins = String(mins).padStart(2, "0");
  mili = String(mili).padStart(2, "0");
  secs = String(secs).padStart(2, "0");

  display.textContent = `${hours}:${mins}:${secs}:${mili}`
}
