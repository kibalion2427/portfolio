import React, { Component } from "react";
import Title from "../globals/title";

class About extends Component {
  state = {};
  render() {
    return (
      <div className="about-section" id="about">
        <h5>Hi, mi name is</h5>

        <div className="content-about">
          <div className="about-text">
            <Title title="roger luje" />

            <h2 className="">I build web solutions</h2>
            <div>
              <p>
                I am a computer science engineer based in Ecuador,specializing
                in building (and occasionally designing) exceptional,
                high-quality websites and applications.
              </p>
            </div>
            <ul className="about-list">
              <li>Python</li>
              <li>Javascript (ES6+)</li>
              <li>ASP NET Core</li>
              <li>Java EE 8</li>
              <li>Kubernets</li>
              <li>SQL Server</li>
              <li>HTML & (S)CSS</li>
              <li>React</li>
              <li>Node.js</li>
            </ul>
          </div>

          <a href="https://github.com" className="about-img" />
        </div>
      </div>
      // </div>
    );
  }
}

export default About;
