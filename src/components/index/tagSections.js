import React from 'react';
import Img from 'gatsby-image';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';

/**
 * Transform title of picture from contentful title
 * to title we actually want.
 *
 * Example:
 *
 * Outcome_Cities -> Cities
 */
const transformText = (oldTitle) => {
  const arr = oldTitle.split('_'); //
  arr.shift();
  return arr.join(' ');
};

const styles = {
  section: {
    padding: '3rem 0',
  },
  container: {
    margin: '0 auto',
    padding: '0 1rem',
    maxWidth: '900px',
  },
  heroWrapper: {
    position: 'relative',
  },
  imgWrapper: {
    maxHeight: '200px',
    filter: 'brightness(70%)',
  },
  img: {
    borderRadius: '4px',
  },
  contentWrapper: {
    position: 'absolute',
    left: '5%',
    bottom: '10%',
    padding: '0 0.5rem',
    color: 'white',
    fontSize: '1rem',
    '@media(max-width: 1400px': {
      top: '10%',
      fontSize: '0.8rem',
    },
    '@media(maxWidth: 1000px)': {
      top: '5%',
      fontSize: '0.6rem',
    },
  },
};

const TagPicture = ({ instance, classes }) => {
  const { title, fixed } = instance;
  return (
    <Grid item s={12} m={6} l={4} xl={3}>
      <div className={`${classes.heroWrapper} lift`}>
        <div className={classes.imgWrapper}>
          <Img fixed={fixed} className={classes.img} />
        </div>
        <div className={classes.contentWrapper}>
          <Typography variant="body1" color="inherit">
            {transformText(title)}
          </Typography>
        </div>
      </div>
    </Grid>
  );
};

const TagSection = ({ tag, classes }) => {
  const { title, description, associatedPictures } = tag;
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <Typography variant="h4">{title}</Typography>
        <Typography variant="subtitle2" style={{ maxWidth: '800px' }}>
          {description}
        </Typography>
        <Grid container spacing={24}>
          {associatedPictures.map(instance => (
            <TagPicture
              instance={instance}
              key={instance.title}
              classes={classes}
            />
          ))}
        </Grid>
      </div>
    </div>
  );
};

const TagSections = ({ sections, classes }) => (
  // console.log(sections);
  <>
    {sections.map(({ node: tag }) => (
      <TagSection key={tag.title} tag={tag} classes={classes} />
    ))}
  </>
);

export default withStyles(styles)(TagSections);
