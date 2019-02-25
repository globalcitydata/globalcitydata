import React from 'react';
import { graphql } from 'gatsby';

// General Components
import Layout from '../components/layout';
import SEO from '../components/seo';

// Page Components
import Showcase from '../components/index/showcase';
import TagSections from '../components/index/tagSections';

export default ({ data }) => {
  const showcaseData = data.contentfulHomePage;
  const tagSections = data.allContentfulHomeTagSection.edges;
  return (
    <>
      <SEO title="Home" />
      <Layout>
        <Showcase showcaseData={showcaseData} />
        <TagSections sections={tagSections} />
      </Layout>
    </>
  );
};

export const query = graphql`
  query {
    contentfulHomePage {
      welcomeImages {
        title
        sizes(
          maxWidth: 1300
          maxHeight: 500
          resizingBehavior: PAD
          background: "rgb:000000"
        ) {
          ...GatsbyContentfulSizes_withWebp
        }
      }
      primaryMessage
      secondaryMessage
    }
    allContentfulHomeTagSection {
      edges {
        node {
          title
          associatedPictures {
            title
            description
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
