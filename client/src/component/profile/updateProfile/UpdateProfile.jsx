import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import {
    Box,
    
    
    Stack,
    TextField,
  } from "@mui/material";
import EditInfoCard from '../../card/EditInfoCard';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserProfile } from '../../../slices/profile.slice';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const UpdateProfile=()=> {
  const [open, setOpen] = React.useState(false);
  
  const theme = useTheme();
  const dispatch= useDispatch();
  const  userId=useSelector((state)=> state.auth.user._id)
  const  user=useSelector((state)=> state.auth.user)
  const [formData, setFormData] = React.useState({
    firstName: user.firstName || "",
    lastName: user.lastName||"",
    additionalDetail:user.additionalDetail||"",
    address: {
        country: user.address ? user.address.country : "",
        city: user.address ? user.address.city : "",
      },
    position:user.position||"", // Assuming these fields are optional
    city: user.city || "",
    
  });
  console.log("form data", formData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    try{
        dispatch(updateUserProfile({ userId, userData: formData }));

    }
    catch(error){
        console.log(error);

    }
    
    }

   


  const handleClickOpen = () => {
    setOpen(true);
  };
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
      
        <img src="../../../../" alt='sdd'/>
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
         <Dialog
          onClose={handleClose}
          fullScreen={fullScreen}
          fullWidth
          open={open}
        >
          <DialogTitle>
            <Box className="title-box">
              
              <Box className="post-title-head">
                
                <Typography sx={{ fontSize: "14px" }}>
                  Edit intro
                </Typography>
              </Box>
            </Box>
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            
          </IconButton>
          <Box
            component={"form"}
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <DialogContent
              dividers
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                mr: "20px",
                border: "none",
                overflow: "hidden",
              }}
            >
              <TextField
                type="text"
                variant="standard"
                fullWidth
                InputProps={{ disableUnderline: true }}
                size="small"
                placeholder="first Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              <TextField
                
                type="text"
                variant="standard"
                required
                InputProps={{ disableUnderline: true }}
                name="lastName"
                placeholder="last name"
                value={formData.lastName}
                onChange={handleChange}
                minRows={12}
              ></TextField>
              <Typography>Additional Details</Typography>
              <TextField type="text"
                variant="standard"
                
                InputProps={{ disableUnderline: true }}
                name="additionalDetails"
                placeholder="Additional details"
                value={formData.additionalDetail}
                onChange={handleChange}
                minRows={12}>

              </TextField>
              <Typography>
                Current Position
              </Typography>
              <Typography>
                positions*
              </Typography>
              <TextField type="text"
                variant="standard"
                required
                InputProps={{ disableUnderline: true }}
                name="position"
                placeholder="Additional details"
                value={formData.position}
                onChange={handleChange}
                minRows={12}>

              </TextField>
              <Typography>
                Education
              </Typography>
              <Typography>+Add new education</Typography>
              <Typography>Location</Typography>
              <Typography>Country</Typography>
              <TextField type="text"
                variant="standard"
                required
                InputProps={{ disableUnderline: true }}
                name="country"
                placeholder="Additional details"
                value={formData.address.country}
                onChange={handleChange}
                minRows={12}>

              </TextField>
              <Typography>City</Typography>
              <TextField type="text"
                variant="standard"
                required
                InputProps={{ disableUnderline: true }}
                name="city"
                placeholder="Additional details"
                value={formData.address.city}
                onChange={handleChange}
                minRows={12}>

              </TextField>
              <Typography>Contact Info</Typography>
              <EditInfoCard/>

             





             
              <Stack
                direction="row"
                marginTop="10px"
                alignItems="center"
                spacing={3}
              >
                <Button
                  sx={{ minWidth: "0px", padding: "0px" }}
                  component="label"
                >
                 
                </Button>
                
               
              </Stack>
            </DialogContent>
            <DialogActions>
              <Stack
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
                spacing={2}
              >
                <i class="fa-regular fa-clock"></i>
                <Button type="submit" variant="filled">
                  Save
                </Button>
              </Stack>
            </DialogActions>
          </Box>
        </Dialog>
      
    

      </BootstrapDialog>
    </React.Fragment>
  );
}
export default UpdateProfile






{/* <IconButton
aria-label="close"
onClick={handleClose}
sx={{
  position: 'absolute',
  right: 8,
  top: 8,
  color: (theme) => theme.palette.grey[500],
}}
>
<CloseIcon /> */}
