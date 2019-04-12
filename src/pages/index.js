import React from 'react';
import { graphql } from 'gatsby';
import { withStyles } from '@material-ui/core';
import withRoot from '../withRoot';
import SEO from '../components/seo';
import Layout from '../components/layout';

// Page Components
import Showcase from '../components/index/showcase';
import Description from '../components/index/description';
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
        <Description intro={intro} />
        <Tags sections={tagSections} />
        <Sponsors sponsors={sponsors} />
      </Layout>
    </>
  );
};

export default withRoot(withStyles(styles)(Index));

export const query = graphql`
  query {
    contentfulHomePage {
      welcomeImages {
        title
        fixed(width: 2500, height: 500) {
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
