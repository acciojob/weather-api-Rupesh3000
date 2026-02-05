//your JS code here. If required.
const btn = document.getElementById("btn");
const div = document.getElementById("weatherData");

const fetchWeatherData = async () => {
  // Mock data since no API key provided
  const mockData = {
    weather: [{ main: "Clouds" }],
    name: "London"
  };
  
  // Return mock data with delay to simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData);
    }, 500);
  });
};

const getWeatherData = () => {
  fetchWeatherData()
    .then((data) => {
      const weather = data.weather[0].main;
      div.innerHTML = `Current weather in London: ${weather}`;
    })
    .catch((e) => {
      console.log(e);
      div.innerHTML = "Failed to fetch weather data";
    });
};

btn.addEventListener("click", getWeatherData);