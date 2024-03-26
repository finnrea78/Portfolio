import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Finn from "C:/Portfolio/src/images/Me_pier.jpg";
import {ReactTyped} from "react-typed";

import "../css/Hero.css";



const Hero = () => {


  return (
    <Box component="div" sx={{  flexGrow: 1, pt: 3, pb: 0, backgroundColor: "#d3d3d3" }}>
      <Grid container spacing={3}>
        <Grid
          item
          xs={5}
          sx={{ ml: 10, pr: 3 }}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Box className="text">
            {/* Add on hover general kenobi */}

            <h3 className="easter_egg"> <span> Hello there! </span></h3>
            <h1>My name <u><b> Finn </b></u> </h1>
            <div className="inner-container">
                <h2> I am a {" "} 
                <ReactTyped
                    strings={[
                    "Data scientist",
                    "Software engineer",
                    "Open source enthusias",
                    ]}
                    typeSpeed={80}
                    backSpeed={30}
                    showCursor={true}
                    loop
                    style={{color: "purple", fontWeight: "boldest"}}
                />

            </h2>
                
            </div>
          </Box>
        </Grid>
        <Grid
          container
          sm={6}
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="right"
          sx={{ minHeight: "50vh" }}
          className="wrapper"
        >
          <Box
            component={"img"}
            sx={{
              height: 400,
            }}
            src={Finn}
            alt="Finn"
            className="image-align img-styling img"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
