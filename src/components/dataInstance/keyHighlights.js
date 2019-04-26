import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { List, ListItem, Typography } from '@material-ui/core';
import Section from './section';
import Title from './title';
import Body from './body';

const styles = {};

const KeyHighlights = ({ highlights, classes }) => (
  <Section>
    <Title classes={classes}>Key Highlights</Title>
    <List>
      {highlights.map((h, i) => (
        <ListItem key={i} className={classes.listItem}>
          {h && (
            <Body classes={classes}>
              <Typography variant="body2">{`${i + 1}. ${h}`}</Typography>
            </Body>
          )}
        </ListItem>
      ))}
    </List>
  </Section>
);

export default withStyles(styles)(KeyHighlights);
