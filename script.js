async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const apiKey = 'ba5e2f01792c1d5187591c2a3efd082d'; // Sample key (may be restricted)
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
      document.getElementById('result').innerHTML = `
        <p><strong>${data.name}, ${data.sys.country}</strong></p>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
      `;
    } else {
      document.getElementById('result').innerText = 'City not found!';
    }
  } catch (error) {
    document.getElementById('result').innerText = 'Error fetching weather.';
  }
}
