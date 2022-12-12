import React from "react";
import './weather.scss';

const Weather = (props) => {
    return (
        <div className="wrapper">
            {props.city &&
            <div className="positioning">
                <p>Temperatura: {props.temp}</p>
                <p>Feels like: {props.feelsLike}</p>
                <p>City: {props.city}</p>
                <p>Country: {props.country}</p>
                <p>Sunrise: {props.sunrise}</p>
                <p>Sunset: {props.sunset}</p>
            </div>}
            <p className="positioningError">{props.error}</p>
        </div>
    )
}

export default Weather;