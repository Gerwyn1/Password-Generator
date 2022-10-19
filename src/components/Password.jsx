import React, { useContext } from "react";
import Typography from "@mui/material/Typography";

import { UserContext } from "../context/UserContext";

const Password = () => {
  const { mobile } = useContext(UserContext);

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
