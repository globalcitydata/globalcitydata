import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Paper, Link } from '@material-ui/core';

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
      <Typography variant="body1" gutterBottom>
        We
        {'  '}
        <span role="img" aria-label="love">
          ❤️
        </span>
        {'  '}
        <Link
          href="https://github.com/globalcitydata/globalcitydata"
          target="_blank"
          rel="noopener"
        >
          open source code
        </Link>
        {'  '}
        as well as open data.
      </Typography>
    </div>
  </Paper>
);

export default withStyles(styles)(Footer);
