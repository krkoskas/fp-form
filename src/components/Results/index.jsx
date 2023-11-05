import React from "react";

const Results = ({ firstname, lastname, email, linkedin, motivation, skills }) => {
  return (
    <div className="results_wrapper">
      {firstname}
      {lastname}
      {email}
      {linkedin}
      {motivation}
      {skills}
    </div>
  );
};

export default Results;