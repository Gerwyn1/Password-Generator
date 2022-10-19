import React from "react";
import { Checkbox, FormControlLabel } from "@mui/material";

const FormRow = ({ value, included, handleIncludedChange }) => {
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
