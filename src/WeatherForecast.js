import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {

    function handleResponse(response) {
        console.log(response.data);
    }

    let apiKey = "8d9838178b5b401f1b4e7cb5af18e210";
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="ForecastDay mb-2">Thu</div>
            <WeatherIcon code="10n" size={36} />
            <div className="ForecastTemp">
              <span className="ForecastTemp-max">19° </span>
              <span className="ForecastTemp-min">7°</span>
            </div>
          </div>
        </div>
      </div>
    );
}