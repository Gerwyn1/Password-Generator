import Typography from "@mui/material/Typography";
import React from "react";

const Title = () => {
  return (
    <Typography
      color="grey"
      sx={{
        height: "2rem",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "1.5rem",
        lineHeight: "2rem",
        margin: "0 auto 2rem auto",
        textAlign: "center",
        "@media (max-width: 290px)": {
          fontSize: "1rem",
        },
      }}
    >
      Password Generator
    </Typography>
  );
};

export default Title;
