import React from 'react';
import { graphql } from 'gatsby';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../utils/withRoot';
import SEO from '../components/seo';
import Layout from '../components/layout';
import Container from '../components/container';
import Hero from '../components/hero';
import Markdown from '../components/markdown';
import PublicationSearch from '../components/publications/publicationSearch';

const styles = theme => ({
  description: {
    textAlign: 'center',
    background: 'white',
  },
});

const Publications = ({ data, showProgress, classes }) => {
  // get dataList for matching publications with associated data
  const dataList = {};
  data.allContentfulData.edges.forEach(({ node }) => {
    dataList[node.contentful_id] = node.slug;
  });
  // get other info from contentful
  const { name, body, backgroundImage } = data.contentfulPage;
  const { html } = body ? body.childMarkdownRemark : null;
  return (
    <Layout showProgress={showProgress}>
      <SEO title="Publications" />
      <Hero title={name} img={backgroundImage} />
      {html && (
        <div className={classes.description}>
          <Container>
            <Markdown>{html}</Markdown>
          </Container>
        </div>
      )}
      <Container>
        <PublicationSearch dataList={dataList} />
      </Container>
    </Layout>
  );
};

export default withRoot(withStyles(styles)(Publications));

export const query = graphql`
  query {
    contentfulPage(identifier: { eq: "publications" }) {
      name
      body {
        childMarkdownRemark {
          html
        }
      }
      backgroundImage {
        fixed(width: 2000, height: 200) {
          ...GatsbyContentfulFixed_withWebp
        }
      }
    }
    allContentfulData {
      edges {
        node {
          contentful_id
          slug
        }
      }
    }
  }
`;
