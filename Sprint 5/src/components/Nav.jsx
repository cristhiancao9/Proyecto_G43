import SearchBar from "./SearchBar";
import "./Nav.css";
import React from "react";
function Nav({ onSearch }) {
  return (
    <nav className="espacios">
      <SearchBar onSearch={onSearch} />
    </nav>
  );
}
export default Nav;
