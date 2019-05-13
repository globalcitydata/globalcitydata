import React from 'react';
import { graphql } from 'gatsby';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import withRoot from '../utils/withRoot';

// Components
import Container from '../components/container';
import Hero from '../components/hero';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Markdown from '../components/markdown';
import ContactForm from '../components/contact/contactForm';

const styles = {
  msg: {
    textAlign: 'center',
    fontSize: '1.3rem',
    margin: '0 auto',
    maxWidth: '700px',
  },
};

const Contact = ({ data, showProgress, classes }) => {
  const { name, body, backgroundImage } = data.contentfulPage;
  const { html } = body ? body.childMarkdownRemark : null;
  return (
    <Layout showProgress={showProgress}>
      <SEO title="Contact" />
      <Hero title={name} img={backgroundImage} />
      {html && (
        <Container>
          <Markdown className={classes.msg}>{html}</Markdown>
        </Container>
      )}
      <ContactForm />
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
        fluid(maxWidth: 2000) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`;
