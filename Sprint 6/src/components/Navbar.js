import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
export const Navbar = () => {
  return (
    <nav className="container-principal-nav">
      <div className="container-secundario">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="title" to="/">
              Exercises
            </Link>
          </li>
          <li className="nav-item">
            <Link className="title" to="/create">
              Create Exercise
            </Link>
          </li>
          <li className="nav-item">
            <Link className="title" to="/user">
              Create User
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
