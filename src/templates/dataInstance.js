import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export default ({ data }) => {
  const { title, summary: outerSummary } = data.contentfulData;
  const { summary } = outerSummary;
  return (
    <Layout>
      <h1>{title}</h1>
      <p>{summary}</p>
    </Layout>
  );
};

export const query = graphql`
  query DataInstanceBySlug($slug: String!) {
    contentfulData(slug: { eq: $slug }) {
      title
      summary {
        summary
      }
    }
  }
`;
