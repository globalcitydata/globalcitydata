import React from 'react';
import { graphql } from 'gatsby';

// Components
import Layout from '../components/layout';
import SEO from '../components/seo';
import Container from '../components/container';
import PublicationSearch from '../components/publications/publicationSearch';

export default () => (
  <>
    <SEO title="Publications" />
    <Layout>
      <Container>
        <h1>Publications</h1>
        <PublicationSearch />
      </Container>
    </Layout>
  </>
);
