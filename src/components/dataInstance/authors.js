import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  List, ListItem, Link, Typography,
} from '@material-ui/core';
import Section from './section';
import Title from './title';

const styles = {};

const Authors = ({ authors, classes }) => (
  <Section>
    <Title classes={classes}>Authors</Title>
    <br />
    <Typography paragraph><i>In order to access the data, contact these authors.</i></Typography>
    <List style={{ margin: 0 }}>
      {authors.map(({ name, email }) => (
        <ListItem key={name} className={classes.listItem}>
          <Typography variant="body2">
            {`${name}: `}
            <Link href={`mailto: ${email}`} target="_blank" rel="noopener">
              {`${email}`}
            </Link>
          </Typography>
        </ListItem>
      ))}
    </List>
  </Section>
);

export default withStyles(styles)(Authors);
