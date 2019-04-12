import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const styles = {
  title: {
    // paddingBottom: '0',
  },
};

const Title = ({ children, classes }) => (
  <Typography variant="h6" className={classes.title}>
    {children}
  </Typography>
);

export default withStyles(styles)(Title);
