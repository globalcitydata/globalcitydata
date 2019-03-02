import React from 'react';
import { graphql } from 'gatsby';

// General Components
import { withStyles } from '@material-ui/core';
import Layout from '../components/layout';
import Header from '../components/header';
import SEO from '../components/seo';

// Page Components
import Showcase from '../components/index/showcase';
import withRoot from '../withRoot';
// import TagSections from '../components/index/tagSections';
// import Sponsors from '../components/index/sponsors';

const styles = {
  main: {
    marginTop: '65px',
  },
  tagSection: {
    textAlign: 'center',
  },
};

const Index = ({ data, classes }) => {
  const showcaseData = data.contentfulHomePage;
  // const tagSections = data.allContentfulHomeTagSection.edges;
  return (
    <>
      <SEO title="Home" />
      <Header />
      <div className={classes.main}>
        <Showcase showcaseData={showcaseData} />
        <div className={classes.tagSection}>
          <h2>Will be placing tag sections below</h2>
          <p>like dis</p>
        </div>
        {/* <TagSections sections={tagSections} /> */}
      </div>
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
      }
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
