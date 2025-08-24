// Select the container where the clock will be displayed
const container = document.getElementById('timer');
// (Alternative way) → const container = document.querySelector('#timer');

// setInterval runs the callback function repeatedly after a fixed delay (1000ms = 1s)
setInterval(function () {
    // Create a new Date object (gives current date & time)
    let date = new Date();

    // Convert the time into a readable string format (HH:MM:SS AM/PM)
    let time = date.toLocaleTimeString();

    // Update the container with the current time
    container.innerHTML = `<h1>${time}</h1>`;

    // (For debugging, you can also log time in console)
    // console.log(time);
}, 1000);
