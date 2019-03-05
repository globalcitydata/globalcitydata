import React from 'react';

// Components
import { Typography } from '@material-ui/core';
import Container from '../components/container';
import Layout from '../components/layout';
import SEO from '../components/seo';
import withRoot from '../withRoot';

const Contact = () => (
  <>
    <SEO title="Contact" />
    <Layout>
      <Container className="wrapper">
        <Typography variant="h3">Contact us</Typography>
      </Container>
    </Layout>
  </>
);

export default withRoot(Contact);
