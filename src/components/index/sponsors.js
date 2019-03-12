import React from 'react';
import Img from 'gatsby-image';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import Container from '../container';

const styles = {
  title: {
    paddingBottom: '1rem',
  },
};

const Sponsors = ({ sponsors, classes }) => {
  console.log(sponsors);
  return (
    <Container>
      <Typography variant="h4" className={classes.title}>
        Sponsors
      </Typography>
      <Grid container spacing={24}>
        {sponsors.map(img => (
          <Grid item>
            <Img fixed={img.fixed} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default withStyles(styles)(Sponsors);
