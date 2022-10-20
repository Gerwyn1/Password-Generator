import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";

import { UserContext } from "../context/UserContext";

const CharacterRow = () => {
  const { mobile, charValue } = useContext(UserContext);

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
        variant={mobile ? "mobileBodyText" : "bodyText"}
        fontWeight="bold"
        fontStyle="normal"
      >
        Character Length
      </Typography>
      <Typography
        color="neonGreen"
        variant={mobile ? "headingM" : "headingL"}
        fontWeight="bold"
        fontStyle="normal"
      >
        {charValue}
      </Typography>
    </Box>
  );
};

export default CharacterRow;
