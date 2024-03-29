import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ContactImg from "../images/Contact.png";
import { styled } from "@mui/material/styles";
import "../css/Contact.css";

const Contact = () => {
  const titleStyle = {
    fontFamily: "Lucida Console",
    fontSize: "4rem",
    textAlign: "center",
    paddingTop: "1rem",
  };

  const subtitleStyle = {
    fontSize: "2rem",
    textAlign: "center",
    paddingTop: "1rem",
  };

  const styleWrapper = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <Box component="div" className="background" sx={{ flexGrow: 1 }}>
      <Typography variant="h3" component="h1" sx={titleStyle}>
        Contact
      </Typography>
      <Grid
        container
        spacing={2}
        justify="center"
        sx={styleWrapper}
        alignItems="center"
        justifyContent="center"
      >
          <Grid item xs={12} sm={12} md={4}>
            <Typography variant="h3" component="h1" sx={subtitleStyle}>
                Social media links
            </Typography>
            
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            item 2
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            item 3
          </Grid>
        
      </Grid>
    </Box>
  );
};

export default Contact;
