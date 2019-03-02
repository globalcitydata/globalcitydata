import React from 'react';

// Components
import Container from '../components/container';
import PageTitle from '../components/pageTitle';
import Layout from '../components/layout';
import SEO from '../components/seo';
import withRoot from '../withRoot';

const Contact = () => (
  <>
    <SEO title="Contact" />
    <Layout>
      <Container>
        <PageTitle>Contact us</PageTitle>
      </Container>
    </Layout>
  </>
);

export default withRoot(Contact);
