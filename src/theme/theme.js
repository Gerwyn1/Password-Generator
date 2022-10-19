import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export let theme = createTheme({
  components: {
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontSize: "18px",
          lineHeight: "24px",
          "@media (max-width:425px)": {
            fontSize: "16px",
            lineHeight: "21px",
          },
        },
      },
    },
  },
  palette: {
    grey: "#817D92",
    darkGrey: "#24232C",
    veryDarkGrey: "#18171F",
    almostWhite: "#E6E5EA",
    neonGreen: "#A4FFAF",
    yellow: "#F8CD65",
    orange: "#FB7C58",
    red: "#F64A4A",
  },
  typography: {
    headingL: {
      fontSize: "32px",
      lineHeight: "42px",
    },
    headingM: {
      fontSize: "24px",
      lineHeight: "31px",
    },
    bodyText: {
      fontSize: "18px",
      lineHeight: "24px",
    },
    mobileBodyText: {
      fontSize: "16px",
      lineHeight: "21px",
    },
    fontFamily: "JetBrains Mono",
  },
});

theme = responsiveFontSizes(theme);
