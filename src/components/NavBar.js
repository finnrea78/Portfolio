import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Main_logo from "C:/Portfolio/src/images/Logo.png";
import CssBaseline from "@mui/material/CssBaseline";
import { Link } from "react-scroll";
import { useState } from "react";

import "../css/NavBar.css";

const pages = ["About", "Projects", "Contact"];

const NavBar = ({ handleScroll }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const path = window.location.pathname;


  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="sticky" sx={{ bgcolor: "gray" }} className="font">
        <Container maxWidth="xl">
          {/* Icon logo */}
          <Toolbar disableGutters>
            <Box
              onClick={() => handleScroll("")}
              component={"img"}
              sx={{
                height: 40,
                display: { xs: "none", md: "flex" },
                mr: 3,
                filter: "invert(1)",
              }}
              src={Main_logo}
              alt="Main_logo"
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              onClick={() => handleScroll("Hero")}
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 600,
                letterSpacing: ".3rem",
               
                color: "inherit",
                textDecoration: "none",
              }}
              className="font"
            >
              Finn Rea
            </Typography>

            {/* This is the menu when smaller */}

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" onClick={() => handleScroll(page)}>{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* This is the menu when smaller */}

            {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}

            <Box
              component={"img"}
              onClick={() => handleScroll("Hero")}
              sx={{
                height: 40,
                display: { xs: "flex", md: "none" },
                mr: 3,
                filter: "invert(1)",
              }}
              src={Main_logo}
              alt="Main_logo"
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
              onClick={() => handleScroll("Hero")}
              className="font"
            >
              Finn Rea
            </Typography>

            {/* Display all the pages */}

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "right",
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  // onClick={() => handleScroll(page)}
                  onClick={ () => handleScroll(page)}
                  
                  sx={{
                    my: 1,
                    mx: 0.5,
                    color: "white",
                    display: "block",
                    fontFamily: "monospace",
                    fontWeight: 400,
                    fontSize: "1.2rem",
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </React.Fragment>
  );
};
export default NavBar;
