import React from "react";
import Logo from "./components/Logo";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Box from "@mui/material/Box";
import Projects from "./components/Projects";
import { Helmet } from "react-helmet";
import About from "./components/About";
import Contact from "./components/Contact";
import { createTheme, ThemeProvider } from "@mui/material";
import "./css/App.css";

const theme = createTheme({
  typography: {
    fontFamily: [
      "Lucida Console",
      "Courier New",
      "monospace",
      "sans-serif",
    ].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      
      <Box className="App" sx={{ font: "Lucida Console" }}>
        <Helmet>
          <style>{"body { background-color: white; }"}</style>
        </Helmet>
        <NavBar />
        <Hero />
        <About />
        <Projects/>
        <Contact />
      </Box>
    </ThemeProvider>
  );
}

export default App;
