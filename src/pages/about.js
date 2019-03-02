import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import withRoot from '../withRoot';
import Markdown from '../components/markdown';
import Container from '../components/container';
import PageTitle from '../components/pageTitle';

const About = ({ data }) => {
  const { body } = data.contentfulOurStoryPage;
  const { html } = body.childMarkdownRemark;
  return (
    <Layout>
      <SEO title="About" description="About page for Global City Data" />
      <Container>
        {/* Display Contentful Our Story markdown body as html */}
        <PageTitle>Our Story</PageTitle>
        <Markdown>{html}</Markdown>
        {/* <div dangerouslySetInnerHTML={{ __html: html }} /> */}
      </Container>
    </Layout>
  );
};

export default withRoot(About);

export const query = graphql`
  query {
    contentfulOurStoryPage {
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
