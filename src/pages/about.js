import React from 'react';
import { graphql } from 'gatsby';
import { withStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import Layout from '../components/layout';
import SEO from '../components/seo';
import withRoot from '../withRoot';
import Markdown from '../components/markdown';
import Container from '../components/container';
import Hero from '../components/hero';
import ContentPaper from '../components/contentPaper';

const styles = theme => ({
  // paper: {
  //   padding: '3rem',
  //   [theme.breakpoints.down('sm')]: {
  //     padding: '1.5rem',
  //   },
  // },
});

const About = ({ data, classes }) => {
  const { body } = data.contentfulOurStoryPage;
  const { html } = body.childMarkdownRemark;
  const { backgroundImage } = data.contentfulOurStoryPage;
  return (
    <Layout>
      <SEO title="About" description="About page for Global City Data" />
      <Hero title="Our Story" />
      <Container>
        <ContentPaper>
          {/* Display Contentful Our Story markdown body as html */}
          <Markdown>{html}</Markdown>
          {/* <div dangerouslySetInnerHTML={{ __html: html }} /> */}
        </ContentPaper>
      </Container>
    </Layout>
  );
};

export default withRoot(withStyles(styles)(About));

export const query = graphql`
  query {
    contentfulOurStoryPage {
      body {
        childMarkdownRemark {
          html
        }
      }
      backgroundImage {
        fixed(width: 2000, height: 300) {
          ...GatsbyContentfulFixed_withWebp
        }
      }
    }
  }
`;
