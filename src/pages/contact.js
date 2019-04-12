import React from 'react';
import { graphql } from 'gatsby';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../utils/withRoot';

// Components
import Container from '../components/container';
import Hero from '../components/hero';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Markdown from '../components/markdown';

const styles = {};

const Contact = ({ data, showProgress }) => {
  // get info from contentful
  const { name, body, backgroundImage } = data.contentfulPage;
  const { html } = body ? body.childMarkdownRemark : null;
  return (
    <Layout showProgress={showProgress}>
      <SEO title="Contact" />
      <Hero title={name} img={backgroundImage} />
      {html && (
        <Container>
          <Markdown>{html}</Markdown>
        </Container>
      )}
    </Layout>
  );
};

export default withRoot(withStyles(styles)(Contact));

export const query = graphql`
  query {
    contentfulPage(identifier: { eq: "contact" }) {
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
