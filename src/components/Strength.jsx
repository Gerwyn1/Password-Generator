import React, { useContext } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { StrengthBar } from "../styled/styled";
import { UserContext } from "../context/UserContext";

const Strength = () => {
  const { mobile } = useContext(UserContext);

  return (
    <Box
      sx={{
        height: "4.5rem",
        backgroundColor: "veryDarkGrey",
        py: mobile ? 1 : 3,
        px: mobile ? 1 : 4,
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography
        variant={mobile ? "mobileBodyText" : "bodyText"}
        sx={{
          color: "grey",
          fontStyle: "normal",
          fontWeight: "bold",
        }}
      >
        STRENGTH
      </Typography>
      <Stack direction="row" gap="1rem">
        <Typography
          variant={mobile ? "bodyText" : "headingM"}
          sx={{
            color: "almostWhite",
            fontStyle: "normal",
            fontWeight: "bold",
            "@media (max-width:300px)": {
              display: "none",
            },
          }}
        >
          MEDIUM
        </Typography>
        <Stack direction="row" gap="0.5rem">
          <StrengthBar backgroundColor="transparent"></StrengthBar>
          <StrengthBar backgroundColor="transparent"></StrengthBar>
          <StrengthBar backgroundColor="transparent"></StrengthBar>
          <StrengthBar backgroundColor="transparent"></StrengthBar>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Strength;
