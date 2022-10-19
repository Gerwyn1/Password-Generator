import React from "react";
import Typography from "@mui/material/Typography";

const Password = ({ mobile }) => {
  return (
    <Typography
      variant={mobile ? "headingM" : "headingL"}
      sx={{
        opacity: "0.25",
        color: "almostWhite",
        fontStyle: "normal",
        fontWeight: "bold",
      }}
    >
      P4$5W0rD!
    </Typography>
  );
};

export default Password;
