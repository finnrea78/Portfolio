import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import HealthTech from "../images/health-tech.png";
import "../css/About.css";

const About = () => {
  const titleStyle = {
    fontFamily: "Lucida Console",
    fontSize: "4rem",
    textAlign: "center",
  };

  return (
    <Grid container spacing={2} className="background" sx={{pb:3}}>
      <Grid item sm={12} sx={{ mt: 2, mb: 1 }}>
        <Typography variant="h3" component="h1" sx={titleStyle}>
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
            p: 5,
            ml:2,
            maxHeight: { xs: "100%", md: "100%" },
            maxWidth: { xs: "100%", md: "100%" },
          }}
          className="content"
        />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <Box sx={{ flexGrow: 1, pt: 3, pb: 0 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              p: 1,
              whiteSpace: "pre-wrap",
            }}
          >
            <Typography
              multiline
              variant="body1"
              component="p"
              sx={{ fontSize: "1em", textAlign: "justify", mr: 1}}
            >
              Hi there! I'm Finn, a data scientist and software engineer. I'm
              passionate about open source. I am particularly intrested in the
              cross section between technology and healthcare, bring the
              benifits of tech into health. I'm always looking for new
              challenges and opportunities to learn and grow. Feel free to reach
              out to me if you have any questions or just want to chat! {"\n\n"}
              I am currently a data scientist at Roche based in welwyn garden
              city. I graduate with a bachelors in computer science from
              Newcastle University in 2023. I am currently pursuing a masters in
              data science at Exeter University, while working full time at
              Roche.{"\n\n"}Outside of work I enjoy playing the guitar having
              played in multiple bands, playing frisbee (Newcastle pies) and
              squash.
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default About;
