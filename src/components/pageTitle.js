import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const styles = {
  title: {
    paddingBottom: '3rem',
  },
};

const PageTitle = ({ children, classes }) => (
  <Typography variant="h3" className={classes.title}>
    {children}
  </Typography>
);

export default withStyles(styles)(PageTitle);
