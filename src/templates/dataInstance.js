import React from 'react';
import Img from 'gatsby-image';
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
import FluidImage from '../components/fluidImage';

// Page Components
import Section from '../components/dataInstance/section';
import Tags from '../components/dataInstance/tags';
import Citation from '../components/dataInstance/citation';
import Authors from '../components/dataInstance/authors';
import KeyHighlights from '../components/dataInstance/keyHighlights';
import TechnicalDetails from '../components/dataInstance/technicalDetails';
import Publications from '../components/dataInstance/publications';
import UsesAndVisualizations from '../components/dataInstance/usesAndVisualizations';

const styles = {
  longTitle: {
    marginBottom: '20px',
  },
  imgWrapper: {
    paddingBottom: '20px',
  },
};

const Data = ({ data, classes, showProgress }) => {
  const {
    title,
    longTitle,
    summaryImage,
    body,
    publications,
    keyHighlight1,
    keyHighlight2,
    keyHighlight3,
    citation,
    technicalDetails,
    usesAndVisualizations,
    sampleUsevisualization,
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
          {/* Long Title */}
          <Typography variant="h4" className={classes.longTitle}>
            {longTitle}
          </Typography>
          <Tags tags={tags} />
          {/* Detailed Body */}
          <Section>
            <Markdown>{body.body}</Markdown>
          </Section>
          {/* Summary Image */}
          {summaryImage && (
            <div className={classes.imgWrapper}>
              <FluidImage fluid={summaryImage.fluid} width="600px" />
            </div>
          )}
          <KeyHighlights highlights={highlights} />
          {/* Uses and Visualizations w/optional img */}
          {usesAndVisualizations && (
            <UsesAndVisualizations
              uav={usesAndVisualizations}
              img={sampleUsevisualization}
            />
          )}
          {technicalDetails && (
            <TechnicalDetails details={technicalDetails.technicalDetails} />
          )}
          <Citation citation={citation.citation} />
          <Publications publications={publications} />
          <Authors authors={authors} />
        </ContentPaper>
      </Container>
    </Layout>
  );
};

export default withRoot(withStyles(styles)(Data));

// fixed(width: 500, height: 378) {
//   ...GatsbyContentfulFixed_withWebp
// }

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
        fluid {
          ...GatsbyContentfulFluid_withWebp
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
        fluid {
          ...GatsbyContentfulFluid_withWebp
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
