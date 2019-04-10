import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link, animateScroll as scroll } from 'react-scroll';

const styles = {};

const DownButton = ({ id, classes }) => (
  <div>
    <IconButton
      component={Link}
      to={id}
      spy
      smooth
      offset={-50}
      duration={700}
      color="white"
      aria-label="Down"
    >
      <ExpandMoreIcon />
    </IconButton>
  </div>
);

export default withStyles(styles)(DownButton);
