import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, useMediaQuery } from "@mui/material";

import "../styles/globals.css";
import { theme } from "../src/theme/theme";
import { UserContext } from "../src/context/UserContext";

function MyApp({ Component, pageProps }) {
  const mobile = useMediaQuery("(max-width:425px)");
  const [included, setIncluded] = React.useState([]);
  
  const handleIncludedChange = (e) => {
    const index = included.indexOf(e.target.value);
    if (index === -1) setIncluded([...included, e.target.value]);
    else setIncluded(included.filter((include) => include !== e.target.value));
  };

  return (
    <ThemeProvider theme={theme}>
      <UserContext.Provider value={{ mobile, included, handleIncludedChange }}>
        <CssBaseline />
        <Component {...pageProps} />
      </UserContext.Provider>
    </ThemeProvider>
  );
}

export default MyApp;
