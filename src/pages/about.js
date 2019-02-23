import React from "react";
import { graphql } from "gatsby";

// Components
import { Heading, Text } from "grommet";
import Container from "../components/container";
import Layout from "../components/layout";
import SEO from "../components/seo";

export default ({ data }) => {
  const { name, body } = data.contentfulOurStoryPage;
  const { html } = body.childMarkdownRemark;
  return (
    <Layout>
      <SEO title="About" description="About page for Global City Data" />
      <Container>
        <Heading>{name}</Heading>
        {/* Display Contentful Our Story markdown body as html */}
        <Text dangerouslySetInnerHTML={{ __html: html }} />
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query {
    contentfulOurStoryPage {
      name
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
