import React from "react";
import { makeStyles } from "@mui/styles";
import { Theme, Box, Typography, Paper } from "@mui/material";
import { FaReact, FaNodeJs, FaGitAlt, FaFigma, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiNextdotjs, SiTailwindcss, SiMui, SiRedux, SiMongodb } from "react-icons/si";

const SKILLS = [
  { name: "React", icon: <FaReact color="#61DAFB" /> },
  { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
  { name: "Next.js", icon: <SiNextdotjs color="#ffffff" /> },
  { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
  { name: "Redux", icon: <SiRedux color="#764ABC" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" /> },
  { name: "Material UI", icon: <SiMui color="#0081CB" /> },
  { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
  { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
  { name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
  { name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> },
  { name: "Git", icon: <FaGitAlt color="#F05032" /> },
  { name: "Figma", icon: <FaFigma color="#F24E1E" /> },
];

const Visual: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography variant="h4" className={classes.header}>
        My Tech Stack
      </Typography>
      <div className={classes.grid}>
        {SKILLS.map((skill, index) => (
          <Paper key={index} className={classes.card} elevation={0}>
            <div className={classes.iconWrapper}>{skill.icon}</div>
            <Typography className={classes.skillName}>{skill.name}</Typography>
          </Paper>
        ))}
      </div>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    marginTop: "9rem",
    padding: "0 2rem",
    maxWidth: "1280px",
    margin: "0 auto",
  },
  header: {
    color: "#DEDEDE",
    textAlign: "center",
    fontFamily: "Manrope",
    fontSize: "36px",
    fontWeight: 700,
    lineHeight: "normal",
    letterSpacing: "-0.5px",
    marginBottom: "8rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "28px",
      marginBottom: "2rem",
    },
  },
  grid: {
    display: "grid",
    marginTop: "2rem",
    gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
    gap: "2rem",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "1rem",
    }
  },
  card: {
    backgroundColor: "#2A2A2A !important",
    borderRadius: "16px !important",
    padding: "2rem 1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
    cursor: "pointer",
    transition: "all 0.3s ease",
    border: "1px solid rgba(255,255,255,0.05)",
    "&:hover": {
      transform: "translateY(-5px)",
      backgroundColor: "#333333 !important",
      border: "1px solid rgba(255,255,255,0.2)",
      boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
      "& $iconWrapper": {
        transform: "scale(1.1)",
      },
    },
  },
  iconWrapper: {
    fontSize: "3rem",
    transition: "transform 0.3s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  skillName: {
    color: "#DEDEDE",
    fontFamily: "Manrope !important",
    fontWeight: "600 !important",
    fontSize: "1rem !important",
  },
}));

export default Visual;
