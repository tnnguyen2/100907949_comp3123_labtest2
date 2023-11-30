import React from 'react';
import '../css/weatherForecastStyles.css';

const WeatherForecast = ({forecastData}) => {
    const getDayOfWeek = (timestamp) => {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const date = new Date(timestamp * 1000);
        const dayOfWeek = date.getDay();
        return days[dayOfWeek];
    };

    const getWeatherIconUrl = (iconCode) => {
        return `https://openweathermap.org/img/wn/${iconCode}.png`;
    };

    return (

        <div className="forecast-container">
            <div className="forecast-detail-container">
                {forecastData.map((day, index) => (
                    <div key={index} className="forecast-card">
                        <img src={getWeatherIconUrl(day.weather[0].icon)} alt="Weather Icon"/>
                        <h4>{getDayOfWeek(day.dt)}</h4>
                        <p>{day.main.temp} °C</p>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default WeatherForecast;
