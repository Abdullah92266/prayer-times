// Prayer times for the day in HH:MM format
const prayerTimes = {
    fajr: "05:00",
    dhuhr: "12:30",
    asr: "16:00",
    maghrib: "18:45",
    isha: "20:30"
};

// Iqamah times for each prayer in HH:MM format (replace with actual iqamah times)
const iqamahTimes = {
    fajr: "05:30",
    dhuhr: "13:00",
    asr: "16:30",
    maghrib: "19:00",
    isha: "21:00"
};

// Function to calculate time left until next prayer or iqamah
function timeLeft(prayerTime) {
    const now = new Date();
    const [hours, minutes] = prayerTime.split(':');
    const prayerDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes);
    
    // If prayer time is already passed for today, set it to the next day
    if (prayerDate < now) {
        prayerDate.setDate(prayerDate.getDate() + 1);
    }

    const diff = prayerDate - now;
    const hoursLeft = Math.floor(diff / 1000 / 60 / 60);
    const minutesLeft = Math.floor((diff / 1000 / 60) % 60);
    const secondsLeft = Math.floor((diff / 1000) % 60);
    
    return `${hoursLeft}:${minutesLeft}:${secondsLeft}`;
}

// Update the countdown for next prayer and iqamah
function updateCountdowns() {
    document.getElementById('fajr-time').innerText = timeLeft(prayerTimes.fajr);
    document.getElementById('fajr-iqamah').innerText = timeLeft(iqamahTimes.fajr);
    document.getElementById('dhuhr-time').innerText = timeLeft(prayerTimes.dhuhr);
    document.getElementById('dhuhr-iqamah').innerText = timeLeft(iqamahTimes.dhuhr);
    document.getElementById('asr-time').innerText = timeLeft(prayerTimes.asr);
    document.getElementById('asr-iqamah').innerText = timeLeft(iqamahTimes.asr);
    document.getElementById('maghrib-time').innerText = timeLeft(prayerTimes.maghrib);
    document.getElementById('maghrib-iqamah').innerText = timeLeft(iqamahTimes.maghrib);
    document.getElementById('isha-time').innerText = timeLeft(prayerTimes.isha);
    document.getElementById('isha-iqamah').innerText = timeLeft(iqamahTimes.isha);
}

// Update every second
setInterval(updateCountdowns, 1000);
