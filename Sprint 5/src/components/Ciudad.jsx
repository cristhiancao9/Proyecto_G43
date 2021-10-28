import React from "react";
import "./Ciudad.css";
import { useEffect } from "react";
export default function Ciudad({ city }) {
  useEffect(() => {
    document.body.style.background =
      "url('https://data.1freewallpapers.com/download/storm-waves-sea-moon-night-art-1680x1050.jpg')no-repeat center center fixed";
    document.body.style.backgroundSize = "cover";
  });
  return (
    <div className="ciudad">
      <div className="container2">
        <div className="principal-ciu">
          <h1 className="titulo">{city.name}</h1>
          <div className="img-clima">
            <img
              className="tamañoImg"
              src={"https://openweathermap.org/img/wn/" + city.img + "@2x.png"}
              alt=""
            />
          </div>
          <div className="principal-columnas">
            <div className="titulos">
              <h4>Viento </h4>
              <div className="temp">
                <h4>Temperatura </h4>
              </div>
              <div className="cant">
                <h4>Cantidad de Nubes </h4>
              </div>
              <div className="lat">
                <h4>Latitud</h4>
              </div>
              <div className="long">
                <h4>Longitud</h4>
              </div>
            </div>
            <div className="valores">
              <h4>{city.wind} </h4>
              <div className="temp">
                <h4>{city.temp} </h4>
              </div>
              <div className="cant">
                <h4>{city.clouds} </h4>
              </div>
              <div className="lat">
                <h4>{city.latitud}</h4>
              </div>
              <div className="long">
                <h4>{city.longitud}</h4>
              </div>
            </div>
            <div className="iconos">
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-wind"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#ffffff"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 8h8.5a2.5 2.5 0 1 0 -2.34 -3.24" />
                  <path d="M3 12h15.5a2.5 2.5 0 1 1 -2.34 3.24" />
                  <path d="M4 16h5.5a2.5 2.5 0 1 1 -2.34 3.24" />
                </svg>
              </p>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-temperature-celsius"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#ffffff"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx="6" cy="8" r="2" />
                  <path d="M20 9a3 3 0 0 0 -3 -3h-1a3 3 0 0 0 -3 3v6a3 3 0 0 0 3 3h1a3 3 0 0 0 3 -3" />
                </svg>
              </p>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-cloud"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#ffffff"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-12" />
                </svg>
              </p>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-location"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#ffffff"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5" />
                </svg>
              </p>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-ruler-2"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#ffffff"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M17 3l4 4l-14 14l-4 -4z" />
                  <path d="M16 7l-1.5 -1.5" />
                  <path d="M13 10l-1.5 -1.5" />
                  <path d="M10 13l-1.5 -1.5" />
                  <path d="M7 16l-1.5 -1.5" />
                </svg>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
