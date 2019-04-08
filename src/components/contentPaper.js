import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

const styles = theme => ({
  paper: {
    padding: '3rem',
    [theme.breakpoints.down('sm')]: {
      padding: '1.5rem',
    },
  },
});

const ContentPaper = (props) => {
  const { children, classes } = props;
  return <Paper className={classes.paper}>{children}</Paper>;
};

export default withStyles(styles)(ContentPaper);
