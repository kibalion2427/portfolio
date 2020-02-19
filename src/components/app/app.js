import React from "react";
import logo from "../../images/azure.svg";
import "../app/app.css";
import Navbar from "../globals/navbar";
import About from "../about/about";
import Projects from "../projects/project";
import Contact from "../contact/contact";
import Work from "../works/work";
import Presentation from "../presentation/presentation";
const App = () => {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">
        <Presentation />
        <div className="main-container">
          <About />
          <Work />
          <Projects />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default App;
