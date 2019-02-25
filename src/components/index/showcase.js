import React from 'react';
import Img from 'gatsby-image';
import style from 'styled-components';

// Components
import { Carousel } from 'grommet';
import { ContainedButton } from '../buttons';

const ShowcaseWrapper = style.section`
  position: relative;
  text-align: center;
`;

const ImagesWrapper = style.div`

  max-height: 500px;
  filter: brightness(60%);
`;

const ContentWrapper = style.div`
  position: absolute;
  left: 50%;
  top: 10%;
  transform: translate(-50%, 0);
  padding: 0 0.5em;
  color: white;

  @media(max-width: 1000px) {
    font-size: 16px;
  }
  
  @media(max-width: 600px) {
    font-size: 14px;
  }
`;

const WelcomeImages = ({ images }) => (
  <ImagesWrapper>
    <Carousel fill play={6000}>
      {images.map((img, i) => (
        <Img fixed={img.fixed} key={i} />
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
