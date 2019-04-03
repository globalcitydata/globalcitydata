import React from 'react';
import withRoot from '../withRoot';
import SEO from '../components/seo';
import Layout from '../components/layout';
import Container from '../components/container';
import Hero from '../components/hero';
import PublicationSearch from '../components/publications/publicationSearch';

const Publications = () => (
  <Layout>
    <SEO title="Publications" />
    <Hero title="Publications" />
    <Container>
      {/* <Typography variant="h3">Publications</Typography> */}
      <PublicationSearch />
    </Container>
  </Layout>
);

export default withRoot(Publications);
