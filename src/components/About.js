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
    textAlign: "center",
    justifyContent: "center",
    display: "flex",
    boxSizing: "border-box",
  };

  return (
    
    <Grid container spacing={2} className="background" sx={{ pb: 3 }} >
      <Grid item sm={12} sx={{ my: 2, py: 1, ml: { xs: 25, sm: 0 } }}>
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
        alignItems="center"
        justifyContent="center"
      >
        <Box
          component={"img"}
          src={HealthTech}
          sx={{
            p: { sm: 2 },
            mx: { sm: 5 },
            display: "flex",
            maxHeight: { md: "100%" },
            maxWidth: { md: "100%" },
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
              Hi there! I'm Finn. I am currently a data scientist at roche. I am
              particularly intrested in the cross section between technology and
              healthcare, bring the benifits of tech into health. I'm always
              looking for new challenges and opportunities to learn and grow.
              Feel free to reach out to me if you have any questions or just
              want to chat! {"\n\n"}I graduate with a bachelors in computer
              science from Newcastle University in 2023. I am currently pursuing
              a masters in data science at Exeter University. Outside of work I
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
