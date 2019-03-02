import React from 'react';

// Components
import Layout from '../components/layout';
import SEO from '../components/seo';
import Container from '../components/container';
import PageTitle from '../components/pageTitle';
import PublicationSearch from '../components/publications/publicationSearch';
import withRoot from '../withRoot';

const Publications = () => (
  <>
    <SEO title="Publications" />
    <Layout>
      <Container>
        <PageTitle>Publications</PageTitle>
        <PublicationSearch />
      </Container>
    </Layout>
  </>
);

export default withRoot(Publications);
