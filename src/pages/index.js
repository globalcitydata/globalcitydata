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
import Tags from '../components/index/tags';
import Sponsors from '../components/index/sponsors';

const styles = {};

const Index = ({ data, classes, showProgress }) => {
  const showcaseData = data.contentfulHomePage;
  const tagSections = data.allContentfulHomeTagSection.edges;
  const { sponsors, tagsIntro } = data.contentfulHomePage;
  const { html: intro } = tagsIntro.childMarkdownRemark;
  return (
    <>
      <SEO title="Home" />
      <Layout showProgress={showProgress}>
        <Showcase showcaseData={showcaseData} />
        <Tags sections={tagSections} intro={intro} />
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
        fixed(width: 2000, height: 600) {
          ...GatsbyContentfulFixed_withWebp
        }
      }
      primaryMessage
      secondaryMessage
      tagsIntro {
        childMarkdownRemark {
          html
        }
      }
      sponsors {
        title
        fixed(width: 200, height: 150) {
          ...GatsbyContentfulFixed_withWebp
        }
      }
    }

    allContentfulHomeTagSection(sort: { fields: [order], order: ASC }) {
      totalCount
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
