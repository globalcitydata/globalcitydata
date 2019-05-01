import React from 'react';
import Img from 'gatsby-image';

const FluidImage = (props) => {
  let normalizedProps = props;
  const { fluid, style, maxWidth } = props;
  if (fluid) {
    normalizedProps = {
      ...props,
      style: {
        ...(style || {}),
        maxWidth,
      },
    };
  }

  return <Img {...normalizedProps} />;
};

export default FluidImage;
