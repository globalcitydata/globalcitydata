import React from 'react';
import styled from 'styled-components';

// General Components
import SEO from '../components/seo';
import Layout from '../components/layout';
import Container from '../components/container';

// Page Components
import DataSearch from '../components/data/dataSearch';

const DataContainer = styled.div`
  margin: 3rem auto;
  max-width: 1300px;
  padding: 0 1rem;
`;

export default () => (
  <Layout>
    <SEO title="Explore Data" />
    <DataContainer>
      <Container>
        <h1>Explore the Data</h1>
      </Container>
      <DataSearch />
    </DataContainer>
  </Layout>
);

// export const query = graphql`
//   query {
//     allContentfulData {
//       edges {
//         node {
//           title
//           slug
//           summary {
//             summary
//           }
//         }
//       }
//     }
//   }
// `;
