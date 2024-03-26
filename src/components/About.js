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
    <Grid container spacing={2} sx={{ pb: 0 }} className="background">
      <Grid item sm={12} sx={{ mt: 3, mb: 3 }}>
        <Typography variant="h3" component="h1" sx={titleStyle}>
          About
        </Typography>
      </Grid>

      <Grid item xs={6} >
            <Box
                component={"img"}
                src={HealthTech}
                sx={{
                   
                    alignItems: "center",
                    justifyContent: "center",
                }}
                className="content"
            />
        </Grid>
      <Grid item xs={6}>
        <Box sx={{ flexGrow: 1, pt: 3, pb: 0 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              pb: 10,
              flexDirection: "column",
              whiteSpace: "pre-wrap",
            }}
          >
            <Typography
              multiline
              variant="body1"
              component="p"
              className="text-block"
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
              Roche.{"\n\n"}Outside of work I enjoy playing the guitar having played
              in multiple bands, playing frisbee (Newcastle pies) and squash. 
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default About;
