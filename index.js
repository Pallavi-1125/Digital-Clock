function updateClock() {
  const now = new Date();

  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  const timeString = `${hours}:${minutes}:${seconds}`;
  document.getElementById('time').textContent = timeString;

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateString = now.toLocaleDateString(undefined, options);
  document.getElementById('date').textContent = dateString;
}

setInterval(updateClock, 1000);
updateClock(); 
