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

const TechnicalDetails = ({ details, classes }) => (
  <Section>
    <Title className={classes.title}>Technical Details</Title>
    <Body>
      <Markdown>{details}</Markdown>
    </Body>
  </Section>
);

export default withStyles(styles)(TechnicalDetails);
