import * as React from "react";
import { Button, Avatar, Box, Input } from "@mui/material";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import EmojiPicker from "../emojiPicker/EmojiPicker";
import fileUploadIcon from "../../assets/svg/fileUploadIcon.svg";
import Divider from "@mui/material-next/Divider";

const ariaLabel = { "aria-label": "description" };

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));
export default function DialogBox() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <Box
        variant="outlined"
        onClick={handleClickOpen}
        sx={{
          cursor: "pointer",
          m: 0,
          p: 2,
        }}
      >
        start a post
      </Box>
      <Box
        sx={{
          bgcolor: "red",
        }}
      >
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
          sx={{}}
        >
          <Avatar
            sx={{
              border: "1px solid #d7d8d6",
              borderRadius: "100%",
              width: "45px",
              height: "45px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "5px",
            }}
            aria-label="recipe"
          >
            MK
          </Avatar>
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
            <CloseIcon />
          </IconButton>

          <DialogActions>
          <Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                padding:"0px",
                gap:"100px",
              }}
            >
              <Input
                placeholder="What do you want to talk about"
                inputProps={ariaLabel}
              />

              <EmojiPicker />
              <Box>
              <Button variant="contained" sx={{
              
            }}>Rewrite with AI</Button>
            </Box>
           
            </Box>
           
           </Box>
           
            <Divider
              sx={{
                height: "0.5px",
                width: "100px",
              }}
            />
            <Box>
              <Button
                component="label"
              >
                <img src={fileUploadIcon} alt="fileuploadicon" />
                <input type="file" hidden />
              </Button>
            </Box>
            <Button
              autoFocus
              onClick={handleClose}
              sx={{
                bgcolor: "#e8e8e8",
                borderRadius: "20px",
              }}
            >
              Post
            </Button>
          </DialogActions>
        </BootstrapDialog>
      </Box>
    </React.Fragment>
  );
}
