import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export default ({ data }) => {
  const { name, body } = data.contentfulOurStoryPage;
  const { html } = body.childMarkdownRemark;
  return (
    <Layout>
      <h1>{name}</h1>
      {/* Display Contentful Our Story markdown body as html */}
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
};

export const query = graphql`
  query {
    contentfulOurStoryPage {
      name
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
