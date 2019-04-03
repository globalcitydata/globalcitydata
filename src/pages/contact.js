import React from 'react';

// Components
import { Typography } from '@material-ui/core';
import Container from '../components/container';
import Hero from '../components/hero';
import Layout from '../components/layout';
import SEO from '../components/seo';
import withRoot from '../withRoot';

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <Hero title="Contact us" />
    <Container>
      <Typography variant="body2">
        Eventually let Dana edit from Contentful... Also add contact form?
      </Typography>
    </Container>
  </Layout>
);

export default withRoot(Contact);
