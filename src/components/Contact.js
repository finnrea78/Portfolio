import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { Button } from "@mui/material";
import FinnCv from "../images/Finn Rea.pdf";
import "../css/Contact.css";

const Contact = React.forwardRef((props, ref) => {
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

  const links = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    mx: { xs: 10, sm: 15, md: 3, lg: 5, xl: 10 },
    mt: 1,
    mb: 2,
  };
  const linkItem = {
    fontSize: { xs: "5em", md: "5em" },
    "&:hover": {
      color: "gray",
      cursor: "pointer",
    },
  };

  const onDownload = () => {
    const link = document.createElement("a");
    link.download = "FinnCv";
    link.href = FinnCv;
    link.target = "_blank";
    link.click();
  };

  return (
    <Box component="div" className="background" sx={{ flexGrow: 1 }}>
      <Typography variant="h3" component="h1" sx={titleStyle} ref={ref}>
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
            Links
          </Typography>
          <Box sx={links}>
            <GitHubIcon
              sx={linkItem}
              onClick={(event) => window.open("https://github.com/finnrea78")}
            />
            <LinkedInIcon
              sx={linkItem}
              onClick={(event) =>
                window.open("https://www.linkedin.com/in/finn-rea-a336ab205/")
              }
            />
            <EmailIcon
              sx={linkItem}
              onClick={(event) => window.open("mailto:finn.t.rea@gmail.com")}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Typography variant="h3" component="h1" sx={subtitleStyle}>
            Details
          </Typography>
          <Typography
            multiline="true"
            variant="body1"
            component="p"
            sx={{
              display: "flex",
              textAlign: { sm: "justify", md: "center", lg: "justify" },
              alignItems: "center",
              justifyContent: "center",
              whiteSpace: "pre-wrap",
              fontSize: "1.5Rem",
              mt: 1,
            }}
          >
            Email: finn.t.rea@gmail.com{"\n"}
            Mobile number: 07701345676
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Typography variant="h3" component="h1" sx={subtitleStyle}>
            CV
          </Typography>
          <Box
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              onClick={onDownload}
              variant="filled"
              size="large"
              sx={{ fontSize: "2em", pt: 1 }}
            >
              <ListAltIcon sx={{ fontSize: "2em" }} />
              Download CV
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
});

export default Contact;
