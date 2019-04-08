import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button, Fab } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { Link, animateScroll as scroll } from 'react-scroll';

const styles = {
  fab: {
    marginTop: '1rem',
  },
};

const DownButton = ({ id, classes }) => (
  <div>
    <Fab
      component={Link}
      to={id}
      spy
      smooth
      // hashSpy
      offset={-50}
      duration={700}
      // delay={500}
      color="secondary"
      aria-label="Down"
      className={`${classes.fab} lift`}
    >
      <ArrowDownwardIcon />
    </Fab>
  </div>
);

export default withStyles(styles)(DownButton);
