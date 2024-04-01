import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Finn from "C:/Portfolio/src/images/Me_pier.jpg";
import { ReactTyped } from "react-typed";

import "../css/Hero.css";

const Hero = React.forwardRef((props, ref) => {
  return (
    <Box
      component="div"
      sx={{ flexGrow: 1, backgroundColor: "#d3d3d3" }}
    >
      <Grid container spacing={2} direction={"row"}>
        <Grid
          item
          display={"flex"}
          xs={12}
          sm={10}
          md={6}
          xl={6}
          sx={{
            pl: 3,
            m: "auto",
          }}
          
          alignItems="center"
          justifyContent="center"
        >
          <Box className="text" sx={{pl: 3, textAlign: {xs: "center", sm: "center", md: "center", lg:"left"}}} >
            {/* Add on hover general kenobi */}

            <h3 className="easter_egg" ref={ref}>
              {" "}
              <span> Hello there! </span>
            </h3>

            <h1>
              My name{" "}
              <u>
                <b> Finn</b>
              </u>{" "}
              {/* <u>
                <b>Rea</b>
              </u>{" "} */}
            </h1>
            <div className="inner-container">
              <h2>
                {" "}
                I am a{" "}
                <ReactTyped
                  strings={[
                    "Data scientist",
                    "Software engineer",
                    "Open source enthusiast",
                  ]}
                  typeSpeed={80}
                  backSpeed={30}
                  showCursor={true}
                  loop
                  style={{ color: "purple", fontWeight: "boldest" }}
                />
              </h2>
            </div>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          xl={6}
          display={"flex"}
          alignItems="flex-end"
          justifyContent="flex-end"
        >
          <Box
            component={"img"}
            display="flex"
            justifyContent="flex-end"
            sx={{
              m: "auto",
              mb: 3,
              p: 3,
              maxHeight: { xs: "100%", md: "100%" },
              maxWidth: { xs: "100%", md: "100%" },
            }}
            src={Finn}
            alt="Finn"
            className="image-align img"
          />
        </Grid>
      </Grid>
    </Box>
  );
});

export default Hero;
