import React from 'react';
import { graphql } from 'gatsby';

// Components
import Layout from '../components/layout';
import SEO from '../components/seo';
import Container from '../components/container';

export default ({ data }) => {
  const publications = data.allContentfulPublication.edges;
  return (
    <>
      <SEO title="Publications" />
      <Layout>
        <Container>
          <h1>Publications</h1>
          {publications.map((pub) => {
            const { url, body: bodyOutside } = pub.node;
            const { body } = bodyOutside;
            return (
              <div key={body}>
                <a href={url}>{body}</a>
                <br />
                <br />
              </div>
            );
          })}
        </Container>
      </Layout>
    </>
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
