import React, { Component } from "react";
import "../presentation/presentation.css";
import Title from "../components/globals/title/title";
import { autor } from "@config";

const Presentation = () => {
  return (
    <div className="parent">
      <div className="child">
        <header id="cc" className="presentation-content">
          {/* <Title text={autor} level="100" /> */}
          <h1 className="roger">Roger Luje v6</h1>
          <p className="p1">Computer Science Enginner, Comunity Manager, SEO</p>
        </header>
        {/* <p className="roger"></p> */}
      </div>
    </div>
    //   <section className="present">Presentation</section>
  );
};

export default Presentation;
