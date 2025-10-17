import React, { useContext, useEffect, useState } from "react";
import "./LoginSignup.css";
import { useNavigate } from "react-router-dom";
import { dataContext } from "../../Context/MainContext";
import { Link } from "react-router-dom";
import { Login, signUp } from "../Firebase/authService.js";

function LoginSignup({ title }) {
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
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState(defaultValues);
  const [errors, setError] = useState({});
  const { login, setlogin, setisLogin, setUserName ,setCallLogin,callLogin} = useContext(dataContext);

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

  const handleSubmit = async () => {
    setError(validate(formValues));
    console.log("errors  //////  " + Object.keys(validate(formValues)).length);
    if (Object.keys(validate(formValues)).length == 0) {
      // const userData = JSON.parse(localStorage.getItem("userDetails")) || [];
      // if (title == "Sign Up") {
      //   const res = userData.some((i) => {
      //     return i.email == formValues.email;
      //   });
      //   if (!res) {
      //     const arr = [...userData];
      //     arr.push(formValues);
      //     localStorage.setItem("userDetails", JSON.stringify(arr));
      //     // setlogin(1);
      //     navigate("/Signup");
      //   } else {
      //     alert("User with this mail already exist!");
      //   }
      // } else {
      //   const isExist = userData.some((value) => {
      //     return (
      //       value.name == formValues.name &&
      //       value.email == formValues.email &&
      //       value.password == formValues.password
      //     );
      //   });
      //   if (isExist) {
      //     setlogin(1);
      //     setisLogin("Log Out")
      //     setUserName(( `Hi\u00A0\u00A0\u00A0${formValues.name}`));
      //     navigate("/");
      //   }else{
      //       alert("Wrong Credientials!")
      //     }
      // }
      console.log("check login is true or false " + callLogin);
      
      try {
        if (callLogin) {
          await Login(formValues.email, formValues.password);
          alert("✅ Logged in successfully!");
          setlogin(1);
          setUserName(`Hi\u00A0\u00A0\u00A0${formValues.name}`);
          setisLogin("Log Out");
          navigate("/"); 
        } else {
          await signUp(formValues.email, formValues.password);
          setCallLogin(true);
          alert("✅ Account created!");
          navigate("/Signup");
        }
      } catch (error) {
        if (error.code === "auth/email-already-in-use") {
          alert("⚠️ This email is already registered. Try logging in.");
        } else if (error.code === "auth/user-not-found") {
          alert("⚠️ No account found. Please sign up first.");
        } else if (error.code === "auth/wrong-password") {
          alert("⚠️ Incorrect password. Try again.");
        } else {
          alert("⚠️ " + error.message); 
        }
      }
    }
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
        <h2>{title}</h2>
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
          Already have an account ?{" "}
          <Link to="/Signup" style={{ textDecoration: "none" }}>
            <span onClick={()=>setCallLogin(true)}>Login here</span>
          </Link>
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
