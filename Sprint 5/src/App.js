import React, { useState } from "react";
import Nav from "./components/Nav.jsx";
import "./App.css";
import Cards from "./components/Cards.jsx";
import { Switch, Route } from "react-router";
import "./components/style.css";
import Starts from "./components/Starts.jsx";
import Ciudad from "./components/Ciudad.jsx";
function App() {
  const apiKey = "4ae2636d8dfbdc3044bede63951a019b";
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  }
  function onSearch(ciudad) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: recurso.main.temp_min.toFixed(1),
            max: recurso.main.temp_max.toFixed(1),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp.toFixed(1),
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            timeZone: recurso.timezone,
            latitud: recurso.coord.lat.toFixed(1),
            longitud: recurso.coord.lon.toFixed(1),
          };
          let found = false;
          for (let i = 0; i < cities.length; i++) {
            if (cities[i].name === ciudad.name) {
              found = true;
              break;
            }
          }
          if (found) {
            alert("Selecciona otra ciudad");
          } else {
            setCities((oldCities) => [...oldCities, ciudad]);
          }
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  function onFilter(ciudadId) {
    console.log(ciudadId);
    let ciudad = cities.filter((c) => c.id === parseInt(ciudadId));
    if (ciudad.length > 0) {
      return ciudad[0];
    } else {
      return null;
    }
  }
  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Switch>
        <Route path="/cards">
          <Cards cities={cities} onClose={onClose} />
        </Route>
        <Route
          path="/ciudad/:ciudadId"
          render={({ match }) => (
            <Ciudad city={onFilter(match.params.ciudadId)} />
          )}
        />
      </Switch>
      <div>
        <Starts></Starts>
      </div>
    </div>
  );
}

export default App;
