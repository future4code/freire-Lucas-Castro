import React from "react";
import {Router} from "./routes/Router"
import { ThemeProvider } from '@mui/material/styles';
import {theme} from "./constants/theme";

const App=()=> {
  return (
    <ThemeProvider theme={theme}>
      <Router/>
    </ThemeProvider>
  );
}

export default App;
