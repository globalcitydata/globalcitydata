import React from 'react';

// General Components
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import SEO from '../components/seo';
import Layout from '../components/layout';
import withRoot from '../withRoot';

// Page Components
import DataSearch from '../components/data/dataSearch';

const styles = {
  container: {
    margin: '100px auto 0',
    maxWidth: '900px',
    padding: '0 1rem',
  },
  data: {
    margin: '0 auto',
    maxWidth: '1300px',
    padding: '0 1rem 3rem',
  },
};

const Data = ({ classes }) => (
  <>
    <SEO title="Explore Data" />
    <Layout>
      <div className={classes.container}>
        <Typography variant="h3">Explore the Data</Typography>
      </div>
      <div className={classes.data}>
        <DataSearch />
      </div>
    </Layout>
  </>
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
