import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { withStyles } from '@material-ui/core/styles';
import {
  Typography, Paper, Link as MuiLink, Grid, Button,
} from '@material-ui/core';
import FluidImage from './fluidImage';

const styles = {
  root: {
    padding: '2.5rem 1rem',
  },
  container: {
    width: '100%',
    maxWidth: '900px',
    margin: '0 auto',
    textAlign: 'center',
  },
  sponsorsTitle: {
    paddingBottom: '20px',
  },
  openSource: {
    paddingBottom: '20px',
    paddingTop: '5px',
  },
};

const Sponsors = ({ classes }) => {
  const data = useStaticQuery(
    graphql`
      query {
        contentfulFooter {
          sponsors {
            title
            fluid(maxWidth: 1000) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    `,
  );
  const { sponsors } = data.contentfulFooter;
  return (
    <div>
      <Typography variant="h6" className={classes.sponsorsTitle}>
      Developed with support from
      </Typography>
      <Grid container spacing={32} justify="center">
        {sponsors.map((img, i) => (
          <Grid item key={i} style={{ width: '150px' }}>
            <FluidImage fluid={img.fluid} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

const OpenSource = ({ classes }) => (
  <div className={classes.openSource}>
    <Typography variant="body1" gutterBottom>
          We
      {'  '}
      <span role="img" aria-label="love">
            ❤️
      </span>
      {'  '}
      <MuiLink
        href="https://github.com/globalcitydata/globalcitydata"
        target="_blank"
        rel="noopener"
      >
            open source code
      </MuiLink>
      {'  '}
          as well as open data.
    </Typography>
  </div>
);

const Contact = ({ classes }) => (
  <Button component={Link} to="/contact" color="secondary" variant="contained">Give us feedback</Button>
);

const Left = ({ classes }) => (
  <Grid item>
    <Sponsors classes={classes} />
  </Grid>
);

const Right = ({ classes }) => (
  <Grid item>
    <OpenSource classes={classes} />
    <Contact classes={classes} />
  </Grid>
);

const Footer = ({ classes }) => (
  <Paper className={classes.root}>
    <Grid
      container
      className={classes.container}
      justify="space-between"
      alignItems="flex-start"
      spacing={40}
    >
      <Left classes={classes} />
      <Right classes={classes} />
    </Grid>
  </Paper>
);

export default withStyles(styles)(Footer);
