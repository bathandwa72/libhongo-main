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
          <div className="row">
            <div className="col-md-5 col-lg-6">
              <p>
                <u>Basic Details:</u>
                <br />
                Name: Libhongo Langa
                <br />
                Date of Birth: 07 February 1996
                <br />
                Nationality: South African
                <br />
                Location: Cape Town, South Africa
                <br />
                Willing to relocate: Yes
              </p>
              <p>
                <u>Contact Details:</u>
                <br />
                Email: libhongolanga@gmail.com
                <br />
                Github: Code snippets available on request
                <br />
                LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/libhongo-langa-318b81120/"
                  target="_blank"
                >
                  Libhongo Langa
                </a>
              </p>
            </div>
            <div className="col-md-7 col-lg-6">
              <p>
                <u>Personal &amp; Work-Related Skills:</u>
              </p>
              <ul>
                <li>Exceptional written and verbal communication skills</li>
                <li>Excellent analytical approach problem solving</li>
                <li>Able to work both individually and in a team</li>
                <li>Meticulous attention to detail</li>
                <li>
                  Capable of learning new technologies quickly as and when
                  required to
                </li>
                <li>Blossoms in high pressure environments</li>
                <li>Highly adaptable to change</li>
              </ul>
              <p>
                <u>Interests:</u>
                <br />
                FinTech, Capital Markets, Entrepreneurship, Innovation,
                Artificial Intelligence &amp; Blockchain.
              </p>
            </div>
          </div>
        </div>
        <div className="section-technical col-xs-12 col-sm-12 animated fadeInRight slow">
          <h3>Technical Skills:</h3>
          <hr />
          <h6>
            <u>Competencies:</u>
          </h6>
          <p>
            PSD to HTML; Mobile-first responsive design; Product design to
            functional requirements; Working with JSON/XML data from RESTful
            APIs; Database design, architecture &amp; management.
          </p>
          <h6>
            <u>Technologies:</u>
          </h6>
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
          <div className="row">
            <div className="col-xs-12 col-lg-6">
              <h5>Bachelor of Business Science</h5>
              <h6>University of Cape Town (2014-Present)</h6>
              <p>
                Specialising in Finance &amp; Accounting, courses taken include:
              </p>
              <ul>
                <li>
                  Financial Accounting, Financial Reporting, Management
                  Accounting &amp; Taxation
                </li>
                <li>
                  Corporate Governance, Financial Management &amp; Economics
                </li>
                <li>Computational Mathematics &amp; Business Statistics</li>
                <li>Information Systems &amp; Management</li>
              </ul>
            </div>
            <div className="col-xs-12 col-lg-6">
              <h5>Full Stack Development</h5>
              <h6>
                LinkedIn Learning, FreeCodeCamp, Udemy etc. (2016-Present)
              </h6>
              <ul>
                <li>Responsive Web Design</li>
                <li>Front End Libraries &amp; Frameworks</li>
                <li>State Management Tools</li>
                <li>Database Management Systems &amp; Tools</li>
                <li>Server Side Scripting &amp; Frameworks</li>
                <li>Data Structures &amp; Algorithms</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="section-experience col-xs-12 col-sm-12 animated fadeInRight slow">
          <h3>Experience:</h3>
          <hr />
          <div className="row">
            <div className="col-md-6">
              <h5>Freelance Developer</h5>
              <h6>
                Nisa Finance, AirStudent, Synsource &amp; Upwork (2016-Present)
              </h6>
              <ul>
                <li>UI/UX Design</li>
                <li>End-to-end product design</li>
                <li>API design &amp; maintainence</li>
                <li>Third party API integration</li>
                <li>A/B Testing</li>
                <li>Debugging</li>
                <li>General business consulting</li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-5">
              <h5>Intern Analyst</h5>
              <h6>Invictus Capital (Apr 2018 - Aug 2018)</h6>
              <ul>
                <li>Act as client liaison</li>
                <li>Conduct technical research &amp; report drafting</li>
                <li>
                  Translate technical information for non-technical persons
                </li>
                <li>Perform valuations and provide recommendations</li>
                <li>Perpetually stay abreast of market trends</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Resume;
