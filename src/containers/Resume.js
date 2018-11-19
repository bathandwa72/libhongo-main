import React from "react";
import Navbar from "../components/Navbar";

const Resume = () => (
  <div className="resumeContainer">
    <Navbar />
    <div className="row">
      <div className="row">
        <div className="section-personal col-xs-12 col-sm-12 animated fadeInLeft slow">
          <h3>Personal Details:</h3>
          <hr />
          <p>
            Name: Libhongo Langa
            <br />
            Date of Birth: 07 February 1996
            <br />
            Location: Cape Town, South Africa
          </p>
          <p>
            Interests: FinTech, Capital Markets, Entrepreneurship, Innovation,
            Artificial Intelligence &amp; Blockchain.
          </p>
          <u>Work related skills:</u>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
          <u>Soft skills:</u>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </div>
        <div className="section-technical col-xs-12 col-sm-12 animated fadeInRight slow">
          <h3>Technical Skills:</h3>
          <hr />
          <h6>Competencies:</h6>
          <p>
            PSD to HTML; Product design to functional requirements; Working with
            JSON/XML data from RESTful APIs; Database design, architecture &amp;
            management.
          </p>
          <h6>Technologies:</h6>
          <p>
            HTML, CSS, JavaScript, SASS, Bootstrap, Materialize, Bulma, Angular,
            ReactJS, VueJS, Redux, MobX, Apollo, GraphQL, MySQL, PostgreSQL,
            MongoDB, NodeJS, ExpressJS, Python, Django, AWS, Firebase, Heroku,
            Git (version control).
          </p>
        </div>
      </div>
      <div className="row">
        <div className="section-education col-xs-12 col-sm-12 animated fadeInLeft slow">
          <h3>Education:</h3>
          <hr />
          <h5>Bachelor of Business Science</h5>
          <h6>University of Cape Town (2014-Present)</h6>
          <p>
            Specialising in Finance &amp; Accounting, courses taken include
            Financial Accounting, Financial Reporting, Management Accounting,
            Corporate Governance, Taxation, Economics, Corporate Financial
            Management, Busienss Statistics, Computational Mathematics,
            Management &amp; Information Systems.
          </p>
          <br />
          <h5>Full Stack Development</h5>
          <h6>LinkedIn Learning, FreeCodeCamp, Udemy etc.</h6>
          <ul>
            <li>Responsive Web Design</li>
            <li>Front End Libraries &amp; Frameworks</li>
            <li>State Management Tools</li>
            <li>Database Management Systems &amp; Tools</li>
            <li>Server Side Scripting &amp; Frameworks</li>
          </ul>
        </div>
        <div className="section-experience col-xs-12 col-sm-12 animated fadeInRight slow">
          <h3>Experience:</h3>
          <hr />
          <h5>Freelance Developer</h5>
          <h6>
            Nisa Finance, AirStudent, Synsource &amp; Upwork (2016-Present)
          </h6>
          <ul>
            <li>UI/UX Design</li>
            <li>End-to-end product design</li>
            <li>API design</li>
            <li>Third party API integration</li>
            <li>Testing &amp; Debugging</li>
          </ul>
          <h5>Intern Analyst</h5>
          <h6>Invictus Capital (Apr 2018 - Aug 2018)</h6>
          <ul>
            <li>Act as client liaison</li>
            <li>Conduct technical research</li>
            <li>Translate technical information for non-technical persons</li>
            <li>Perform company valuations</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Resume;
