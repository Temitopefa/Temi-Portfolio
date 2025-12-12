import React from 'react';
import { makeStyles } from "@mui/styles";
import { Stack, Theme, Typography, Button, Link } from "@mui/material";

interface CardType {
    title?: string;
    className?: string;
    image?: string;
    description?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    buttonText?: string;
    buttonText2?: string;
    stacks?: string;
    buttonLink?: string;
    buttonLink2?: string;
}

const Card: React.FC<CardType> = ({ title, image, className, description, onClick, buttonText, buttonText2, stacks, buttonLink, buttonLink2 }) => {
    const classes = useStyles();
    return (
        <Stack className={className} sx={{ height: "100%" }}>
            <div className={classes.card}>
                <img src={image} alt="Card Image" className={classes.image} />
                <div className={classes.content}>
                    <Typography variant="h6" className={classes.title}>
                        {title}
                    </Typography>
                    <Typography variant="body2" className={classes.description}>
                        {description}
                    </Typography>
                    <Typography variant="body2" className={classes.stacks}>
                        {stacks}
                    </Typography>
                    <div className={classes.buttons}>
                        <Link target='_blank' style={{ textDecoration: 'none', flex: 1 }}>
                            <Button variant="contained" fullWidth sx={{ backgroundColor: '#fff', color: '#000', '&:hover': { backgroundColor: '#e0e0e0' } }} href={buttonLink} onClick={onClick}>
                                {buttonText}
                            </Button>
                        </Link>
                        <Link target='_blank' style={{ textDecoration: 'none', flex: 1 }}>
                            <Button variant="outlined" fullWidth sx={{ borderColor: '#fff', color: '#fff', '&:hover': { borderColor: '#e0e0e0', backgroundColor: 'rgba(255,255,255,0.1)' } }} href={buttonLink2} onClick={onClick}>
                                {buttonText2}
                            </Button>
                        </Link>  
                    </div>
                </div>
            </div>
        </Stack>
    );
}

export default Card;

const useStyles = makeStyles((theme: Theme) => ({
    card: {
        display: "flex",
        flexDirection: "column",
        borderRadius: "16px", // Larger radius
        boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
        backgroundColor: "#2A2A2A", // Lighter dark background
        padding: theme.spacing(3),
        margin: theme.spacing(2),
        flexGrow: 1,
        height: "100%",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
        }
    },
    image: {
        width: "100%",
        height: "250px", // Reduced height
        marginBottom: theme.spacing(2),
        borderRadius: "12px",
        objectFit: "cover", // Cover to fill area nicely
    },
    content: {
        flexGrow: 1,
        display: "flex",
        flexDirection: "column", 
        gap: "0.75rem",
        justifyContent: "space-between",
    },
    title: {
        fontWeight: "800 !important",
        fontSize: "1.25rem !important",
        marginBottom: theme.spacing(0.5),
        fontFamily: "Manrope !important",
        color: "#fff", 
    },
    description: {
        color: "#B0B0B0",
        fontFamily: "Manrope !important",
        lineHeight: "1.6 !important",
        fontSize: "0.95rem !important",
        marginBottom: "1rem !important",
    },
    stacks: {
        color: "#4FD1C5", // Accent color for stacks
        fontFamily: "Manrope !important",
        fontSize: "0.85rem !important",
        fontWeight: "600 !important",
        marginBottom: "1rem !important",
    },
    buttons: {
        marginTop: "auto",
        display: "flex",
        gap: "1rem",
        fontFamily: "Manrope",
    },
}));