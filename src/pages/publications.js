import React from 'react';
import { graphql } from 'gatsby';
import withRoot from '../withRoot';
import SEO from '../components/seo';
import Layout from '../components/layout';
import Container from '../components/container';
import Hero from '../components/hero';
import PublicationSearch from '../components/publications/publicationSearch';

const Publications = ({ data, showProgress }) => {
  const dataList = {};
  data.allContentfulData.edges.forEach(({ node }) => {
    dataList[node.contentful_id] = node.slug;
  });
  return (
    <Layout showProgress={showProgress}>
      <SEO title="Publications" />
      <Hero title="Publications" />
      <Container>
        <PublicationSearch dataList={dataList} />
      </Container>
    </Layout>
  );
};

export default withRoot(Publications);

export const query = graphql`
  query {
    allContentfulData {
      edges {
        node {
          contentful_id
          slug
        }
      }
    }
  }
`;
