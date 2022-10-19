import React, { useContext } from "react";
import Typography from "@mui/material/Typography";

import { UserContext } from "../context/UserContext";

const Title = () => {
  const { mobile } = useContext(UserContext);
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
