import React from 'react';
import Img from 'gatsby-image';
import style from 'styled-components';

// Components
import { Carousel } from 'grommet';
import { ContainedButton } from '../buttons';

const ShowcaseWrapper = style.section`
  position: relative;
  color: #fff;
  text-align: center;
`;

const ImagesWrapper = style.div`
  position: absolute;
  width: 100%;
  max-height: 650px;
  z-index: -1;
  filter: brightness(70%);

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
    <Carousel fill play={6000}>
      {images.map((img, i) => (
        <Img sizes={img.sizes} key={i} />
      ))}
    </Carousel>
  </ImagesWrapper>
);

const Showcase = ({ showcaseData }) => {
  const { primaryMessage, secondaryMessage, welcomeImages } = showcaseData;
  return (
    <ShowcaseWrapper>
      <WelcomeImages images={welcomeImages} />
      <ContentWrapper>
        <h1 style={{ color: '#fff' }}>{primaryMessage}</h1>
        <p>{secondaryMessage}</p>
        <ContainedButton label="Explore Data" href="/data/" />
      </ContentWrapper>
    </ShowcaseWrapper>
  );
};

export default Showcase;
