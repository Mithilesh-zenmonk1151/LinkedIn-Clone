import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
function CommentCard({ commentData }) {
  console.log("commentData: ", commentData.userId.name);
  return (
    <Stack flexDirection={"row"} sx={{ mb: "12px", ml: "16px", mr: "16px" }}>
      <Avatar
        sx={{ mr: "4px", height: "40px", width: "40px" }}
        aria-label="recipe"
      >
        R
      </Avatar>
      <Stack flexDirection={"column"}>
        <Card
          sx={{
            backgroundColor: "#F2F2F2",
            boxShadow: "none",
            width: "479px",
            borderRadius: "10px",
            borderTopLeftRadius: "0px",
          }}
        >
          <CardHeader
            sx={{ pl: "12px", pt: "8px", pb: "8px", pr: "0px" }}
            action={
              <IconButton aria-label="settings">
                <Typography
                  fontSize={"12px"}
                  color={"grey"}
                  display={"flex"}
                  alignItems={"center"}
                  mr={"4px"}
                >
                  1hr <MoreHorizIcon />
                </Typography>
              </IconButton>
            }
            title={
              <Stack
                flexDirection={"row"}
                sx={{ padding: 0 }}
                alignItems={"center"}
                gap={"5px"}
              >
                <Typography fontSize={"14px"} color={"Black"}>
                  {" "}
                  {commentData.userId.name}
                </Typography>
                <Typography fontSize={"14px"} color={"grey"}>
                  {" "}
                  (He/Him)
                </Typography>
                <FiberManualRecordIcon sx={{ height: "5px", width: "5px" }} />
                <Typography fontSize={"14px"} color={"grey"}>
                  {" "}
                  1st +
                </Typography>
              </Stack>
            }
            subheader={
              <Stack flexDirection={"column"}>
                <Typography fontSize={"12px"} color={"grey"}>
                  Designation @ Industry
                </Typography>
              </Stack>
            }
          />
          <CardContent
            sx={{ paddingTop: "0", paddingRight: "16px", paddingLeft: "12px" }}
          >
            <Typography variant="body2" color="text.secondary">
              {commentData.body}
            </Typography>
            <Stack backgroundColor={"red"}></Stack>
          </CardContent>
        </Card>

        <Stack flexDirection={"row"} pl={"8px"} mt={"4px"}>
          <Typography fontSize={"12px"} color={"grey"} mr={"4px"}>
            Like
          </Typography>
          <Divider sx={{ color: "black" }} orientation="vertical" />
          <Typography fontSize={"12px"} color={"grey"} ml={"4px"}>
            Reply
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
export default CommentCard;
