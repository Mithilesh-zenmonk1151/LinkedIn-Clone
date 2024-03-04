import TuneIcon from '@mui/icons-material/Tune';
import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
export default function MessageSearch() {
  return (
    <Paper
      component="form"
      sx={{
        display: "flex",
        alignItems: "center",
        width: 250,
        height: 35,
        bgcolor: "#eef3f8",
        borderBottom: "white",
        boxShadow: "none",
        marginBottom: "10px"
      }}
    >
     <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Google Maps"
        inputProps={{ "aria-label": "search google maps" }}
      />
       <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <TuneIcon />
      </IconButton>
     
    </Paper>
  );
}
