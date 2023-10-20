import React, { useState, useRef } from "react";
import { Button, TextField, CircularProgress, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import * as emailjs from "@emailjs/browser";
import { toast } from "react-toastify";


interface ContactFormProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ContactForm: React.FC<ContactFormProps> = ({ setOpen }) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "service_42serlr",
        "template_4t4fm2r",
        form.current,
        "DDzsVRrk5IdBOptHG"
      )
      .then(
        () => {
          toast.success("Message sent");
          setLoading(false);
          setOpen(false); 
        },
        () => {
          toast.error("Error");
          setLoading(false);
          setOpen(false); 
        }
      );
  };

  return (
    <>
      <form onSubmit={sendEmail} ref={form} className={classes.form}>
        <TextField
          label="Name"
          name="user_name"
          type="text"
          required
          className={classes.input}
        />
        <TextField
          label="Email"
          name="user_email"
          type="email"
          required
          className={classes.input}
        />
        <TextField
          label="Message"
          name="message"
          required
          multiline
          rows={4}
          className={classes.input}
        />
        <Stack direction="row" gap={2} style={{ display:"flex", justifyContent:"center", alignItems:"center"}}>
          <Button type="submit" className={classes.button} disabled={loading}>
            {loading ? <CircularProgress size={24} /> : "Submit"}
          </Button>
          <Button onClick={() => setOpen(false)} className={classes.closeButton}>
            Close
          </Button>
        </Stack>
       
      </form>
    </>
  );
};

const useStyles = makeStyles({
  form: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#e0e0eb", 
    padding: "20px",
    borderRadius: "10px",
    width: "90%", 
    maxWidth: "800px", 
    margin: "auto", 
    marginTop: "5%",
    gap:"2rem", 
  },
  input: {
    marginBottom: "10px",
    padding: "10px", 
  },
  button: {
    alignSelf: "center",
    marginTop: "10px",
    padding: "10px", 
    backgroundColor: "#3f51b5 !important", 
    color: "#fff !important", 
    '&:hover': {
      backgroundColor: "green !important",
    },
    '&:disabled': {
      backgroundColor: "#ccc", 
    },
  },
  closeButton: {
    alignSelf: "center",
    marginTop: "10px",
    padding: "10px", 
    backgroundColor: "#f44336 !important", 
    color: "#fff !important",
    '&:hover': {
      backgroundColor: "red !important", 
    },
  },
});

export default ContactForm;
