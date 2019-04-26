import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import classNames from 'classnames';

const styles = {
  title: {
    // paddingBottom: '0',
  },
};

const Title = ({ children, className }) => (
  <Typography variant="h6" className={classNames(className)}>
    {children}
  </Typography>
);

export default withStyles(styles)(Title);
