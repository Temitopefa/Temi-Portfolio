import React from 'react'
import { ThemeProvider, createTheme  } from "@mui/material";
import Router from "./Router";


const theme = createTheme({
  palette: {
    primary: {
      main: '#007bff', 
    },
    secondary: {
      main: '#e91e63', 
    },
  },
});


const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  )
}

export default App
