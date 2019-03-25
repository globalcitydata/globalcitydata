import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { withStyles } from '@material-ui/core/styles';

// Components
import { Carousel } from 'grommet';
import { Typography, Button } from '@material-ui/core';

const styles = {
  showcaseWrapper: {
    position: 'relative',
    textAlign: 'center',
    marginTop: '65px',
    '@media (max-width: 720px)': {
      marginTop: '55px',
    },
  },
  helloButton: {
    marginTop: '1rem',
  },
  imagesWrapper: {
    maxHeight: '500px',
    filter: 'brightness(40%)',
  },
  contentWrapper: {
    position: 'absolute',
    left: '50%',
    top: '20%',
    transform: 'translate(-50%, 0)',
    color: 'white',
    '@media (max-width: 1400px)': {
      top: '15%',
    },
    '@media (max-width: 1000px)': {
      top: '12%',
      width: '60%',
    },
    '@media (max-width: 720px)': {
      top: '10%',
      width: '80%',
    },
  },
  welcomeHeader: {
    paddingBottom: '10px',
    '@media (max-width: 1000px)': {
      fontSize: '30px',
    },
    '@media (max-width: 720px)': {
      fontSize: '25px',
    },
  },
  welcomeMessage: {
    paddingBottom: '15px',
    '@media (max-width: 1000px)': {
      fontSize: '22px',
    },
    '@media (max-width: 720px)': {
      fontSize: '18px',
    },
  },
};

const WelcomeImages = ({ images, classes }) => (
  <div className={classes.imagesWrapper}>
    <Carousel fill play={6000}>
      {images.map((img, i) => (
        <Img fixed={img.fixed} key={i} />
      ))}
    </Carousel>
  </div>
);

const Showcase = ({ showcaseData, classes }) => {
  const { primaryMessage, secondaryMessage, welcomeImages } = showcaseData;
  return (
    <div className={classes.showcaseWrapper}>
      <WelcomeImages images={welcomeImages} classes={classes} />
      <div className={classes.contentWrapper}>
        <Typography
          variant="h4"
          color="inherit"
          // style={{ marginBottom: '1rem' }}
          className={classes.welcomeHeader}
        >
          {primaryMessage}
        </Typography>
        <Typography
          variant="body2"
          color="inherit"
          className={classes.welcomeMessage}
        >
          {secondaryMessage}
        </Typography>
        <Button
          variant="contained"
          component={Link}
          to="/data/"
          className={`${classes.helloButton} lift`}
        >
          Explore Data
        </Button>
      </div>
    </div>
  );
};

export default withStyles(styles)(Showcase);
