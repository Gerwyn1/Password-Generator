import Typography from "@mui/material/Typography";
import React from "react";

const Title = ({ mobile }) => {
  return (
    <Typography
      variant={mobile ? "bodyText" : "headingM"}
      color="grey"
      sx={{
        fontStyle: "normal",
        fontWeight: "bold",
        textAlign: "center",
        mt: 1,
      }}
    >
      Password Generator
    </Typography>
  );
};

export default Title;
