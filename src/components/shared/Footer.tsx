import React from "react";
import { makeStyles } from "@mui/styles";
import { Stack, Theme, Box, Typography } from "@mui/material";
import { FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { NavHashLink } from "react-router-hash-link";

const SOCIAL = [
  { icon: <FaTwitter />, to:"https://twitter.com/Faluta5", color: "#DEDEDE",} ,
  { icon: <FaLinkedin />, to:"/https://www.linkedin.com/in/temitope-faluta-255527166/", color: "#DEDEDE",},
  { icon: <FaWhatsapp />, to:"https://wa.link/2lqmjq", color: "#DEDEDE",},
];
const Footer: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Stack direction="row">
        <Typography className={classes.made}>
          Made by
           <span style={{ color: "#ECECEC" }}>
            Temitope Faluta
          </span>
          -Copyright 2023
        </Typography>
      </Stack>
      <Stack direction="row" className={classes.social}>
        {SOCIAL.map((item, index) => {
          return(
            <NavHashLink 
              key={index}
              to={item.to}
              style={{ color: item.color }} 
              >
              {item.icon}
            </NavHashLink>
          )
        })}
      </Stack>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    height: "100px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: "7rem",
    borderTop: '2px solid #696969',
    justifyContent: "space-between",
    padding: "4rem",
    [theme.breakpoints.down("sm")]: {
      display:"flex",
      width: "100%",
      flexDirection: "column-reverse",
      marginTop: "4rem",
      height: "auto",
      padding: "2rem",
      gap:"2rem",
    },
  },
  made: {
    display: "flex",
    color: "#959595",
    fontFamily: "Manrope",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "36px",
    letterSpacing: "-0.5px",
    gap:"4px",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "1rem",
      textAlign: "center",
      fontSize:"15px !important",
      display: "flex",
      gap:"3px",
    },
  },
  social:{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  }
}));

export default Footer;
