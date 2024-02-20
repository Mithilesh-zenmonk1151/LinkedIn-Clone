import React, { useState } from "react";
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Picker from "emoji-picker-react";
 import EmojiLogo from "../../assets/svg/emoji.svg"
import { Box } from "@mui/material";
export default function Emoji() {
    const [chosenEmoji, setChosenEmoji] = useState(null);
 
    const onEmojiClick = (event, emojiObject) => {
        setChosenEmoji(emojiObject);
        console.log(emojiObject.target);
    };
    const BootstrapDialog = styled(Dialog)(({ theme }) => ({
        '& .MuiDialogContent-root': {
          padding: theme.spacing(2),
        },
        '& .MuiDialogActions-root': {
          padding: theme.spacing(1),
        },
      }));
      
      
        const [open, setOpen] = React.useState(false);
      
        const handleClickOpen = () => {
          setOpen(true);
        };
        const handleClose = () => {
          setOpen(false);
        };
      
 
    return (
        <React.Fragment>
            
              <Box variant="outlined" onClick={handleClickOpen}>
                <img src={EmojiLogo} alt="emoji logo"/>
                <EmojiEmotionsIcon/>
      </Box>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
           <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
           
            {chosenEmoji ? (
                <span>
                    Your Emoji:
                    <img
                        style={{ width: "15px" }}
                        src={chosenEmoji.target.src}
                        alt="emoji"
                    />
                </span>
            ) : (
                <span>No Emoji</span>
            )}
            <Picker onEmojiClick={onEmojiClick} />
            </DialogContent>
            </BootstrapDialog>
            </React.Fragment>
    )
            }