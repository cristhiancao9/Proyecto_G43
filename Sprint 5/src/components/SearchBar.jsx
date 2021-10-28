import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./SearchBar.css";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");
  let history = useHistory();
  function handlesubmit(e) {
    e.preventDefault();
    onSearch(city);
    setCity("");
    history.push("/cards");
  }
  return (
    <form
      onSubmit={(e) => {
        handlesubmit(e);
      }}
    >
      <input
        className="search"
        type="text"
        value={city}
        placeholder="Add City..."
        onChange={(e) => setCity(e.target.value)}
      />
      <input className="add" type="submit" value="+" />
      {/*       <Redirect from="/" to="/cards"></Redirect>; */}
    </form>
  );
}
