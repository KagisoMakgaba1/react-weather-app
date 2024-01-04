import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css"

export default function WeatherForecast() {
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