import React from 'react';
import { graphql } from 'gatsby';

// General Components
import { withStyles } from '@material-ui/core/styles';
import SEO from '../components/seo';
import Layout from '../components/layout';
import withRoot from '../utils/withRoot';
import Hero from '../components/hero';

// Page Components
import DataSearch from '../components/data/dataSearch';

const styles = {
  data: {
    margin: '0 auto',
    width: '90%',
    maxWidth: '1500px',
    padding: '3rem 1rem 3rem',
  },
};

const Data = ({
  classes, showProgress, data, location,
}) => {
  const { name, backgroundImage } = data.contentfulPage;
  const { edges: authors } = data.allContentfulData;
  return (
    <>
      <Layout showProgress={showProgress}>
        <SEO title="Explore Data" />
        <Hero title={name} img={backgroundImage} />
        <div>
          <div className={classes.data}>
            <DataSearch refinementState={location.state} authors={authors} />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default withRoot(withStyles(styles)(Data));

export const query = graphql`
  query {
    contentfulPage(identifier: { eq: "data" }) {
      name
      body {
        childMarkdownRemark {
          html
        }
      }
      backgroundImage {
        fluid(maxWidth: 2000) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
    allContentfulData {
      edges {
        node {
          authors {
            contentful_id
            name
          }
        }
      }
    }
  }
`;
