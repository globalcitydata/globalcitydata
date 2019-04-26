import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Section from './section';
import Title from './title';
import Body from './body';
import Markdown from '../markdown';

const styles = {
  title: {
    marginBottom: '19px',
  },
};

const Citation = ({ citation, classes }) => (
  <Section>
    <Title className={classes.title}>Citation</Title>
    <Body>
      <Markdown>{citation}</Markdown>
    </Body>
  </Section>
);

export default withStyles(styles)(Citation);
