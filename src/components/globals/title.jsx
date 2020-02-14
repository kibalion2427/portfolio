import React, { Component } from "react";

const Title = ({ title }) => {
  return (
    <div className="row">
      <div className="col mb-3">
        <h1 className="display-4 text-capitalize dont-weight-bold">{title}</h1>
      </div>
    </div>
  );
};

export default Title;
