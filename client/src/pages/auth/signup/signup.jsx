import React, { useEffect, useState } from "react";
import linkedInLogo from "../../../assets/linkedInLogo.png";
import "./signup.style.css";
import InputField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { authUser } from "../../../slices/auth.slice";
import icon_Google from "../../../assets/Icon-Google.png";
function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(null);
  const logged = useSelector((state) => state.auth.logged);
  const navigate = useNavigate();
  useEffect(() => {
    if (logged) {
      navigate("/home");
    }
  }, [logged, navigate]);
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  const dispatch = useDispatch();
  // function handlePassword(event) {
  //   const newPass = event.target.value;
  //   setPassword(newPass);
  // }
  const handleSubmit = (e) => {
    e.preventDefault();
    // if (!isValidEmail(email)) {
    //   setError("Email is invalid");
    // } else {
    //   setError(null);
    // }
    try {
      dispatch(authUser({ email, password }));
      console.log("user signup");
      alert("User Registred successfuly");
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };
  function handlePassword(event) {
    let newPass = event.target.value;
    setPassword(newPass);
    var lowerCase = /[a-z]/g;
    var upperCase = /[A-Z]/g;
    var numbers = /[0-9]/g;
    if (!newPass.match(lowerCase)) {
      setErrorMessage("Password should contains lowercase letters!");
    } else if (!newPass.match(upperCase)) {
      setErrorMessage("Password should contain uppercase letters!");
    } else if (!newPass.match(numbers)) {
      setErrorMessage("Password should contains numbers also!");
    } else if (newPass.length < 10) {
      setErrorMessage("Password length should be more than 10.");
    } else {
      setErrorMessage("Password is strong!");
    }
  }
  const handleOnEmailChange = (event) => {
    setEmail(event.target.value);
    // e.preventDefault();
    if (!isValidEmail(email)) {
      setError("Email is invalid");
    } else {
      setError(null);
    }
  };
  return (
    <>
      <Box
        className="signup_page"
        sx={{
          paddingTop: "80px",
        }}
      >
        <Box
          className="signup-hero"
          sx={{
            pl: "100px",
          }}
        >
          <img
            src={linkedInLogo}
            alt="linked in logo"
            className="linkedIn-logo"
          />
        </Box>
        <Box
          className="signup-body"
          sx={{
            pt: "20px",
          }}
        >
          <Typography
            variant="h5"
            component="h4"
            sx={{
              fontSize: "30px",
              fontWeight: "500",
            }}
          >
            Make the most of your professional life
          </Typography>
          <Box
            className="form-section"
            sx={{
              borderRadius: "10px",
              pb: "40px",
              ml: "30px",
              pl: "20px",
            }}
          >
            <form className="form" onSubmit={handleSubmit}>
              <Box>
                <label for="email">Email or phone number</label>

                <TextField
                  size="small"
                  id="outlined-basic"
                  className="email-field"
                  name="email"
                  sx={{
                    height: "px",
                  }}
                  value={email}
                  onChange={handleOnEmailChange}
                />
                {error && (
                  <p
                    style={{
                      color: "red",
                      fontSize:"15px",
                      fontFamily:"sans-serif"
                    }}
                  >
                    {error}
                  </p>
                )}
              </Box>
              <Box>
                <label for="password">Password (6+ characters)</label>
                <InputField
                  size="small"
                  id="outlined-basic"
                  className="email-field"
                  name="password"
                  type="password"
                  value={password}
                  onChange={handlePassword}
                />
                <Box sx={{ color: "red",
                 fontSize:"15px",
                 fontFamily:"sans-serif" }}> {errorMessage} </Box>
              </Box>
              <Box className="span-tags">
                <span className="normal-text">
                  By clicking Agree & Join, you agree to the LinkedIn{" "}
                </span>
                <span className="link-texts">
                  User
                  <br />
                  Agreement, Privacy Policy
                </span>{" "}
                <span className="normal-text">and</span>
                <span className="link-texts">Cookie Policy</span>
              </Box>

              {errorMessage !== "Password is strong!" || error ? (
                <Button
                  variant="contained"
                  disableElevation
                  disabled
                  sx={{ textTransform: "capitalize", cursor: "not-allowed" }}
                  className="agree-btn"
                  type="submit"
                >
                  <span className="agree-span"> Agree & Join</span>
                </Button>
              ) : (
                <Button
                  variant="contained"
                  disableElevation
                  sx={{ textTransform: "capitalize" }}
                  className="agree-btn"
                  type="submit"
                >
                  <span className="agree-span"> Agree & Join</span>
                </Button>
              )}
            </form>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                pt: "10px",
              }}
            >
              <Box className="or-section">
                <Box className="span-line"></Box>
                <span className="span-or">or</span>
                <Box className="span-line"></Box>
              </Box>
              <Box
                sx={{
                  textAlign: "center",
                }}
              >
                <Button
                  variant="outlined"
                  disableElevation
                  style={{ textTransform: "capitalize" }}
                  sx={{
                    bgcolor: "#ffffff",
                    boxShadow: "1px",
                    borderRadius: "20px",
                    border: 1,
                    borderColor: "black",

                    width: "365px",
                    textAlign: "center",
                    height: "45px",
                  }}
                >
                  <img
                    src={icon_Google}
                    alt="google icon"
                    className="icon-google"
                  />
                  <span className="span_google"> Continue with Google</span>
                </Button>
              </Box>
              <Box
                sx={{
                  textAlign: "center",
                }}
              >
                Already on LinkedIn?{" "}
                <Link to="/login" className="login-link">
                  Sign in
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box></Box>
      </Box>
    </>
  );
}
export default Signup;
