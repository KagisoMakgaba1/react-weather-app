import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
  console.log(props.data);

  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }

  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    
      <div className="row">
        <div className="col">
          <div className="mb-2">{day()}</div>
          <WeatherIcon code={props.data.weather[0].icon} size={36} />
          <div className="ForecastTemp">
            <span className="ForecastTemp-max">{maxTemp()}° </span>
            <span className="ForecastTemp-min">{minTemp()}°</span>
          </div>
        </div>
      </div>
   
  );
}
