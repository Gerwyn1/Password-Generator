import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import "../styles/globals.css";
import { theme } from "../src/theme/theme";
import { UserContextProvider } from "../src/context/UserContext";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <UserContextProvider>
        <CssBaseline />
        <Component {...pageProps} />
      </UserContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
