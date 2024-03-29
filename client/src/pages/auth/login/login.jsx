import React, { useEffect, useState } from "react";
import { Typography, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import icon_Google from "../../../assets/Icon-Google.png";
import icon_Apple from "../../../assets/apple-logo.png";
import icon_Chain from "../../../assets/chain-icon.jpg";
import linkedInLogo from "../../../assets/linkedInLogo.png";
import "./login.style.css";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../slices/auth.slice";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const logged = useSelector((state) => state.auth.logged);
  const error=useSelector((state)=>state.auth.error);
  // const error = useSelector((state) => state.auth.error);
    console.log("userndfdgfdg",error);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      dispatch(loginUser({ email, password }));
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    if (logged) {
      navigate("/home");
    }
  }, [logged, navigate]);
  return (
    <>
      <Box
        sx={{
          pt: "40px",
          bg: "white",
        }}
      >
        <Box
          sx={{
            pl: "55px",
            alignItems:"center",
            justifyContent:"center",
            paddingLeft:"100px"
          }}
        >
          <img
            src={linkedInLogo}
            alt="linkrdIn-logo"
            className="linkedIn-log"
          />
        </Box>
        <Box
          sx={{
            borderRadius: "10px",
            display: "flex",
          
            alignItems: "center",
            flexDirection: "column",
            
            pt: "50px",
            mr: "40px",
          }}
        >
          <Box  className="form-section" sx={{
            display:"flex",
            flexDirection:"column",
          }}>
          <Box sx={{
            display:"flex",
            flexDirection:"column",

          }}>
            <Typography variant="h5" component="h4" sx={
              {
                fontFamily:"sans-serif",
                fontWeight:500,
                paddingTop:"30px",
                borderRadius:"20px",
                fontSize:"2rem"
              }
            }>
              Sign in
            </Typography>
            <Typography variant="p" component="p" sx={{
              fontFamily:"sans-serif",
              fontWeight:100,
              borderRadius:"20px",
            }}>
              Stay updated on your professional world
            </Typography>
            </Box>
            
            <form className="form" onSubmit={handleSubmit}>
              <Box>
                {/* email da */}
                <TextField
                  id="outlined-basic"
                  label="Email or Phone"
                  variant="filled"
                  className="email-login"
                  type="email"
                  sx={{
                    borderTop: "1px solid black",
                    borderRight: "1px solid black",
                    borderLeft: "1px solid black",
                    borderBottom: "1px solid black",
                    "& .MuiFilledInput-root": {
                      backgroundColor: "white",
                    },
                    width: "300px",
                    borderRadius:"20px solid black"
                  }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Box>
              <Box>
                <TextField
                  id="outlined-basic"
                  label="Password"
                  type="password"
                  variant="filled"
                  sx={{
                    borderTop: "1px solid black",
                    borderRight: "1px solid black",
                    borderLeft: "1px solid black",
                    borderBottom: "1px solid black",
                    bg: "white",
                    "& .MuiFilledInput-root": {
                      backgroundColor: "white",
                    },
                    width: "300px",
                  }}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Box>

              <Button
                disableElevation
                className="agree-btn"
                sx={{ textTransform: "none" }}
                type="submit"
              >
                <span className="agree-span">Sign in</span>
              </Button>
            </form>
            {error && <Box sx={{
              color:"red",
              fontSize:"20px"
            }}>{error.message}</Box>}
            {/* {error && <Box>{error}</Box>} */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                pt: "10px",
              }}
            >
              <Box className="or-section" sx={{
                display:"flex",
                alignItems:"center"
              }}>
                <Box className="span-line"></Box>
                <span className="span-or">or</span>
                <Box className="span-line"></Box>
              </Box>
              <Box
                sx={{
                  p: "20px",
                }}
              >
                <span className="login-policy">
                  By clicking Continue, you agree to LinkedIn’s
                </span>{" "}
                <span className="user-agreement">
                  User
                  <br /> Agreement Privacy Policy
                </span>
                <span className="login-policy"> and </span>
                <span className="user-agreement">Cookie Policy.</span>
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
                    gap: "10px",
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
                    gap: "10px",
                  }}
                >
                  <img
                    src={icon_Apple}
                    alt="google icon"
                    className="icon-google"
                  />

                  <span className="span_google"> Sign in with Apple</span>
                </Button>
              </Box>
              <Box
                sx={{
                  textAlign: "center",
                  pb: "60px",
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
                    gap: "10px",
                  }}
                >
                  <img
                    src={icon_Chain}
                    alt="google icon"
                    className="icon-google"
                  />

                  <span className="span_google">
                    {" "}
                    Sign in with a one time link
                  </span>
                </Button>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              mt: "30px",
            }}
          >
            <Typography variant="p" component="p">
              New to LinkedIn?
            </Typography>
            <Link to="/signup">Join now</Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Login;
