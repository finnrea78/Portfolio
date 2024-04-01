import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import HealthTech from "../images/health-tech.png";

import "../css/About.css";

const About = React.forwardRef((props, ref) => {
  const titleStyle = {
    fontFamily: "Lucida Console",
    fontSize: "4rem",
    ml: {xs: "100%", sm: 0},
    justifyContent: "center",
    display: "flex",
    boxSizing: "border-box",
  };

  return (
    <Grid container spacing={2} className="background" sx={{ pb: 3 }}>
      <Grid item sm={12} sx={{ my: 2, py: 1}}>
        <Typography variant="h3" component="h1" sx={titleStyle} ref={ref}>
          About
        </Typography>
      </Grid>

      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        lg={6}
        display={"flex"}
        alignItems="flex-end"
        justifyContent="flex-end"
      >
        <Box
          component={"img"}
          src={HealthTech}
          display="flex"
          justifyContent="flex-end"
          
          sx={{
            m: "auto",
            mb: 3,
            p: 3,
            maxHeight: { xs: "100%", md: "100%" },
            maxWidth: { xs: "100%", md: "100%" },
          }}
          className="content"
        />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <Box sx={{ flexGrow: 1, pt: 3, pb: 2 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              p: 1,
              whiteSpace: "pre-wrap",
            }}
          >
            <Typography
              multiline="true"
              variant="body1"
              component="p"
              sx={{
                fontSize: { lg: "1em", xl: "1.5em" },
                textAlign: "justify",
                mr: 1,
              }}
            >
              Hi there! I'm Finn, currently a data scientist at roche with a
              intrested in the cross section between technology and healthcare.
              Trying to bring the benifits of tech into health. I'm always
              looking for new challenges and opportunities to learn and grow.
              Feel free to reach out to me if you have any questions or just
              want to chat! {"\n\n"}I graduated with a Bachelors in computer
              science from Newcastle University in 2023. Currently I am pursuing
              a Msc in data science at Exeter University. Outside of work I
              enjoy playing the guitar having played in multiple bands, playing
              frisbee (Newcastle pies) and BJJ.
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
});

export default About;
