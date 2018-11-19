import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar navbar-expand-md navbar-light">
    <a className="navbar-brand">Libhongo Langa</a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#hamburgerMenu"
    >
      <span className="navbar-toggler-icon" />
    </button>

    <div
      className="collapse navbar-collapse justify-content-end"
      id="hamburgerMenu"
    >
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            HOME
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/portfolio">
            PORTFOLIO
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/resume">
            RESUME
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">
            CONTACT
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
