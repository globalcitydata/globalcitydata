import React from 'react';
import Img from 'gatsby-image';
import style from 'styled-components';

const TagInstance = ({ instance }) => {
  const { title, description, fluid } = instance;
  return (
    <>
      <h5>{title}</h5>
      {description && <p>description</p>}
      <Img fluid={fluid} />
    </>
  );
};

const TagSection = ({ tag }) => {
  const { title: tagTitle, associatedPictures } = tag;
  return (
    <>
      <h3>{tagTitle}</h3>
      {associatedPictures.map(instance => (
        <TagInstance instance={instance} key={instance.title} />
      ))}
    </>
  );
};

const TagSections = ({ sections }) => (
  <>
    {sections.map(({ node: tag }) => (
      <TagSection tag={tag} key={tag.title} />
    ))}
  </>
);

export default TagSections;
