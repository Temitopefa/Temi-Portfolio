import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Theme, Box, Typography } from "@mui/material";
import ContactForm from "./ContactForm";
import { BsEnvelopeAt } from "react-icons/bs";

const ContactMe: React.FC = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <Box className={classes.root} id="contact">
      <Typography variant="h4" className={classes.header}>
        Contact Me
      </Typography>
      <Typography variant="h6" className={classes.text}>
        If you are looking to hire a Frontend Developer, <br />
        I’m currently available for freelance work
      </Typography>

      <button className={classes.btn} onClick={() => setOpen(true)}>
        <BsEnvelopeAt
          style={{ width: "20px", height: "16px", color: "#959595 !important" }}
        />
        <p className={classes.p}>temitopefaluta@gmail.com</p>
      </button>
      {open && <ContactForm setOpen={setOpen} />}
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    marginTop: "9rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "2rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: "6rem",
    },
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
  text: {
    color: "#959595",
    textAlign: "center",
    fontFamily: "Manrope",
    fontSize: "24px",
    fontWeight: 700,
    lineHeight: "38px",
    letterSpacing: "-0.5px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
    },
  },
  btn: {
    width: "400px",
    height: "64px",
    padding: "16px 48px",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    gap: "16px",
    border: "0px solid",
    outline: "2px solid",
    color: "#959595",
    outlineColor: "#959595",
    outlineOffset: "0px",
    textShadow: "none",
    cursor: "pointer",
    position: "relative",
    textDecoration: "none",
    backgroundColor: "#202020",
    transition: "all 550ms cubic-bezier(.36,.63,.5,.73)",
    "&:hover": {
      border: "2px solid #FF9950",
      outlineColor: "#202020",
      outlineOffset: "15px",
      color: "#FF9950",
    },
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      width: "350px",
    },
  },
  p: {
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
    textTransform: "lowercase",
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
    },
  },
}));
export default ContactMe;
