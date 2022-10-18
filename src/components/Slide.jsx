import React from "react";
import Slider from "@mui/material/Slider";

const Slide = ({ charValue, setCharValue }) => {
  const handleChange = (event, newValue) => {
    setCharValue(newValue);
  };
  return (
    <Slider
      sx={(theme) => ({
        height: "6px",
        borderRadius: 0,
        "& .MuiSlider-thumb": {
          backgroundColor: "almostWhite",
        },
        "& .MuiSlider-thumb.Mui-focusVisible": {
          backgroundColor: "veryDarkGrey",
          boxShadow: "transparent 0 0 0 0",
        },
        "& .MuiSlider-track": {
          backgroundColor: "neonGreen",
          border: 0,
        },
        "& .MuiSlider-rail": {
          backgroundColor: "veryDarkGrey",
          opacity: 1,
        },
        "& .Mui-active": {
          backgroundColor: "veryDarkGrey",
          border: `2px solid ${theme.palette.neonGreen}`,
        },
        // "& .Mui-focusVisible": {
        //   boxShadow: "transparent 0 0 0 0",
        // },  
      })}
      size="medium"
      aria-label="Volume"
      value={charValue}
      onChange={handleChange}
      min={0}
      max={128}
    />
  );
};

export default Slide;
