import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    margin: '0 auto',
    maxWidth: '900px',
    padding: '3rem 1rem',
  },
};

const Container = (props) => {
  const { children, classes } = props;
  return (
    <div className={classes.root} {...props}>
      {children}
    </div>
  );
};

export default withStyles(styles)(Container);
