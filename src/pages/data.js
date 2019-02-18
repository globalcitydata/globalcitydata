import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export default ({ data }) => {
  console.log(data);
  const dataList = data.allContentfulData.edges;
  return (
    <Layout>
      <h1>Explore the Data</h1>
      {dataList.map((dataInstance) => {
        console.log(dataInstance);
        const { title, slug } = dataInstance.node;
        return (
          <div>
            <a href={`/data/${slug}/`}>{title}</a>
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
