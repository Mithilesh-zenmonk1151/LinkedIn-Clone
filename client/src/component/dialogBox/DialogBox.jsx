import * as React from "react";
import { Button, Avatar, Box, Input } from "@mui/material";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import fileUploadIcon from "../../assets/svg/fileUploadIcon.svg";
import Divider from "@mui/material-next/Divider";
import { useState } from "react";
import Inputemoji from "react-input-emoji";
import { useDispatch } from "react-redux";
import { createPosts } from "../../slices/post.slice";
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
  // const [postContent, setPostContent] = React.useState("");
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");
  const [images, setImages] = useState();
  const dispatch = useDispatch();
  const formData = new FormData();
  const handleOnUpload = (e) => {
    e.preventDefault();
    try {
      console.log({ title, body });
      formData.append("body",body);
      formData.append("title",title);
      for(let i = 0; i < images.length; i++) {
        formData.append("images", images[i]);
      }
      console.log('image folder', images)
      dispatch(createPosts(formData));
      console.log("posts successfully created");
      alert("posts successfully added");
    } catch (error) {}
  };
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  function handleOnEnter(text) {
    console.log("enter", text);
  }
  const handleClose = () => {
    setOpen(false);
  };
  const handleOnImageChange = (e) => {
    console.log('files',e.target.files);
    const files = e.target.files;
    const array = []
    for(let i = 0; i < files.length; i++) {
      formData.append('images', files[i]);
      array.push(files[i]);
    }
    setImages(array)
  };
  return (
    <React.Fragment>
      <Box
        variant="outlined"
        onClick={handleClickOpen}
        sx={{
          cursor: "pointer",
          m: 0,
          p: 0,
          width: "100%",
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
                  padding: "0px",
                  gap: "100px",
                }}
              >
                <form onSubmit={handleOnUpload} action="/upload">
                  <Input
                    placeholder="title"
                    inputProps={ariaLabel}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <Input
                    placeholder="body"
                    inputProps={ariaLabel}
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                  />
                  <Inputemoji
                    value={body}
                    onChange={setBody}
                    cleanOnEnter
                    onEnter={handleOnEnter}

                    // onChange={(e)=>{console.log(e.target)}}
                  />
                  {/* <EmojiPicker /> */}
                  {/* <Emoji/> */}

                  <Box>
                    <Button variant="contained" sx={{}}>
                      Rewrite with AI
                    </Button>
                    <Button component="label">
                      <img src={fileUploadIcon} alt="fileuploadicon" />
                      <input
                        type="file"
                       multiple
                        onChange={handleOnImageChange}
                      />
                    </Button>
                  </Box>
                  <Button
                    type="submit"
                    autoFocus
                    onClick={handleClose}
                    sx={{
                      bgcolor: "#e8e8e8",
                      borderRadius: "20px",
                    }}
                  >
                    Post
                  </Button>
                </form>
              </Box>
            </Box>

            <Divider
              sx={{
                height: "0.5px",
                width: "100px",
              }}
            />
            <Box></Box>
          </DialogActions>
        </BootstrapDialog>
      </Box>
    </React.Fragment>
  );
}
