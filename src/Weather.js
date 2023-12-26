import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="weather">
      <div className="row">
        <div className="col-8">
          <form className="mt-3">
            <div className="row">
              <div className="col-10">
                <input
                  type="search"
                  placeholder="Enter city name.."
                  className="form-control"
                />
              </div>
              <div className="col-2">
                <button type="submit" className="btn btn-secondary">
                  Search
                </button>
              </div>
            </div>
          </form>
          <br />
          <h1>Johannesburg</h1>
          <ul>
            <li>Tuesday 20:00</li>
          </ul>
          <div className="temp">
            <span className="main-temp">18</span> <sup>℃</sup> <sup>|</sup>
            <sup> ℉</sup>
          </div>
          <div className="description">Showers and Thundershowers</div>
        </div>
        <div className="col-4 mt-5 info">
          <div className="more-info">Today's Weather Condition</div>
          <hr />
          <ul>
            <li>Humidity: 85%</li>
            <hr />
            <li>Min Temperature: 17℃</li>
            <hr />
            <li>Max Temperature: 27℃</li>
            <hr />
            <li>Wind Speed: 9 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
