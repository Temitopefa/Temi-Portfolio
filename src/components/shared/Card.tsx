import React from 'react';
import { makeStyles } from "@mui/styles";
import { Stack, Theme, Typography, Button } from "@mui/material";

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
        <Stack className={className}>
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
                        <Button variant="contained" color="primary" href={buttonLink} onClick={onClick}>
                            {buttonText}
                        </Button>
                        <Button variant="contained" color="secondary" href={buttonLink2} onClick={onClick}>
                            {buttonText2}
                        </Button>
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
        borderRadius: theme.spacing(1),
        boxShadow: theme.shadows[2],
        backgroundColor: "#333", 
        padding: theme.spacing(2),
        margin: theme.spacing(2), 
    },
    image: {
        width: "100%",
        height: "500px",
        marginBottom: theme.spacing(2),
        borderRadius: theme.spacing(1),
    },
    content: {
        flexGrow: 1,
        display: "flex",
        flexDirection: "column", 
        gap: "0.5rem",
    },
    title: {
        fontWeight: "bold",
        marginBottom: theme.spacing(1),
        fontFamily: "Manrope",
        color: "#fff", 
    },
    description: {
        color: "#DEDEDE",
        fontFamily: "Manrope",
    },
    stacks: {
        color: "#DEDEDE",
        fontFamily: "Manrope",
    },
    buttons: {
        marginTop: theme.spacing(2),
        display: "flex",
        fontFamily: "Manrope",
        justifyContent: "space-between",
    },
}));