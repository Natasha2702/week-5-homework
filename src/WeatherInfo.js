import React from "react";
import Date from "./Date";
import WeatherIcons from "./WeatherIcons";
import "./WeatherInfo.css";

export default function WeatherContent(props) {
  return (
    <div className="WeatherContent d-flex">
      <div className="weatherData">
        <div className="row">
          <div className="temperature-container d-flex justify-content-start">
            <div className="col mt-3 mb-0">
              <WeatherIcons code={props.data.icon} size={50} />
              <span className="temperature">
                {Math.round(props.data.temperature)}
              </span>
              <span className="unit">°C</span>
            </div>
          </div>

          <div className="col mt-3">
            <h1>{props.data.city}</h1>
          </div>

          <div className="col">
            <ul>
              <li>
                <Date date={props.data.date} />, {props.data.description}
              </li>
              <li>
                Humidity: <strong>{props.data.humidity}%</strong>
              </li>
              <li>
                Wind: <strong>{props.data.wind}km/h</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
