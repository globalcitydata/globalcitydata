import React from 'react';
import { withStyles } from '@material-ui/core/styles';

// Components
import { Element } from 'react-scroll';
import Markdown from '../markdown';
import Container from '../container';

const styles = {
  root: {
    maxWidth: '720px',
    textAlign: 'center',
    padding: '2rem 1rem',
  },
  intro: {
    fontSize: '1.1rem',
    margin: '25px auto',
  },
};

const Description = ({ intro, classes }) => (
  <Element name="tagsDescription">
    <Container className={classes.root}>
      <Markdown className={classes.intro}>
        {intro}
      </Markdown>
    </Container>
    {/* <Divider /> */}
  </Element>
);

export default withStyles(styles)(Description);
