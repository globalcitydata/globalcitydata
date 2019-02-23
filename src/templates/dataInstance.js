import React from 'react';
import { graphql } from 'gatsby';

// Components
import Layout from '../components/layout';
import SEO from '../components/seo';
import Container from '../components/container';

export default ({ data }) => {
  const { title, summary: outerSummary } = data.contentfulData;
  const { summary } = outerSummary;
  return (
    <>
      <SEO title={title} />
      <Layout>
        <Container>
          <h1>{title}</h1>
          <p>{summary}</p>
        </Container>
      </Layout>
    </>
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
