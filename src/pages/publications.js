import React from 'react';
import { graphql, Link } from 'gatsby';

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
            const { body } = pub.node.body;
            const { slug: relatedDataSlug } = pub.node.relatedData;

            return (
              <div key={body}>
                <p>
                  {body}
                  <Link to={`/data/${relatedDataSlug}`}>Associated Data</Link>
                </p>
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
          relatedData {
            slug
          }
        }
      }
    }
  }
`;
