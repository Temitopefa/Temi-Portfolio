import React from "react";
import { arrow1, sample1, sample2, sample3, zummit1 } from "../../assets/img";
import { makeStyles } from "@mui/styles";
import { Stack, Theme, Box } from "@mui/material";
import { NavHashLink } from 'react-router-hash-link';

const Featured: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <NavHashLink to="/#work">
        <Stack direction="row" className={classes.arrow}>
          <img src={arrow1} alt="arrow1" />
          <p className={classes.featured}>Projects</p> 
        </Stack>
      </NavHashLink> 
      <Stack direction="row" className={classes.wrapImg1} id="feature">
        <img src={sample3} alt="sample3" className={classes.img1} />
        <img src={sample1} alt="sample1" className={classes.img2} />
        <img src={zummit1} alt="zummit1" className={classes.img3} />
        <img src={sample2} alt="sample2" className={classes.img4} />
      </Stack>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
  },
  arrow: {
    display: "flex",
    alignItems: "center",
    gap: "32px",
    cursor: "pointer",
    marginLeft:"7rem",
    [theme.breakpoints.down("md")]: { 
      marginLeft: "3rem",
    },
    [theme.breakpoints.down("sm")]: { 
      marginLeft: "1rem",
    },
  },
  featured: {
    color: "#DEDEDE",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "16px",
    letterSpacing: "1.5px",
    textTransform: "uppercase",
  },
  wrapImg1: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: "2rem",
    padding: "1rem",
    flexShrink: 0,
    animation: "$slideIn 3s ease-out forwards",
  },
  "@keyframes slideIn": {
    "0%": {
      transform: "translateY(100%)",
    },
    "100%": {
      transform: "translateY(0)", 
    },
  },
  img1: {
    maxWidth: "612px",
    height: "888px",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    flex: 1,
    borderRadius: "4px",
    cursor: "pointer",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)", 
    transition: "transform 0.3s ease-in-out", 
    "&:hover": {
      transform: "scale(1.05)", 
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: "400px",
      height: "600px",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
  },
  img2: {
    maxWidth: "612px",
    height: "888px",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    marginTop: "10rem",
    borderRadius: "4px",
    cursor: "pointer",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)", 
    transition: "transform 0.3s ease-in-out", 
    "&:hover": {
      transform: "scale(1.05)",
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: "400px",
      height: "600px",
      marginTop: "auto",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%", 
      height: "auto",
      marginTop: "auto",
    },
  },
  img3: {
    maxWidth: "612px",
    height: "888px",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    marginTop: "-10rem",
    borderRadius: "4px",
    cursor: "pointer",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)", 
    transition: "transform 0.3s ease-in-out", 
    "&:hover": {
      transform: "scale(1.05)", 
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: "400px",
      height: "600px",
      marginTop: "1rem",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%", 
      height: "400px",
      marginTop: "1rem",
    },
  },
  img4: {
    maxWidth: "612px",
    height: "888px",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    borderRadius: "4px",
    cursor: "pointer",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
    transition: "transform 0.3s ease-in-out", 
    "&:hover": {
      transform: "scale(1.05)", 
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: "400px",
      height: "600px",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%", 
      height: "auto",
    },
  },
}));

export default Featured;
