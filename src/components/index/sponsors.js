import React from 'react';
import Img from 'gatsby-image';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import Container from '../container';

const styles = {
  title: {
    paddingBottom: '30px',
  },
};

const Sponsors = ({ sponsors, classes }) => (
  // console.log(sponsors);
  <Container>
    <Typography variant="h3" className={classes.title}>
      Developed With Support From
    </Typography>
    <Grid container spacing={24}>
      {sponsors.map((img, i) => (
        <Grid item key={i}>
          <Img fixed={img.fixed} />
        </Grid>
      ))}
    </Grid>
  </Container>
);
export default withStyles(styles)(Sponsors);
