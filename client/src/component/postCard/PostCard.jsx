import * as React from "react";
// import GetComment from "../comment/getComment/GetComment.jsx";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { ReactionBarSelector } from '@charkour/react-reactions';
// import SendSharpIcon from '@mui/icons-material/SendSharp';
import RepeatOutlinedIcon from "@mui/icons-material/RepeatOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbUpOffAltRoundedIcon from "@mui/icons-material/ThumbUpOffAltRounded";
import AddIcon from "@mui/icons-material/Add";
import { Box, Button, Divider, Stack, TextField } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Comment from "../comment/createComment/CreateComment.jsx";
import PublicIcon from "@mui/icons-material/Public";
import CommentCard from "../commentCard/CommentCard";
import { useDispatch, useSelector } from "react-redux";
import { getCommentUser } from "../../slices/comment.slice.js";
// import FormLabel from "@mui/joy/FormLabel";
// import { radioClasses } from "@mui/joy/Radio";
// import RadioGroup from "@mui/joy/RadioGroup";
// import Sheet from "@mui/joy/Sheet";
// import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import {
  getReactionUser,
  postReactionUser,
  deleteReactionUser,
} from "../../slices/reaction.slice.js";
export default function PostCard({ body, title, images, user, postId }) {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getReactionUser(postId));
  }, []);
  const commentArray = useSelector(
    (state) => state.comments?.content?.res?.data?.commentData
  );
  const numberOfComments=commentArray?.length || 0;
  console.log("number of comment Array ", commentArray);
  const isLoading = useSelector((state) => state.comments?.loading);
  const error = useSelector((state) => state.comments?.error);
  const [seeMore, setSeeMore] = React.useState(true);
  const [seecomment, setSeecomment] = React.useState(false);
  const [ReactionDiv, SetReactionDiv] = React.useState(false);
  const [reaction, setReaction] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);
  const [reactionId, setReactionId] = React.useState(null)
   
  const handleCommentClick = () => {
    setSeecomment(!seecomment);
    dispatch(getCommentUser(postId));
  };
  console.log(commentArray);
  const ReactionClick = (label) => {
    const reactionData = {};
    reactionData.reaction = label;
    reactionData.postId = postId;
    dispatch(postReactionUser({ label, postId }));
  };
  const userId= useSelector((state)=>state.auth?.user);

  const ReactionsData = useSelector((state) => state.reaction?.data);
  console.log("reaction", ReactionsData);
  if (isLoading) {
    return "Loading...";
  }
  if (error) {
    return error;
  }
  const handleDeleteReaction = async () => {

    if (reactionId) {

        const res = await dispatch(deleteReactionUser(reactionId));
        if (res) {
            getReactionUser()

            setReaction('')
        }

    }
}
  return (
    <Stack margin={"auto"} sx={{display:"flex",
    displayDirection:"column",
    gap:"20px",
    bgColor: "red"

    }}>
      <Card
        sx={{
          width: 555,
          boxShadow: "none",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          
        }}
      >
        <CardHeader
          sx={{ pl: "16px", pt: "12px", pb: "8px", pr: "16px" }}
          avatar={
            <Avatar aria-label="recipe" sx={{ height: "50px", width: "50px" }}>
              <img alt=""></img>
            </Avatar>
          }
          action={
            <IconButton sx={{ color: "#3F73C3" }}>
              <AddIcon />
              <Typography sx={{ color: "" }}>Follow</Typography>
            </IconButton>
          }
          title={
            <Stack flexDirection={"row"} alignItems={"center"} gap={"5px"}>
              <Typography fontSize={"14px"} color={"Black"}>
                {" "}
                {user}
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
                Designation
              </Typography>
              <Stack flexDirection={"row"} alignItems={"center"} gap={"5px"}>
                <Typography fontSize={"12px"} color={"grey"}>
                  2hr
                </Typography>
                <FiberManualRecordIcon sx={{ height: "5px", width: "5px" }} />
                <PublicIcon sx={{ height: "16px", width: "16px" }} />
              </Stack>
            </Stack>
          }
        />
        <CardContent sx={{ pl: "12px", pt: "8px", pb: "8px", pr: "16px" }}>
          <Typography fontSize={"15px"} color="text.secondary">
            {title}
          </Typography>
          <Typography
            fontSize={"15px"}
            color="text.secondary"
            sx={{
              overflow: "hidden",
              height: seeMore ? "20px" : "auto",
              wordBreak: "break-word",
            }}
          >
            {body}
          </Typography>
          <Button
            className="seemore"
            onClick={() => {
              setSeeMore(!seeMore);
            }}
            sx={{ textTransform: "lowercase" }}
          >
            {!seeMore ? <>...less</> : <>...more</>}
          </Button>
        </CardContent>

        <Carousel>
          {images?.map((image, index) => (
            <CardMedia
              sx={{ pb: 0 }}
              key={index}
              component="img"
              height={"auto"}
              image={`http://localhost:4000/${image}`}
              alt="post image"
            />
          ))}
        </Carousel>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            pl: "12px",
            pt: "8px",
            pb: "8px",
            pr: "16px",
          }}
        >
          <Typography
            fontSize={"12px"}
            color="text.secondary"
            display={"flex"}
            alignItems={"center"}
            gap={"3px"}
          >
            <ThumbUpOutlinedIcon fontSize="16px" className="like-icon" /> 50
          </Typography>
          <Typography fontSize={"12px"} color="text.secondary">
            50 Comments
          </Typography>
        </CardContent>

        <Divider
          className="divider"
          sx={{
            marginLeft: "16px",
            marginRight: "16px",
            padding: "0px",
          }}
        />
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "space-around",
            position: "relative",
          }}
        >
           <IconButton sx={{ gap: '10px', color: Boolean(ReactionsData[postId]?.find((likes) => likes.userId === userId._id)) ? '#0374b3' : '#807c7c' }}

