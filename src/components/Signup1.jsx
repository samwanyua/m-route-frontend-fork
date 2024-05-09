import React, { useState } from 'react';
import InputField2 from "./InputField2";
import InputField1 from "./InputField1";
import InputField from "./InputField";
import "./Signup1.css";

const Signup1 = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    username: '',
    email: '',
    nationalId: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Log the form data
    // You can perform further actions here, like sending the data to the server
  };

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h2 className="sign-up2">Sign Up</h2>
      <nav className="input-field-label">
        <input
          name="firstName"
          label="First_name"
          labelCaption="Label Caption"
          placeholder="First name"
          onChange={handleChange}
        />
        <input
          name="middleName"
          label="Middle_name"
          labelCaption="Label Caption"
          placeholder="Middle name"
          inputFlex="1"
          inputMinWidth="120px"
          inputAlignSelf="unset"
          propHeight="unset"
          propDisplay="unset"
          propMinHeight="24px"
          onChange={handleChange}
        />
        <input
          name="lastName"
          label="Last_name"
          labelCaption="Label Caption"
          placeholder="Last name"
          inputFlex="1"
          inputMinWidth="120px"
          inputAlignSelf="unset"
          propHeight="unset"
          propDisplay="unset"
          propMinHeight="24px"
          onChange={handleChange}
        />
      </nav>
      <div className="input-field-parent">
        <input
          name="username"
          label="Username"
          Placeholder="Username"
          onChange={handleChange}
        />
        <input
          name="email"
          label="Email"
          Placeholder="Email"
          placeholderPlaceholder="mymail@gmail.com"
          onChange={handleChange}
        />
        <input
          name="nationalId"
          label="National_id"
          Placeholder="National_id"
          labelCaption="No spam guaranteed"
          inputFlex="unset"
          inputMinWidth="unset"
          inputAlignSelf="stretch"
          propHeight="24px"
          propDisplay="inline-block"
          propMinHeight="unset"
          onChange={handleChange}
        />
        <input
          name="password"
          label="Password"
          type="password"
          Placeholder="Password"
          onChange={handleChange}
        />
        <input
          name="confirmPassword"
          label="Confirm Password"
          Placeholder="Confirm Password"
          type="password"

          onChange={handleChange}
        />
      </div>
      <div className="terms">
        <div className="checkbox">
          <img
            className="vector-icon4"
            loading="lazy"
            alt=""
            src="/vector2.svg"
          />
        </div>
        <div className="i-agree-with-container">
          <span className="i-agree-with">{`I agree with `}</span>
          <span className="termsconditions">{`Terms&Conditions`}</span>
        </div>
      </div>
      <div className="buttons">
        <button type="submit" className="button34">
          <b className="sign-up3">Sign Up</b>
        </button>
        <div className="sign-up4">
          <div className="already-have-an">Already have an account?</div>
          <b className="log-in1">Log In</b>
        </div>
      </div>
    </form>
  );
};

export default Signup1;
