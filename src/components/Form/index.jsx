import React, { useState } from "react";
import "./style.css";
import ErrorMessage from "../ErrorMessage/index.jsx";
import Results from "../Results/index.jsx";

const Form = () => {
  //if the form is successfully submitted, this state is used to display the Results component
  const [submitTracker, setSubmitTracker] = useState(false);

  //this state is used to monitor the errors and display correct error message in the ErrorMessage component
  const [error, setError] = useState({
    lastname: false,
    email: false,
    invalidemail: false,
  });

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  //work state, when the input value is changed, it shows here (no submit needed)
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    linkedin: "",
    motivation: "",
    skills: "",
  });

  //when the form is submitted, the data from the user state are copied here; done to prevent changing of the Results component if input values are modified after submitting
  const [displayUser, setDisplayUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    linkedin: "",
    motivation: "",
    skills: "",
  });

  //on change of input fields, the user state is set to the value of the input
  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = () => {
    event.preventDefault();
    setSubmitTracker(false);
    setError({ lastname: false, email: false, invalidemail: false });
    if (user.lastname === "" && user.email === "") {
      setError((prev) => ({
        lastname: true,
        email: true,
        invalidemail: prev.invalidemail,
      }));
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } else if (user.lastname === "" && emailRegex.test(user.email) === false) {
      setError((prev) => ({
        lastname: true,
        email: prev.email,
        invalidemail: true,
      }));
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } else if (user.lastname === "") {
      setError((prev) => ({
        lastname: true,
        email: prev.email,
        invalidemail: prev.invalidemail,
      }));
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } else if (user.email === "") {
      setError((prev) => ({
        lastname: prev.lastname,
        email: true,
        invalidemail: prev.invalidemail,
      }));
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } else if (emailRegex.test(user.email) === false) {
      setError((prev) => ({
        lastname: prev.lastname,
        email: prev.email,
        invalidemail: true,
      }));
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } else {
      setSubmitTracker(true);
      setDisplayUser({
        ...displayUser,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        linkedin: user.linkedin,
        motivation: user.motivation,
        skills: user.skills,
      });
    }
  };

  return (
    <>
      <h1 className="form_heading">Apply for this position</h1>

      <form onSubmit={handleSubmit} className="form_wrapper">
        {submitTracker ? null : (
          <ErrorMessage
            lastname={error.lastname}
            email={error.email}
            invalidemail={error.invalidemail}
          />
        )}
        <div className="form_double">
          <div className="form-item_double">
            <label htmlFor="firstname">First Name:</label>
            <textarea
              className="form-field"
              id="firstname"
              name="firstname"
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-item_double">
            <label htmlFor="lastname">Last Name:</label>
            <textarea
              className="form-field"
              id="lastname"
              name="lastname"
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
        <div className="form-item">
          <label htmlFor="email">Email Address:</label>
          <textarea
            className="form-field"
            id="email"
            name="email"
            placeholder="you@website.com"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-item">
          <label htmlFor="linkedin">LinkedIn URL:</label>
          <textarea
            className="form-field"
            id="linkedin"
            name="linkedin"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-item">
          <label htmlFor="motivation">
            Why do you want to become a part of the Femme Palette team?
          </label>
          <textarea
            className="form-field form-field_tall"
            id="motivation"
            name="motivation"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-item">
          <label htmlFor="skills">
            Why are you the best candidate for this role?
          </label>
          <textarea
            className="form-field form-field_tall"
            id="skills"
            name="skills"
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="form_button">
          Submit Application
        </button>
        {submitTracker ? (
            <Results
                firstname={displayUser.firstname}
                lastname={displayUser.lastname}
                email={displayUser.email}
                linkedin={displayUser.linkedin}
                motivation={displayUser.motivation}
                skills={displayUser.skills}
            />
        ) : null}
      </form>

    </>
  );
};

export default Form;
