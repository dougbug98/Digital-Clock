// You can return and element with an id using the "getElementById" method

//If the hour is greater than 12, the new hour will be 13 -12 which is 1. Then change am to pm.

const hourEl = document.
    getElementById("hour")
const minuteEl = document.
    getElementById("minutes")
const secondEl = document.
    getElementById("seconds")
const ampmEl = document.
    getElementById("ampm");

function updateClock() {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"

    if (h > 12) {
        h = h - 12
        ampm = "PM"
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s

    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    ampmEl.innerText = ampm;
    setTimeout(() => {
        updateClock()
    }, 1000)
}

updateClock()

// This function updateClock() gets the current date and time using the Date() object. Then, it extracts the hour, minute, second, and millisecond values from the Date() object and sets them to the variables h, m, s, and ms, respectively.

// Next, it checks if the hour is greater than or equal to 12 to determine if it's morning or afternoon, and sets the ampm variable accordingly.

// It then applies some conditional statements and string manipulation to format the hour, minute, second, and millisecond values with leading zeros as needed, and assigns them to the corresponding HTML element using innerText.

// Finally, it sets a timeout function that will call updateClock() every millisecond to update the clock display in real-time.

// updateClock();

// This line of code simply calls the updateClock() function to start the clock.

// I hope this explanation helps!