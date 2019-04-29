import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { List, ListItem, Typography } from '@material-ui/core';
import Section from './section';
import Title from './title';

const styles = {};

const Publications = ({ publications, classes }) => (
  <Section>
    <Title classes={classes}>Publications</Title>
    <List style={{ margin: 0 }}>
      {publications.map(({ body }) => (
        <ListItem key={body.body} className={classes.listItem}>
          <Typography variant="body2">{body.body}</Typography>
        </ListItem>
      ))}
    </List>
  </Section>
);

export default withStyles(styles)(Publications);
