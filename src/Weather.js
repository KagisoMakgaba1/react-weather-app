import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import FormatDate from "./FormatDate";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [data, setData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data.dt * 1000);
    setData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      temp_max: response.data.main.temp_max,
      temp_min: response.data.main.temp_min,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiKey = "f606a147394d27601839ffd5343624ee";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (data.ready) {
    return (
      <div className="weather">
        <div className="row">
          <div className="col-8">
            <form className="mt-3" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-10">
                  <input
                    type="search"
                    placeholder="Enter city name.."
                    className="form-control"
                    id="search"
                    autoFocus="on"
                    onChange={handleCityChange}
                  />
                </div>
                <div className="col-2">
                  <button className="icon" type="submit">
                    <i className="fa-solid fa-search"></i>
                  </button>
                </div>
              </div>
            </form>
            <br />
            <h1>{data.city}</h1>
            <ul>
              <li>
                <FormatDate date={data.date} />
              </li>
            </ul>

            <div className="temp">
              <span className="icon">
                <WeatherIcon code={data.icon} size={82} />
              </span>
              <span className="main-temp">{Math.round(data.temperature)}</span>{" "}
              <sup>℃</sup> <sup>|</sup>
              <sup> ℉</sup>
            </div>
            <div className="description">{data.description}</div>
          </div>
          <div className="col-4 mt-5 info">
            <div className="more-info">Today's Weather Condition</div>
            <hr />
            <ul>
              <li>Humidity: {data.humidity}%</li>
              <hr />
              <li>Min Temperature: {Math.round(data.temp_min)}℃</li>
              <hr />
              <li>Max Temperature: {Math.round(data.temp_max)}℃</li>
              <hr />
              <li>Wind Speed: {Math.round(data.wind)} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading..";
  }
}
