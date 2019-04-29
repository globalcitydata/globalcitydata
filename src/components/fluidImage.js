import React from 'react';
import Img from 'gatsby-image';

const FluidImage = (props) => {
  let normalizedProps = props;
  const { fluid, style, width } = props;
  if (fluid && fluid.presentationWidth) {
    normalizedProps = {
      ...props,
      style: {
        ...(style || {}),
        maxWidth: fluid.presentationWidth,
        margin: '0 auto', // Used to center the image
      },
    };
  }

  return <Img {...normalizedProps} style={{ width }} />;
};

export default FluidImage;
