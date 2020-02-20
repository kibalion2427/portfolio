import React, { useState, useEffect } from "react";
import logo from "../../images/azure.svg";
import "../app/app.css";
import Navbar from "../globals/navbar";
import About from "../about/about";
import Projects from "../projects/project";
import Contact from "../contact/contact";
import Work from "../works/work";
import Presentation from "../presentation/presentation";
import aboutData from "../../data/aboutData.js";

const App = () => {
  const [adata, setAData] = useState(aboutData);
  console.log("app1", adata);
  useEffect(() => {
    setAData(aboutData);
    console.log("app", adata);
  });

  return (
    <div className="layout">
      <Navbar />
      <div className="content">
        <Presentation />
        <div className="main-container">
          <About data={aboutData} />
          <About data={aboutData} />
          <Work />
          <Projects />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default App;
