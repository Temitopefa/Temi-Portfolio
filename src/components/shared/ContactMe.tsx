import React, {useState} from "react";
import { makeStyles } from "@mui/styles";
import { Theme, Box, Typography, Button } from "@mui/material";
import { envilope } from "../../assets/img";
import ContactForm from "./ContactForm";


const ContactMe: React.FC = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false)

  return (
    <Box className={classes.root} id="contact">
      <Typography variant="h4" className={classes.header}>
        Contact Me
      </Typography>
      <Typography variant="h6" className={classes.text}>
        If you are looking to hire a Frontend Developer, <br />
        I’m currently available for freelance work
      </Typography>

      <Button variant="contained" className={classes.btn} onClick={() => setOpen(true)}>
        <img
          src={envilope}
          alt="envilope"
          style={{ width: "20px", height: "16px " }}
        />
        <p
          style={{
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "normal",
            textTransform:"lowercase"
          }}
        >
          temitopefaluta@gmail.com
        </p>
      </Button>
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
  text:{
    color: '#959595',
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
    alignItems: "center",
    gap: "16px",
    borderRadius: "4px",
    animation: "$fadeIn 0.5s ease-in-out",
    transition: "transform background-color opacity 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.2)",
      backgroundColor: "#7D7D7D !important", 
    },
    backgroundColor: "#9D9D9D !important",
    [theme.breakpoints.down("sm")]: {
      width: "auto",
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
}));
export default ContactMe;
