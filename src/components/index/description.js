import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ReactMarkdown from 'markdown-to-jsx';
import Typography from '@material-ui/core/Typography';

// Components
import { Element } from 'react-scroll';
import Container from '../container';

const options = {
  overrides: {
    p: {
      component: props => <Typography variant="body1" paragraph {...props} />,
    },
    span: { component: props => <Typography paragraph variant="body1" {...props} /> },
  },
};

const styles = {
  root: {
    maxWidth: '720px',
    textAlign: 'center',
    padding: '2rem 1rem',
  },
  intro: {
    margin: '25px auto',
    fontSize: '1.5rem',
  },
};

const Description = ({ intro, classes }) => (
  <Element name="tagsDescription">
    <Container className={classes.root}>
      <ReactMarkdown
        className={classes.intro}
        options={options}
      >
        {intro}
      </ReactMarkdown>
    </Container>
  </Element>
);

export default withStyles(styles)(Description);
