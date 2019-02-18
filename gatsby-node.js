/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// exports.onCreateNode = ({ node }) => {
//   if (node.internal.type === 'MarkdownRemark') {
//     console.log(node.parent);
//   }
// };

const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    {
      contentfulOurStoryPage {
        slug
      }
      allContentfulData {
        edges {
          node {
            slug
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      throw result.errors;
    }
    // To see what result looks like in terminal:
    // console.log(JSON.stringify(result, null, 4));

    /* CREATE OUR STORY PAGE */
    const OurStory = path.resolve('./src/templates/ourStory.js');
    const { slug: storySlug } = result.data.contentfulOurStoryPage;
    createPage({
      path: `/${storySlug}/`,
      component: OurStory,
    });

    /* CREATE EACH INDIVIDUAL DATA PAGE */
    const DataInstance = path.resolve('./src/templates/dataInstance.js');
    const dataList = result.data.allContentfulData.edges;
    dataList.forEach((data) => {
      const { slug: dataSlug } = data.node;
      createPage({
        path: `/data/${dataSlug}/`,
        component: DataInstance,
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.

          // Needed to query correct data instance in dataInstance template file
          slug: dataSlug,
        },
      });
    });
  });
};
