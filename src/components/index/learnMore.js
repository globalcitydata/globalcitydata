import React from 'react';
import { withStyles } from '@material-ui/core/styles';

// Components
import { IconButton, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-scroll';
import Markdown from '../markdown';
import Container from '../container';

const styles = {
  root: {
    textAlign: 'center',
    padding: '4rem 1rem 2rem',
  },
  learn: {
    fontSize: '1.4rem',
  },
};

const DownButton = ({ id, classes }) => (
  <div>
    <IconButton
      component={Link}
      to={id}
      spy
      smooth
      offset={-50}
      duration={700}
      color="inherit"
      aria-label="Down"
    >
      <ExpandMoreIcon fontSize="large" />
    </IconButton>
  </div>
);

const LearnMore = ({ classes }) => (
  <Container className={classes.root}>
    <Typography variant="body1" className={classes.learn}>Learn more</Typography>
    <DownButton id="tagsDescription" classes={classes} />
  </Container>
);

export default withStyles(styles)(LearnMore);
