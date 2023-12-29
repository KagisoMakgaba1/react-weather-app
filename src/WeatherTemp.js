import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherTemp.css";
export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="temp">
        <span className="icon">
          <WeatherIcon code={props.icon} size={82} />
        </span>
        <span className="main-temp">{Math.round(props.celsius)}</span>{" "}
        <sup class="active">℃</sup> <sup>|</sup>
        <sup>
          {" "}
          <a href="/" onClick={showFahrenheit}>
            ℉
          </a>
        </sup>
      </div>
    );
  } else {
    return (
      <div className="temp">
        <span className="icon">
          <WeatherIcon code={props.icon} size={82} />
        </span>
        <span className="main-temp">{Math.round(fahrenheit())}</span>{" "}
        <sup>
          {" "}
          <a href="/" onClick={showCelsius}>
            ℃
          </a>
        </sup>{" "}
        <sup>|</sup>
        <sup class="active"> ℉</sup>
      </div>
    );
  }
}
