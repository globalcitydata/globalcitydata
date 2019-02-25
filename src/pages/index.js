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
        <div style={{ textAlign: 'center' }}>
          <h2>Will be placing tag sections below</h2>
          <p>like dis</p>
        </div>
        {/* <TagSections sections={tagSections} /> */}
      </Layout>
    </>
  );
};

export const query = graphql`
  query {
    contentfulHomePage {
      welcomeImages {
        title
        fixed(width: 1500, height: 500) {
          ...GatsbyContentfulFixed_withWebp
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
