import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { List, ListItem } from '@material-ui/core';
import Section from './section';
import TagChips from '../tagChips';

const styles = {};

const Tags = ({ tags, classes }) => (
  <Section>
    <TagChips tags={tags} />
  </Section>
);

export default withStyles(styles)(Tags);
