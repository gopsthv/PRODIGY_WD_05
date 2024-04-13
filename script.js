function getWeather() {
  const location = document.getElementById('location-input').value;
  const apiKey = 'YOUR_API_KEY'; // Replace 'YOUR_API_KEY' with your actual API key
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const weatherCondition = data.weather[0].main;
      const temperature = data.main.temp;
      const humidity = data.main.humidity;
      const windSpeed = data.wind.speed;

      const weatherInfo = `Condition: ${weatherCondition}<br>Temperature: ${temperature}°C<br>Humidity: ${humidity}%<br>Wind Speed: ${windSpeed} m/s`;

      document.getElementById('weather-info').innerHTML = weatherInfo;
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
      document.getElementById('weather-info').innerText = 'Error fetching weather data. Please try again.';
    });
}


