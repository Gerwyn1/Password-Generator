import React, { useContext } from "react";
import Typography from "@mui/material/Typography";

import { UserContext } from "../context/UserContext";

const Password = () => {
  const { mobile, password } = useContext(UserContext);

  return (
    <Typography
      variant={mobile ? "headingM" : "headingL"}
      noWrap
      sx={{
        opacity: password === "P4$5W0rD!" ? "0.25" : "1",
        color: "almostWhite",
        fontStyle: "normal",
        fontWeight: "bold",
        "@media (max-width:350px)": {
          fontSize: "16px",
          lineHeight: "21px",
        },
      }}
    >
      {password}
    </Typography>
  );
};

export default Password;
