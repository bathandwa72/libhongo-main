import React from "react";
import Navbar from "../components/Navbar";

const Contact = () => (
  <div className="contactContainer">
    <Navbar />
    <form className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-12">
          <div className="form-group">
            <label for="name">Name:</label>
            <input
              className="form-control"
              id="name"
              type="text"
              placeholder="Enter your name"
            />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12">
          <div className="form-group">
            <label for="emailAd">Email Address:</label>
            <input
              className="form-control"
              id="emailAd"
              type="email"
              placeholder="someone@example.com"
            />
          </div>
        </div>
      </div>
      <div className="col-xs-12 col-sm-12">
        <div className="form-group">
          <label for="message">Message:</label>
          <textarea
            className="form-control"
            id="message"
            type="text"
            placeholder="Type your message here"
            rows="5"
          />
        </div>
        <button className="btn btn-outline-primary" type="submit">
          Send message
        </button>
      </div>
    </form>
  </div>
);

export default Contact;
