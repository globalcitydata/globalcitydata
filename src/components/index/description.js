import React from 'react';
import { withStyles } from '@material-ui/core/styles';

// Components
import Container from '../container';
import Markdown from '../markdown';
import DownButton from '../downButton';

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

const Description = ({ intro, classes }) => (
  <div className={classes.root}>
    <Container>
      <Markdown className={classes.intro}>{intro}</Markdown>
      <DownButton id="tagSections" />
    </Container>
  </div>
);

export default withStyles(styles)(Description);
