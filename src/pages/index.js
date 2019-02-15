import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export default ({ data }) => {
  const { primaryMessage, secondaryMessage } = data.contentfulHomePage;
  return (
    <Layout>
      <h1>{primaryMessage}</h1>
      <p>{secondaryMessage}</p>
    </Layout>
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
