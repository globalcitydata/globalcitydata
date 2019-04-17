import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    padding: '1rem 0',
  },
};

const Section = ({ children, classes }) => (
  <div className={classes.root}>{children}</div>
);

export default withStyles(styles)(Section);
