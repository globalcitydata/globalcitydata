import React from 'react';
import { graphql } from 'gatsby';

// General Components
import { withStyles } from '@material-ui/core';
import Layout from '../components/layout';
import Container from '../components/container';
import SEO from '../components/seo';

// Page Components
import Showcase from '../components/index/showcase';
import withRoot from '../withRoot';
import TagSections from '../components/index/tagSections';
import Sponsors from '../components/index/sponsors';

const styles = {};

const Index = ({ data, classes }) => {
  const showcaseData = data.contentfulHomePage;
  const tagSections = data.allContentfulHomeTagSection.edges;
  const { sponsors } = data.contentfulHomePage;
  return (
    <>
      <SEO title="Home" />
      <Layout>
        <Showcase showcaseData={showcaseData} />
        <TagSections sections={tagSections} />
        <Sponsors sponsors={sponsors} />
      </Layout>
      {/* </div> */}
    </>
  );
};

export default withRoot(withStyles(styles)(Index));

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
      sponsors {
        title
        fixed(width: 265, height: 200) {
          ...GatsbyContentfulFixed_withWebp
        }
      }
    }
    allContentfulHomeTagSection {
      edges {
        node {
          title
          description
          associatedPictures {
            title
            description
            fixed(width: 265, height: 200) {
              ...GatsbyContentfulFixed_withWebp
            }
          }
        }
      }
    }
  }
`;
