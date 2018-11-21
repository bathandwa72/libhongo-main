import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="homeContainer">
    <Navbar />
    <span className="landingContent animated fadeIn slower">
      <h3 className="landingTitle">Libhongo Langa</h3>
      <h5 className="landingTitle">Full Stack Developer</h5>
      <span className="landingButtons">
        <button type="button" className="btn btn-primary">
          <Link to="/portfolio" className="buttons">
            View Portfolio
          </Link>
        </button>
        <button type="button" className="btn btn-primary">
          <Link to="/resume" className="buttons">
            View Resume
          </Link>
        </button>
      </span>
    </span>
  </div>
);

export default Home;
