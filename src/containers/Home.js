import React from "react";
import Navbar from "../components/Navbar";

const Home = () => (
  <div className="homeContainer">
    <Navbar />
    <span className="landingContent">
      <h3>Libhongo Langa</h3>
      <h5>Full Stack Developer</h5>
      <span className="landingButtons">
        <button type="button" className="btn btn-primary">
          View Portfolio
        </button>
        <button type="button" className="btn btn-primary">
          View Resume
        </button>
      </span>
    </span>
  </div>
);

export default Home;
