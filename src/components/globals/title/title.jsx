import React, { Component } from "react";
import "../title/title.css";

const Title = ({ text, level }) => {
  return (
    // style={{ fontSize: level + "%" }}
    <h1 className="title">{text}</h1>
  );
};

export default Title;
