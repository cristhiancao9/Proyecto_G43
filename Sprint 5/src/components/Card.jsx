import React from "react";
import "../components/Card.css";
import Clock from "./Time";
import { useEffect } from "react";
import { Link } from "react-router-dom";
export default function Card({
  min,
  max,
  name,
  img,
  onClose,
  wind,
  temp,
  weather,
  timeZone,
  id,
}) {
  useEffect(() => {
    document.body.style.background =
      "url('https://www.xtrafondos.com/wallpapers/resoluciones/15/el-mar-y-la-luna_1280x720_474.jpg') no-repeat center center fixed";
    document.body.style.backgroundSize = "cover";
  });
  return (
    <div className="principal">
      <div className="container">
        <div className="btnDiv">
          <button className="xBtn" onClick={onClose}>
            X
          </button>
        </div>
        <Link to={`/ciudad/${id}`}>
          <h1 className="espaciosMinMax">{name}</h1>
        </Link>

        <Clock timeZone={timeZone} />
        <div className="maxMin">
          <div>
            <h4>Min</h4>
            <h6 className="espaciosMinMax2">{min}ºC</h6>
            <h4>Wind</h4>
            <h6>{wind} m/s</h6>
          </div>
          <div>
            <h4>Max</h4>
            <h6 className="espaciosMinMax2">{max}ºC</h6>
            <h4 className="tempPro">{weather}</h4>
          </div>
          <div>
            <img
              className="tamañoImg"
              src={"https://openweathermap.org/img/wn/" + img + "@2x.png"}
              alt=""
            />
            <h2>{temp}ºC</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
