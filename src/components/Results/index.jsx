import React from "react";
import "./style.css"

const Results = ({
  firstname,
  lastname,
  email,
  linkedin,
  motivation,
  skills,
}) => {
  return (
    <div className="results_wrapper">
      <div className="results_bar"></div>
      <div className="results_status">
        <h2 className="results_heading">Thank you for your application!</h2>
        <div className="results_line">First Name: {firstname}</div>
        <div className="results_line">Last Name: {lastname}</div>
        <div className="results_line">Email Address: {email}</div>
        <div className="results_line">LinkedIn URL: {linkedin}</div>
        <div className="results_line">Why do you want to become a part of the Femme Palette team? <p>{motivation}</p></div>
        <div className="results_line">Why are you the best candidate for this role? <p>{skills}</p></div>
      </div>
    </div>
  );
};

export default Results;
