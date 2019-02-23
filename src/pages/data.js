import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

// Components
import SEO from '../components/seo';
import { TextButton } from '../components/buttons';
import Layout from '../components/layout';
import Container from '../components/container';

const DataList = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  align-content: stretch;
`;

const Card = styled.div`
  flex: 300px;
  border-radius: 1rem;
  padding: 0 2rem 1.5rem;
  margin: 25px;
  background: lightgray;
`;

export default ({ data }) => {
  const dataList = data.allContentfulData.edges;
  return (
    <Layout>
      <SEO title="Explore Data" />
      <Container>
        <h1>Explore the Data</h1>
        <DataList>
          {dataList.map((dataInstance) => {
            const { title, slug } = dataInstance.node;
            // const { title, slug, description: summary } = dataInstance;
            const { summary } = dataInstance.node.summary;
            return (
              <Card key={title}>
                <h3>{title}</h3>
                <p margin={{ bottom: '3rem' }}>
                  {`${summary.slice(0, 200)}...`}
                </p>
                <TextButton label="View Data" href={`/data/${slug}/`} />
              </Card>
            );
          })}
        </DataList>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulData {
      edges {
        node {
          title
          slug
          summary {
            summary
          }
        }
      }
    }
  }
`;
