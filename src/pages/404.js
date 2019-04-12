import React from 'react';
import { Link } from 'gatsby';
import { Typography } from '@material-ui/core';
import withRoot from '../utils/withRoot';

// Components
import Layout from '../components/layout';

const NoMatch = () => (
  <Layout>
    <Typography variant="h1">404 Page</Typography>
    <Link to="/">Go home</Link>
  </Layout>
);

export default withRoot(NoMatch);
