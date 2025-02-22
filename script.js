// Function to update the countdown timers for each prayer and iqamah
function updatePrayerTimers() {
    const prayers = [
        { name: "Fajr", prayerTime: "05:00 AM", iqamahTime: "05:30 AM" },
        { name: "Dhuhr", prayerTime: "12:30 PM", iqamahTime: "01:00 PM" },
        { name: "Asr", prayerTime: "03:45 PM", iqamahTime: "04:00 PM" },
        { name: "Maghrib", prayerTime: "06:15 PM", iqamahTime: "06:30 PM" },
        { name: "Isha", prayerTime: "08:00 PM", iqamahTime: "08:30 PM" }
    ];

    prayers.forEach(prayer => {
        const prayerTime = new Date(`1970-01-01T${prayer.prayerTime}`);
        const iqamahTime = new Date(`1970-01-01T${prayer.iqamahTime}`);
        
        const now = new Date();

        // Calculate the time remaining for prayer and iqamah
        const prayerTimeDiff = prayerTime - now;
        const iqamahTimeDiff = iqamahTime - now;

        // Update the timer for prayer and iqamah
        document.getElementById(`${prayer.name.toLowerCase()}-timer`).textContent = `Time Left: ${formatTime(prayerTimeDiff)}`;
        document.getElementById(`${prayer.name.toLowerCase()}-iqamah-timer`).textContent = `Iqamah Left: ${formatTime(iqamahTimeDiff)}`;
    });
}

// Helper function to format the time in HH:MM:SS format
function formatTime(timeDiff) {
    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
}

// Helper function to add leading zeros to single digits
function padZero(num) {
    return num < 10 ? `0${num}` : num;
}

// Call the update function every second to keep the timer updated
setInterval(updatePrayerTimers, 1000);

// Initial call to display the countdowns when the page loads
updatePrayerTimers();
