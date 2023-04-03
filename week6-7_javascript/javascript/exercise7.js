function updateTime() {
  var date = new Date();
  var timeElement = document.getElementById("time");
  var hours = date.getHours().toString().padStart(2, "0"); // format hours with leading zero if necessary
  var minutes = date.getMinutes().toString().padStart(2, "0"); // format minutes with leading zero if necessary
  timeElement.textContent = hours + ":" + minutes; // set the element textContent to the formatted time
}

// call updateTime every second to keep the time up-to-date
setInterval(updateTime, 1000);
