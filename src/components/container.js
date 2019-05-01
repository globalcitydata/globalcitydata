import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

const styles = {
  container: {
    margin: '0 auto',
    maxWidth: '1000px',
    padding: '4rem 1rem',
  },
};

const Container = ({ children, classes, className }) => (
  <div className={classNames(classes.container, className)}>
    {children}
  </div>
);

export default withStyles(styles)(Container);
