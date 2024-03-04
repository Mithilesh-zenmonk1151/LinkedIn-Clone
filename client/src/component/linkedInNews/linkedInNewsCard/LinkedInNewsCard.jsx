import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function LinkedInNewsCard() {
  return (
    <Card sx={{ minWidth: 275,
    mt:"30px" }}>
      <CardContent  sx={{
        display:"flex",
        flexDirection:"column",
        gap:"20px",
        
        
      }}>
        <Typography sx={{ fontSize: 16 ,
       }} color="text.secondary" gutterBottom>
          Word of the Day well meaning and kindly.
        </Typography>
        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
          Word of the Day well meaning and kindly.
        </Typography>
        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
          Word of the Day well meaning and kindly.
        </Typography>
        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
          Word of the Day well meaning and kindly.
        </Typography>
        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
          Word of the Day well meaning and kindly.
        </Typography>
        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
          Word of the Day well meaning and kindly.
        </Typography>
        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
          Word of the Day well meaning and kindly.
        </Typography>
        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
          Word of the Day well meaning and kindly.
        </Typography>
        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
          Word of the Day well meaning and kindly.
        </Typography>
       
        
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}
