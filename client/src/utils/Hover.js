import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

export default function Hover({classt,name}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div style={{display:'flex' , alignItems:'center'}}>
      
      <i class={classt}  aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        style={{color:'#666666' , fontSize:'15px' }}
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose} ></i>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 1 , fontSize:'13px' }}>{name}</Typography>
      </Popover>
    </div>
  );
}