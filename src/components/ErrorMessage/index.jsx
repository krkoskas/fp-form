import React from "react";

const ErrorMessage = ({lastname, email, invalidemail}) => {

    return (
        <div className="error_wrapper">
            {lastname ? <p className="error_message">Please enter your surname.</p> :null }
            {email ? <p className="error_message">Please enter your email.</p> :null }
            {invalidemail ? <p className="error_message">Please enter a valid email.</p> :null }
        </div>
    )

}

export default ErrorMessage