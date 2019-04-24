import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Paper } from '@material-ui/core';

const styles = {
  root: {
    padding: '5rem 0',
  },
  content: {
    padding: '0 1rem',
    margin: '0 auto',
    textAlign: 'center',
    maxWidth: '900px',
  },
};

const Footer = ({ classes }) => (
  <Paper className={classes.root}>
    <div className={classes.content}>
      <Typography variant="body2" gutterBottom>
        Placeholder for actual footer content
      </Typography>
    </div>
  </Paper>
);

export default withStyles(styles)(Footer);
