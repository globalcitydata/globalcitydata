import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export default ({ data }) => {
  const dataList = data.allContentfulData.edges;
  return (
    <Layout>
      <h1>Explore the Data</h1>
      {dataList.map((dataInstance) => {
        const { title, slug } = dataInstance.node;
        return (
          <div key={title}>
            <a href={`/data/${slug}/`}>{title}</a>
            <hr />
          </div>
        );
      })}
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
