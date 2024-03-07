import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { deepOrange} from "@mui/material/colors";

import { Avatar, Typography } from "@mui/material";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function NotificationCard() {
  
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Avatar sx={{ bgcolor: deepOrange[500] }}></Avatar>
        <Box>
            <Typography>Linked News India</Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
