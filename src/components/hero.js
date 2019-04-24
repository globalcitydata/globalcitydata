import React from 'react';
import Img from 'gatsby-image';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const styles = theme => ({
  root: {
    position: 'relative',
    overflow: 'hidden',
  },
  imgWrapper: {
    filter: 'brightness(30%)',
    background: {
      size: 'cover',
      position: 'center',
    },
  },
  bgGradient: {
    height: '200px',
    width: '100%',
    background: 'linear-gradient(to left, #00c9ff, #92fe9d)',
  },
  content: {
    position: 'absolute',
    width: '900px',
    left: '50%',
    top: '24%',
    transform: 'translate(-50%, 0)',
    color: 'white',
    '@media (max-width: 1200px)': {
      width: '80%',
    },
  },
});

const HeroContent = ({ title, classes }) => (
  <div>
    <Typography variant="h3" color="inherit" className={classes.content}>
      {title}
    </Typography>
  </div>
);

const Background = ({ img, classes }) => (
  <div>
    {img ? (
      <div className={classes.imgWrapper}>
        <Img fixed={img.fixed} />
      </div>
    ) : (
      <div className={classes.bgGradient} />
    )}
  </div>
);

const Hero = ({ img, title, classes }) => (
  <div className={classes.root}>
    <Background img={img} classes={classes} />
    <HeroContent title={title} classes={classes} />
  </div>
);

export default withStyles(styles)(Hero);
