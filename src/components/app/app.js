import React from "react";
import logo from "../../images/azure.svg";
import "../app/app.css";
import Navbar from "../globals/navbar";
import About from "../about/about";
import Projects from "../projects/project";
import Contact from "../contact/contact";
import Work from "../works/work";
function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Work />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
