function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(0, 2);
  const meridum = hours >= 12 ? "PM" : "AM";
  const min = now.getMinutes().toString().padStart(0, 2);
  const secs = now.getSeconds().toString().padStart(0, 2);
  const timeString = `${hours}:${min}:${secs}`;
  document.getElementById("clock").textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000);
