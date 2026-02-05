const btn = document.getElementById("btn");
const div = document.getElementById("weatherData");

const fetchWeatherData = async () => {
  const apiKey = 'YOUR_API_KEY'; 
  const city = 'London';
  
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}`);
  
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  
  const data = await res.json();
  return data;
};

const getWeatherData = () => {
  fetchWeatherData()
    .then((data) => {
      // Extract weather condition
      const weather = data.weather[0].main;
      div.innerHTML = `Current weather in London: ${weather}`;
    })
    .catch((e) => {
      console.log(e);
      div.innerHTML = "Failed to fetch weather data";
    });
};

btn.addEventListener("click", getWeatherData);