import React from 'react';
// import Img from 'gatsby-image';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import Container from '../container';
import FluidImage from '../fluidImage';

const styles = {
  root: {
    display: 'flex',
  },
  title: {
    paddingBottom: '3rem',
  },
};

const Sponsors = ({ sponsors, classes }) => (
  <Container>
    <Typography variant="h6" className={classes.title}>
      Developed With Support From
    </Typography>
    <Grid container spacing={32} justify="center">
      {sponsors.map((img, i) => (
        <Grid item key={i} style={{ width: '175px' }}>
          <FluidImage fluid={img.fluid} />
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default withStyles(styles)(Sponsors);
