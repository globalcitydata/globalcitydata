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
    width: '100%',
    maxWidth: '3000px',
    margin: '0 auto',
    filter: 'brightness(30%)',
  },
  content: {
    position: 'absolute',
    width: '900px',
    left: '50%',
    top: '24%',
    transform: 'translate(-50%, 0)',
    color: 'white',
    [theme.breakpoints.down('md')]: {
      width: '80%',
      fontSize: '3rem',
    },
    [theme.breakpoints.down('sm')]: {
      width: '90%',
      fontSize: '2.5rem',
    },
    [theme.breakpoints.down('xs')]: {
      width: '90%',
      fontSize: '1.9rem',
    },
  },
});

const HeroContent = ({ title, classes }) => (
  <div>
    <Typography variant="h1" color="inherit" className={classes.content}>
      {title}
    </Typography>
  </div>
);

const NonStretchedImage = (props) => {
  let normalizedProps = props;
  const height = props.h || 200;
  const maxWidth = props.maxWidth || 3000;
  if (props.fluid) {
    normalizedProps = {
      ...props,
      style: {
        ...(props.style || {}),
        maxWidth,
        height,
        margin: '0 auto', // Used to center the image
      },
    };
  }

  return <Img {...normalizedProps} />;
};

const Background = ({ img, classes, h }) => {
  const height = h || '200px';
  return (
    <div>
      {img ? (
        <div className={classes.imgWrapper}>
          {img.fixed && <Img fixed={img.fixed} style={{ height }} />}
          {img.fluid && <Img fluid={img.fluid} style={{ height }} />}
        </div>
      ) : (
        <div style={{
          height,
          width: '100%',
          background: 'linear-gradient(to left, #00c9ff, #92fe9d)',
        }}
        />
      )}
    </div>
  );
};

const Hero = ({
  img, title, h, classes,
}) => (
  <div className={classes.root}>
    <Background img={img} classes={classes} h={h} />
    <HeroContent title={title} classes={classes} />
  </div>
);

export default withStyles(styles)(Hero);
