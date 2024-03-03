import { Box } from '@mui/material'

import * as React from "react";
import {
    
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    
    IconButton,
    Stack,
    TextField,
    Typography,
  } from "@mui/material";
  import { useTheme } from "@mui/material/styles";
  import useMediaQuery from "@mui/material/useMediaQuery";
  
const EditInfoCard = () => {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const [website,setWebsite]= React.useState("")
    const [openWeb,setOpenWeb]= React.useState(false);
    const [phone , setPhone]= React.useState("");
    const [address, setAddress]= React.useState("");
    const [birthDate, setBirthDate]= React.useState("");

    const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
    const handleOnClickWebsite = (e)=>{
        e.preventDefault();
        setOpenWeb(true);

    }



    const handleClickOpen = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
        
        }
  return (
    <React.Fragment>
    <Box  variant="outlined"
        onClick={handleClickOpen}
        sx={{
          cursor: "pointer",
          m: 0,
          p: 0,
          
          color:"blue"
        }}>
        Edit contact
        </Box>
         <Dialog
          onClose={handleClose}
          fullScreen={fullScreen}
          fullWidth
          open={open}
        >
          
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
            <Typography>Phone</Typography>
              <TextField
                type="number"
                variant="standard"
                fullWidth
                InputProps={{ disableUnderline: true }}
                size="small"
                placeholder="Title of post...."
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <Typography>Address</Typography>
              <TextField
                multiline
                type="text"
                variant="standard"
                required
                InputProps={{ disableUnderline: true }}
                name="adress"
                placeholder="What do you want to talk about?"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                minRows={12}
              ></TextField>
              <Typography>Birthday</Typography>
              <TextField
                multiline
                type="date"
                variant="standard"
                required
                InputProps={{ disableUnderline: true }}
                name="birthdate"
                placeholder="What do you want to talk about?"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                minRows={12}
              ></TextField>
               <Typography>Website</Typography>
              <Typography onClick={handleOnClickWebsite} sx={{
                cursor: "pointer"
              }}>+Add website</Typography>
              {openWeb&&  <TextField type="text"
                variant="standard"
                required
                InputProps={{ disableUnderline: true }}
                name="website"
                placeholder="Additional details"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                minRows={12}>

              </TextField> }


            </DialogContent>
            <DialogActions>
              <Stack
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
                spacing={2}
              >
                <i class="fa-regular fa-clock"></i>
                <Button type="submit" variant="filled" sx={{
                    bgColor:"blue"
                }}>
                  Save
                </Button>
              </Stack>
            </DialogActions>
          </Box>
        </Dialog>
        
      
    </React.Fragment>
 


    
  )
}

export default EditInfoCard
