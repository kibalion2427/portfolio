import React, { useState, useEffect } from "react";
import logo from "../../images/azure.svg";
import "../app/app.css";
import Navbar from "../globals/navbar";
import About from "../about/about";
import Projects from "../projects/project";
import Contact from "../contact/contact";
import Work from "../works/work";
import Presentation from "../presentation/presentation";
import { GlobalStyle, theme } from "@styles";
import { aboutData, workData } from "@data";
const App = () => {
  // const [aboutData, setAboutData] = useState(aboutData);
  // const [adata, setAData] = useState(aboutData);
  // useEffect(() => {
  //   setAData(aboutData);
  // });

  return (
    <div className="layout">
      <GlobalStyle />
      <Navbar />
      <div className="content">
        <Presentation />
        <div className="main-container">
          <About data={aboutData} />
          <Work data={workData} />
          <Projects />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default App;
