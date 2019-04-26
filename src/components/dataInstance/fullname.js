import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
 List, ListItem, Link, Typography 
} from '@material-ui/core';
import Section from './section';
import Title from './title';
import Body from './body';

const styles = {};

const FullName = ({ fullname, classes }) => (
  <Section>
    <Title classes={classes}>Full Title: </Title>
    <Body>
      <Typography variant="body1">{fullname}</Typography>
    </Body>
  </Section>
);

export default withStyles(styles)(FullName);
