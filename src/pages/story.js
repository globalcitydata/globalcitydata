import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export default ({ data }) => {
  const { name } = data.contentfulOurStoryPage;
  const { body } = data.contentfulOurStoryPage.body;
  return (
    <Layout>
      <h1>{name}</h1>
      <p>{body}</p>
    </Layout>
  );
};

export const query = graphql`
  query {
    contentfulOurStoryPage {
      name
      body {
        body
      }
    }
  }
`;
