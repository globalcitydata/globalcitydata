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
  background: white;
  border-radius: 20px;
  padding: 30px 40px;
  margin: 25px;
`;

/*
const dataList = [
    {
      title: 'Integrated City Sustainability Database (ICSD)',
      slug: 'another-example',
      description: `The Integrated City Sustainability Database (ICSD) is a comprehensive
        data set of U.S. municipal governments and their sustainability programs
        and policies. Taking advantage of the unique opportunity to combine seven
        independent data collection efforts, the ICSD provides a valuable resource
        for scholars in multiple disciplines investigating local environmental and
        energy sustainability.`,
    },
    {
      title: 'Integrated City Sustainability Database (ICSD)',
      slug: 'another-example',
      description: `The Integrated City Sustainability Database (ICSD) is a comprehensive
        data set of U.S. municipal governments and their sustainability programs
        and policies. Taking advantage of the unique opportunity to combine seven
        independent data collection efforts, the ICSD provides a valuable resource
        for scholars in multiple disciplines investigating local environmental and
        energy sustainability.`,
    },
    {
      title: 'Integrated City Sustainability Database (ICSD)',
      slug: 'another-example',
      description: `The Integrated City Sustainability Database (ICSD) is a comprehensive
        data set of U.S. municipal governments and their sustainability programs
        and policies. Taking advantage of the unique opportunity to combine seven
        independent data collection efforts, the ICSD provides a valuable resource
        for scholars in multiple disciplines investigating local environmental and
        energy sustainability.`,
    },
    {
      title: 'Integrated City Sustainability Database (ICSD)',
      slug: 'another-example',
      description: `The Integrated City Sustainability Database (ICSD) is a comprehensive
        data set of U.S. municipal governments and their sustainability programs
        and policies. Taking advantage of the unique opportunity to combine seven
        independent data collection efforts, the ICSD provides a valuable resource
        for scholars in multiple disciplines investigating local environmental and
        energy sustainability.`,
    },
  ];
*/

export default ({ data }) => {
  const dataList = data.allContentfulData.edges;
  return (
    <Layout
      style={{
        background: 'linear-gradient(to bottom right, white, black)',
      }}
    >
      <SEO title="Explore Data" />
      <Container>
        <h1j>Explore the Data</h1j>
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
                <br />
                <br />
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

// import React from 'react';
// import { graphql } from 'gatsby';
// import Layout from '../components/layout';

// export default ({ data }) => {
//   const dataList = data.allContentfulData.edges;
//   return (
//     <Layout>
//       <h1>Explore the Data</h1>
//       {dataList.map((dataInstance) => {
//         const { title, slug } = dataInstance.node;
//         return (
//           <div key={title}>
//             <a href={`/data/${slug}/`}>{title}</a>
//             <hr />
//           </div>
//         );
//       })}
//     </Layout>
//   );
// };

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
