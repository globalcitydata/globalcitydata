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

const About = ({ data, classes, showProgress }) => {
  const { name, body, backgroundImage } = data.contentfulPage;
  const { html } = body.childMarkdownRemark;
  return (
    <Layout showProgress={showProgress}>
      <SEO title="About" description="About page for Global City Data" />
      <Hero title={name} img={backgroundImage} />
      <Container>
        <ContentPaper>
          {/* Display Contentful Our Story markdown body as html */}
          <Markdown>{html}</Markdown>
        </ContentPaper>
      </Container>
    </Layout>
  );
};

export default withRoot(withStyles(styles)(About));

export const query = graphql`
  query {
    contentfulPage(identifier: { eq: "about" }) {
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
  }
`;
