import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  Box,
  Stack,
  List,
  ListItem,
  ListItemText,
  Theme,
  useMediaQuery,
} from "@mui/material";
import { makeStyles, useTheme } from "@mui/styles";
import { NavHashLink } from "react-router-hash-link";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { resume } from "../../assets/img";

import { FaGithub, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";


const LINKS = [
  { name: "Home", to: "/#" },
  { name: "Work", to: "/#work" },
  { name: "Contact", to: "/#contact" },
];

const SOCIAL = [
  { icon: <FaGithub />, to:"https://github.com/Temitopefa"},
  { icon: <FaTwitter />, to:"https://twitter.com/Faluta5"},
  { icon: <FaLinkedin />, to:"/https://www.linkedin.com/in/temitope-faluta-255527166/"},
  { icon: <FaWhatsapp />, to:"https://wa.link/2lqmjq"},
];




const Navbar:React.FC = () => {
  const classes = useStyles();
  const theme = useTheme<Theme>();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = useState(false);



  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleLinkClick = () => {
    if (isMobile) {
      setOpen(false);
    }
  };

  return (
    <>
      <AppBar
        position={isMobile ? "static" : "fixed"} 
        sx={{ backgroundColor: "#323232B2" }}
      >
        <Toolbar>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ width: "100%" }}
          >
            <Typography variant="h6" className={classes.navLogo}>
              Temy T
            </Typography>
            <a href={resume} download="Temitope Faluta Resume">
              <button className={classes.fadeIn}>
                My Resume
              </button>
            </a>
            <Stack direction="row" className={classes.icons}>
              {SOCIAL.map((item, index) => {
                return(
                  <NavHashLink 
                    key={index}
                    to={item.to} 
                    >
                    {item.icon}
                  </NavHashLink>
                )
              })}
            </Stack>
            {isMobile ? (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={toggleDrawer}
                sx={{ display: { sm: "block", md: "none" } }}
              >
                {open ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            ) : (
              <Box className={classes.navMenu}>
                <Stack direction="row" alignItems="center">
                  {LINKS.map((link, index) => (
                    <NavHashLink
                      key={index}
                      to={link.to}
                      className={classes.inactiveLink}
                      onClick={handleLinkClick}
                    >
                      {link.name}
                    </NavHashLink>
                  ))}
                </Stack>
              </Box>
            )}
          </Stack>
        </Toolbar>
      </AppBar>
      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer}
        sx={{ display: { xs: "block", sm: "none", width: "100%" } }}
        PaperProps={{ sx: { backgroundColor: "black" } }}
      >
        <List>
          {LINKS.map((link, index) => (
            <ListItem button key={index} onClick={handleLinkClick}>
              <ListItemText>
                <NavHashLink
                  to={link.to}
                  className={classes.inactiveLink}
                  onClick={handleLinkClick}
                >
                  {link.name}
                </NavHashLink>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  navLogo: {
    color: "#DEDEDE",
    fontFamily: "Manrope",
    fontSize: "24px", 
    fontStyle: "normal",
    fontWeight: 800,
    lineHeight: "normal",
    letterSpacing: "-0.5px",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", 
  },
  inactiveLink: {
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "24px",
    padding: "10px 20px",
    margin: "0 10px",
    cursor: "pointer",
    textTransform: "capitalize",
    color: theme.palette.grey[300],
    "&:hover": {
      color: "#FFF",
    },
  },
  icons: {
    fontWeight: 500,
    fontSize: "30px",
    lineHeight: "24px",
    gap: "1rem",
    "& a": {
      display: "flex",
      justifyContent: "space-between",
      cursor: "pointer",
      textTransform: "capitalize",
      alignItems: "center",
      transition: "transform 0.3s ease-in-out",
      color: "#DEDEDE", 
    },
    "& a:hover": {
      transform: "scale(1.2)", 
    },
    [theme.breakpoints.down("sm")]: {
      gap: "0.5rem",
      fontSize: "15px",
      "& a:hover": {
        transform: "scale(1.2)", 
      },
    },
  },
  navMenu: {
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      display: "none",
      maxWidth: "100%",
    },
  },
  fadeIn: {
    backgroundColor: "#323232",
    color: "#FFFFFF",
    borderRadius: "8px",
    padding: "10px 20px",
    fontSize: "16px",
    fontWeight: 500,
    cursor: "pointer",
    transition: "transform opacity 0.3s ease-in-out",
    "&:hover": {
      backgroundColor: "#424242",
      transform: "scale(1.2)",
    },
    opacity: 0,
    animation: "$fadeIn 0.5s ease-in-out forwards",
  },
  "@keyframes fadeIn": {
    from: {
      opacity: 0, 
    },
    to: {
      opacity: 1, 
    },
  },
}));

export default Navbar;
