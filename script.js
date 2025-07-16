const apiKey = "2dc33fb8dfe953018378bf88adae6a43"; // named "tanyagupta"

async function getWeather() {
const city = document.getElementById("cityInput").value;
if (!city) {
    alert("Please enter a city name.");
    return;
}

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.cod === "404") {
    document.getElementById("weatherInfo").innerHTML = "City not found!";
    return;
    }

    const weatherHTML = `
    <h2>${data.name}, ${data.sys.country}</h2>
    <p>🌡️ Temperature: ${data.main.temp} °C</p>
    <p>🌥️ Weather: ${data.weather[0].description}</p>
    <p>💧 Humidity: ${data.main.humidity}%</p>
    <p>💨 Wind Speed: ${data.wind.speed} m/s</p>
    `;
    document.getElementById("weatherInfo").innerHTML = weatherHTML;
} catch (err) {
    document.getElementById("weatherInfo").innerHTML = "Error fetching data.";
    console.error(err);
}
}
