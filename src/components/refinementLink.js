import React from 'react';
import { Link } from 'gatsby';
import { withStyles } from '@material-ui/core';

const styles = {};

const RefinementLink = ({ refinement, attr, children }) => (
  <Link to="/data/" state={{ attr, refinement }}>
    {children}
  </Link>
);

export default withStyles(styles)(RefinementLink);
