import React from "react";

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
        <p>First Name: {firstname}</p>
        <p>Last Name: {lastname}</p>
        <p>Email Address: {email}</p>
        <p>LinkedIn URL: {linkedin}</p>
        <p>Why do you want to become a part of the Femme Palette team? {motivation}</p>
        <p>Why are you the best candidate for this role? {skills}</p>
      </div>
    </div>
  );
};

export default Results;
