import React from 'react';
import {capitalizeFirstLetter} from "./stringUtils";
import '../css/weatherInfoStyles.css';

const WeatherInfo = ({weatherData}) => {
    if (!weatherData || !weatherData.main || !weatherData.weather || weatherData.weather.length === 0) {
        return null;
    }

    const getDayOfWeek = (timestamp) => {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const date = new Date(timestamp * 1000);
        const dayOfWeek = date.getDay();
        return days[dayOfWeek];
    };

    const {name, main, weather, wind, clouds, dt} = weatherData;

    const date = new Date(dt * 1000);
    const month = date.toLocaleString('default', {month: 'long'});
    const dayNumber = date.getDate()

    const getWeatherIconUrl = (iconCode) => {
        return `https://openweathermap.org/img/wn/${iconCode}.png`;
    };

    return (
        <div className="weather-container">
            <div className="weather-info-container">
                <h2>{getDayOfWeek(dt)}</h2>
                <img src={getWeatherIconUrl(weather[0].icon)} alt="Weather Icon"/>
                <h4>{`${month} ${dayNumber}, ${date.getFullYear()}`}</h4>
                <h4>{name}</h4>
                <p> {main.temp} °C</p>
                <p>{capitalizeFirstLetter(weather[0].description)}</p>
            </div>
            <div className="weather-details-container">
                <div className="detail-item">
                    <span className="detail-label">MIN TEMP:</span>
                    <span className="detail-data">{main.temp_min} °C</span>
                </div>
                <div className="detail-item">
                    <span className="detail-label">MAX TEMP:</span>
                    <span className="detail-data">{main.temp_max} °C</span>
                </div>
                <div className="detail-item">
                    <span className="detail-label">HUMIDITY:</span>
                    <span className="detail-data">{main.humidity}%</span>
                </div>
                <div className="detail-item">
                    <span className="detail-label">WIND SPEED:</span>
                    <span className="detail-data">{wind.speed} km/h</span>
                </div>
                <div className="detail-item">
                    <span className="detail-label">PREDICTABILITY:</span>
                    <span className="detail-data">{clouds.all}%</span>
                </div>
            </div>
        </div>
    );
};

export default WeatherInfo;
