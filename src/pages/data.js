import React from 'react';
import styled from 'styled-components';

// General Components
import { withStyles } from '@material-ui/core/styles';
import SEO from '../components/seo';
import Layout from '../components/layout';
import withRoot from '../withRoot';
import Container from '../components/container';
import PageTitle from '../components/pageTitle';

// Page Components
import DataSearch from '../components/data/dataSearch';

const styles = {
  container: {
    margin: '0 auto',
    maxWidth: '900px',
    padding: '0 1rem',
  },
  data: {
    margin: '0 auto',
    maxWidth: '1300px',
    padding: '0 1rem',
  },
};

const Data = ({ classes }) => (
  <Layout>
    <SEO title="Explore Data" />
    <div className={classes.container}>
      <PageTitle>Explore the Data</PageTitle>
    </div>
    <div className={classes.data}>
      <DataSearch />
    </div>
  </Layout>
);

export default withRoot(withStyles(styles)(Data));

// export const query = graphql`
//   query {
//     allContentfulData {
//       edges {
//         node {
//           title
//           slug
//           summary {
//             summary
//           }
//         }
//       }
//     }
//   }
// `;
