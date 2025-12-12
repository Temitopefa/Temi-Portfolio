

import React from "react";
import { arrow1, loginPage, sample1, iotDashboard, zummit1 } from "../../assets/img";
import { makeStyles } from "@mui/styles";
import { Stack, Theme, Box, Typography } from "@mui/material";
import { NavHashLink } from 'react-router-hash-link';

const FEATURED_PROJECTS = [
  { id: 1, image: loginPage, title: "Login Page Overlay", description: "Authentication Interface" },
  { id: 2, image: sample1, title: "Dashboard UI", description: "User Analytics Dashboard" },
  { id: 3, image: zummit1, title: "Zummit Africa", description: "Corporate Website" },
  { id: 4, image: iotDashboard, title: "IoT Dashboard", description: "IoT Dashboard" },
];

const Featured: React.FC = () => {
  const classes = useStyles();
  
  return (
    <Box className={classes.root}>
      <NavHashLink to="/#work" style={{ textDecoration: 'none' }}>
        <Stack direction="row" className={classes.header}>
          <img src={arrow1} alt="arrow" className={classes.arrowIcon} />
          <Typography className={classes.sectionTitle}>Featured Projects</Typography> 
        </Stack>
      </NavHashLink> 
      
      <div className={classes.gridContainer} id="feature">
        {FEATURED_PROJECTS.map((project) => (
          <div key={project.id} className={classes.projectCard}>
            <img src={project.image} alt={project.title} className={classes.projectImage} />
            <div className={classes.overlay}>
              <Typography variant="h5" className={classes.projectTitle}>{project.title}</Typography>
              <Typography variant="body2" className={classes.projectDesc}>{project.description}</Typography>
            </div>
          </div>
        ))}
      </div>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    padding: "4rem 0",
    maxWidth: "1280px",
    margin: "0 auto",
  },
  header: {
    display: "flex",
    alignItems: "center",
    gap: "1.5rem",
    marginBottom: "3rem",
    cursor: "pointer",
    paddingLeft: "7rem",
    [theme.breakpoints.down("md")]: { 
      paddingLeft: "3rem",
    },
    [theme.breakpoints.down("sm")]: { 
      paddingLeft: "1.5rem",
    },
  },
  arrowIcon: {
    transition: "transform 0.3s ease",
    "&:hover": {
        transform: "translateX(5px)",
    }
  },
  sectionTitle: {
    color: "#DEDEDE",
    fontSize: "16px !important",
    fontWeight: "700 !important",
    letterSpacing: "1.5px !important",
    textTransform: "uppercase",
    fontFamily: "Manrope !important",
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "2rem",
    padding: "0 7rem",
    animation: "$fadeIn 1s ease-out forwards",
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "1fr",
      padding: "0 3rem",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0 1.5rem",
    },
  },
  "@keyframes fadeIn": {
    "0%": { opacity: 0, transform: "translateY(20px)" },
    "100%": { opacity: 1, transform: "translateY(0)" },
  },
  projectCard: {
    position: "relative",
    borderRadius: "12px",
    overflow: "hidden",
    height: "500px",
    cursor: "pointer",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
      "& $overlay": {
        opacity: 1,
      },
      "& $projectImage": {
        transform: "scale(1.05)",
      },
    },
    [theme.breakpoints.down("sm")]: {
        height: "350px",
    }
  },
  projectImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.5s ease",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    padding: "2rem",
    opacity: 0,
    transition: "opacity 0.3s ease",
  },
  projectTitle: {
    color: "#fff",
    fontWeight: "700 !important",
    marginBottom: "0.5rem !important",
    fontFamily: "Manrope !important",
    transform: "translateY(0)",
  },
  projectDesc: {
    color: "#ccc",
    fontFamily: "Manrope !important",
  },
}));

export default Featured;
