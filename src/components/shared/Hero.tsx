import { Stack, Theme, Box, Typography } from "@mui/material";
import { makeStyles, useTheme } from "@mui/styles";
import React from "react";
import { passport } from "../../assets/img";
import { BiLogoTailwindCss } from "react-icons/bi";
import { DiDjango } from "react-icons/di";
import { SiMui, SiTypescript } from "react-icons/si";
import { FaGit, FaHtml5, FaJsSquare, FaCss3, FaPython, FaReact } from "react-icons/fa";




const Hero: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme<Theme>();

  const STACKS = [
    { icon: <FaHtml5 />, color: "#E34C26", name: "HTML5" },
    { icon: <FaJsSquare />, color: "#F7DF1E", name: "JavaScript" },
    { icon: <FaCss3 />, color: "#1572B6", name: "CSS3" },
    { icon: <FaReact />, color: "#61DAFB", name: "React" },
    { icon: <SiMui />, color: theme.palette.primary.main, name: "Material UI" },
    { icon: <FaGit />, color: "#FF0000", name: "Git" },
    { icon: <SiTypescript />, color: "#3776AB", name: "Django" },
    { icon: <FaPython />, color: "#3776AB", name: "Python" },
    { icon: <BiLogoTailwindCss />, color: "#38B2AC", name: "Tailwind CSS" },
    { icon: <DiDjango />, color: "#3776AB", name: "Django" },
  ];
  return (
    <Box className={classes.root}>
      <div className={classes.mainwrapper}>
        <div className={classes.wrapper}>
          <Typography variant="h2" className={classes.heroText}>
            Hi, I am Temitope Faluta
            <br />
            A Frontend Engineer <br />
            based in Lagos Nigeria.
          </Typography>
          <Typography variant="h5" className={classes.heroText2}>
            I help businesses and companies achieve <br />
            their objectives by creating user-centric digital<br />
            products & interactive experiences as a frontend developer.
          </Typography>
          <Stack direction="row" className={classes.stacks}>
            {STACKS.map((item, index) => {
              return (
                <div
                  key={index}
                  style={{ color: item.color }}
                  className={classes.iconContainer}
                >
                  {item.icon}
                  <span className={classes.iconName}>{item.name}</span>
                </div>
              );
            })}
          </Stack>
        </div>
        <div className={classes.heroImg}>
          <img
            src={passport}
            alt="passport"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    backgroundColor: "#202020",
    padding: "5rem 3em",
    marginTop: "2rem",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      padding: "inherit",
    },
  },
  mainwrapper: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: "4rem",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column-reverse",
      justifyContent: "center",
      gap: "2rem",
      alignItems: "center",
      padding: "2rem",
      width: "100%",
    },
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    
  },

  [theme.breakpoints.down("sm")]: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  heroText: {
    color: "#DEDEDE",
    fontFamily: "Manrope",
    fontSize: "64px",
    fontStyle: "normal",
    fontWeight: 700,
    width: "824px",
    lineHeight: "70px",
    letterSpacing: "-0.5px",
    animation: "$fadeIn 10s ease", 
    [theme.breakpoints.down("md")]: {
      fontSize: "48px",
      width: "80%",
    },
    [theme.breakpoints.down("sm")]: { 
      fontSize: "32px",
      width: "90%",
    },
  },
  "@keyframes fadeIn": {
    from: {
      opacity: 0, 
    },
    to: {
      opacity: 1, 
    },
  },
  heroText2: {
    color: "#959595",
    fontFamily: "Manrope",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "36px",
    letterSpacing: "-0.5px",animation: "$fadeIn 10s ease", 
   
    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
    },
  },
  heroImg: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    border: "2px solid yellow",
    width: "400px",
    height: "400px",
    flexShrink: 0,
    overflow: "hidden",
    [theme.breakpoints.down("md")]: {
      width: "300px",
      height: "300px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "200px",
      height: "200px",
    },
  },
  stacks:{
    display: "flex",
    fontSize: "30px",
    gap: "1rem",
    color: "#959595",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexWrap:"wrap",
    },
  },
  iconContainer: {
    position: "relative",
    cursor: "pointer",
    "&:hover $iconName": {
      opacity: 1,
      visibility: "visible",
    },
  },
  iconName: {
    position: "absolute",
    top: "100%",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "#000",
    color: "#fff",
    padding: "0.5rem",
    borderRadius: "4px",
    fontSize: "14px",
    opacity: 0,
    visibility: "hidden",
    transition: "opacity 0.3s ease, visibility 0.3s ease",
  },

}));
export default Hero;
