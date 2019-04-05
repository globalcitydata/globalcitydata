import React from 'react';
import { Link } from 'gatsby';
import { withStyles } from '@material-ui/core/styles';

// Components
import { Fab } from '@material-ui/core';
import { Element } from 'react-scroll';
import Container from '../container';
import Markdown from '../markdown';

const styles = {
  root: {
    padding: '1rem 0',
    fontSize: '1.2rem',
    textAlign: 'center',
  },
  intro: {
    paddingBottom: '1.5rem',
  },
  btn: {
    margin: '0 auto',
  },
};

const Description = ({ intro, classes }) => (
  <Element name="description">
    <div className={classes.root}>
      <Container>
        <Markdown className={classes.intro}>{intro}</Markdown>
        <Fab
          color="primary"
          variant="extended"
          component={Link}
          to="/data/"
          className={`${classes.btn} lift`}
        >
          Explore Data
        </Fab>
      </Container>
    </div>
  </Element>
);

export default withStyles(styles)(Description);
