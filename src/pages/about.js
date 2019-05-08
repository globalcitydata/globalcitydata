import React from 'react';
import { graphql } from 'gatsby';
import { withStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import Layout from '../components/layout';
import SEO from '../components/seo';
import withRoot from '../utils/withRoot';
import Markdown from '../components/markdown';
import Container from '../components/container';
import Hero from '../components/hero';
import ContentPaper from '../components/contentPaper';
import Committee from '../components/about/committee';

const styles = theme => ({});

const About = ({ data, classes, showProgress }) => {
  const {
    name, body, backgroundImage, additionalContent: committee,
  } = data.contentfulPage;
  // const { html } = body.childMarkdownRemark;
  return (
    <Layout showProgress={showProgress}>
      <SEO title="About" />
      <Hero title={name} img={backgroundImage} />
      <Container>
        <ContentPaper>
          {/* Display Contentful Our Story markdown body as html */}
          <Markdown>{body.body}</Markdown>
          <Committee committee={committee[0]} />
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
        body
      }
      backgroundImage {
        fixed(width: 2000, height: 200) {
          ...GatsbyContentfulFixed_withWebp
        }
      }
      additionalContent {
        title
        description
        members {
          name
          description
          link
          picture {
            fluid(maxWidth: 1000) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
