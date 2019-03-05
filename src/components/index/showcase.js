import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { withStyles } from '@material-ui/core/styles';

// Components
import { Carousel } from 'grommet';
import { Typography, Button } from '@material-ui/core';
// import ButtonLink from '../buttons';

const styles = {
  showcaseWrapper: {
    position: 'relative',
    textAlign: 'center',
    marginTop: '60px',
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
    padding: '0 0.5rem',
    color: 'white',
    fontSize: '1rem',
    '@media(max-width: 1400px': {
      top: '10%',
      fontSize: '0.8rem',
    },
    '@media(maxWidth: 1000px)': {
      top: '5%',
      fontSize: '0.6rem',
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
        <Typography variant="h4" color="inherit" gutterBottom>
          {primaryMessage}
        </Typography>
        <Typography variant="body2" color="inherit" gutterBottom>
          {secondaryMessage}
        </Typography>
        {/* <ContainedButton label="Explore Data" href="/data/" /> */}
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