onMouseEnter={() => SetReactionDiv(true)}
onMouseLeave={() => SetReactionDiv(false)}
onClick={handleDeleteReaction}
>
<ThumbUpOffAltRoundedIcon fontSize='20px' />
<Typography fontSize={'14px'} >{reaction ? reaction : 'Love'}</Typography>
{ReactionDiv && <Box className='reactionsDiv' onClick={(e) => e.stopPropagation()} sx={{
   position:"absolute",
   left:"2px",
   bottom:"30px"

}} > 
<ReactionBarSelector   onSelect={(label) => {
    if (label === 'satisfaction') {
        label = 'Like'
    }
    console.log("label", label)
    setReaction(label)
    if (label) {
        ReactionClick(label)
    }

}} /></Box>}
</IconButton>
          <IconButton sx={{ gap: "10px" }}>
            <i
              class="fa-regular fa-comment"
              style={{ height: "20px", width: "20px", fontSize: "14px" }}
            ></i>
            <Typography
              component="span"
              onClick={handleCommentClick}
              fontSize={"14px"}
            >
              comments
            </Typography>

            {/* <Typography >Comment</Typography> */}
          </IconButton>

          <IconButton sx={{ gap: "10px" }}>
            <RepeatOutlinedIcon fontSize="20px" />
            <Typography fontSize={"14px"}>Repost</Typography>
          </IconButton>

          <IconButton sx={{ gap: "10px" }}>
            <i
              class="fa-solid fa-paper-plane"
              style={{ height: "18px", width: "18px" }}
            ></i>
            <Typography fontSize={"14px"}>Send</Typography>
          </IconButton>
        </CardActions>
        {seecomment && (
          <>
            <Comment postId={postId} />
            {commentArray?.length > 0 &&
              commentArray?.map((comment) => {
                console.log(comment, "bcejkcekjbhv");
                return <CommentCard commentBody={comment} />;
              })}
          </>
        )}
      </Card>
    </Stack>
  );
}
// commentData={comment}
