import { Box, Stack } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SuggestionCard from "../suggestionsCard/SuggestionCard";
import { getConnectionSuggestions } from "../../../slices/connections.slice";

const Suggesstions = () => {
  console.log("sdfertreg");
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("inside useEffect");
    dispatch(getConnectionSuggestions());
  }, [dispatch]);
  const getSuggestions = useSelector(
    (state) => state.connections?.content
  );
console.log("get suggestions", getSuggestions);
  const isLoading = useSelector((state) => state.connections.isLoading);
  const error = useSelector((state) => state.connections.error);

  if (isLoading) {
    return "Loading....";
  }
  if (error) {
    return error;
  }
  console.log("get suggessdasfdsaf", getSuggestions);
  const handleOnClick = () => {
    console.log("component clicked", getSuggestions);
  };

  return (
    <Box>
      <Stack
        sx={{
          display: "grid",

          // justifyContent:"space-evenly",
          // alignItems:"center",
          textAlign: "center",
          alignItems: "center",

          gridTemplateColumns: " auto auto auto auto auto auto",
          gridGap: "30px",
          padding: "150px",
        }}
      >
        {getSuggestions?.map((suggestion) => {
          return (
            <SuggestionCard
              nameBody={suggestion.email}
              handleOnClick={handleOnClick}
            />
          );
        })}
      </Stack>
    </Box>
  );
};

export default Suggesstions;
