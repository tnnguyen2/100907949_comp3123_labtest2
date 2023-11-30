import React, {useState} from 'react';
import './App.css';
import WeatherForm from './components/WeatherForm';
import WeatherInfo from './components/WeatherInfo';
import WeatherForecast from './components/WeatherForecast';
import axios from 'axios';

const API_KEY = 'f460da8c8be25992e4530be6a2f06c37';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const handleInputChange = (e) => {
    setCity(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (city.trim() !== '') {
      setLoading(true);
      try {
        const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
        setWeatherData(weatherResponse.data);

        const forecastResponse = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`);
        setForecastData(forecastResponse.data.list.filter((reading) => reading.dt_txt.includes('12:00:00')));

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    }
  };

  return (
      <div className="App">
        <h1>Weather Forecast</h1>
        <WeatherForm
            city={city}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
        />

        {loading && <p>Loading...</p>}
        {weatherData && <WeatherInfo weatherData={weatherData} />}
        {forecastData && <WeatherForecast forecastData={forecastData} />}

      </div>
  );
}

export default App;



