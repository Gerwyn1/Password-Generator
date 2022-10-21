import React, { useState, useEffect, useContext } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { StrengthBar } from "../styled/styled";
import { UserContext } from "../context/UserContext";
import { generatePassword, gaugeStrength, barColor } from "../utils/utils";

const Strength = ({ setPassword, placeholder }) => {
  const { mobile, included, charValue } = useContext(UserContext);
  const [strength, setStrength] = useState("TOO WEAK");

  useEffect(() => {
    placeholder.current = generatePassword(charValue, included, setPassword);
    gaugeStrength(placeholder.current, setStrength, charValue, included);
    // eslint-disable-next-line
  }, [included, charValue]);

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
      <Stack
        sx={{
          gap: "1rem",
          flexDirection: "row",
          alignItems: "center",
          "@media (max-width:290px)": {
            gap: 0,
          },
        }}
      >
        <Typography
          variant={mobile ? "bodyText" : "headingM"}
          sx={{
            color: "almostWhite",
            fontStyle: "normal",
            fontWeight: "bold",
            "@media (max-width:325px)": {
              fontSize: "16px",
              lineHeight: "21px",
              ml: 1,
            },
            "@media (max-width:300px)": {
              ml: 0,
            },
          }}
        >
          {strength}
        </Typography>
        <Stack direction="row" gap="0.5rem">
          <StrengthBar backgroundColor={barColor(strength, 1)}></StrengthBar>
          <StrengthBar backgroundColor={barColor(strength, 2)}></StrengthBar>
          <StrengthBar backgroundColor={barColor(strength, 3)}></StrengthBar>
          <StrengthBar backgroundColor={barColor(strength, 4)}></StrengthBar>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Strength;
