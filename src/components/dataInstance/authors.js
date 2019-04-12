import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { List, ListItem } from '@material-ui/core';
import Section from './section';
import Title from './title';
import Body from './body';

const styles = {};

const Authors = ({ authors, classes }) => (
  <Section>
    <Title classes={classes}>Authors</Title>
    <List style={{ margin: 0 }}>
      {authors.map(({ name, email }) => {
        const item = `${name}: ${email}`;
        return (
          <ListItem key={name} className={classes.listItem}>
            <Body classes={classes}>{item}</Body>
          </ListItem>
        );
      })}
    </List>
  </Section>
);

export default withStyles(styles)(Authors);
