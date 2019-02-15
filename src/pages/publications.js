import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export default ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <div>Publications</div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulPublication {
      edges {
        node {
          url
          body {
            body
          }
        }
      }
    }
  }
`;
