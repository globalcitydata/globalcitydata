import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const styles = {
  body: {
    paddingLeft: '1rem',
  },
};

const Body = ({ children, classes }) => (
  <Typography paragraph className={classes.body}>
    {children}
  </Typography>
);

export default withStyles(styles)(Body);
