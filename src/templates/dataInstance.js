import React from 'react';
import { graphql } from 'gatsby';

// Components
import { withStyles } from '@material-ui/core/styles';
import { Typography, List, ListItem } from '@material-ui/core';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Container from '../components/container';
import withRoot from '../withRoot';
import Markdown from '../components/markdown';
import ContentPaper from '../components/contentPaper';
import Hero from '../components/hero';

const styles = {
  section: {
    paddingTop: '2rem',
  },
  title: {
    // paddingBottom: '0',
  },
  body: {
    paddingLeft: '1rem',
  },
  listItem: {
    paddingBottom: 0,
  },
};

const Title = ({ children, classes }) => (
  <Typography variant="h6" className={classes.title}>
    {children}
  </Typography>
);

const Body = ({ children, classes }) => (
  <Typography paragraph className={classes.body}>
    {children}
  </Typography>
);

const KeyHighlights = ({ highlights, classes }) => (
  <div className={classes.section}>
    <Title classes={classes}>Key Highlights</Title>
    <List>
      {highlights.map((h, i) => (
        <ListItem key={i} className={classes.listItem}>
          {h && <Body classes={classes}>{`${i + 1}. ${h}`}</Body>}
        </ListItem>
      ))}
    </List>
  </div>
);

const Authors = ({ authors, classes }) => (
  <div className={classes.section}>
    <Title classes={classes}>Authors</Title>
    <List style={{ margin: 0 }}>
      {authors.map(({ name, email }) => {
        const item = `${name}: ${email}`;
        return (
          <ListItem key={name} className={classes.listItem}>
            <Body classes={classes}>{item}</Body>
          </ListItem>
        );
      })}
    </List>
  </div>
);

const Data = ({ data, classes, showProgress }) => {
  const {
    title,
    longTitle,
    body,
    keyHighlight1,
    keyHighlight2,
    keyHighlight3,
    authors,
  } = data.contentfulData;
  const highlights = [keyHighlight1, keyHighlight2, keyHighlight3];
  return (
    <Layout showProgress={showProgress}>
      <SEO title={title} />
      <Hero title={title} />
      <Container>
        <ContentPaper>
          <Typography variant="h5">{longTitle}</Typography>
          <Markdown>{body.childMarkdownRemark.html}</Markdown>
          <KeyHighlights highlights={highlights} classes={classes} />
          <Authors authors={authors} classes={classes} />
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
