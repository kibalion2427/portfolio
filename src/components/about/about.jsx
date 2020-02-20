import React, { Component, useEffect, useRef, useState } from "react";
import Title from "../globals/title/title";
import "../about/about.css";
import { srConfig, autor } from "@config";
import sr from "@utils/sr";

// class About extends Component {
//   state = {
//     autor: "roger luje.",
//     sentence: "I build software solutions.",
//     textAbout: `I am a computer science engineer based in Ecuador,specializing
//                 in building (and occasionally designing) exceptional,
//                 high-quality websites and applications.`,
//     skills: [
//       "Python",
//       "Javascript (ES6+)",
//       "ASP NET Core",
//       "Java EE 8",
//       "React",
//       "HTML & (S)CSS"
//     ],
//     github: "https://github.com/kibalion2427"
//   };
//   render() {
const About = ({ data }) => {
  const { about } = data;
  // const { text } = aboutData.text;
  console.log("about", data);
  const revealContainer = useRef(null);
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);
  return (
    <section className="about-section" id="about" ref={revealContainer}>
      <h5>Hi, mi name is</h5>

      <div className="content-about">
        <div className="about-text">
          <Title text={autor} level="100" />
          <Title text={about.sentence} level="100" />
          <div>
            <p>{about.textAbout}</p>
          </div>
          <ul className="about-list">
            {about.skills.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        {/* <a href={this.state.github} className="about-img" /> */}
      </div>
    </section>
  );
};
// }

export default About;
