import React from "react";
import linkedInLogo  from "../../../assets/linkedInLogo.png"
import "./signup.style.css"
import InputField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import icon_Google  from "../../../assets/Icon-Google.png"
function signup() {
  return (
    <>
      <Box className="signup_page">
        <Box className="signup-hero">
          <img src={linkedInLogo} alt="linked in logo" className="linkedIn-logo" />
        </Box>
        <Box className="signup-body">
          <h1>Make the most of your professional life</h1>

        <Box className="form-section">
        <form className="form">
         <label for="email">Email or phone number</label>
          
          <TextField label="Email or phone number" size="small" id="outlined-basic" className="email-field" name="email" type="email"   />
          <label for="email">Password (6+ characters)</label>
          
          <InputField size="small" id="outlined-basic" className="email-field" name="email" type="password"   />
          <Box className="span-tags">
          <span className="normal-text">By clicking Agree & Join, you agree to the LinkedIn </span><span className="link-texts">User<br/>
        Agreement, Privacy Policy</span> <span className="normal-text">and</span><span className="link-texts">Cookie Policy</span>
          </Box>
          <Button variant="contained" disableElevation style={{textTransform: "capitalize"}}  className="agree-btn">
    <span className="agree-span">  Agree & Join</span>
    </Button>
          </form>
         <Box className="or-section">
         <Box className="span-line"></Box> <span className="span-or">or</span><Box className="span-line"></Box>
         </Box>
        <Box sx={{
          textAlign:"center"
        }}>
        <Button variant="outlined" disableElevation style={{textTransform: "capitalize"}} 
         sx={{
          bgcolor: '#ffffff',
          boxShadow: "1px",
          borderRadius: "20px",
          border:1,
          borderColor:"black",
          
          width: "400px",
          textAlign:"center",
          height:"45px",
        
        }}
         > 
        <img src={icon_Google} alt="google icon" className="icon-google" />
        
        
         <span className="span_google" >  Continue with Google</span>
          
 
    </Button>
        </Box>
        </Box>
        </Box>
        
      </Box>
    </>
  );
}

export default signup;
