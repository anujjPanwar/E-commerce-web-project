import React, { useEffect, useState } from "react";
import "./LoginSignup.css";
function LoginSignup() {
  const defaultValues = {
    name: "",
    email: "",
    password: "",
    checkBox: false,
  };
  const [isPasswordFocused, setIsPasswordFocused] = useState({
    name: "false",
    email: "false",
    password: "false",
    checkBox: "false",
  });

  const [formValues, setFormValues] = useState(defaultValues);
  const [errors, setError] = useState({});

  // useEffect(()=>{

  // },[formValues]);

  const handleOnChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  const handleFocus = (e) => {
    // setIsPasswordFocused(true)
    const { name, value } = e.target;
    setIsPasswordFocused({ ...isPasswordFocused, [name]: "true" });
    setError(validate(formValues));
  };
  const handleBlur = (e) => {
    const { name, value } = e.target;
    setIsPasswordFocused({ ...isPasswordFocused, [name]: "false" });
    setError(validate(formValues));
    console.log("999999999" + name);
  };

  const handleSubmit = () => {
    console.log(formValues);
    setError(validate(formValues));
  };

  const validate = (values) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/;
    const errors = {};
    if (!values.name) {
      errors.name = "Name is required!";
    } else if (values.name.length < 4) {
      errors.name = "Name is not valid";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Email is not valid";
    }
    if (!values.password) {
      errors.password = "password is required";
    } else if (!passwordRegex.test(values.password)) {
      errors.password = "Please enter Strong password";
    }
    if (values.checkBox == false) {
      errors.checkBox = "Please check the box";
    }
    return errors;
  };

  return (
    <div className="login-signup">
      <div className="login-signup-container">
        <h2>Sign Up</h2>
        <input
          type="text"
          placeholder="Your Name"
          name="name"
          onChange={handleOnChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {isPasswordFocused.name !== "true" ? (
          <p className="errorN">{errors.name}</p>
        ) : (
          ""
        )}
        <input
          type="email"
          placeholder="Email Address"
          name="email"
          onChange={handleOnChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {isPasswordFocused.email !== "true" ? (
          <p className="errorE">{errors.email}</p>
        ) : (
          ""
        )}
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleOnChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {isPasswordFocused.password !== "true" ? (
          <p className="errorP">{errors.password}</p>
        ) : (
          ""
        )}
        <button onClick={handleSubmit}>Continue</button>
        <p>
          Already have an account ? <span>Login here</span>
        </p>
        <div className="check-box">
          <input
            type="checkbox"
            name="checkBox"
            onChange={handleOnChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <p>By continuing, i agree to the terms of use and privacy policy.</p>
        </div>
        {isPasswordFocused.checkBox !== "true" ? (
          <p className="errorC">{errors.checkBox}</p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default LoginSignup;
