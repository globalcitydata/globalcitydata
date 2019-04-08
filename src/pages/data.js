import React from 'react';

// General Components
import { withStyles } from '@material-ui/core/styles';
import SEO from '../components/seo';
import Layout from '../components/layout';
import withRoot from '../withRoot';
import Hero from '../components/hero';

// Page Components
import DataSearch from '../components/data/dataSearch';

const styles = {
  data: {
    margin: '0 auto',
    width: '90%',
    maxWidth: '1500px',
    padding: '3rem 1rem 3rem',
  },
};

const Data = ({ classes, showProgress }) => (
  <>
    <Layout showProgress={showProgress}>
      <SEO title="Explore Data" />
      <Hero title="Explore the Data" />
      <div className={classes.data}>
        <DataSearch />
      </div>
    </Layout>
  </>
);

export default withRoot(withStyles(styles)(Data));
