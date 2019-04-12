import React from 'react';
import { graphql } from 'gatsby';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

// Components
import Layout from '../components/layout';
import SEO from '../components/seo';
import Container from '../components/container';
import withRoot from '../utils/withRoot';
import Markdown from '../components/markdown';
import ContentPaper from '../components/contentPaper';
import Hero from '../components/hero';

// Page Components
import Section from '../components/dataInstance/section';
import Tags from '../components/dataInstance/tags';
import Authors from '../components/dataInstance/authors';
import KeyHighlights from '../components/dataInstance/keyHighlights';

const styles = {};

const Data = ({ data, classes, showProgress }) => {
  const {
    title,
    longTitle,
    body,
    keyHighlight1,
    keyHighlight2,
    keyHighlight3,
    authors,
    dataType,
    spatialScales,
    temporalScales,
    sectors,
    sustainabilityOutcomes,
    determinants,
    worldRegions,
  } = data.contentfulData;
  const tags = {
    dataType,
    determinants,
    sectors,
    spatialScales,
    sustainabilityOutcomes,
    temporalScales,
    worldRegions,
  };
  const highlights = [keyHighlight1, keyHighlight2, keyHighlight3];
  return (
    <Layout showProgress={showProgress}>
      <SEO title={title} />
      <Hero title={title} />
      <Container>
        <ContentPaper>
          <Typography variant="h5">{longTitle}</Typography>
          <Tags tags={tags} />
          <Section>
            <Markdown>{body.childMarkdownRemark.html}</Markdown>
          </Section>
          <KeyHighlights highlights={highlights} />
          <Authors authors={authors} />
        </ContentPaper>
      </Container>
    </Layout>
  );
};

export default withRoot(withStyles(styles)(Data));

export const query = graphql`
  query DataInstanceBySlug($slug: String!) {
    contentfulData(slug: { eq: $slug }) {
      title
      longTitle
      authors {
        name
        email
      }
      summaryImage {
        fixed {
          base64
        }
      }
      summary {
        childMarkdownRemark {
          html
        }
      }
      keyHighlight1
      keyHighlight2
      keyHighlight3
      body {
        childMarkdownRemark {
          html
        }
      }
      citation {
        childMarkdownRemark {
          html
        }
      }
      usesAndVisualizations
      sampleUsevisualization {
        fixed {
          base64
        }
      }
      technicalDetails {
        childMarkdownRemark {
          html
        }
      }
      relatedData
      publications {
        body {
          childMarkdownRemark {
            html
          }
        }
      }
      dataType
      spatialScales
      temporalScales
      sectors
      sustainabilityOutcomes
      determinants
      worldRegions
    }
  }
`;
