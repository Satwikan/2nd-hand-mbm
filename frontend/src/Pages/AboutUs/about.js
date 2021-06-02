import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about-container">
      <figure className="snip1515">
        <div className="profile-image">
          <img src="jainSahab.jpeg" alt="Rajat Jain" />
        </div>
        <figcaption>
          <h3>Rajat Jain</h3>
          <h4>Founder</h4>
          <p>Coding enthusiast | WEB developer</p>
          <div className="icons">
            <a href="https://www.linkedin.com/in/rajat-jain-a9aa341a6/">
              <i className="ion-social-linkedin"></i>
            </a>
            <a href="https://github.com/Rajat-Jain29">
              {" "}
              <i className="ion-social-github"></i>
            </a>
          </div>
        </figcaption>
      </figure>
      <figure className="snip1515">
        <div className="profile-image">
          <img src="goyalBabu.jpeg" alt="Tanmay Goyal" />
        </div>
        <figcaption>
          <h3>Tanmay Goyal</h3>
          <h4></h4>
          <p>Web developer | Android developer | CC</p>
          <div className="icons">
            <a href="https://www.linkedin.com/in/tanmay-goyal-070b481a6/">
              <i className="ion-social-linkedin"></i>
            </a>
            <a href="https://github.com/tanmay12-sud0">
              {" "}
              <i className="ion-social-github"></i>
            </a>
          </div>
        </figcaption>
      </figure>
      <figure className="snip1515">
        <div className="profile-image">
          <img src="mathurSahab.jpeg" alt="Tanmay Mathur" />
        </div>
        <figcaption>
          <h3>Tanmay Mathur</h3>
          <h4>Public Relations</h4>
          <p>WEB developer | Open source contributor @ GSSOC'21 | CP. </p>
          <div className="icons">
            <a href="https://www.linkedin.com/in/tanmay-mathur-009/">
              <i className="ion-social-linkedin"></i>
            </a>
            <a href="https://github.com/RYzen-009">
              {" "}
              <i className="ion-social-github"></i>
            </a>
          </div>
        </figcaption>
      </figure>
      <figure className="snip1515">
        <div className="profile-image">
          <img src="LegendHimself.jpg" alt="sample47" />
        </div>
        <figcaption>
          <h3>Satwik Anmol</h3>
          <h4>Founder</h4>
          <p>CSE undergrad | Web developer | CC</p>
          <div className="icons">
            <a href="https://www.linkedin.com/in/satwik-anmol-1487a3191/">
              <i className="ion-social-linkedin"></i>
            </a>
            <a href="https://github.com/Satwikan">
              {" "}
              <i className="ion-social-github"></i>
            </a>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default About;
