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
            // const { url } = pub.node;
            const { body } = pub.node.body;
            const { slug } = pub.node.relatedData;

            return (
              <div key={body}>
                <p>
                  {body}
                  <Link to={`/data/${slug}`}>Associated Data</Link>
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

// import React from 'react';
// import { graphql, Link } from 'gatsby';

// // Components
// import { Heading, Text } from 'grommet';
// import Container from '../components/container';
// import Layout from '../components/layout';
// import SEO from '../components/seo';

// export default ({ data }) => {
//   const publications = data.allContentfulPublication.edges;
//   return (
//     <Layout>
//       <SEO title="Publications" />
//       <Container>
//         <Heading>Publications</Heading>
//         {publications.map((pub) => {
//           // const { url } = pub.node;
//           const { body } = pub.node.body;
//           const { slug } = pub.node.relatedData;

//           return (
//             <div key={body}>
//               <Text>{body}</Text>
//               <Link to={`/data/${slug}`}>Associated Data</Link>

//               <br />
//               <br />
//             </div>
//           );
//         })}
//       </Container>
//     </Layout>
//   );
// };

// export const query = graphql`
//   query {
//     allContentfulPublication {
//       edges {
//         node {
//           url
//           body {
//             body
//           }
//           relatedData {
//             slug
//           }
//         }
//       }
//     }
//   }
// `;
