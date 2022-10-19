import React from "react";
import Slider from "@mui/material/Slider";

const Slide = ({ charValue, setCharValue }) => {
  const handleChange = (event, newValue) => {
    setCharValue(newValue);
  };

  return (
    <Slider
      sx={(theme) => ({
        height: "8px",
        borderRadius: 0,
        "& .MuiSlider-thumb": {
          backgroundColor: "almostWhite",
          "&.Mui-focusVisible, &:hover": {
            boxShadow: "none",
          },
          "&.Mui-active": {
            backgroundColor: "veryDarkGrey",
            border: `2px solid ${theme.palette.neonGreen}`,
            boxShadow: "none",
          },
        },
        ".MuiSlider-track": {
          backgroundColor: "neonGreen",
          border: 0,
        },
        "& .MuiSlider-rail": {
          backgroundColor: "veryDarkGrey",
          opacity: 1,
        },
      })}
      size="medium"
      aria-label="Volume"
      value={charValue}
      onChange={handleChange}
      min={0}
      max={18}
    />
  );
};

export default Slide;
