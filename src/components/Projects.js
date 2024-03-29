import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import CoreBodyTemp from "../images/CoreBody.png";
import Knees from "../images/knees.png";
import Frog from "../images/Frog.png";
import "../css/Projects.css";

const projects = [
  {
    name: "Core Body Temperature Measuring",
    description: `This was modelling a corebody temperature measuring device using 
    2 sensors. The prjoect was done while shadowing at Imperial College London.`,
    image: CoreBodyTemp,
    link: "https://github.com/finnrea78/Core-body-temperature-measuring/tree/main",
  },
  {
    name: "Osteoarthritis Detection using AI",
    description: `This was my final year project for my dissertation. I used python
    to locate and extract the knee from an x-ray image. I then used a
    convolutional neural network to detect osteoarthritis in knees.`,
    image: Knees,
    link: "https://github.com/finnrea78/Dissertation/tree/master",
  },
  {
    name: "Frogger Learning Game",
    description: `A game built for learning times tables using an XNA frogger game. The game
    was built using C# and allowed for teacher interaction using windows forms and mySQL.`,
    image: Frog,
    link: "https://github.com/finnrea78/FroggerWindowsForms",
  },
];

const Projects = () => {
  const titleStyle = {
    fontFamily: "Lucida Console",
    fontSize: "4rem",
    textAlign: "center",
    paddingTop: "2rem",
  };

  return (
    <Box component="div" className="mainContainer">
      <Typography variant="h3" component="h1" sx={titleStyle}>
        Personal favourite projects
      </Typography>
      <Grid container justify="center">
        {projects.map((project, i) => (
          <Grid item xs={12} sm={12} md={4} key={i} className="card-postion">
            <Card className="cardContainer">
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={project.name}
                  height="160"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" href={project.link}>
                  github
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
