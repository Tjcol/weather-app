document.getElementById('getWeather').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    if (city) {
        fetchWeatherData(city);
    } else {
        alert('Please enter a city');
    }
});

async function fetchWeatherData(city) {
    const apiKey = '6ca125f89d49d8';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        displayWeatherData(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        alert('Error fetching weather data. Please try again.');
    }
}

function displayWeatherData(data) {
    document.getElementById('location').textContent = `Location: ${data.name}, ${data.sys.country}`;
    document.getElementById('temperature').textContent = `Temperature: ${data.main.temp} °C`;
    document.getElementById('description').textContent = `Weather: ${data.weather[0].description}`;
}
