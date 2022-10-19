import React, { useContext } from "react";
import { Checkbox, FormControlLabel } from "@mui/material";

import { UserContext } from "../context/UserContext";

const FormRow = ({ value }) => {
  const { included, handleIncludedChange } = useContext(UserContext);

  return (
    <FormControlLabel
      sx={{
        "& .MuiCheckbox-root": { color: "almostWhite" },
        "& .Mui-checked": {
          color: "neonGreen",
        },
        "& .MuiFormControlLabel-label": {
          color: "almostWhite",
          fontWeight: "bold",
          fontStyle: "normal",
        },
      }}
      control={
        <Checkbox
          value={value}
          color="neonGreen"
          disableRipple={true}
          checked={included?.includes(value)}
          onChange={handleIncludedChange}
        />
      }
      label={value}
    />
  );
};

export default FormRow;
