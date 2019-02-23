import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import style from 'styled-components';

// Components
import { Carousel } from 'grommet';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Container from '../components/container';
import { ContainedButton } from '../components/buttons';

const Showcase = style.section`
  position: relative;
  color: #fff;
  text-align: center;
`;

const ImagesWrapper = style.div`
  position: absolute;
  width: 100%;
  max-height: 650px;
  z-index: -1;
  filter: brightness(40%);

  @media (max-width: 767px) {
    height: 1500px;
  }
`;

const ContentWrapper = style.div`
  color: white;
  padding: 30px 5% 0;
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;

  @media (max-width: 767px) {
    padding: 25px 20px;
  }
`;

const WelcomeImages = ({ images }) => (
  <ImagesWrapper>
    <Carousel fill play="6000">
      {images.map(img => (
        <Img fluid={img.fluid} />
      ))}
    </Carousel>
  </ImagesWrapper>
);

export default ({ data }) => {
  const {
    primaryMessage,
    secondaryMessage,
    welcomeImages,
  } = data.contentfulHomePage;
  return (
    <>
      <SEO title="Home" />
      <Layout>
        <Showcase>
          <WelcomeImages images={welcomeImages} />
          <ContentWrapper>
            <h1 style={{ color: '#fff' }}>{primaryMessage}</h1>
            <p>{secondaryMessage}</p>
            <ContainedButton label="Explore Data" href="/data/" />
          </ContentWrapper>
        </Showcase>
      </Layout>
    </>
  );
};

export const query = graphql`
  query {
    contentfulHomePage {
      welcomeImages {
        fluid(maxHeight: 500, maxWidth: 1500) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      primaryMessage
      secondaryMessage
    }
  }
`;
