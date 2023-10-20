import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";
import { PROJECTS } from "../../data";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Card from "./Card";

const Project: React.FC = () => {
  const classes = useStyles();

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    arrow: true,
    responsive: [
      {
        breakpoint: 1200, 
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Box className={classes.root} id="work">
      <Typography variant="h4" className={classes.text}>
        Personal Projects
      </Typography>
      <div className={classes.wrapper}>
        <Slider {...settings}>
          {PROJECTS.map((project, index) => (
            <div key={index}>
              <Card {...project} buttonLink={project.buttonLink} buttonLink2={project.buttonLink2}  />
            </div>
          ))}
        </Slider>
      </div>
    </Box>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    marginTop: "9rem",
  },
  text: {
    color: "#DEDEDE",
    textAlign: "center",
    fontFamily: "Manrope",
    fontSize: "36px",
    fontWeight: 700,
    lineHeight: "normal",
    letterSpacing: "-0.5px",
  },
  wrapper: {
    gap: "1rem",
    justifyContent: "center",
    marginTop: "3rem",
    margin: "1rem",
    padding: "1rem",
    width: "auto",
    animation: "$slideIn 2s ease-out forwards",
  },
  "@keyframes slideIn": {
    "0%": {
      transform: "translateY(100%)", 
    },
    "100%": {
      transform: "translateY(0)", 
    },
  },
  project: {
    width: "100% !important",
    height: "auto",
    borderRadius: "4px !important",
    margin: "2rem !important",
  },
  "@global": {
    ".slick-dots li button:before": {
      color: "#ff0000",
      fontSize: "12px",
    },
    ".slick-dots li.slick-active button:before": {
      color: "#00ff00", 
    },
  },
}));

export default Project;
