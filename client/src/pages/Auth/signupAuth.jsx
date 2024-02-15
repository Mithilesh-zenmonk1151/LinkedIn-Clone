import React, { useState } from "react";


import { Link } from "react-router-dom";

import axios from "axios";

export const Signup = () => {
  const [name, setName] = useState("");
  // const [email , setEmail]= useState("");
  // const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const [password, setPassword] = useState("Abc.@678");
  
  const [imag, setImag] = useState("");
  const [selectAccountType, setSelectAccountType] = useState("");
  function handleUploadImage(e) {
    console.log(e.target.files);
    setImag(URL.createObjectURL(e.target.files[0]));
}

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function isValidPhone(phone) {
    return /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(phone);
  }

  const handleOnEmailPhoneChange = (event) => {
    setError(null);
    setMessage(event.target.value);
  };

  async function postData(data) {
    try {
      let response = await axios.post(
        "http://localhost:4000/api/user/signup",
        data
      );
      console.log("THIS IS RESPONSE:",response);
      console.log(response);
      alert("Form submitted Successfully");
    } catch (error) {
      console.log(error);
      alert("User Allready Exists");
    }
  }

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (!(isValidEmail(message) || isValidPhone(message))) {
      setError("Email is invalid");
    } else {
      setError(null);
    }

    postData({
      name: name,
      email: message,
      password: password,
      accountType:selectAccountType,
      image: imag,
    });
  };

  const [errorMessage, setErrorMessage] = useState("");
  function handlePassword(event) {
    let new_pass = event.target.value;
    setPassword(new_pass);

    // regular expressions to validate password
    var lowerCase = /[a-z]/g;
    var upperCase = /[A-Z]/g;
    var numbers = /[0-9]/g;
    if (!new_pass.match(lowerCase)) {
      setErrorMessage("Password should contains lowercase letters!");
    } else if (!new_pass.match(upperCase)) {
      setErrorMessage("Password should contain uppercase letters!");
    } else if (!new_pass.match(numbers)) {
      setErrorMessage("Password should contains numbers also!");
    } else if (new_pass.length < 10) {
      setErrorMessage("Password length should be more than 10.");
    } else {
      setErrorMessage("Password is strong!");
    }
  }

  return (
    <div className="signup-hero">
      <div className="left-signup">
       
      </div>
      <div className="right-signup">
        <h1 className="an-acc">Create an account</h1>
        <p className="enter-detail">Enter your details below</p>
        <form onSubmit={handleOnSubmit} className="signup-form">
          <input
            required
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="signup-name"
          />
          <input
            required
            placeholder="Email or Phone Number"
            className="signup-name"
            value={message}
            onChange={handleOnEmailPhoneChange}
          />
          {error && (
            <h3
              style={{
                color: "red",
              }}
            >
              {error}
            </h3>
          )}
          <input
            required
            type="password"
            name="password"
            className="signup-name"
            value={password}
            onChange={handlePassword}
            placeholder="Password"
          />
          <div style={{ color: "red" }}> {errorMessage} </div>
          <label>
            {" "}
            Select User Type:
            <select
              onChange={(event) => setSelectAccountType(event.target.value)}
              value={selectAccountType}
            >
              <option value="customer">Customer</option>
              <option value="retailer">Retailer</option>
            </select>
          </label>
          Upload an image
          <input type="file" onChange={handleUploadImage} />
            <img src={imag} alt="user-profile" />
          <button type="submit" className="createac-btn ">
            Create Account
          </button>
        </form>
        <div className="right-bottom">
          <div className="sign-google">
           
            <p className="up-google">Sign up with Google </p>
          </div>
          <div className="already">
            <p className="al-account">Already have account</p>
            <div className="login-route">
              <Link to="/signup/login" className="login-link">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

