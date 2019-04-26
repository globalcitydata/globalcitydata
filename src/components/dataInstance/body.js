import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  body: {
    paddingLeft: '1rem',
  },
};

const Body = ({ children, classes }) => (
  <div className={classes.body}>{children}</div>
);

export default withStyles(styles)(Body);
