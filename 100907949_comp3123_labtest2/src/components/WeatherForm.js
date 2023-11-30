import React from 'react';
import '../css/weatherFormStyles.css';

const WeatherForm = ({ city, handleInputChange, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}  className="weather-form">
            <input
                type="text"
                placeholder="Enter city"
                value={city}
                onChange={handleInputChange}
                className="city-input"
            />
            <button type="submit"  className="search-button">Search</button>
        </form>
    );
};

export default WeatherForm;
