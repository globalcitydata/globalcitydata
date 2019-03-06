import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    margin: '3rem auto',
    maxWidth: '900px',
    padding: '0 1rem',
  },
};

const Container = ({ children, classes }) => (
  <div className={classes.root}>{children}</div>
);

export default withStyles(styles)(Container);
