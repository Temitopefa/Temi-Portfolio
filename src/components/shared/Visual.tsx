import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Stack, Theme, Box, Typography } from "@mui/material";
import { DATA } from "../../data";
import Model from "./Model";

const Visual: React.FC = () => {
  const classes = useStyles();
  const [clickedImg, setClickedImg] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (item: { image: string }, index: number) => {
    setCurrentIndex(index);
    setClickedImg(item.image);
  };

  const handleRotationRight = () => {
    const totalLenght = DATA.length;
    if (currentIndex + 1 >= totalLenght) {
      setCurrentIndex(0);
      const newUrl = DATA[0].image;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = DATA.filter((item) => {
      return DATA.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].image;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLenght = DATA.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLenght - 1);
      const newUrl = DATA[totalLenght - 1].image;
      setClickedImg(newUrl);
    }
    const newIndex = currentIndex - 1;
    const newUrl = DATA.filter((item) => {
      return DATA.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].image;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  return (
    <Box className={classes.root}>
      <Typography variant="h4" className={classes.header}>
        Visual Explorations
      </Typography>
      <Stack direction="row" className={classes.wrapper}>
        {DATA.map((item, index) => {
          return (
            <div key={index}>
              <img
                src={item.image}
                className={classes.visual}
                onClick={() => handleClick(item, index)}
              />  
            </div>
          );
        })}
      </Stack>
      {clickedImg && (
        <Model
          clickedImg={clickedImg}
          handelRotationLeft={handelRotationLeft}
          setClickedImg={setClickedImg}
          handleRotationRight={handleRotationRight}
        />
      )}
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    marginTop: "9rem",
  },
  header: {
    color: "#DEDEDE",
    textAlign: "center",
    fontFamily: "Manrope",
    fontSize: "36px",
    fontWeight: 700,
    lineHeight: "normal",
    letterSpacing: "-0.5px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px",
    },
  },
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
    justifyContent: "center",
    marginTop: "3rem",
    padding: "1rem",
  },
  visual: {
    width: "400px",
    height: "408px",
    borderRadius: "4px",
    cursor: "pointer",
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)", 
    transition: "transform 0.3s ease",
    "&:hover": {
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
      transform: "scale(1.05)",
    },
    [theme.breakpoints.down("md")]: {
      width: "300px",
      height: "308px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%", 
      height: "auto", 
    },
  },
}));

export default Visual;
