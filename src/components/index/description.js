import React from 'react';
import { withStyles } from '@material-ui/core/styles';

// Components
import { IconButton } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-scroll';
import Markdown from '../markdown';
import Container from '../container';

const styles = {
  root: {
    padding: '10px 0',
    fontSize: '1.2rem',
    textAlign: 'center',
  },
  intro: {
    paddingBottom: '8px',
  },
  btn: {
    margin: '0 auto',
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
      color="white"
      aria-label="Down"
    >
      <ExpandMoreIcon fontSize="large" />
    </IconButton>
  </div>
);

const Description = ({ intro, classes }) => (
  <div className={classes.root}>
    <Container>
      <Markdown className={classes.intro}>{intro}</Markdown>
      <DownButton id="tagSections" classes={classes} />
    </Container>
  </div>
);

export default withStyles(styles)(Description);
