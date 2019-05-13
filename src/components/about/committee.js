import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Typography, Grid, Avatar, Link,
} from '@material-ui/core';

const styles = theme => ({
  root: {
    paddingTop: '10px',
  },
  title: {
    fontWeight: 'bold',
  },
  description: {
    paddingBottom: '15px',
    maxWidth: '700px',
  },
  members: {
    maxWidth: '600px',
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      margin: '0 auto',
    },
  },
  avatar: {
    margin: '10px auto',
    width: 200,
    height: 200,
  },
});

const Member = ({ member, classes }) => {
  const {
    name, description, link, picture,
  } = member;
  return (
    <Grid item>
      <Typography variant="h6">{name}</Typography>
      <Link href={link} target="_blank" rel="noopener">
        <Avatar alt={name} src={picture.fluid.src} className={classes.avatar} />
      </Link>
      {description && <Typography variant="subtitle2">{description}</Typography>}
    </Grid>
  );
};

const Committee = ({ classes, committee }) => {
  const { title, description, members } = committee;
  return (
    <div className={classes.root}>
      <Typography variant="h6" gutterBottom className={classes.title}>{title}</Typography>
      <Typography paragraph className={classes.description}>{description}</Typography>
      <Grid
        container
        justify="space-around"
        // alignItems="center"
        spacing={40}
        className={classes.members}
      >
        {members.map(member => <Member member={member} classes={classes} key={member.name} />)}
      </Grid>
    </div>
  );
};

export default withStyles(styles)(Committee);
