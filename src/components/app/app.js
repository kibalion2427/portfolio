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
// import { aboutData, workData } from "@data";

import output from "../../json/data.json";

const filterData = query => {
  return output.data.filter(
    item => item.id.toLowerCase().indexOf(query.toLowerCase()) > -1
  );
};

const aboutData = () => {
  return filterData("about");
};

const App = () => {
  // const [aboutData, setAboutData] = useState(aboutData);
  // const [adata, setAData] = useState(aboutData);
  // useEffect(() => {
  //   setAData(aboutData);
  // });

  // const [aboutData, setAboutData] = useState(data);
  console.log("app:", aboutData());

  return (
    <div className="layout">
      <GlobalStyle />
      <Navbar />
      <div className="content">
        <Presentation />
        <div className="main-container">
          {/* <About data={aboutData} /> */}
          {/* <Work data={workData} /> */}
          <Projects />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default App;
