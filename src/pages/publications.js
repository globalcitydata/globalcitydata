import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export default ({ data }) => {
  const publications = data.allContentfulPublication.edges;
  return (
    <Layout>
      <h1>Publications</h1>
      {publications.map((pub) => {
        const { url, body: bodyOutside } = pub.node;
        const { body } = bodyOutside;
        return (
          <div>
            <a href={url}>{body}</a>
            <hr />
          </div>
        );
      })}
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
