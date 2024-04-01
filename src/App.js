import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Box from "@mui/material/Box";
import Projects from "./components/Projects";
import { Helmet } from "react-helmet";
import About from "./components/About";
import Contact from "./components/Contact";
import { createTheme, ThemeProvider } from "@mui/material";
import {useRef} from 'react';


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

const App = () => {

  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const heroRef = useRef(null);

  const headerHeight = 95; 
  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop - headerHeight,
      behavior: 'smooth'
    });
  };

  const handleScroll = (page) => {
    switch (page) {
      case "About":
        scrollToRef(aboutRef);
        break;
      case "Projects":
        scrollToRef(projectsRef);
        break;
      case "Contact":
        contactRef.current.scrollIntoView({ behavior: 'smooth' })
        break;
      default:
        window.scrollTo({top: 0, behavior: "smooth"} );
        break;
    }
  }
  console.log(window.location)


  return (
    <ThemeProvider theme={theme}>
      
      <Box className="App" sx={{ font: "Lucida Console" }}>
        <Helmet>
          <style>{"body { background-color: white; }"}</style>
        </Helmet>
        <NavBar handleScroll={handleScroll} />
        <Hero ref={heroRef}/>
        <About ref={aboutRef}/>
        <Projects ref={projectsRef}/>
        <Contact ref={contactRef}/>
      </Box>
    </ThemeProvider>
  );
}

export default App;
