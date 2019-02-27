import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

// General Components
import SEO from '../components/seo';
import Layout from '../components/layout';
import { TextButton } from '../components/buttons';
import Container from '../components/container';

// Page Components
import DataSearch from '../components/data/dataSearch';

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

const DataContainer = styled.div`
  margin: 3rem auto;
  max-width: 1300px;
  padding: 0 1rem;
`;

export default ({ data }) => {
  const dataList = data.allContentfulData.edges;
  return (
    <Layout>
      <SEO title="Explore Data" />
      <DataContainer>
        <h1 style={{ marginBottom: '3.5rem' }}>Explore the Data</h1>
        <DataSearch />
        {/* <DataList>
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
        </DataList> */}
      </DataContainer>
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
