import React from 'react';

// General Components
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import SEO from '../components/seo';
import Layout from '../components/layout';
import withRoot from '../withRoot';
import Container from '../components/container';
import Hero from '../components/hero';

// Page Components
import DataSearch from '../components/data/dataSearch';

const styles = {
  data: {
    margin: '0 auto',
    maxWidth: '1300px',
    padding: '3rem 1rem 3rem',
  },
};

const Data = ({ classes }) => (
  <>
    <Layout>
      <SEO title="Explore Data" />
      <Hero title="Explore the Data" />
      {/* <Container style={{ paddingBottom: 0 }}>
        <Typography variant="h3">Explore the Data</Typography>
      </Container> */}
      <div className={classes.data}>
        <DataSearch />
      </div>
    </Layout>
  </>
);

export default withRoot(withStyles(styles)(Data));
