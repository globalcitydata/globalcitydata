import React from 'react';
import { graphql } from 'gatsby';
import { withStyles } from '@material-ui/core';
import withRoot from '../utils/withRoot';
import SEO from '../components/seo';
import Layout from '../components/layout';

// Page Components
import Showcase from '../components/index/showcase';
import LearnMore from '../components/index/learnMore';
import Description from '../components/index/description';
import Tags from '../components/index/tags';
import Sponsors from '../components/index/sponsors';

const styles = theme => ({
  tags: {
    background: theme.palette.background.paper,
  },
});

const Index = ({ data, classes, showProgress }) => {
  const showcaseData = data.contentfulHomePage;
  const tagSections = data.allContentfulHomeTagSection.edges;
  const { sponsors, tagsIntro, tagsIntro2 } = data.contentfulHomePage;
  return (
    <>
      <SEO title="Home" />
      <Layout showProgress={showProgress}>
        <Showcase showcaseData={showcaseData} />
        <LearnMore intro={tagsIntro.childMarkdownRemark.html} />
        <div className={classes.tags}>
          <Description intro={tagsIntro2.childMarkdownRemark.html} />
          <Tags
            sections={tagSections}
          />
        </div>
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
        fixed(width: 2000, height: 500) {
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
      tagsIntro2 {
        childMarkdownRemark {
          html
        }
      }
      sponsors {
        title
        fixed(width: 185, height: 140) {
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
