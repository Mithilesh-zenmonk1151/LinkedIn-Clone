import React, {  useState }  from "react";
import linkedInLogo from "../../../assets/linkedInLogo.png";
import "./signup.style.css";
import InputField from "@mui/material/TextField";
import {Button , Typography}from "@mui/material";
import TextField from "@mui/material/TextField";
import {Link} from "react-router-dom"
import { Box } from "@mui/material";
import { useDispatch } from 'react-redux'
import { authUser } from "../../../slices/authAction.slice";
import icon_Google from "../../../assets/Icon-Google.png";
function Signup() {
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch =useDispatch()
    function handlePassword(event) {
        const newPass = event.target.value;
        setPassword(newPass);
    }
    const handleSubmit = (e) => {
      e.preventDefault();
  try{
      dispatch(authUser({email, password }));
      console.log("user login")
  }
    catch(error){
      alert(error);
      console.log(error)
    } 
      };
      // const success= useSelector((state)=>state.auth.success)
  return (
    <>
      <Box
        className="signup_page"
        sx={{
          paddingTop: "80px",
        }}
      >
        <Box className="signup-hero" sx={{
          pl:"100px",
        }}>
          <img
            src={linkedInLogo}
            alt="linked in logo"
            className="linkedIn-logo"
          />
        </Box>
        <Box className="signup-body" sx={{
          pt:"20px",
        }}>
          <Typography variant="h5" component="h4"
          sx={{
            fontSize:"30px",
            fontWeight:"500",

          }} >
          Make the most of your professional life
</Typography>
         <Box
            className="form-section"
            sx={{
              borderRadius: "10px",
              pb:"40px",
              ml:"30px",
              pl:"20px",
            }}
          >
            <form className="form" onSubmit={handleSubmit}>
              <Box 
              >
                <label for="email">Email or phone number</label>

                <TextField
                  size="small"
                  id="outlined-basic"
                  className="email-field"
                  name="email"
                  type="email"
                  sx={{
                    height: "px",
                  }}
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </Box>
              <Box>
                <label for="email">Password (6+ characters)</label>
               <InputField
                  size="small"
                  id="outlined-basic"
                  className="email-field"
                  name="password"
                  type="password"
                  value={password}
                  onChange={handlePassword}
                />
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
              <Button
                variant="contained"
                disableElevation
                style={{ textTransform: "capitalize" }}
                className="agree-btn"
             type="submit" >
                <span className="agree-span"> Agree & Join</span>
              </Button>
            </form>
          <Box sx={{
            display:"flex",
            flexDirection:"column",
            gap:"20px",
            pt:"10px"
          }}>
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
