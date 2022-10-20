import React, { useContext } from "react";
import { Box, Button, Typography } from "@mui/material";

import { generatePassword } from "../utils/utils";
import { UserContext } from "../context/UserContext";

const GenerateButton = ({ setPassword }) => {
  const { charValue, included } = useContext(UserContext);

  return (
    <Button
      onClick={() => generatePassword(charValue, setPassword, included)}
      disableRipple={true}
      sx={(theme) => ({
        backgroundColor: "neonGreen",
        width: "100%",
        height: "4.0625rem",
        borderRadius: "0",
        "&:hover": {
          border: `1px solid ${theme.palette.neonGreen}`,
          color: "neonGreen",
          backgroundColor: "transparent",
          ".MuiTypography-root": {
            color: "neonGreen",
          },
        },
        "&:hover path": {
          fill: theme.palette.neonGreen,
        },
      })}
    >
      <Typography
        variant="bodyText"
        sx={{
          height: "1.5rem",
          fontStyle: "normal",
          color: "darkGrey",
          fontWeight: "bold",
        }}
      >
        Generate
      </Typography>
      <Box ml={3} mt={0.3}>
        <svg
          width="0.75rem"
          height="0.75rem"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.10547 12L11.1054 6.00002L5.10547 0L3.84045 1.26501L7.68094 5.10547L0 5.10547V6.8946L7.68094 6.8946L3.84045 10.735L5.10547 12Z"
            fill="#24232C"
          />
        </svg>
      </Box>
    </Button>
  );
};

export default GenerateButton;
