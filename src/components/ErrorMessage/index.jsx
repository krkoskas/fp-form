import React from "react";
import "./style.css";

const ErrorMessage = ({ lastname, email, invalidemail }) => {
  return (
    <div className="error_wrapper">
      <div className="error_bar"></div>
        <div className="error_status">
          {lastname ? (
            <p className="error_message">Please enter your surname.</p>
          ) : null}
          {email ? (
            <p className="error_message">Please enter your email.</p>
          ) : null}
          {invalidemail ? (
            <p className="error_message">Please enter a valid email.</p>
          ) : null}
        </div>

    </div>
  );
};

export default ErrorMessage;
