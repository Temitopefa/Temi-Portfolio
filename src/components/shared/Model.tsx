import { makeStyles } from "@mui/styles";
import { Stack, Box } from "@mui/material";

interface imageType {
    clickedImg: string;
    handleRotationRight: () => void;
    handelRotationLeft: () => void;
    setClickedImg: (img: string | null) => void;
}

const Model = ({ clickedImg, handleRotationRight, handelRotationLeft, setClickedImg }: imageType) => {
  const classes = useStyles();
  

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    if (
      target.classList.contains("dismiss") ||
      target.classList.contains("overlayDismiss") ||
      target.tagName === "IMG"
    ) {
      setClickedImg(null);
    }
  }
  

  return (
    <>
      <Box className={`${classes.overlayDismiss} overlayDismiss`} onClick={handleClick}>
        <img src={clickedImg} alt="bigger picture" />
        <span className="dismiss" onClick={handleClick}>
          X
        </span>
        <Stack onClick={handelRotationLeft} className={classes.arrow_left}>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </Stack>
        <Stack onClick={handleRotationRight} className={classes.arrow_right}>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </Stack>
      </Box>
    </>
  );
}

const useStyles = makeStyles(() => ({
    overlayDismiss: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(27, 27, 27, 0.541)',
        display: 'flex',
        alignItems: 'center',
        "& img": {
            display: 'block',
            maxWidth: '60%',
            maxHeight: '80%',
            margin: '60px auto',
            boxShadow: '3px 5px 7px rgba(0, 0, 0, 0.5)',
          },
          "& span" : {
            position: 'absolute',
            top: '20px',
            right: '20px',
            fontSize: '30px',
            color: '#ffffff',
            zIndex: 999,
            cursor: 'pointer',
      },
    },

    arrow_left:{
        display: 'flex',
        backgroundColor: '#6d6d6d',
        justifyContent: 'space-between',
        position: 'absolute',
        top: '50%',
        width: '50px',
        height: '50px',
        left: 0,
        zIndex: 999,
        "& svg" :{
            width: '50px',
            height: '50px',
        },
      },
      
    arrow_right:{
        display: 'flex',
        backgroundColor: '#6d6d6d',
        justifyContent: 'space-between',
        position: 'absolute',
        right: 0,
        width: '50px',
        height: '50px',
        top: '50%',
        zIndex: '999',
        "& svg" :{
            width: '50px',
            height: '50px',
        },
    },
}));

export default Model