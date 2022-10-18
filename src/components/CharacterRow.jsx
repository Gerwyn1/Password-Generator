import { Box, Typography } from "@mui/material";
import React from "react";

const CharacterRow = ({charValue}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Typography
        color="almostWhite"
        variant="bodyText"
        fontWeight="bold"
        fontStyle="normal"
      >
        Character Length
      </Typography>
      <Typography
        color="neonGreen"
        variant="headingL"
        fontWeight="bold"
        fontStyle="normal"
      >
        {charValue}
      </Typography>
    </Box>
  );
};

export default CharacterRow;
