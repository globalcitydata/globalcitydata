import React from 'react';
import { graphql } from 'gatsby';

// Components
import Layout from '../components/layout';
import SEO from '../components/seo';
import Container from '../components/container';

export default ({ data }) => {
  const { primaryMessage, secondaryMessage } = data.contentfulHomePage;
  return (
    <>
      <SEO title="Home" />
      <Layout>
        <Container>
          <h1>{primaryMessage}</h1>
          <p>{secondaryMessage}</p>
        </Container>
      </Layout>
    </>
  );
};

export const query = graphql`
  query {
    contentfulHomePage {
      primaryMessage
      secondaryMessage
    }
  }
`;
