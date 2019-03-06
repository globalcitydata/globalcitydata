import React from 'react';

// Components
import { Typography } from '@material-ui/core';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Container from '../components/container';
import PublicationSearch from '../components/publications/publicationSearch';
import withRoot from '../withRoot';

const Publications = () => (
  <>
    <SEO title="Publications" />
    <Layout>
      <Container>
        <Typography variant="h3">Publications</Typography>
        <PublicationSearch />
      </Container>
    </Layout>
  </>
);

export default withRoot(Publications);
