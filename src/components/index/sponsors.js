import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

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

const Sponsors = ({ sponsors, classes }) => {
  console.log(sponsors);
  return (
    <div className={classes.root}>
      <Typography variant="h4">Sponsors</Typography>
    </div>
  );
};

export default withStyles(styles)(Sponsors);
