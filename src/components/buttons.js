import React from 'react';
import { Link } from 'gatsby';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  btn: {
    marginTop: '1rem',
    position: 'relative',
    top: '0',
    transition: 'top ease 0.2s',
    '&:hover': {
      top: '-3px',
      // boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.25)',
      boxShadow: '0 10px 10px -6px rgba(0, 0, 0, 0.25)',
    },
  },
};

const ButtonLink = (props) => {
  const { children, to, classes } = props;
  return (
    <Button component={Link} to={to} {...props} className={classes.btn}>
      {children}
    </Button>
  );
};

export default withStyles(styles)(ButtonLink);
