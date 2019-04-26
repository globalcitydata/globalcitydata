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
import FullName from '../components/dataInstance/fullname';
import Citation from '../components/dataInstance/citation';
import Authors from '../components/dataInstance/authors';
import KeyHighlights from '../components/dataInstance/keyHighlights';
import TechnicalDetails from '../components/dataInstance/technicalDetails';

const styles = {
  longTitle: {
    marginBottom: '20px',
  },
};

const Data = ({ data, classes, showProgress }) => {
  const {
    title,
    longTitle,
    body,
    keyHighlight1,
    keyHighlight2,
    keyHighlight3,
    citation,
    technicalDetails,
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
          <Typography variant="h5" className={classes.longTitle}>
            {longTitle}
          </Typography>
          <Tags tags={tags} />
          <Section>
            <Markdown>{body.body}</Markdown>
          </Section>
          {/* <FullName fullname={longTitle} /> */}
          <Citation citation={citation.citation} />
          <KeyHighlights highlights={highlights} />
          <TechnicalDetails details={technicalDetails.technicalDetails} />
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
        summary
      }
      keyHighlight1
      keyHighlight2
      keyHighlight3
      body {
        body
      }
      citation {
        citation
      }
      usesAndVisualizations
      sampleUsevisualization {
        fixed {
          base64
        }
      }
      technicalDetails {
        technicalDetails
      }
      relatedData
      publications {
        body {
          body
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
